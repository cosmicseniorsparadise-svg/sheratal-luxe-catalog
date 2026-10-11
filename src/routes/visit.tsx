import { createFileRoute } from "@tanstack/react-router";
import { whatsappUrl, INSTAGRAM } from "@/lib/products";

export const Route = createFileRoute("/visit")({
  head: () => ({
    meta: [
      { title: "Visit the Atelier — SHERATAL, Sector 7 Dwarka, New Delhi" },
      {
        name: "description",
        content:
          "Visit the SHERATAL couture showroom in Sector 7, Dwarka, New Delhi. Open daily 10 AM – 8 PM. Private appointments available on WhatsApp.",
      },
      { property: "og:title", content: "Visit SHERATAL — Sector 7 Dwarka, New Delhi" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:description", content: "Sector 7, Dwarka. Open 10 AM – 8 PM daily." },
    ],
  }),
  component: Visit,
});

function Visit() {
  return (
    <div>
      <section className="container-lux pt-16 md:pt-24 pb-16 text-center max-w-3xl">
        <span className="eyebrow">The Showroom</span>
        <div className="mt-3 flex justify-center"><span className="gold-divider" /></div>
        <h1 className="mt-6 font-serif text-5xl md:text-6xl leading-tight">Visit our atelier</h1>
        <p className="mt-6 text-muted-foreground leading-relaxed">
          Step inside the SHERATAL house in Sector 7, Dwarka. Every piece is here
          to see, feel and try — with a stylist by your side.
        </p>
      </section>

      <section className="container-lux grid md:grid-cols-2 gap-12 items-start">
        <div className="space-y-10">
          <div>
            <h3 className="eyebrow !text-[color:var(--ink)]">Address</h3>
            <p className="mt-3 font-serif text-2xl leading-snug">
              Sector 7, Dwarka<br />New Delhi, India
            </p>
          </div>
          <div>
            <h3 className="eyebrow !text-[color:var(--ink)]">Hours</h3>
            <ul className="mt-3 space-y-1 text-[15px]">
              <li className="flex justify-between border-b border-[color:var(--border)] py-2"><span>Monday – Sunday</span><span className="text-muted-foreground">10:00 AM – 8:00 PM</span></li>
            </ul>
          </div>
          <div>
            <h3 className="eyebrow !text-[color:var(--ink)]">Private appointments</h3>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              For bridal fittings and personal styling, we recommend booking ahead.
            </p>
            <a
              href={whatsappUrl("Hello SHERATAL, I'd like to book a private appointment at the Dwarka atelier.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold btn-gold-hover mt-5"
            >
              Book on WhatsApp
            </a>
          </div>
          <div>
            <h3 className="eyebrow !text-[color:var(--ink)]">Follow</h3>
            <a
              href={`https://instagram.com/${INSTAGRAM}`}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline mt-3 inline-block text-sm"
            >
              @{INSTAGRAM} on Instagram
            </a>
          </div>
        </div>

        <div className="w-full aspect-[4/5] md:aspect-[4/4] overflow-hidden border border-[color:var(--border)]">
          <iframe
            title="SHERATAL showroom map — Sector 7, Dwarka, New Delhi"
            src="https://www.google.com/maps?q=Sector+7,+Dwarka,+New+Delhi&output=embed"
            className="w-full h-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

      <div className="pb-24" />
    </div>
  );
}
