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
      { title: "Events & Weddings — Richmond Hill Golf Club" },
      { name: "description", content: "Weddings, corporate retreats and tournaments hosted in the pavilion at Richmond Hill Golf Club." },
      { property: "og:title", content: "Events & Weddings — Richmond Hill Golf Club" },
      { property: "og:description", content: "A pavilion designed for the most cinematic light of the day." },
    ],
  }),
  component: EventsPage,
});

function EventsPage() {
  useReveal();
  return (
    <>
      <PageHero
        kicker="Events & Weddings"
        title="A pavilion built for golden hour."
        intro="Up to 220 guests across pavilion, terrace and the 9th-fairway lawn. Weddings, corporate retreats and tournaments — handled with quiet competence."
        videoId="wsBTFZQ2rd0"
        poster={eventsImg}
      />

      <section className="bg-cream py-28 md:py-36">
        <div className="mx-auto max-w-[1480px] px-5 md:px-10 grid gap-16 lg:grid-cols-3">
          {[
            { img: eventsImg, k: "Weddings", t: "Ceremony to last dance.", d: "Indoor and outdoor ceremony sites, sit-down dinners up to 220." },
            { img: tournamentImg, k: "Tournaments", t: "Shotgun, scramble or stroke.", d: "From foursomes to full corporate days. Caddies, scoring, hospitality." },
            { img: diningImg, k: "Corporate", t: "Private dining & boardrooms.", d: "Off-sites, holiday parties and intimate executive dinners." },
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
          <Link to="/contact" className="reveal mt-10 inline-flex items-center px-8 py-4 text-xs tracking-[0.24em] uppercase bg-gold text-charcoal hover:bg-cream transition-colors">
            Begin Planning
          </Link>
        </div>
      </section>
    </>
  );
}
