import { createFileRoute } from "@tanstack/react-router";
import { useReveal } from "../hooks/use-reveal";
import { PageHero } from "../components/site/PageHero";
import { HolesCarousel } from "../components/site/HolesCarousel";
import { SectionHeading } from "../components/site/SectionHeading";
import { HOLES, hole08 } from "../data/holes";

export const Route = createFileRoute("/golf")({
  head: () => ({
    meta: [
      { title: "The Course — Richmond Hill Golf Club" },
      {
        name: "description",
        content:
          "Eighteen holes of public parkland golf in Richmond Hill, Ontario. Three tee decks, par 70, brand new 2026 EZ-GO electric cart fleet.",
      },
      { property: "og:title", content: "The Course — Richmond Hill Golf Club" },
      {
        property: "og:description",
        content: "A walkable parkland course open to the public — 18 holes, par 70.",
      },
    ],
    links: [{ rel: "canonical", href: "https://www.richmondhillgolf.com/golf" }],
  }),
  component: GolfPage,
});

function GolfPage() {
  useReveal();
  return (
    <>
      <PageHero
        kicker="The Course"
        title="Eighteen holes of public parkland golf."
        intro="A walkable course with three tee decks, par 70 — challenging for advanced players and friendly for beginners. Open to everyone, seven days a week."
        poster={hole08}
      />

      <section className="bg-cream py-28 md:py-36">
        <div className="mx-auto max-w-[1480px] px-5 md:px-10 grid gap-16 lg:grid-cols-3">
          {[
            {
              k: "Course",
              t: "Par 70 · 18 Holes",
              d: "Three tee decks suited to every skill level. Walking encouraged with a $12 walk credit; pull cart included.",
            },
            {
              k: "New for 2026",
              t: "EZ-GO Electric Carts",
              d: "Brand new lithium-powered EZ-GO ELiTE RXV 2 fleet — quieter, smoother and more eco-friendly than the previous gas models.",
            },
            {
              k: "Pace of Play",
              t: "4h 20m average",
              d: "Generous tee-time intervals mean less traffic on the course and an unhurried round, even on a busy weekend.",
            },
          ].map((c) => (
            <div key={c.k} className="reveal">
              <div className="kicker text-forest mb-3">{c.k}</div>
              <div className="font-serif text-3xl md:text-4xl text-charcoal">{c.t}</div>
              <p className="mt-4 text-charcoal/65 leading-relaxed">{c.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-cream pb-28 md:pb-36">
        <div className="mx-auto max-w-[1480px] px-5 md:px-10">
          <div className="reveal grid gap-10 border-y border-charcoal/15 py-10 md:grid-cols-[0.8fr_1fr_auto] md:items-center">
            <div>
              <div className="kicker text-forest mb-3">Scorecard</div>
              <h2 className="font-serif text-4xl text-charcoal md:text-5xl">
                Take the card with you.
              </h2>
            </div>
            <p className="max-w-2xl text-charcoal/65 leading-relaxed">
              Open the Richmond Hill Golf Club scorecard as a PDF before your round.
            </p>
            <a
              href="/docs/rhgc-scorecard.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex justify-center bg-forest px-7 py-4 text-xs uppercase tracking-[0.24em] text-cream transition-colors hover:bg-charcoal"
            >
              View Scorecard
            </a>
          </div>
        </div>
      </section>

      <section className="bg-charcoal text-cream py-28 md:py-36">
        <div className="mx-auto max-w-[1480px] px-5 md:px-10 mb-16">
          <SectionHeading
            tone="dark"
            kicker="Hole-by-Hole"
            title="A walk through all eighteen."
            intro="Every hole on the course — par, yardage, handicap and a note on how to play it."
          />
        </div>
        <div className="mx-auto max-w-[1480px]">
          <HolesCarousel holes={HOLES} />
        </div>
      </section>

      <section className="bg-cream py-28 md:py-36">
        <div className="mx-auto max-w-[1480px] px-5 md:px-10">
          <SectionHeading
            kicker="2026 Green Fees"
            title="Three seasons, fair rates, cart included."
            intro="All posted rates include a shared power cart. A $10–$12 walk credit is available for those who prefer to walk (pull cart included). Rates exclude HST."
            className="mb-14"
          />
          <div className="grid gap-10 lg:grid-cols-3">
            {[
              {
                k: "Spring",
                sub: "Opening Day to May 15",
                rows: [
                  ["Regular", "$105"],
                  ["Twilight", "$85"],
                  ["Late Twilight", "$75"],
                  ["Senior", "$95"],
                  ["10 Hole", "$85"],
                ],
              },
              {
                k: "In-Season",
                sub: "May 16 to September 27",
                rows: [
                  ["Regular", "$127"],
                  ["Weekend after 12 PM", "$107"],
                  ["Weekday after 3 PM", "$107"],
                  ["Twilight", "$87"],
                  ["Early Bird", "$107"],
                  ["Senior", "$97"],
                  ["10 Hole", "$87"],
                ],
              },
              {
                k: "Fall",
                sub: "September 28 to Closing Day",
                rows: [
                  ["Regular", "$107"],
                  ["Twilight", "$87"],
                  ["Late Twilight", "$77"],
                  ["Senior", "$97"],
                  ["10 Hole", "$87"],
                ],
              },
            ].map((tab) => (
              <div key={tab.k} className="reveal border-t border-charcoal/15 pt-6">
                <div className="kicker text-forest mb-2">{tab.k}</div>
                <div className="font-serif text-2xl text-charcoal">{tab.sub}</div>
                <ul className="mt-6 space-y-2 text-sm text-charcoal/75">
                  {tab.rows.map(([l, p]) => (
                    <li key={l} className="flex justify-between border-b border-charcoal/10 py-2">
                      <span>{l}</span>
                      <span className="font-medium text-charcoal">{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="reveal mt-10 text-charcoal/55 text-sm max-w-3xl">
            Senior rates available Monday–Thursday before 11 AM (65+). Early Bird available
            Monday–Thursday before 9 AM. 10-Hole rate available same-day only. Junior players (16
            &amp; under) play free on weekends after 5 PM with a paying adult.
          </p>
        </div>
      </section>

      <section className="bg-forest text-cream py-28 md:py-36">
        <div className="mx-auto max-w-[1480px] px-5 md:px-10 text-center">
          <h2 className="reveal font-serif text-4xl md:text-6xl max-w-3xl mx-auto text-balance">
            Reserve a tee time. Bring two friends.
          </h2>
          <a
            href="https://richmond-hill-golf.book.teeitup.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="reveal mt-10 inline-flex items-center px-8 py-4 text-xs tracking-[0.24em] uppercase bg-cream text-charcoal hover:bg-gold transition-colors"
          >
            Book Tee Time
          </a>
        </div>
      </section>
    </>
  );
}
