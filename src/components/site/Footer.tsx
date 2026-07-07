import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-charcoal text-cream/80">
      <div className="mx-auto max-w-[1480px] px-5 md:px-10 py-20 grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div>
          <Logo />
          <p className="mt-6 text-sm leading-relaxed max-w-sm text-cream/65">
            A fully public 18-hole parkland course in Richmond Hill, Ontario. Tee times, academy,
            dining, practice facilities, leagues and events — open to everyone.
          </p>
          <div className="mt-6 text-sm text-cream/65 space-y-1">
            <div>8755 Bathurst Street, Richmond Hill, ON L4C 9T3</div>
            <div>
              <a href="tel:9058894653" className="hover:text-gold transition-colors">
                (905) 889-4653
              </a>
            </div>
            <div className="pt-3 space-y-1 text-cream/55">
              <div>
                Lessons · ext. 448 ·{" "}
                <a
                  href="mailto:learningcentre@richmondhillgolf.com"
                  className="hover:text-gold transition-colors"
                >
                  learningcentre@richmondhillgolf.com
                </a>
              </div>
              <div>
                Events ·{" "}
                <a
                  href="mailto:lbodanis@richmondhillgolf.com"
                  className="hover:text-gold transition-colors"
                >
                  lbodanis@richmondhillgolf.com
                </a>
              </div>
              <div>
                Employment · ext. 422 ·{" "}
                <a
                  href="mailto:dyoung@richmondhillgolf.com"
                  className="hover:text-gold transition-colors"
                >
                  dyoung@richmondhillgolf.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <FooterCol
          title="Visit"
          items={[
            ["Golf", "/golf"],
            ["Academy", "/academy"],
            ["Events", "/events"],
            ["Dining", "/dining"],
          ]}
        />
        <FooterCol
          title="Play"
          items={[
            ["Practice Facilities", "/practice-facilities"],
            ["League", "/league"],
            ["Elite Prepaid Membership", "/elite-prepaid-membership"],
            ["Contact", "/contact"],
          ]}
        />
        <div>
          <h4 className="kicker text-cream">Policies</h4>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li>
              <a
                href="/docs/privacy-policy.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold transition-colors"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="/docs/accessibility-policy.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold transition-colors"
              >
                Accessibility Policy
              </a>
            </li>
          </ul>
          <a
            href="mailto:info@richmondhillgolf.com"
            className="mt-6 inline-flex text-xs uppercase tracking-[0.24em] text-gold transition-colors hover:text-cream"
          >
            Contact the Club
          </a>
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
