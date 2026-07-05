import { createFileRoute } from "@tanstack/react-router";
import { useReveal } from "../hooks/use-reveal";
import { PageHero } from "../components/site/PageHero";
import { SectionHeading } from "../components/site/SectionHeading";
import eventDinner01 from "../assets/events-real/event-dinner-01.jpg";
import eventDinner02 from "../assets/events-real/event-dinner-02.jpg";
import eventDinner03 from "../assets/events-real/event-dinner-03.jpg";
import eventDinner04 from "../assets/events-real/event-dinner-04.jpg";

export const Route = createFileRoute("/dining")({
  head: () => ({
    meta: [
      { title: "Dining — Richmond Hill Golf Club" },
      {
        name: "description",
        content:
          "The 19th Hole Lounge, bar, patios and post-round dining at Richmond Hill Golf Club.",
      },
      { property: "og:title", content: "Dining — Richmond Hill Golf Club" },
      {
        property: "og:description",
        content:
          "Relax in the newly renovated 19th Hole Lounge, lower patio or upper patio after your round.",
      },
    ],
    links: [{ rel: "canonical", href: "https://www.richmondhillgolf.com/dining" }],
  }),
  component: DiningPage,
});

function DiningPage() {
  useReveal();
  return (
    <>
      <PageHero
        kicker="Dining"
        title="The 19th Hole, bar and patios."
        intro="Settle in after the round with familiar clubhouse favourites, cold drinks and patio views over the finishing hole."
        poster={eventDinner03}
      />

      <section className="bg-cream py-28 md:py-36">
        <div className="mx-auto grid max-w-[1480px] gap-16 px-5 md:px-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <SectionHeading
              kicker="19th Hole Lounge"
              title="A relaxed room for the round after the round."
              intro="The newly renovated lounge offers a full selection of popular menu items and beverages in a warm clubhouse setting."
            />
            <div className="reveal mt-10 grid gap-8 sm:grid-cols-2">
              {[
                [
                  "Lounge Seating",
                  "A comfortable 40-seat room with table layouts for foursomes, friends and small groups.",
                ],
                [
                  "Bar Service",
                  "A proper post-round stop for a favourite beverage, a quick bite or a longer evening.",
                ],
                ["Lower Patio", "Lounge-style outdoor seating overlooking the 18th hole."],
                [
                  "Upper Patio",
                  "A 28-seat patio for small groups, casual dining and sunny afternoons.",
                ],
              ].map(([title, body]) => (
                <div key={title} className="border-t border-charcoal/15 pt-5">
                  <div className="kicker text-forest mb-3">{title}</div>
                  <p className="text-charcoal/68 leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="reveal grid grid-cols-2 gap-4">
            {[eventDinner01, eventDinner02, eventDinner04, eventDinner03].map((src, index) => (
              <div key={src} className={`overflow-hidden image-polish ${index % 2 ? "mt-10" : ""}`}>
                <img
                  src={src}
                  alt=""
                  loading="lazy"
                  className="aspect-[4/5] h-full w-full object-cover transition-transform duration-[1200ms] hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-charcoal text-cream py-28 md:py-36">
        <div className="mx-auto grid max-w-[1480px] gap-14 px-5 md:px-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <SectionHeading
              tone="dark"
              kicker="Menu"
              title="Clubhouse classics, made easy."
              intro="Open the current 19th Hole Lounge menu before you arrive, or settle in and order from the bar."
            />
            <a
              href="/docs/19th-hole-lounge-menu-2026.jpg"
              target="_blank"
              rel="noopener noreferrer"
              className="reveal mt-10 inline-flex items-center bg-gold px-8 py-4 text-xs uppercase tracking-[0.24em] text-charcoal transition-colors hover:bg-cream"
            >
              View Full Menu
            </a>
          </div>
          <a
            href="/docs/19th-hole-lounge-menu-2026.jpg"
            target="_blank"
            rel="noopener noreferrer"
            className="reveal block overflow-hidden border border-cream/15 bg-cream p-3 shadow-[0_28px_80px_rgba(0,0,0,0.25)] transition-transform duration-500 hover:-translate-y-1"
            aria-label="Open the 19th Hole Lounge menu"
          >
            <img
              src="/docs/19th-hole-lounge-menu-2026.jpg"
              alt="19th Hole Lounge menu preview"
              loading="lazy"
              className="max-h-[720px] w-full object-contain"
            />
          </a>
        </div>
      </section>

      <section className="bg-forest text-cream py-24 md:py-32">
        <div className="mx-auto max-w-[1480px] px-5 text-center md:px-10">
          <div className="reveal kicker text-gold mb-5">After Golf</div>
          <h2 className="reveal mx-auto max-w-3xl text-balance font-serif text-4xl md:text-6xl">
            Pull up a chair when the scorecard is done.
          </h2>
          <p className="reveal mx-auto mt-6 max-w-xl text-cream/68">
            Patio, lounge or bar, dining at Richmond Hill Golf Club is built for the easy finish.
          </p>
        </div>
      </section>
    </>
  );
}
