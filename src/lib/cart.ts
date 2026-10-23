import { useSyncExternalStore, useEffect } from "react";
import { getProduct } from "@/lib/products";
import {
  storefrontApiRequest, findVariantId, formatCheckoutUrl, isCartNotFound,
  CART_QUERY, CART_CREATE, CART_ADD, CART_UPDATE, CART_REMOVE,
} from "@/lib/shopify";

export type CartLine = { id: string; size: string; qty: number; variantId: string; lineId: string | null };
type State = { lines: CartLine[]; cartId: string | null; checkoutUrl: string | null; busy: boolean };

const KEY = "sheratal-shopify-cart";
const listeners = new Set<() => void>();
const EMPTY: State = { lines: [], cartId: null, checkoutUrl: null, busy: false };
let state: State | null = null;

function read(): State {
  if (state) return state;
  try {
    const s = JSON.parse(localStorage.getItem(KEY) || "null");
    state = s ? { ...EMPTY, ...s, busy: false } : { ...EMPTY };
  } catch {
    state = { ...EMPTY };
  }
  return state!;
}
function set(patch: Partial<State>) {
  state = { ...read(), ...patch };
  const { lines, cartId, checkoutUrl } = state;
  localStorage.setItem(KEY, JSON.stringify({ lines, cartId, checkoutUrl }));
  listeners.forEach((l) => l());
}
const reset = () => set({ lines: [], cartId: null, checkoutUrl: null });

const findLineId = (cart: any, variantId: string) =>
  cart?.lines?.edges?.find((e: any) => e.node.merchandise.id === variantId)?.node.id ?? null;

export const cart = {
  /** Adds a size to the Shopify cart. Returns false if it couldn't be added. */
  async add(id: string, size: string, qty = 1): Promise<boolean> {
    const p = getProduct(id);
    if (!p) return false;
    set({ busy: true });
    try {
      const variantId = await findVariantId(p.name, size);
      if (!variantId) return false;
      const { lines, cartId } = read();
      const existing = lines.find((l) => l.variantId === variantId);
      if (!cartId) {
        const d = await storefrontApiRequest(CART_CREATE, { input: { lines: [{ quantity: qty, merchandiseId: variantId }] } });
        const c = d?.data?.cartCreate?.cart;
        if (!c?.checkoutUrl) return false;
        set({ cartId: c.id, checkoutUrl: formatCheckoutUrl(c.checkoutUrl), lines: [{ id, size, qty, variantId, lineId: findLineId(c, variantId) }] });
        return true;
      }
      if (existing?.lineId) return await cart.setQty(existing.id, existing.size, existing.qty + qty);
      const d = await storefrontApiRequest(CART_ADD, { cartId, lines: [{ quantity: qty, merchandiseId: variantId }] });
      const errs = d?.data?.cartLinesAdd?.userErrors ?? [];
      if (isCartNotFound(errs)) { reset(); return cart.add(id, size, qty); }
      if (!d || errs.length) return false;
      set({ lines: [...read().lines, { id, size, qty, variantId, lineId: findLineId(d.data.cartLinesAdd.cart, variantId) }] });
      return true;
    } catch (e) {
      console.error("Failed to add item:", e);
      return false;
    } finally {
      set({ busy: false });
    }
  },
  async setQty(id: string, size: string, qty: number): Promise<boolean> {
    const { lines, cartId } = read();
    const line = lines.find((l) => l.id === id && l.size === size);
    if (!line?.lineId || !cartId) return false;
    set({ busy: true });
    try {
      const d = qty <= 0
        ? await storefrontApiRequest(CART_REMOVE, { cartId, lineIds: [line.lineId] })
        : await storefrontApiRequest(CART_UPDATE, { cartId, lines: [{ id: line.lineId, quantity: qty }] });
      const errs = (qty <= 0 ? d?.data?.cartLinesRemove : d?.data?.cartLinesUpdate)?.userErrors ?? [];
      if (isCartNotFound(errs)) { reset(); return false; }
      if (!d || errs.length) return false;
      const next = read().lines
        .map((l) => (l === line ? { ...l, qty } : l))
        .filter((l) => l.qty > 0);
      next.length ? set({ lines: next }) : reset();
      return true;
    } catch (e) {
      console.error("Failed to update bag:", e);
      return false;
    } finally {
      set({ busy: false });
    }
  },
  async sync() {
    const { cartId } = read();
    if (!cartId) return;
    try {
      const d = await storefrontApiRequest(CART_QUERY, { id: cartId });
      if (!d) return;
      const c = d.data?.cart;
      if (!c || c.totalQuantity === 0) reset();
    } catch (e) {
      console.error("Failed to sync bag:", e);
    }
  },
  checkout() {
    const url = read().checkoutUrl;
    if (url) window.open(url, "_blank");
  },
  clear: reset,
};

function useCartState() {
  return useSyncExternalStore(
    (cb) => { listeners.add(cb); return () => listeners.delete(cb); },
    read,
    () => EMPTY,
  );
}
export const useCart = () => useCartState().lines;
export const useCartBusy = () => useCartState().busy;

/** Clears the bag after a completed Shopify checkout (on load and when the tab regains focus). */
export function useCartSync() {
  useEffect(() => {
    cart.sync();
    const onVis = () => document.visibilityState === "visible" && cart.sync();
    document.addEventListener("visibilitychange", onVis);
    return () => document.removeEventListener("visibilitychange", onVis);
  }, []);
}

export const unitPrice = (id: string) => {
  const p = getProduct(id);
  return p ? (p.salePrice ?? p.price) : 0;
};
export const cartTotal = (lines: CartLine[]) => lines.reduce((s, l) => s + unitPrice(l.id) * l.qty, 0);
