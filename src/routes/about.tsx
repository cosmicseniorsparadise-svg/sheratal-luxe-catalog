import { createFileRoute, Link } from "@tanstack/react-router";
import aboutImg from "@/assets/about.jpg";
import pageantAsset from "@/assets/pageant-collage.png.asset.json";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "The House of Sheratal — Our Story" },
      {
        name: "description",
        content:
          "SHERATAL is a luxury couture house built on craftsmanship, inclusivity and body positivity. Read our story from the Dwarka atelier.",
      },
      { property: "og:title", content: "The House of Sheratal — Our Story" },
      { property: "og:description", content: "Craftsmanship, inclusivity, body positivity — the SHERATAL story." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <div>
      <section className="container-lux pt-16 md:pt-24 pb-16 text-center max-w-3xl">
        <span className="eyebrow">Our Story</span>
        <div className="mt-3 flex justify-center"><span className="gold-divider" /></div>
        <h1 className="mt-6 font-serif text-5xl md:text-6xl leading-[1.05] mx-auto">
          A couture house<br />built for every woman.
        </h1>
        <p className="mt-6 text-muted-foreground leading-relaxed">
          SHERATAL was founded on a quiet conviction — that luxury is not a size,
          a shape, or an occasion. It is a feeling, and it belongs to everyone.
        </p>
      </section>

      <section className="container-lux">
        <div className="overflow-hidden">
          <img
            src={aboutImg}
            alt="Inside the Sheratal atelier"
            loading="lazy"
            width={1600}
            height={1100}
            className="w-full h-[60vh] object-cover"
          />
        </div>
      </section>

      <section className="container-lux py-20 md:py-24 grid md:grid-cols-2 gap-12 items-center max-w-6xl">
        <div className="overflow-hidden">
          <img
            src={pageantAsset.url}
            alt="Sheratal Presents Miss & Mrs Delhi NCR Season 4 grand finale at Radisson Blu, Dwarka"
            loading="lazy"
            className="w-full object-cover"
          />
        </div>
        <div>
          <span className="eyebrow">Pageants &amp; Runway</span>
          <div className="mt-3"><span className="gold-divider" /></div>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            Sheratal is an established name in India's pageant and fashion industry,
            dedicated to celebrating women's empowerment, confidence, and talent across
            multiple age groups. Alongside our signature pageants, we organise curated
            fashion shows that spotlight new-age designers, trends, and runway artistry —
            creating a platform where beauty, style, and self-expression come together.
            Our flagship event, Sheratal Presents Miss &amp; Mrs Delhi NCR, recently wrapped
            up its Season 4 with a grand finale held at the Radisson Blu, Dwarka.
          </p>
        </div>
      </section>

      <section className="container-lux py-24 grid md:grid-cols-3 gap-12 max-w-6xl">
        <div>
          <span className="eyebrow">01 — Craft</span>
          <h3 className="mt-3 font-serif text-2xl">Made by hand.</h3>
          <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
            Zardozi, aari, dabka, tilla — every piece is finished by karigars
            who have inherited their needle through generations.
          </p>
        </div>
        <div>
          <span className="eyebrow">02 — Inclusion</span>
          <h3 className="mt-3 font-serif text-2xl">Sized for real bodies.</h3>
          <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
            Our patterns are drafted from XS through 5XL from day one — never
            scaled up as an afterthought. Every silhouette is drafted for
            every silhouette.
          </p>
        </div>
        <div>
          <span className="eyebrow">03 — Belonging</span>
          <h3 className="mt-3 font-serif text-2xl">Body positive, always.</h3>
          <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
            You leave our atelier feeling like the version of yourself you
            already are — only slightly more difficult to look away from.
          </p>
        </div>
      </section>

      <section className="bg-[color:var(--muted)]">
        <div className="container-lux py-20 md:py-28 text-center max-w-2xl">
          <h2 className="font-serif text-4xl md:text-5xl">Meet us in person.</h2>
          <p className="mt-4 text-muted-foreground">
            The full collection lives at our Dwarka atelier. Walk in, or book a
            private appointment on WhatsApp.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link to="/visit" className="btn-gold btn-gold-hover">Plan your visit</Link>
            <Link to="/shop" className="btn-ghost-gold">Browse the collection</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
