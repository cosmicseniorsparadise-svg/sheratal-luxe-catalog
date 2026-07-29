import { createFileRoute, Link } from "@tanstack/react-router";
import logoAsset from "@/assets/sheratal-logo.JPG.asset.json";
import { products, formatPrice } from "@/lib/products";
import { ProductImage } from "@/components/ProductImage";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SHERATAL — Luxury Couture Atelier, Dwarka New Delhi" },
      {
        name: "description",
        content:
          "Hand-crafted lehengas, sarees, gowns and co-ord sets in sizes XS to 5XL. Discover the SHERATAL couture collection.",
      },
      { property: "og:title", content: "SHERATAL — Luxury Couture Atelier" },
      {
        property: "og:description",
        content: "Editorial couture from the SHERATAL atelier in Dwarka, New Delhi.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  useReveal();
  const featured = products.filter((p) => p.featured).slice(0, 3);

  return (
    <div>
      {/* HERO — asymmetric editorial */}
      <section className="relative overflow-hidden -mt-[76px] pt-[76px]">
        <span
          aria-hidden
          className="pointer-events-none hidden lg:block absolute top-0 left-[41.6667%] h-full w-px bg-gradient-to-b from-transparent via-[color:var(--gold)]/25 to-transparent"
        />
        <span
          aria-hidden
          className="pointer-events-none absolute -top-24 -left-24 h-[420px] w-[420px] rounded-full opacity-[0.35] blur-3xl"
          style={{
            background:
              "radial-gradient(circle, color-mix(in oklab, var(--gold) 25%, transparent), transparent 70%)",
          }}
        />

        <div className="container-lux relative grid lg:grid-cols-12 items-center gap-12 lg:gap-16 pt-10 lg:pt-6 pb-20 lg:pb-28 min-h-[88vh]">
          {/* LEFT — brand block */}
          <div className="lg:col-span-5 relative z-10">
            <div data-reveal className="flex items-center gap-4 text-[color:var(--muted-foreground)]">
              <span className="h-px w-10 bg-[color:var(--gold)]" />
              <span className="text-[0.65rem] tracking-[0.36em] uppercase">
                Autumn Couture · MMXXVI
              </span>
            </div>

            <h1
              data-reveal
              data-delay="1"
              className="mt-8 font-serif leading-[0.86] text-[3.75rem] sm:text-[5rem] lg:text-[7rem]"
            >
              <span className="relative inline-block pb-3">
                Sheratal
                <span
                  aria-hidden
                  className="absolute left-0 -bottom-1 h-[3px] w-full"
                  style={{
                    background:
                      "linear-gradient(90deg, var(--gold) 0%, var(--gold-soft) 55%, transparent 100%)",
                  }}
                />
              </span>
            </h1>

            <p
              data-reveal
              data-delay="2"
              className="mt-8 font-serif italic text-2xl md:text-[1.75rem] leading-snug text-[color:var(--ink)]/85 max-w-md"
            >
              She doesn't follow the light — she walks in wearing it.
            </p>

            <div data-reveal data-delay="3" className="mt-8 flex items-center gap-4">
              <span className="gold-divider !w-16" />
              <span className="text-[0.66rem] tracking-[0.34em] uppercase text-muted-foreground">
                Atelier · Dwarka, New Delhi
              </span>
            </div>

            <p
              data-reveal
              data-delay="3"
              className="mt-6 max-w-md text-[15px] leading-relaxed text-muted-foreground"
            >
              A house of hand-crafted couture — drawn, draped and tailored across
              every silhouette from XS to 5XL. Nothing off the rack. Everything
              made to be remembered.
            </p>

            <div data-reveal data-delay="4" className="mt-10 flex flex-wrap gap-3">
              <Link to="/shop" className="btn-gold btn-gold-hover">
                Explore the collection
              </Link>
              <Link to="/visit" className="btn-ghost-gold">
                Visit the atelier
              </Link>
            </div>
          </div>

          {/* RIGHT — editorial image */}
          <div className="lg:col-span-7 relative">
            <div
              data-reveal
              data-delay="2"
              className="relative aspect-[4/5] lg:aspect-[5/6] w-full overflow-hidden"
            >
              <img
                src={heroImg}
                alt="Model in a hand-embroidered ivory and gold Sheratal couture piece"
                width={1600}
                height={2000}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
            </div>

            <span aria-hidden className="absolute -top-3 -left-3 h-14 w-px bg-[color:var(--gold)]" />
            <span aria-hidden className="absolute -top-3 -left-3 h-px w-14 bg-[color:var(--gold)]" />
            <span aria-hidden className="absolute -bottom-3 -right-3 h-14 w-px bg-[color:var(--gold)]" />
            <span aria-hidden className="absolute -bottom-3 -right-3 h-px w-14 bg-[color:var(--gold)]" />

            <div
              data-reveal
              data-delay="3"
              className="absolute -bottom-5 left-4 md:left-8 lg:-left-10 bg-[color:var(--background)] border border-[color:var(--border)] px-4 py-2.5 flex items-center gap-3 shadow-[0_20px_60px_-30px_rgba(0,0,0,0.35)]"
            >
              <span className="h-px w-6 bg-[color:var(--gold)]" />
              <span className="text-[0.6rem] tracking-[0.34em] uppercase text-[color:var(--ink)]">
                Look No. 07 — Ivory &amp; Gold
              </span>
            </div>

            <span
              aria-hidden
              className="hidden lg:flex absolute -right-14 top-1/2 -translate-y-1/2 rotate-90 origin-center items-center gap-3 text-[0.6rem] tracking-[0.42em] uppercase text-[color:var(--muted-foreground)] whitespace-nowrap"
            >
              <span className="h-px w-8 bg-[color:var(--gold)]" />
              Volume I · The House of Sheratal
            </span>
          </div>
        </div>

        <span
          aria-hidden
          className="block h-px w-full bg-gradient-to-r from-transparent via-[color:var(--gold)]/50 to-transparent"
        />
      </section>

      {/* INTRO */}
      <section className="container-lux py-24 md:py-32 text-center">
        <span data-reveal className="eyebrow">The House of Sheratal</span>
        <div data-reveal data-delay="1" className="mt-4 flex justify-center">
          <span className="gold-divider" />
        </div>
        <h2
          data-reveal
          data-delay="2"
          className="mt-6 font-serif text-4xl md:text-5xl max-w-3xl mx-auto leading-tight"
        >
          Couture that celebrates every curve, every occasion, every woman.
        </h2>
        <p
          data-reveal
          data-delay="3"
          className="mt-6 max-w-xl mx-auto text-muted-foreground leading-relaxed"
        >
          Rooted in the craftsmanship of Delhi and drawn to the discipline of
          modern tailoring, each SHERATAL piece is made to be worn — and
          remembered.
        </p>
      </section>

      {/* FEATURED */}
      <section className="container-lux pb-24">
        <div className="flex items-end justify-between mb-10">
          <div>
            <span className="eyebrow">Editor's Edit</span>
            <h3 className="mt-2 font-serif text-3xl md:text-4xl">Signature pieces</h3>
          </div>
          <Link
            to="/shop"
            className="hidden md:inline-flex link-underline text-xs tracking-[0.28em] uppercase"
          >
            View all
          </Link>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {featured.map((p, i) => (
            <div
              key={p.id}
              data-reveal
              data-delay={String((i % 3) + 1)}
              className="product-card"
            >
              <ProductImage id={p.id} alt={p.name} />
              <Link to="/product/$id" params={{ id: p.id }} className="mt-5 block">
                <div className="flex items-baseline justify-between">
                  <h4 className="font-serif text-xl">{p.name}</h4>
                  <span className="text-sm text-muted-foreground">
                    {formatPrice(p.price)}
                  </span>
                </div>
                <span className="mt-1 block text-[0.68rem] tracking-[0.28em] uppercase text-[color:var(--gold)]">
                  {p.category}
                </span>
              </Link>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center md:hidden">
          <Link to="/shop" className="btn-ghost-gold">View all pieces</Link>
        </div>
      </section>

      {/* SIZE PROMISE */}
      <section className="bg-[color:var(--ink)] text-white">
        <div className="container-lux py-20 md:py-28 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="eyebrow !text-[color:var(--gold-soft)]">The Sheratal Promise</span>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl leading-tight">
              XS to 5XL,<br />with the same devotion.
            </h2>
          </div>
          <p className="text-white/75 leading-relaxed max-w-md">
            Every silhouette in our house is drafted, draped and fitted across our
            complete size range. Because luxury without inclusion is only half the story.
          </p>
        </div>
      </section>
    </div>
  );
}
