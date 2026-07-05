import { Link, useLocation } from "@tanstack/react-router";
import type { KeyboardEvent as ReactKeyboardEvent } from "react";
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";

const NAV = [
  { to: "/golf", label: "Golf", eyebrow: "The Course" },
  { to: "/academy", label: "Academy", eyebrow: "Lessons & Clinics" },
  { to: "/events", label: "Events", eyebrow: "Tournaments" },
  { to: "/dining", label: "Dining", eyebrow: "19th Hole Lounge" },
  { to: "/practice-facilities", label: "Practice Facilities", eyebrow: "Range & Simulators" },
  { to: "/league", label: "League", eyebrow: "Men's & WIG" },
  {
    to: "/elite-prepaid-membership",
    label: "Elite Prepaid Membership",
    eyebrow: "Member Privileges",
  },
  { to: "/contact", label: "Contact", eyebrow: "Visit & Inquiries" },
] as const;

export function Nav() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLElement>(null);
  const wasOpenRef = useRef(false);
  const logoVariant =
    location.pathname.startsWith("/academy") || location.pathname.startsWith("/lessons")
      ? "academy"
      : "club";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    if (open) {
      closeButtonRef.current?.focus();
    } else if (wasOpenRef.current) {
      menuButtonRef.current?.focus();
    }
    wasOpenRef.current = open;

    const onKeyDown = (event: globalThis.KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const handlePanelKeyDown = (event: ReactKeyboardEvent<HTMLElement>) => {
    if (event.key !== "Tab") return;

    const focusable = panelRef.current?.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
    );
    if (!focusable?.length) return;

    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  };

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-charcoal/85 backdrop-blur-xl border-b border-white/5"
            : "bg-gradient-to-b from-black/55 to-transparent"
        }`}
      >
        <div className="mx-auto flex h-20 max-w-[1480px] items-center justify-between px-5 md:px-10 text-cream">
          <Link to="/" className="hover:opacity-80 transition-opacity">
            <Logo variant={logoVariant} />
          </Link>

          <button
            ref={menuButtonRef}
            onClick={() => setOpen(true)}
            className="group inline-flex cursor-pointer items-center gap-3 border border-cream/35 bg-charcoal/20 px-4 py-2.5 text-[0.68rem] uppercase tracking-[0.24em] text-cream/90 backdrop-blur-md transition-all duration-300 hover:border-cream/70 hover:bg-cream hover:text-charcoal focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cream md:px-5"
            aria-label="Open menu"
            aria-haspopup="dialog"
            aria-expanded={open}
          >
            <span className="hidden sm:inline">Menu</span>
            <Menu className="h-5 w-5 transition-transform duration-300 group-hover:scale-95" />
          </button>
        </div>
      </header>

      {/* Off-canvas navigation */}
      <div
        className={`fixed inset-0 z-[60] transition-all duration-500 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!open}
      >
        <button
          className="absolute inset-0 cursor-default bg-charcoal/62 backdrop-blur-sm transition-opacity duration-500"
          aria-label="Close menu"
          onClick={() => setOpen(false)}
        />
        <aside
          ref={panelRef}
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
          onKeyDown={handlePanelKeyDown}
          className={`absolute right-0 top-0 flex h-full w-[min(92vw,560px)] flex-col overflow-hidden border-l border-cream/12 bg-charcoal text-cream shadow-[-40px_0_100px_rgba(0,0,0,0.32)] transition-transform duration-500 ease-out ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="pointer-events-none absolute inset-0 soft-vignette opacity-25" />
          <div className="relative z-10 flex h-20 items-center justify-between border-b border-cream/10 px-5 md:px-8">
            <Logo variant={logoVariant} />
            <button
              ref={closeButtonRef}
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="group inline-flex cursor-pointer items-center gap-3 border border-cream/25 px-3.5 py-2.5 text-[0.68rem] uppercase tracking-[0.24em] text-cream/80 transition-all duration-300 hover:border-cream/70 hover:bg-cream hover:text-charcoal focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cream"
            >
              <span className="hidden sm:inline">Close</span>
              <X className="h-5 w-5 transition-transform duration-300 group-hover:rotate-90" />
            </button>
          </div>

          <div className="relative z-10 flex min-h-0 flex-1 flex-col justify-between overflow-y-auto overscroll-contain px-5 py-8 md:px-8 md:py-10">
            <div>
              <div className="kicker mb-7 text-gold">Navigation</div>
              <nav className="flex flex-col">
                {NAV.map((n, i) => (
                  <Link
                    key={n.to}
                    to={n.to}
                    onClick={() => setOpen(false)}
                    className="group grid cursor-pointer grid-cols-[2.5rem_1fr] gap-4 border-t border-cream/10 py-5 text-cream transition-colors duration-300 last:border-b hover:text-gold focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-gold"
                    activeProps={{ className: "text-gold" }}
                    style={{ transitionDelay: open ? `${i * 35}ms` : "0ms" }}
                  >
                    <span className="pt-1 text-[0.65rem] tracking-[0.22em] text-cream/38 transition-colors duration-300 group-hover:text-gold/75">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span>
                      <span className="block font-serif text-4xl leading-none md:text-5xl">
                        {n.label}
                      </span>
                      <span className="mt-2 block text-[0.68rem] uppercase tracking-[0.24em] text-cream/45 transition-colors duration-300 group-hover:text-cream/75">
                        {n.eyebrow}
                      </span>
                    </span>
                  </Link>
                ))}
              </nav>
            </div>

            <div className="mt-10 grid gap-5 border-t border-cream/10 pt-7 sm:grid-cols-[1fr_auto] sm:items-end">
              <div>
                <div className="kicker mb-3 text-cream/45">Richmond Hill Golf Club</div>
                <p className="max-w-xs text-sm leading-relaxed text-cream/58">
                  Public golf, academy, dining, leagues and simulator play in Richmond Hill.
                </p>
              </div>
              <div className="grid gap-3 sm:min-w-48">
                <a
                  href="https://richmond-hill-golf.book.teeitup.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="inline-flex cursor-pointer justify-center border border-gold/60 bg-gold px-5 py-3.5 text-center text-[0.68rem] uppercase tracking-[0.24em] text-charcoal transition-colors duration-300 hover:bg-cream focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
                >
                  Book Tee Time
                </a>
                <a
                  href="https://richmondhillgolf.clubhouseonline-e3.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="inline-flex cursor-pointer justify-center border border-cream/30 px-5 py-3.5 text-center text-[0.68rem] uppercase tracking-[0.24em] text-cream transition-colors duration-300 hover:border-gold hover:text-gold focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
                >
                  Member Login
                </a>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </>
  );
}
