import { createFileRoute } from "@tanstack/react-router";
import { useReveal } from "../hooks/use-reveal";
import { PageHero } from "../components/site/PageHero";
import { SectionHeading } from "../components/site/SectionHeading";
import eventGolf03 from "../assets/events-real/event-golf-03.jpg";
import eventDinner02 from "../assets/events-real/event-dinner-02.jpg";
import { HOLES } from "../data/holes";

export const Route = createFileRoute("/league")({
  head: () => ({
    meta: [
      { title: "League — Richmond Hill Golf Club" },
      {
        name: "description",
        content: "Men's League and Women in Golf league information at Richmond Hill Golf Club.",
      },
      { property: "og:title", content: "League — Richmond Hill Golf Club" },
      {
        property: "og:description",
        content:
          "Weekly league golf, season-long points races, prizes, banquets and Golf Genius scoring.",
      },
    ],
    links: [{ rel: "canonical", href: "https://www.richmondhillgolf.com/league" }],
  }),
  component: LeaguePage,
});

function LeaguePage() {
  useReveal();
  return (
    <>
      <PageHero
        kicker="League"
        title="Weekly golf, season-long stories."
        intro="Men's League and Women in Golf bring friendly competition, scoring, prizes and clubhouse energy to the season."
        poster={eventGolf03}
      />

      <section className="bg-charcoal text-cream py-16">
        <div className="mx-auto grid max-w-[1480px] gap-10 px-5 text-center md:grid-cols-3 md:px-10">
          {[
            ["Mondays", "Men's League"],
            ["Tuesdays", "Women in Golf"],
            ["2026", "Rosters Full"],
          ].map(([n, l]) => (
            <div key={l} className="reveal">
              <div className="font-serif text-5xl text-gold md:text-6xl">{n}</div>
              <div className="kicker mt-3 text-cream/70">{l}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-cream py-28 md:py-36">
        <div className="mx-auto grid max-w-[1480px] gap-16 px-5 md:px-10 lg:grid-cols-2">
          {[
            {
              kicker: "Men's League",
              title: "Monday competition from May through September.",
              body: "Tee times run before 9:00 AM and between 1:30 PM and 5:30 PM at special league rates. Annual registration includes a welcome gift, drink nights, weekly prizes, opening BBQ, end-of-season banquet dinner and Golf Genius scoring.",
              note: "The season-long points race qualifies the top 12 players for the 3 Buck Cup, a 27-hole Ryder Cup style match against RHGC staff.",
            },
            {
              kicker: "Women in Golf",
              title: "A welcoming Tuesday league for women golfers.",
              body: "Women in Golf has been part of Richmond Hill Golf Club for over 25 years, growing from a 1997 Tuesday evening group into a 200-player community for all ages and skill levels.",
              note: "Weekly Tuesday tee times run from 7 AM to 12 PM and 3 PM to 6:30 PM, with special league rates, F&B discounts, prizes and Golf Genius competitions.",
            },
          ].map((card) => (
            <div key={card.kicker} className="reveal border-t border-charcoal/15 pt-8">
              <div className="kicker text-forest mb-4">{card.kicker}</div>
              <h2 className="font-serif text-4xl text-charcoal md:text-5xl">{card.title}</h2>
              <p className="mt-6 text-charcoal/68 leading-relaxed">{card.body}</p>
              <p className="mt-5 text-charcoal/58 leading-relaxed">{card.note}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-cream pb-28 md:pb-36">
        <div className="mx-auto grid max-w-[1480px] gap-4 px-5 md:grid-cols-3 md:px-10">
          {[eventGolf03, HOLES[5].image, eventDinner02].map((src, index) => (
            <div
              key={src}
              className={`reveal overflow-hidden image-polish ${index === 1 ? "md:mt-14" : ""}`}
            >
              <img
                src={src}
                alt=""
                loading="lazy"
                className="aspect-[4/5] h-full w-full object-cover transition-transform duration-[1200ms] hover:scale-105"
              />
            </div>
          ))}
        </div>
      </section>

      <section className="bg-charcoal text-cream py-28 md:py-36">
        <div className="mx-auto max-w-[1480px] px-5 md:px-10">
          <SectionHeading
            tone="dark"
            kicker="League Features"
            title="Built for friendly competition."
            intro="Each league balances structure, prizes and community so the weekly game feels easy to join and worth returning to."
            className="mb-14"
          />
          <div className="grid gap-8 md:grid-cols-4">
            {["Fun and competitive", "Points race", "Live scoring", "Banquets and lounge"].map(
              (item) => (
                <div key={item} className="reveal border-t border-cream/15 pt-6">
                  <div className="font-serif text-2xl">{item}</div>
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      <section className="bg-cream py-28 md:py-36">
        <div className="mx-auto grid max-w-[1480px] gap-14 px-5 md:px-10 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <div className="kicker text-forest mb-4">Policies</div>
            <h2 className="font-serif text-4xl text-charcoal md:text-5xl">
              Booking and rain checks.
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {[
              [
                "Booking",
                "League tee times may be booked up to 4 weeks in advance through the online booking platform starting at 7 AM.",
              ],
              ["Cancellation", "A 48-hour cancellation policy applies to league tee times."],
              [
                "Rain Checks",
                "Less than 3 holes played receives 100%; 3 to 7 holes receives 50%; after teeing off on 8, rain checks are not issued.",
              ],
              [
                "Validity",
                "Rain checks issued before September 1 expire at season end. Rain checks issued after September 1 expire June 30 the next season.",
              ],
            ].map(([title, body]) => (
              <div key={title} className="reveal border-t border-charcoal/15 pt-5">
                <div className="kicker text-forest mb-3">{title}</div>
                <p className="text-charcoal/68 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-forest text-cream py-24 md:py-32">
        <div className="mx-auto max-w-[1480px] px-5 md:px-10">
          <div className="reveal kicker text-gold mb-4">League Contact</div>
          <h2 className="reveal font-serif text-4xl md:text-6xl">Joel Rodgers</h2>
          <div className="reveal mt-5 flex flex-wrap gap-x-6 gap-y-3 text-cream/72">
            <a href="mailto:jrodgers@richmondhillgolf.com" className="hover:text-gold">
              jrodgers@richmondhillgolf.com
            </a>
            <a href="tel:9058894653412" className="hover:text-gold">
              (905) 889-4653 Ext. 412
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
