import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import badgeAsset from "@/assets/sheratal-badge.png.asset.json";
import { assetUrl } from "@/lib/asset-url";
import { useCart } from "@/lib/cart";

const nav = [
  { to: "/", label: "Home" },
  { to: "/shop", label: "Shop" },
  { to: "/about", label: "About" },
  { to: "/visit", label: "Visit" },
];

export function SiteHeader() {
  const count = useCart().reduce((n, l) => n + l.qty, 0);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 transition-colors duration-500 ${
        scrolled
          ? "bg-[color:var(--background)]/90 backdrop-blur border-b border-[color:var(--border)]"
          : "bg-transparent"
      }`}
    >
      <div className="container-lux flex items-center justify-between py-5">
        <Link to="/" className="flex items-center gap-3">
          <img
            src={assetUrl(badgeAsset)}
            alt="Sheratal"
            width={96}
            height={96}
            className="h-10 w-10 md:h-12 md:w-12 object-contain"
          />
          <span className="font-serif text-xl md:text-2xl tracking-[0.35em] text-[color:var(--ink)]">
            SHERATAL
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="link-underline text-[0.72rem] tracking-[0.28em] uppercase text-[color:var(--ink)]"
              activeProps={{ className: "text-[color:var(--gold)]" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <Link to="/cart" aria-label="Shopping bag" className="relative ml-auto md:ml-10 mr-3 md:mr-0 p-2 text-[color:var(--ink)] hover:text-[color:var(--gold)] transition">
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden>
            <path d="M5 8h14l-1 12H6L5 8Z" /><path d="M9 8V6a3 3 0 0 1 6 0v2" />
          </svg>
          {count > 0 && (
            <span className="absolute -top-0.5 -right-0.5 h-4 min-w-4 px-1 rounded-full bg-[color:var(--gold)] text-[color:var(--background)] text-[0.6rem] leading-4 text-center">{count}</span>
          )}
        </Link>

        <button
          className="md:hidden inline-flex flex-col gap-1.5 p-2"
          aria-label="Menu"
          onClick={() => setOpen((o) => !o)}
        >
          <span className={`h-px w-6 bg-[color:var(--ink)] transition ${open ? "translate-y-[6px] rotate-45" : ""}`} />
          <span className={`h-px w-6 bg-[color:var(--ink)] transition ${open ? "opacity-0" : ""}`} />
          <span className={`h-px w-6 bg-[color:var(--ink)] transition ${open ? "-translate-y-[6px] -rotate-45" : ""}`} />
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-[color:var(--border)] bg-[color:var(--background)]">
          <nav className="container-lux flex flex-col py-4">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="py-3 text-[0.75rem] tracking-[0.28em] uppercase text-[color:var(--ink)]"
                activeProps={{ className: "text-[color:var(--gold)]" }}
                activeOptions={{ exact: n.to === "/" }}
              >
                {n.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
