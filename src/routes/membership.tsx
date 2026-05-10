import { createFileRoute, Link } from "@tanstack/react-router";
import { useReveal } from "../hooks/use-reveal";
import { PageHero } from "../components/site/PageHero";
import { SectionHeading } from "../components/site/SectionHeading";
import poster from "../assets/golf-green.jpg";

export const Route = createFileRoute("/membership")({
  head: () => ({
    meta: [
      { title: "Membership — Richmond Hill Golf Club" },
      { name: "description", content: "Three considered membership tiers at Toronto's premier public golf club." },
      { property: "og:title", content: "Membership — Richmond Hill Golf Club" },
      { property: "og:description", content: "Belong to a course you'll know for a lifetime." },
    ],
  }),
  component: MembershipPage,
});

const TIERS = [
  { name: "Social", price: "From $1,800", featured: false, items: ["Full clubhouse + dining", "Simulator + practice access", "Member events", "Reciprocal city dining"] },
  { name: "Weekday", price: "From $4,400", featured: true, items: ["Unlimited weekday play", "Advance tee time priority", "Locker room access", "All Social benefits"] },
  { name: "Full", price: "From $7,200", featured: false, items: ["Unlimited 7-day play", "Reciprocal Ontario clubs", "Locker + bag storage", "Tournament priority"] },
];

function MembershipPage() {
  useReveal();
  return (
    <>
      <PageHero
        kicker="Membership"
        title="Belong to a course you'll know for a lifetime."
        intro="Three tiers, no initiation fee for 2026, and a community that's been quietly forming since 1958."
        videoId="zkKFWa2x9DI"
        poster={poster}
      />

      <section className="bg-charcoal text-cream py-28 md:py-36">
        <div className="mx-auto max-w-[1480px] px-5 md:px-10">
          <div className="grid gap-6 md:grid-cols-3">
            {TIERS.map((t) => (
              <div key={t.name} className={`reveal glass p-8 md:p-10 flex flex-col ${t.featured ? "border-gold/60 ring-1 ring-gold/30" : ""}`}>
                {t.featured && <div className="kicker text-gold mb-3">Most Chosen</div>}
                <h3 className="font-serif text-3xl md:text-4xl">{t.name}</h3>
                <div className="mt-3 text-cream/60 text-sm tracking-[0.18em] uppercase">{t.price}</div>
                <div className="my-8 hairline text-cream" />
                <ul className="space-y-3 text-sm text-cream/80 flex-1">
                  {t.items.map((it) => <li key={it} className="flex gap-3"><span className="text-gold mt-1">—</span>{it}</li>)}
                </ul>
                <Link to="/contact" className={`mt-10 inline-flex items-center justify-center px-6 py-3.5 text-xs tracking-[0.24em] uppercase transition-colors ${t.featured ? "bg-gold text-charcoal hover:bg-cream" : "border border-cream/30 hover:bg-cream hover:text-charcoal"}`}>
                  Inquire
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream py-28 md:py-36">
        <div className="mx-auto max-w-[1480px] px-5 md:px-10">
          <SectionHeading kicker="Member Benefits" title="More than a tee sheet." className="mb-16" />
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
            {[
              ["Reciprocity", "Access to a curated network of Ontario clubs."],
              ["Simulator Lounge", "Year-round bay bookings and whisky service."],
              ["Member Events", "Mixers, tournaments and seasonal dinners."],
              ["Concierge", "Caddie booking, club fitting, gear storage."],
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
