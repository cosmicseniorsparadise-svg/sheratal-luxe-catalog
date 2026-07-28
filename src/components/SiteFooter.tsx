import { Link } from "@tanstack/react-router";
import { INSTAGRAM, FACEBOOK, WHATSAPP_NUMBER } from "@/lib/products";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-[color:var(--border)] bg-[color:var(--ink)] text-[color:var(--background)]">
      <div className="container-lux py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="font-serif text-3xl tracking-[0.32em]">SHERATAL</div>
          <span className="gold-divider mt-4" />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/70 font-sans">
            Luxury couture, thoughtfully crafted for every silhouette. From our
            atelier in Dwarka, New Delhi — to you.
          </p>
        </div>

        <div>
          <h4 className="eyebrow !text-white/60">Visit</h4>
          <p className="mt-4 text-sm text-white/80 leading-relaxed">
            Sector 7, Dwarka<br />
            New Delhi, India<br />
            10:00 AM – 8:00 PM
          </p>
        </div>

        <div>
          <h4 className="eyebrow !text-white/60">Connect</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a
                href={`https://instagram.com/${INSTAGRAM}`}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline text-white/85"
              >
                Instagram · @{INSTAGRAM}
              </a>
            </li>
            <li>
              <a
                href={`https://facebook.com/${FACEBOOK}`}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline text-white/85"
              >
                Facebook · {FACEBOOK}
              </a>
            </li>
            <li>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline text-white/85"
              >
                WhatsApp · +91 98116 69057
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-lux flex flex-col md:flex-row items-center justify-between py-6 gap-3 text-xs tracking-[0.22em] uppercase text-white/50">
          <span>© {new Date().getFullYear()} Sheratal Couture</span>
          <div className="flex gap-6">
            <Link to="/shop" className="hover:text-[color:var(--gold)] transition">Shop</Link>
            <Link to="/about" className="hover:text-[color:var(--gold)] transition">About</Link>
            <Link to="/visit" className="hover:text-[color:var(--gold)] transition">Visit</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
