import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";

const NAV = [
  { to: "/golf", label: "Golf" },
  { to: "/membership", label: "Membership" },
  { to: "/events", label: "Events" },
  { to: "/dining", label: "Dining" },
  { to: "/lessons", label: "Academy" },
  { to: "/contact", label: "Contact" },
] as const;

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

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
            <Logo />
          </Link>

          <nav className="hidden lg:flex items-center gap-9">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="text-[0.72rem] tracking-[0.24em] uppercase text-cream/85 hover:text-cream transition-colors relative group"
                activeProps={{ className: "text-cream" }}
              >
                {n.label}
                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="https://richmond-hill-golf.book.teeitup.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-[0.72rem] tracking-[0.24em] uppercase border border-cream/40 hover:bg-cream hover:text-charcoal transition-all duration-300"
            >
              Book Tee Time
            </a>
            <button
              onClick={() => setOpen(true)}
              className="lg:hidden p-2 -mr-2 hover:opacity-80"
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-[60] bg-charcoal/98 backdrop-blur-2xl text-cream transition-all duration-500 lg:hidden ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex h-20 items-center justify-between px-5">
          <Logo />
          <button onClick={() => setOpen(false)} aria-label="Close menu" className="p-2 -mr-2">
            <X className="h-6 w-6" />
          </button>
        </div>
        <nav className="flex flex-col px-5 pt-8 gap-1">
          {NAV.map((n, i) => (
            <Link
              key={n.to}
              to={n.to}
              onClick={() => setOpen(false)}
              className="font-serif text-4xl py-3 border-b border-white/8 hover:text-gold transition-colors"
              style={{ transitionDelay: `${i * 30}ms` }}
            >
              {n.label}
            </Link>
          ))}
          <a
            href="https://richmond-hill-golf.book.teeitup.com/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mt-8 inline-flex justify-center items-center px-6 py-4 text-xs tracking-[0.24em] uppercase bg-gold text-charcoal hover:bg-cream transition-colors"
          >
            Book Tee Time
          </a>
        </nav>
      </div>
    </>
  );
}
