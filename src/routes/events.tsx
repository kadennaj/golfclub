import { createFileRoute, Link } from "@tanstack/react-router";
import { useReveal } from "../hooks/use-reveal";
import { PageHero } from "../components/site/PageHero";
import { SectionHeading } from "../components/site/SectionHeading";
import eventGolf01 from "../assets/events-real/event-golf-01.jpg";
import eventGolf02 from "../assets/events-real/event-golf-02.jpg";
import eventGolf03 from "../assets/events-real/event-golf-03.jpg";
import eventGolf04 from "../assets/events-real/event-golf-04.jpg";
import eventDinner01 from "../assets/events-real/event-dinner-01.jpg";
import eventDinner02 from "../assets/events-real/event-dinner-02.jpg";
import eventDinner03 from "../assets/events-real/event-dinner-03.jpg";
import eventDinner04 from "../assets/events-real/event-dinner-04.jpg";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: "Tournaments & The Richvale Room — Richmond Hill Golf Club" },
      { name: "description", content: "Corporate tournaments, charity events, weddings and meetings hosted at the Richvale Room — up to 200 guests, in Richmond Hill, Ontario." },
      { property: "og:title", content: "Events & Tournaments — Richmond Hill Golf Club" },
      { property: "og:description", content: "A unique set of services and amenities for corporate, charity and social events." },
    ],
  }),
  component: EventsPage,
});

function EventsPage() {
  useReveal();
  return (
    <>
      <PageHero
        kicker="Events & Dining"
        title="Tournament days. Dinner nights. Celebrations."
        intro="Real hospitality, from the first tee to the final toast."
        poster={eventGolf01}
      />

      {/* Stats strip */}
      <section className="bg-charcoal text-cream py-16">
        <div className="mx-auto max-w-[1480px] px-5 md:px-10 grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          {[
            ["18", "Championship Holes"],
            ["Up to 144", "Tournament Golfers"],
            ["Up to 200", "Banquet Guests"],
          ].map(([n, l]) => (
            <div key={l} className="reveal">
              <div className="font-serif text-5xl md:text-6xl text-gold">{n}</div>
              <div className="kicker text-cream/70 mt-3">{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* How we help */}
      <section className="bg-cream py-28 md:py-36">
        <div className="mx-auto max-w-[1480px] px-5 md:px-10">
          <SectionHeading kicker="Our Staff Are Here To Help" title="From first call to follow-up." intro="Planning stays simple, service stays close, and the room feels ready when guests arrive." className="mb-14" />
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            {[
              ["Pre-Planning", "Choose the date, format, room setup and menu with a team that knows the flow."],
              ["Tournament Golf", "Bag drop, scoring, contests, carts, sponsor signs and guest movement handled cleanly."],
              ["Dining", "The 19th Hole, patios and Richvale Room support everything from lunches to banquets."],
              ["Event Day", "Staff stay close so your guests can settle in and enjoy the day."],
            ].map(([t, d]) => (
              <div key={t} className="reveal border-t border-charcoal/15 pt-6">
                <div className="kicker text-forest mb-3">{t}</div>
                <p className="text-charcoal/70 leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Combined offerings */}
      <section className="bg-cream pb-28 md:pb-36">
        <div className="mx-auto max-w-[1480px] px-5 md:px-10 grid gap-16 lg:grid-cols-4">
          {[
            { img: eventGolf02, k: "Tournaments", t: "Shotgun, scramble or stroke.", d: "A smooth tournament day with scoring, contests, carts, sponsor signs and hospitality." },
            { img: eventDinner01, k: "The Richvale Room", t: "Up to 200 guests.", d: "A vaulted, light-filled room for weddings, banquets, meetings and private celebrations." },
            { img: eventDinner03, k: "Dining", t: "The 19th Hole and patios.", d: "A relaxed post-round setting for meals, drinks and smaller group gatherings." },
            { img: eventGolf04, k: "Corporate", t: "Golf, food and off-sites.", d: "Boardroom-scale lunches or full company days paired with the course and clubhouse." },
          ].map((c) => (
            <div key={c.k} className="reveal group">
              <div className="aspect-[4/5] overflow-hidden mb-6">
                <img src={c.img} alt={c.t} loading="lazy" className="h-full w-full object-cover scale-105 group-hover:scale-110 transition-transform duration-[1400ms]" />
              </div>
              <div className="kicker text-forest mb-3">{c.k}</div>
              <h3 className="font-serif text-3xl text-charcoal">{c.t}</h3>
              <p className="mt-3 text-charcoal/65 leading-relaxed">{c.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-cream pb-28 md:pb-36">
        <div className="mx-auto grid max-w-[1480px] gap-4 px-5 md:grid-cols-4 md:px-10">
          {[eventGolf03, eventDinner02, eventGolf01, eventDinner04].map((src, i) => (
            <div key={src} className={`reveal overflow-hidden image-polish ${i % 2 ? "md:mt-12" : ""}`}>
              <img src={src} alt="" loading="lazy" className="aspect-[4/5] h-full w-full object-cover transition-transform duration-[1200ms] hover:scale-105" />
            </div>
          ))}
        </div>
      </section>

      <section className="bg-charcoal text-cream py-28 md:py-36">
        <div className="mx-auto max-w-[1480px] px-5 md:px-10 text-center">
          <SectionHeading tone="dark" align="center" kicker="Plan With Us" title="Every event begins with a conversation." className="mx-auto" />
          <p className="reveal mt-6 text-cream/65 max-w-xl mx-auto">
            Contact our Event Manager directly: <a className="text-gold hover:text-cream transition-colors" href="mailto:lbodanis@richmondhillgolf.com">lbodanis@richmondhillgolf.com</a>
          </p>
          <Link to="/contact" className="reveal mt-10 inline-flex items-center px-8 py-4 text-xs tracking-[0.24em] uppercase bg-gold text-charcoal hover:bg-cream transition-colors">
            Begin Planning
          </Link>
        </div>
      </section>
    </>
  );
}
