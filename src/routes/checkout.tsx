import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useCart, cart, cartTotal, unitPrice, toUsd, type CartLine } from "@/lib/cart";
import { getProduct, formatPrice, whatsappUrl } from "@/lib/products";

export const Route = createFileRoute("/checkout")({
  head: () => ({
    meta: [
      { title: "Checkout — SHERATAL" },
      { name: "description", content: "Secure checkout for SHERATAL couture — pay with PayPal or confirm via WhatsApp." },
      { property: "og:title", content: "Checkout — SHERATAL" },
      { property: "og:description", content: "Secure checkout for SHERATAL couture." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: CheckoutPage,
});

const PAYPAL_CLIENT_ID = import.meta.env.VITE_PAYPAL_CLIENT_ID || "test";

type Info = { name: string; email: string; phone: string; address: string; city: string; pin: string; country: string };

function orderText(lines: CartLine[], info: Info, payment: string) {
  const items = lines
    .map((l) => `• ${getProduct(l.id)?.name} (Size ${l.size}) × ${l.qty} — ${formatPrice(unitPrice(l.id) * l.qty)}`)
    .join("\n");
  return `Hello SHERATAL,\n\nNew order:\n${items}\n\nTotal: ${formatPrice(cartTotal(lines))}\nPayment: ${payment}\n\nShip to:\n${info.name}\n${info.address}, ${info.city} ${info.pin}, ${info.country}\nPhone: ${info.phone}\nEmail: ${info.email}`;
}

function CheckoutPage() {
  const lines = useCart();
  const [info, setInfo] = useState<Info>({ name: "", email: "", phone: "", address: "", city: "", pin: "", country: "India" });
  const [method, setMethod] = useState<"paypal" | "whatsapp">("paypal");
  const [done, setDone] = useState<{ id: string; text: string } | null>(null);
  const [error, setError] = useState<string | null>(null);

  const total = cartTotal(lines);
  const valid = info.name && info.email.includes("@") && info.phone && info.address && info.city && info.pin;

  if (done) {
    return (
      <div className="container-lux pt-16 pb-24 max-w-2xl text-center">
        <span className="eyebrow">Thank you</span>
        <h1 className="mt-3 font-serif text-4xl">Your order is confirmed</h1>
        <span className="gold-divider mt-6 mx-auto !w-16" />
        <p className="mt-6 text-muted-foreground">Payment reference: {done.id}</p>
        <p className="mt-2 text-sm">Send us your order on WhatsApp so a stylist can confirm fit and delivery.</p>
        <a href={whatsappUrl(done.text)} target="_blank" rel="noopener noreferrer" className="btn-gold btn-gold-hover mt-8 inline-flex">Send order on WhatsApp</a>
      </div>
    );
  }

  if (lines.length === 0) {
    return (
      <div className="container-lux pt-16 pb-24 text-center">
        <h1 className="font-serif text-4xl">Your bag is empty</h1>
        <Link to="/shop" className="btn-gold btn-gold-hover mt-8 inline-flex">Shop now</Link>
      </div>
    );
  }

  const field = (k: keyof Info, label: string, type = "text") => (
    <label className="block">
      <span className="text-[0.65rem] tracking-[0.25em] uppercase text-muted-foreground">{label}</span>
      <input
        type={type}
        value={info[k]}
        onChange={(e) => setInfo({ ...info, [k]: e.target.value })}
        className="mt-1 w-full border border-[color:var(--border)] bg-transparent px-3 py-2.5 text-sm focus:outline-none focus:border-[color:var(--gold)]"
      />
    </label>
  );

  return (
    <div className="container-lux pt-10 md:pt-16 pb-24">
      <span className="eyebrow">Secure checkout</span>
      <h1 className="mt-3 font-serif text-4xl md:text-5xl">Checkout</h1>
      <span className="gold-divider mt-6 !w-16" />

      <div className="mt-10 grid gap-12 md:grid-cols-[1.4fr_1fr]">
        <div className="space-y-10">
          <section>
            <h2 className="font-serif text-2xl mb-5">Shipping details</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {field("name", "Full name")}
              {field("email", "Email", "email")}
              {field("phone", "Phone", "tel")}
              {field("country", "Country")}
              <div className="sm:col-span-2">{field("address", "Address")}</div>
              {field("city", "City")}
              {field("pin", "PIN / Postal code")}
            </div>
          </section>

          <section>
            <h2 className="font-serif text-2xl mb-5">Payment</h2>
            <div className="space-y-3">
              {([
                ["paypal", "PayPal / Card", "Pay securely with PayPal or a debit/credit card. Charged in USD."],
                ["whatsapp", "UPI / Bank transfer via WhatsApp", "Send your order on WhatsApp — we'll share UPI or bank details to complete payment."],
              ] as const).map(([v, t, d]) => (
                <label key={v} className={`flex gap-3 border p-4 cursor-pointer transition ${method === v ? "border-[color:var(--gold)]" : "border-[color:var(--border)]"}`}>
                  <input type="radio" name="pay" checked={method === v} onChange={() => setMethod(v)} className="mt-1 accent-[color:var(--gold)]" />
                  <span>
                    <span className="block text-sm font-medium">{t}</span>
                    <span className="block text-xs text-muted-foreground mt-1">{d}</span>
                  </span>
                </label>
              ))}
            </div>

            <div className="mt-6">
              {!valid && <p className="text-xs text-muted-foreground mb-3">Fill in your shipping details to continue.</p>}
              {error && <p className="text-xs text-destructive mb-3">{error}</p>}
              {method === "paypal" ? (
                <div className={valid ? "" : "pointer-events-none opacity-40"}>
                  <PayPalScriptProvider options={{ clientId: PAYPAL_CLIENT_ID, currency: "USD" }}>
                    <PayPalButtons
                      style={{ layout: "vertical", color: "black", shape: "rect", label: "pay" }}
                      forceReRender={[total]}
                      createOrder={(_, actions) =>
                        actions.order.create({
                          intent: "CAPTURE",
                          purchase_units: [{ description: "SHERATAL order", amount: { currency_code: "USD", value: toUsd(total) } }],
                        })
                      }
                      onApprove={async (_, actions) => {
                        const res = await actions.order?.capture();
                        const text = orderText(lines, info, `PayPal (paid, ref ${res?.id})`);
                        setDone({ id: res?.id ?? "", text });
                        cart.clear();
                      }}
                      onError={() => setError("Payment could not be completed. Please try again or choose WhatsApp.")}
                    />
                  </PayPalScriptProvider>
                </div>
              ) : (
                <a
                  href={valid ? whatsappUrl(orderText(lines, info, "UPI / Bank transfer — please share details")) : undefined}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`btn-gold btn-gold-hover w-full ${valid ? "" : "pointer-events-none opacity-40"}`}
                >
                  Place order on WhatsApp
                </a>
              )}
            </div>
          </section>
        </div>

        <aside className="border border-[color:var(--border)] p-6 h-fit">
          <h2 className="font-serif text-2xl mb-5">Order summary</h2>
          <ul className="space-y-4">
            {lines.map((l) => {
              const p = getProduct(l.id)!;
              return (
                <li key={l.id + l.size} className="flex gap-4">
                  <img src={p.image} alt={p.name} className="h-20 w-16 object-cover" />
                  <div className="flex-1 text-sm">
                    <p className="font-serif text-base">{p.name}</p>
                    <p className="text-xs text-muted-foreground">Size {l.size} · Qty {l.qty}</p>
                  </div>
                  <span className="text-sm">{formatPrice(unitPrice(l.id) * l.qty)}</span>
                </li>
              );
            })}
          </ul>
          <div className="mt-6 border-t border-[color:var(--border)] pt-4 flex justify-between">
            <span>Total</span>
            <span className="font-medium text-[color:var(--gold-deep)]">{formatPrice(total)}</span>
          </div>
          {method === "paypal" && <p className="mt-2 text-xs text-muted-foreground text-right">≈ USD {toUsd(total)} via PayPal</p>}
          <p className="mt-2 text-xs text-muted-foreground text-right">Prices include VAT.</p>
        </aside>
      </div>
    </div>
  );
}
