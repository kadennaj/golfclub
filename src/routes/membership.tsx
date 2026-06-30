import { createFileRoute, Link } from "@tanstack/react-router";
import { useReveal } from "../hooks/use-reveal";
import { PageHero } from "../components/site/PageHero";
import { SectionHeading } from "../components/site/SectionHeading";
import { HOLES } from "../data/holes";

export const Route = createFileRoute("/membership")({
  head: () => ({
    meta: [
      { title: "Prepaid Elite Membership — Richmond Hill Golf Club" },
      {
        name: "description",
        content:
          "Save 15–25% on green fees with a Prepaid Elite account at Richmond Hill Golf Club. Three tiers: Silver, Gold and Platinum.",
      },
      { property: "og:title", content: "Prepaid Elite Membership — Richmond Hill Golf Club" },
      {
        property: "og:description",
        content: "The ultimate in convenience and savings for you and your guests.",
      },
    ],
    links: [{ rel: "canonical", href: "https://www.richmondhillgolf.com/membership" }],
  }),
  component: MembershipPage,
});

const TIERS = [
  {
    name: "Silver",
    price: "Save 15% off green fees",
    featured: false,
    items: [
      "10% off Proshop, F&B and range",
      "4-week advance booking privileges",
      "Signing privileges on account",
      "Funds roll over for 3 years",
    ],
  },
  {
    name: "Gold",
    price: "Save 20% off green fees",
    featured: true,
    items: [
      "10% off Proshop, F&B and range",
      "4-week advance booking privileges",
      "Signing privileges on account",
      "Funds roll over for 3 years",
    ],
  },
  {
    name: "Platinum",
    price: "Save 25% off green fees",
    featured: false,
    items: [
      "10% off Proshop, F&B and range",
      "4-week advance booking privileges",
      "Signing privileges on account",
      "Funds roll over for 3 years",
    ],
  },
];

function MembershipPage() {
  useReveal();
  return (
    <>
      <PageHero
        kicker="Prepaid Elite"
        title="The ultimate in convenience and savings."
        intro="As a public Golf Club we don't offer a traditional annual membership option, but our Elite Prepaid Membership offers the best of both worlds. A prepaid account to use towards all purchases at the club, and significant member perks including golf discounts, advanced booking privileges and access to our online membership hub"
        poster={HOLES[9].image}
      />

      <section className="bg-charcoal text-cream py-28 md:py-36">
        <div className="mx-auto max-w-[1480px] px-5 md:px-10">
          <p className="reveal mb-10 max-w-3xl text-cream/70 text-base leading-relaxed md:mb-14 md:text-lg">
            Our Elite Prepaid Membership is at capacity for the 2026 season. A waiting list will
            open in the Fall for those interested in joining for 2027.
          </p>
          <div className="grid gap-6 md:grid-cols-3">
            {TIERS.map((t) => (
              <div
                key={t.name}
                className={`reveal glass p-8 md:p-10 flex flex-col ${t.featured ? "border-gold/60 ring-1 ring-gold/30" : ""}`}
              >
                {t.featured && <div className="kicker text-gold mb-3">Most Popular</div>}
                <h3 className="font-serif text-3xl md:text-4xl">{t.name}</h3>
                <div className="mt-3 text-cream/60 text-sm tracking-[0.18em] uppercase">
                  {t.price}
                </div>
                <div className="my-8 hairline text-cream" />
                <ul className="space-y-3 text-sm text-cream/80 flex-1">
                  {t.items.map((it) => (
                    <li key={it} className="flex gap-3">
                      <span className="text-gold mt-1">—</span>
                      {it}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`mt-10 inline-flex items-center justify-center px-6 py-3.5 text-xs tracking-[0.24em] uppercase transition-colors ${t.featured ? "bg-gold text-charcoal hover:bg-cream" : "border border-cream/30 hover:bg-cream hover:text-charcoal"}`}
                >
                  Inquire
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream py-28 md:py-36">
        <div className="mx-auto max-w-[1480px] px-5 md:px-10">
          <SectionHeading
            kicker="Member Benefits"
            title="Public Golf with Private Club service"
            className="mb-16"
          />
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
            {[
              [
                "Signing Privileges",
                "Sign for all charges using your account — no need to carry cash or credit cards.",
              ],
              [
                "Advanced Booking",
                "4-week advance tee-time privileges to help secure prime times.",
              ],
              [
                "Roll-Over Balances",
                "Funds on account do not expire for 3 years — no pressure to use it all in one season.",
              ],
              [
                "Guest Discounts",
                "Your guests' rounds receive the appropriate discount as long as payment is made through your account.",
              ],
            ].map(([t, d]) => (
              <div key={t} className="reveal">
                <div className="kicker text-forest mb-3">{t}</div>
                <p className="text-charcoal/70 leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
