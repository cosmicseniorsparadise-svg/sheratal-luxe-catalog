import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { getProduct, formatPrice, whatsappUrl, products, type Product } from "@/lib/products";
import { ProductImage } from "@/components/ProductImage";

export const Route = createFileRoute("/product/$id")({
  loader: ({ params }): { product: Product } => {
    const product = getProduct(params.id);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Piece unavailable — SHERATAL" }, { name: "robots", content: "noindex" }] };
    }
    const p = loaderData.product;
    return {
      meta: [
        { title: `${p.name} — SHERATAL Couture` },
        { name: "description", content: p.description },
        { property: "og:title", content: `${p.name} — SHERATAL` },
        { property: "og:description", content: p.description },
      ],
    };
  },
  component: ProductDetail,
});

function ProductDetail() {
  const { product } = Route.useLoaderData() as { product: Product };
  const [size, setSize] = useState<string | null>(null);

  const message = `Hello SHERATAL,\n\nI'd like to order:\n• ${product.name}${size ? ` (Size ${size})` : ""}\n• ${formatPrice(product.price)}\n\nCould you share availability and next steps?`;

  const related = products.filter((p) => p.id !== product.id && p.category === product.category).slice(0, 3);

  return (
    <div className="container-lux pt-10 md:pt-16 pb-24">
      <nav className="text-xs tracking-[0.22em] uppercase text-muted-foreground mb-8">
        <Link to="/shop" className="link-underline">Shop</Link>
        <span className="mx-2">/</span>
        <span>{product.category}</span>
      </nav>

      <div className="grid md:grid-cols-2 gap-10 md:gap-16">
        {/* Gallery */}
        <div>
          <ProductImage id={product.id} alt={product.name} />
          <p className="mt-3 text-[0.62rem] tracking-[0.28em] uppercase text-muted-foreground">
            Hover the image to upload or replace this product photo.
          </p>
        </div>

        {/* Info */}
        <div className="md:pt-6">
          <span className="eyebrow">{product.category}</span>
          <h1 className="mt-3 font-serif text-4xl md:text-5xl leading-tight">{product.name}</h1>
          <p className="mt-4 text-lg text-muted-foreground">{formatPrice(product.price)}</p>
          <span className="gold-divider mt-6 !w-16" />
          <p className="mt-6 text-[15px] leading-relaxed text-foreground/80">{product.description}</p>

          {/* Sizes */}
          <div className="mt-10">
            <div className="flex items-center justify-between mb-3">
              <h3 className="eyebrow !text-[color:var(--ink)]">Size</h3>
              <span className="text-xs text-muted-foreground">XS – 5XL available</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {product.sizes.map((s) => (
                <button
                  key={s}
                  onClick={() => setSize(s)}
                  className={`min-w-[3rem] px-3 py-2 text-xs tracking-[0.2em] border transition ${
                    size === s
                      ? "bg-[color:var(--ink)] text-white border-[color:var(--ink)]"
                      : "border-[color:var(--border)] hover:border-[color:var(--gold)] hover:text-[color:var(--gold)]"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* CTA */}
          <a
            href={whatsappUrl(message)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold btn-gold-hover mt-8 w-full"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
              <path d="M20.52 3.48A11.87 11.87 0 0 0 12.06 0C5.5 0 .17 5.33.17 11.9c0 2.1.55 4.15 1.6 5.96L0 24l6.3-1.65a11.9 11.9 0 0 0 5.76 1.47c6.56 0 11.89-5.33 11.89-11.9 0-3.18-1.24-6.17-3.44-8.44Z" />
            </svg>
            Order on WhatsApp
          </a>
          <p className="mt-3 text-xs text-muted-foreground">
            A stylist will confirm size, delivery and any customisations personally.
          </p>

          {/* Details */}
          <div className="mt-10 border-t border-[color:var(--border)] pt-6">
            <h3 className="eyebrow !text-[color:var(--ink)] mb-3">Details</h3>
            <ul className="space-y-1.5 text-sm text-foreground/80">
              {product.details.map((d) => (
                <li key={d} className="flex gap-3">
                  <span className="text-[color:var(--gold)]">—</span>{d}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <section className="mt-28">
          <div className="text-center mb-10">
            <span className="eyebrow">Also in the collection</span>
            <h2 className="mt-3 font-serif text-3xl">You may also love</h2>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p) => (
              <div key={p.id} className="product-card">
                <ProductImage id={p.id} alt={p.name} />
                <Link to="/product/$id" params={{ id: p.id }} className="block mt-4">
                  <div className="flex items-baseline justify-between">
                    <h4 className="font-serif text-lg">{p.name}</h4>
                    <span className="text-sm text-muted-foreground">{formatPrice(p.price)}</span>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
