import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import badgeAsset from "@/assets/sheratal-badge.png.asset.json";

const nav = [
  { to: "/", label: "Home" },
  { to: "/shop", label: "Shop" },
  { to: "/about", label: "About" },
  { to: "/visit", label: "Visit" },
];

export function SiteHeader() {
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
            src={badgeAsset.url}
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
