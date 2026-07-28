import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { products, categories, formatPrice } from "@/lib/products";

export const Route = createFileRoute("/shop")({
  head: () => ({
    meta: [
      { title: "Shop the Collection — SHERATAL Couture" },
      {
        name: "description",
        content:
          "Browse the SHERATAL collection of lehengas, sarees, gowns, kurta sets and co-ords. Available in sizes XS to 5XL.",
      },
      { property: "og:title", content: "Shop the Collection — SHERATAL" },
      { property: "og:description", content: "Hand-crafted couture, XS to 5XL. Order on WhatsApp." },
    ],
  }),
  component: Shop,
});

function Shop() {
  const [active, setActive] = useState<string>("All");
  const filtered = active === "All" ? products : products.filter((p) => p.category === active);

  return (
    <div className="container-lux pt-16 md:pt-24 pb-24">
      <div className="text-center">
        <span className="eyebrow">The Collection</span>
        <div className="mt-3 flex justify-center"><span className="gold-divider" /></div>
        <h1 className="mt-5 font-serif text-5xl md:text-6xl">Shop Sheratal</h1>
        <p className="mt-4 max-w-lg mx-auto text-sm text-muted-foreground leading-relaxed">
          Curated silhouettes from our current atelier season. Every piece is
          available in sizes XS through 5XL and ordered directly via WhatsApp.
        </p>
      </div>

      {/* Filters */}
      <div className="mt-12 flex flex-wrap justify-center gap-2 md:gap-3">
        {["All", ...categories].map((c) => (
          <button
            key={c}
            onClick={() => setActive(c)}
            className={`px-4 py-2 text-[0.7rem] tracking-[0.24em] uppercase border transition ${
              active === c
                ? "bg-[color:var(--ink)] text-white border-[color:var(--ink)]"
                : "bg-transparent text-[color:var(--ink)] border-[color:var(--border)] hover:border-[color:var(--gold)] hover:text-[color:var(--gold)]"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="mt-14 grid gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((p) => (
          <Link
            key={p.id}
            to="/product/$id"
            params={{ id: p.id }}
            className="product-card group block"
          >
            <div className="relative overflow-hidden bg-[color:var(--muted)] aspect-[3/4]">
              <img
                src={p.image}
                alt={p.name}
                loading="lazy"
                width={900}
                height={1200}
                className="h-full w-full object-cover"
              />
              <span className="absolute top-3 left-3 bg-white/90 backdrop-blur px-2.5 py-1 text-[0.6rem] tracking-[0.24em] uppercase text-[color:var(--ink)]">
                {p.category}
              </span>
            </div>
            <div className="mt-5 flex items-baseline justify-between gap-4">
              <h3 className="font-serif text-xl leading-tight">{p.name}</h3>
              <span className="text-sm text-muted-foreground shrink-0">{formatPrice(p.price)}</span>
            </div>
            <p className="mt-1 text-xs text-muted-foreground">
              Sizes {p.sizes[0]} – {p.sizes[p.sizes.length - 1]}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
