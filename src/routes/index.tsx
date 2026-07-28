import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero.jpg";
import { products, formatPrice } from "@/lib/products";

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
      { property: "og:description", content: "Editorial couture from the SHERATAL atelier in Dwarka, New Delhi." },
    ],
  }),
  component: Index,
});

function Index() {
  const featured = products.filter((p) => p.featured).slice(0, 3);
  return (
    <div>
      {/* HERO */}
      <section className="relative -mt-[76px] h-[92vh] min-h-[620px] w-full overflow-hidden">
        <img
          src={heroImg}
          alt="Model in a hand-embroidered ivory and gold Sheratal lehenga"
          width={1920}
          height={1200}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/60" />
        <div className="relative z-10 h-full container-lux flex flex-col justify-end pb-20 md:pb-28 text-white">
          <span className="eyebrow fade-up !text-[color:var(--gold-soft)]">
            Autumn Couture 2026
          </span>
          <h1 className="fade-up-delay-1 mt-4 font-serif text-5xl md:text-7xl lg:text-8xl leading-[0.95] max-w-3xl">
            Quiet luxury,<br />loudly her own.
          </h1>
          <p className="fade-up-delay-2 mt-6 max-w-lg text-sm md:text-base leading-relaxed text-white/85">
            Hand-crafted couture from the SHERATAL atelier in Dwarka — tailored
            with intention, offered in every silhouette from XS to 5XL.
          </p>
          <div className="fade-up-delay-3 mt-8 flex flex-wrap gap-3">
            <Link to="/shop" className="btn-gold btn-gold-hover !bg-[color:var(--gold)] !text-[color:var(--ink)] !border-[color:var(--gold)] hover:!bg-white hover:!border-white">
              Explore the collection
            </Link>
            <Link to="/visit" className="btn-ghost-gold !text-white !border-white/60 hover:!bg-white hover:!text-[color:var(--ink)]">
              Visit the atelier
            </Link>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="container-lux py-24 md:py-32 text-center">
        <span className="eyebrow">The House of Sheratal</span>
        <div className="mt-4 flex justify-center"><span className="gold-divider" /></div>
        <h2 className="mt-6 font-serif text-4xl md:text-5xl max-w-3xl mx-auto leading-tight">
          Couture that celebrates every curve, every occasion, every woman.
        </h2>
        <p className="mt-6 max-w-xl mx-auto text-muted-foreground leading-relaxed">
          Rooted in the craftsmanship of Delhi and drawn to the discipline of modern
          tailoring, each SHERATAL piece is made to be worn — and remembered.
        </p>
      </section>

      {/* FEATURED */}
      <section className="container-lux pb-24">
        <div className="flex items-end justify-between mb-10">
          <div>
            <span className="eyebrow">Editor's Edit</span>
            <h3 className="mt-2 font-serif text-3xl md:text-4xl">Signature pieces</h3>
          </div>
          <Link to="/shop" className="hidden md:inline-flex link-underline text-xs tracking-[0.28em] uppercase">
            View all
          </Link>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {featured.map((p) => (
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
              </div>
              <div className="mt-5 flex items-baseline justify-between">
                <h4 className="font-serif text-xl">{p.name}</h4>
                <span className="text-sm text-muted-foreground">{formatPrice(p.price)}</span>
              </div>
              <span className="mt-1 block text-[0.68rem] tracking-[0.28em] uppercase text-[color:var(--gold)]">
                {p.category}
              </span>
            </Link>
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
