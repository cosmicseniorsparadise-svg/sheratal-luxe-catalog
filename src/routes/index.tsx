import { createFileRoute, Link } from "@tanstack/react-router";
import modelPolka from "@/assets/model-polka.png.asset.json";
import modelCocoa from "@/assets/model-cocoa.png.asset.json";
import modelSage from "@/assets/model-sage.png.asset.json";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SHERATAL — Luxury Couture Atelier, Dwarka New Delhi" },
      {
        name: "description",
        content:
          "Hand-crafted lehengas, kurta sets and co-ord sets in sizes XS to 5XL. Discover the SHERATAL couture collection.",
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
                Shop now
              </Link>
              <Link to="/visit" className="btn-ghost-gold">
                Visit the atelier
              </Link>
            </div>
          </div>

          {/* RIGHT — editorial model image */}
          <div className="lg:col-span-7 relative flex items-center justify-center self-center">
            <div
              data-reveal
              data-delay="2"
              className="relative w-full max-w-[420px] lg:max-w-[520px] mx-auto overflow-hidden aspect-[3/4] border border-[color:var(--border)]"
            >
              <img
                src={modelPolka.url}
                alt="Sheratal model wearing a polka dot blouse and tailored skirt"
                className="h-full w-full object-cover"
              />
            </div>

            <span aria-hidden className="absolute -top-3 -left-3 h-14 w-px bg-[color:var(--gold)]" />
            <span aria-hidden className="absolute -top-3 -left-3 h-px w-14 bg-[color:var(--gold)]" />
            <span aria-hidden className="absolute -bottom-3 -right-3 h-14 w-px bg-[color:var(--gold)]" />
            <span aria-hidden className="absolute -bottom-3 -right-3 h-px w-14 bg-[color:var(--gold)]" />

            <span
              aria-hidden
              className="hidden lg:flex absolute -right-14 top-1/2 -translate-y-1/2 rotate-90 origin-center items-center gap-3 text-[0.6rem] tracking-[0.42em] uppercase text-[color:var(--muted-foreground)] whitespace-nowrap"
            >
              <span className="h-px w-8 bg-[color:var(--gold)]" />
              Wear Stylish · The House of Sheratal
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
        <div data-reveal data-delay="4" className="mt-10">
          <Link to="/shop" className="btn-gold btn-gold-hover">
            Shop now
          </Link>
        </div>
      </section>

      {/* LOOKBOOK — editorial split */}
      <section className="pb-24 md:pb-32">
        <div className="container-lux">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {[
              { src: modelCocoa.url, label: "Tailored Co-ords", alt: "Model in cocoa tailored vest and trouser set" },
              { src: modelSage.url, label: "Soft Separates", alt: "Model in sage wrap shirt and trouser set" },
            ].map((m, i) => (
              <figure key={m.label} data-reveal data-delay={String(i + 1)} className="group">
                <div className="overflow-hidden aspect-[3/4] bg-[color:var(--muted)]">
                  <img
                    src={m.src}
                    alt={m.alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                </div>
                <figcaption className="mt-4 flex items-center gap-3">
                  <span className="h-px w-8 bg-[color:var(--gold)]" />
                  <span className="text-[0.68rem] tracking-[0.3em] uppercase text-[color:var(--ink)]">
                    {m.label}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>

          <div data-reveal data-delay="3" className="mt-12 flex justify-center">
            <Link to="/shop" className="btn-gold btn-gold-hover">
              Explore
            </Link>
          </div>
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
