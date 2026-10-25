import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect } from "react";
import { useCart, useCartBusy, cart, cartTotal, unitPrice, needsAssistedOrder } from "@/lib/cart";
import { getProduct, formatPrice, whatsappUrl } from "@/lib/products";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/cart")({
  head: () => ({
    meta: [
      { title: "Your Bag — SHERATAL" },
      { name: "description", content: "Review the SHERATAL pieces in your bag before checkout." },
      { property: "og:title", content: "Your Bag — SHERATAL" },
      { property: "og:description", content: "Review the SHERATAL pieces in your bag before checkout." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: CartPage,
});

function CartPage() {
  const lines = useCart();
  const busy = useCartBusy();
  const assisted = needsAssistedOrder(lines);
  const orderMessage = `Hello SHERATAL, I'd like to order:\n${lines.map((l) => `${getProduct(l.id)?.name} — Size ${l.size} × ${l.qty}: ${formatPrice(unitPrice(l.id) * l.qty)}`).join("\n")}\nSubtotal: ${formatPrice(cartTotal(lines))}\nPlease confirm availability, delivery and payment.`;
  useEffect(() => { cart.sync(); }, []);
  return (
    <div className="container-lux pt-10 md:pt-16 pb-24 max-w-4xl">
      <span className="eyebrow">Your selection</span>
      <h1 className="mt-3 font-serif text-4xl md:text-5xl">Shopping Bag</h1>
      <span className="gold-divider mt-6 !w-16" />

      {lines.length === 0 ? (
        <div className="mt-12 text-center">
          <p className="text-muted-foreground">Your bag is empty.</p>
          <Link to="/shop" className="btn-gold btn-gold-hover mt-6 inline-flex">Shop now</Link>
        </div>
      ) : (
        <>
          <ul className="mt-10 divide-y divide-[color:var(--border)] border-y border-[color:var(--border)]">
            {lines.map((l) => {
              const p = getProduct(l.id);
              if (!p) return null;
              return (
                <li key={l.id + l.size} className="flex gap-5 py-6">
                  <img src={p.image} alt={p.name} className="h-28 w-22 w-[88px] object-cover" />
                  <div className="flex-1">
                    <Link to="/product/$id" params={{ id: p.id }} className="font-serif text-xl">{p.name}</Link>
                    <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mt-1">Size {l.size}</p>
                    <div className="mt-3 flex items-center gap-3">
                      <button disabled={busy} aria-label="Decrease" className="h-8 w-8 border border-[color:var(--border)]" onClick={() => cart.setQty(l.id, l.size, l.qty - 1)}>−</button>
                      <span className="w-6 text-center">{l.qty}</span>
                      <button disabled={busy} aria-label="Increase" className="h-8 w-8 border border-[color:var(--border)]" onClick={() => cart.setQty(l.id, l.size, l.qty + 1)}>+</button>
                      <button disabled={busy} className="ml-4 text-xs tracking-[0.2em] uppercase text-muted-foreground link-underline" onClick={() => cart.setQty(l.id, l.size, 0)}>Remove</button>
                    </div>
                  </div>
                  <span className="text-[color:var(--gold-deep)]">{formatPrice(unitPrice(l.id) * l.qty)}</span>
                </li>
              );
            })}
          </ul>
          <div className="mt-8 flex flex-col items-end gap-4">
            <p className="text-lg">Subtotal <span className="ml-3 font-medium">{formatPrice(cartTotal(lines))}</span></p>
            <p className="text-xs text-muted-foreground">Prices include VAT.</p>
            {assisted ? (
              <>
                <Button asChild variant="ghost" className="btn-gold btn-gold-hover h-auto rounded-none">
                  <a href={whatsappUrl(orderMessage)} target="_blank" rel="noopener noreferrer">Order bag on WhatsApp</a>
                </Button>
                <p className="text-xs text-muted-foreground text-right">These new outfits require availability and payment confirmation on WhatsApp.</p>
              </>
            ) : (
              <>
                <button type="button" disabled={busy} onClick={() => cart.checkout()} className="btn-gold btn-gold-hover disabled:opacity-60">{busy ? "Updating…" : "Proceed to secure checkout"}</button>
                <p className="text-xs text-muted-foreground">Pay by UPI, cards, net banking and more on the secure checkout page.</p>
              </>
            )}
          </div>
        </>
      )}
    </div>
  );
}
