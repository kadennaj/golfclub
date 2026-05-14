import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Youtube } from "lucide-react";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-charcoal text-cream/80">
      <div className="aspect-[16/6] md:aspect-[21/6] w-full overflow-hidden border-y border-white/5">
        <iframe
          title="Map to Richmond Hill Golf Club"
          src="https://www.google.com/maps?q=8755+Bathurst+Street+Richmond+Hill+ON&output=embed"
          loading="lazy"
          className="w-full h-full grayscale-[0.6] contrast-110 opacity-90"
        />
      </div>

      <div className="mx-auto max-w-[1480px] px-5 md:px-10 py-20 grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div>
          <Logo />
          <p className="mt-6 text-sm leading-relaxed max-w-sm text-cream/65">
            A fully public 18-hole parkland course in Richmond Hill, Ontario. Tee
            times, lessons, simulators, tournaments and the Richvale Room — open
            to everyone.
          </p>
          <div className="mt-6 text-sm text-cream/65 space-y-1">
            <div>8755 Bathurst Street, Richmond Hill, ON L4C 9T3</div>
            <div>
              <a href="tel:9058894653" className="hover:text-gold transition-colors">(905) 889-4653</a>
            </div>
            <div className="pt-3 space-y-1 text-cream/55">
              <div>Lessons · ext. 448 · <a href="mailto:learningcentre@richmondhillgolf.com" className="hover:text-gold transition-colors">learningcentre@richmondhillgolf.com</a></div>
              <div>Events · <a href="mailto:lbodanis@richmondhillgolf.com" className="hover:text-gold transition-colors">lbodanis@richmondhillgolf.com</a></div>
              <div>Employment · ext. 422 · <a href="mailto:dyoung@richmondhillgolf.com" className="hover:text-gold transition-colors">dyoung@richmondhillgolf.com</a></div>
            </div>
          </div>
          <div className="mt-6 flex gap-3">
            {[Instagram, Facebook, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="h-10 w-10 rounded-full border border-white/15 flex items-center justify-center hover:bg-cream hover:text-charcoal transition-colors"
                aria-label="Social"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <FooterCol
          title="Visit"
          items={[
            ["Course", "/golf"],
            ["Dining", "/dining"],
            ["Contact", "/contact"],
          ]}
        />
        <FooterCol
          title="Play"
          items={[
            ["Membership", "/membership"],
            ["Academy", "/lessons"],
            ["Events", "/events"],
          ]}
        />
        <div>
          <h4 className="kicker text-cream">Newsletter</h4>
          <p className="mt-4 text-sm text-cream/65">
            Tee times, tournaments, and seasonal happenings.
          </p>
          <form className="mt-4 flex border-b border-cream/30 focus-within:border-gold transition-colors">
            <input
              type="email"
              required
              placeholder="Email address"
              className="flex-1 bg-transparent py-3 text-sm placeholder:text-cream/40 focus:outline-none"
            />
            <button className="text-xs tracking-[0.24em] uppercase text-gold hover:text-cream transition-colors">
              Join →
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-white/5">
        <div className="mx-auto max-w-[1480px] px-5 md:px-10 py-6 flex flex-wrap gap-3 justify-between text-[0.7rem] tracking-[0.18em] uppercase text-cream/45">
          <div>© {new Date().getFullYear()} Richmond Hill Golf Club</div>
          <div>8755 Bathurst Street · Richmond Hill, Ontario</div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, items }: { title: string; items: [string, string][] }) {
  return (
    <div>
      <h4 className="kicker text-cream">{title}</h4>
      <ul className="mt-4 space-y-2.5 text-sm">
        {items.map(([label, to]) => (
          <li key={to}>
            <Link to={to} className="hover:text-gold transition-colors">
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
