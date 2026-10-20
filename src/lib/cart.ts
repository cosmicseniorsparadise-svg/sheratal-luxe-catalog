import { useSyncExternalStore } from "react";
import { getProduct } from "@/lib/products";

export type CartLine = { id: string; size: string; qty: number };

const KEY = "sheratal-cart";
const listeners = new Set<() => void>();
let cache: CartLine[] | null = null;
const EMPTY: CartLine[] = [];

function read(): CartLine[] {
  if (cache) return cache;
  try {
    cache = JSON.parse(localStorage.getItem(KEY) || "[]");
  } catch {
    cache = [];
  }
  return cache!;
}

function write(lines: CartLine[]) {
  cache = lines;
  localStorage.setItem(KEY, JSON.stringify(lines));
  listeners.forEach((l) => l());
}

export const cart = {
  add(id: string, size: string, qty = 1) {
    const lines = [...read()];
    const i = lines.findIndex((l) => l.id === id && l.size === size);
    if (i >= 0) lines[i] = { ...lines[i], qty: lines[i].qty + qty };
    else lines.push({ id, size, qty });
    write(lines);
  },
  setQty(id: string, size: string, qty: number) {
    write(
      read()
        .map((l) => (l.id === id && l.size === size ? { ...l, qty } : l))
        .filter((l) => l.qty > 0),
    );
  },
  clear() {
    write([]);
  },
};

export function useCart() {
  return useSyncExternalStore(
    (cb) => {
      listeners.add(cb);
      return () => listeners.delete(cb);
    },
    read,
    () => EMPTY,
  );
}

export const unitPrice = (id: string) => {
  const p = getProduct(id);
  return p ? (p.salePrice ?? p.price) : 0;
};

export const cartTotal = (lines: CartLine[]) =>
  lines.reduce((sum, l) => sum + unitPrice(l.id) * l.qty, 0);

/** PayPal does not settle INR; charge international buyers in USD at this rate. */
export const INR_PER_USD = 84;
export const toUsd = (inr: number) => (Math.ceil((inr / INR_PER_USD) * 100) / 100).toFixed(2);
