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
        intro="As a fully public Golf Club we don't offer traditional memberships. Our Prepaid Elite program lets you put a lump sum on account, then draw from it at a discounted rate. Funds never expire for 3 years, and discounts apply automatically."
        poster={HOLES[9].image}
      />

      <section className="bg-charcoal text-cream py-28 md:py-36">
        <div className="mx-auto max-w-[1480px] px-5 md:px-10">
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
          <p className="reveal mt-10 text-center text-cream/55 text-sm max-w-2xl mx-auto">
            The Prepaid Elite program is at capacity for the 2026 season. A waiting list will open
            in the fall for those interested in joining for 2027.
          </p>
        </div>
      </section>

      <section className="bg-cream py-28 md:py-36">
        <div className="mx-auto max-w-[1480px] px-5 md:px-10">
          <SectionHeading
            kicker="Member Benefits"
            title="More than a discounted tee sheet."
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
                "Four-week advance tee-time privileges to help secure prime weekend times.",
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

      <section className="bg-forest text-cream py-28 md:py-36">
        <div className="mx-auto max-w-[1480px] px-5 md:px-10">
          <SectionHeading
            tone="dark"
            kicker="Frequently Asked"
            title="What everyone wants to know."
            className="mb-14"
          />
          <div className="grid gap-10 md:grid-cols-2">
            {[
              [
                "Are you a public or private facility?",
                "We are a fully public Golf Club. All of our facilities, including the driving range, are open to anyone.",
              ],
              [
                "How far in advance can I book a tee time?",
                "Bookings can be made up to 4 weeks in advance over the phone or online. You can book multiple tee times in advance — cancellations must be made within our 24-hour policy.",
              ],
              [
                "What is your cancellation policy?",
                "We request 24 hours' notice if you must cancel a tee time or reduce the number of players. A confirmation email is sent at booking and a reminder 24 hours in advance.",
              ],
              [
                "Is the course suitable for beginners?",
                "Yes — three different tee decks make the course very beginner friendly. We recommend twilight hours when the course is less busy. A 10-hole option is available.",
              ],
              [
                "How is the pace of play?",
                "We've increased our tee-time intervals, which means less traffic on any given day. Our average round is 4 hours and 20 minutes.",
              ],
              [
                "Affiliation with the Richmond Hill Country Club?",
                "Yes — we operate under the same umbrella. Several of our events use both facilities, and Prepaid Elite members have limited access to Country Club dining.",
              ],
            ].map(([q, a]) => (
              <div key={q} className="reveal border-t border-cream/15 pt-6">
                <div className="font-serif text-2xl text-cream">{q}</div>
                <p className="mt-3 text-cream/75 text-sm leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
