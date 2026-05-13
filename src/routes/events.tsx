import { createFileRoute, Link } from "@tanstack/react-router";
import { useReveal } from "../hooks/use-reveal";
import { PageHero } from "../components/site/PageHero";
import { SectionHeading } from "../components/site/SectionHeading";
import eventsImg from "../assets/events.jpg";
import diningImg from "../assets/dining.jpg";
import tournamentImg from "../assets/tournament.jpg";

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
        kicker="Events & Tournaments"
        title="Inquire about your 2026 event now."
        intro="The Richmond Hill Golf Club offers a unique set of services and amenities — making it an ideal choice for your corporate or charitable event."
        videoId="wsBTFZQ2rd0"
        poster={eventsImg}
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
          <SectionHeading kicker="Our Staff Are Here To Help" title="From first call to follow-up." className="mb-14" />
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            {[
              ["Pre-Planning", "We help you find your ideal tournament date and plan the type and scale of event that's right for you."],
              ["Details", "We guide you through choosing golf formats, logo merchandise, hole-in-one contests, food and beverage options and more."],
              ["Event Day", "Our staff will be at your side all day ensuring everything runs smoothly and your guests are happy."],
              ["Follow Up", "We talk with you after your event to gather feedback and help plan your next one."],
            ].map(([t, d]) => (
              <div key={t} className="reveal border-t border-charcoal/15 pt-6">
                <div className="kicker text-forest mb-3">{t}</div>
                <p className="text-charcoal/70 leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Three offerings */}
      <section className="bg-cream pb-28 md:pb-36">
        <div className="mx-auto max-w-[1480px] px-5 md:px-10 grid gap-16 lg:grid-cols-3">
          {[
            { img: tournamentImg, k: "Tournaments", t: "Shotgun, scramble or stroke.", d: "Bag drop, custom yardage guides, scoring & contest hole set-up, GPS-enabled cart fleet, sponsor signs and full-service hospitality." },
            { img: eventsImg, k: "The Richvale Room", t: "Up to 200 guests in vaulted, light-filled space.", d: "60-foot section of windows overlooking forest and ravine. Custom menus, audio/visual, dance floor and a partition wall for smaller functions." },
            { img: diningImg, k: "Corporate", t: "Meetings, off-sites and holiday parties.", d: "From boardroom-scale lunches to full company days — paired with golf, simulator bays or just the patio overlooking the 18th." },
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
