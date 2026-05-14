import { createFileRoute } from "@tanstack/react-router";
import { useReveal } from "../hooks/use-reveal";
import { PageHero } from "../components/site/PageHero";
import { SectionHeading } from "../components/site/SectionHeading";
import lessonsImg from "../assets/lessons.jpg";
import simulatorImg from "../assets/simulator.jpg";

export const Route = createFileRoute("/lessons")({
  head: () => ({
    meta: [
      { title: "Academy & Simulators — Richmond Hill Golf Club" },
      { name: "description", content: "CPGA instruction, three Foresight Sports GC Hawk simulators and seasonal clinics at the Richmond Hill Golf Academy." },
      { property: "og:title", content: "Academy — Richmond Hill Golf Club" },
      { property: "og:description", content: "Get your game in shape — private, semi-private, group and junior lessons, year-round." },
    ],
  }),
  component: LessonsPage,
});

const TEAM = [
  { name: "Donna Norman", role: "Academy Director", email: "dnorman@richmondhillgolf.com" },
  { name: "Allen Panuncio", role: "Senior Instructor & Clubfitting Specialist", email: "apanuncio@richmondhillgolf.com" },
  { name: "Rob Miceli", role: "Senior Instructor", email: "rmiceli@richmondhillgolf.com" },
  { name: "Cory Southon", role: "Senior Instructor", email: "csouthon@richmondhillgolf.com" },
  { name: "Aileen Robertson", role: "Senior Instructor", email: "arobertson@richmondhillgolf.com" },
  { name: "Paul Davies", role: "Head Professional", email: "pdavies@richmondhillgolf.com" },
];

function LessonsPage() {
  useReveal();
  return (
    <>
      <PageHero
        kicker="Academy"
        title="Get your game in shape for the new season."
        intro="The Richmond Hill Golf Academy offers private, semi-private, on-course, group, junior camps, clinics and corporate outings — all available year-round."
        videoSrc="/videos/hole-13.mp4"
        poster={lessonsImg}
      />

      <section className="bg-cream py-28 md:py-36">
        <div className="mx-auto max-w-[1480px] px-5 md:px-10 grid gap-16 lg:grid-cols-2">
          {[
            { img: lessonsImg, k: "Private Lessons", t: "One-on-one with a CPGA professional.", d: "Half-hour and one-hour sessions, with multi-lesson packages. Junior, beginner and competitive tracks. Bookings via uSchedule or call (905) 889-4653 ext.448." },
            { img: simulatorImg, k: "Simulator Bays", t: "Three Foresight Sports GC Hawks.", d: "Each hitting bay is 10 ft high and 15 ft wide for a fully immersive experience. Available all winter, bookable hourly for foursomes." },
          ].map((c) => (
            <div key={c.k} className="reveal group">
              <div className="aspect-[4/3] overflow-hidden mb-6">
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
        <div className="mx-auto max-w-[1480px] px-5 md:px-10">
          <SectionHeading tone="dark" kicker="Academy Features" title="Built for year-round practice." />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4 text-cream/80">
            {[
              "Sheltered outdoor hitting stations",
              "Indoor and outdoor putting green",
              "Practice bunker",
              "1,500 sq ft heated indoor facility",
              "Demos and custom clubfitting",
              "3 Foresight Sports GC Hawk simulators",
              "Training aids and video feedback",
              "On-course lessons",
            ].map((t) => (
              <div key={t} className="reveal border-t border-cream/15 pt-6">
                <div className="font-serif text-xl text-cream">{t}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream py-28 md:py-36">
        <div className="mx-auto max-w-[1480px] px-5 md:px-10">
          <SectionHeading kicker="The Team" title="CPGA professionals, every learning style." intro="For general inquiries: academy@richmondhillgolf.com" className="mb-14" />
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {TEAM.map((m) => (
              <div key={m.email} className="reveal border-t border-charcoal/15 pt-6">
                <div className="font-serif text-2xl text-charcoal">{m.name}</div>
                <div className="kicker text-forest mt-2">{m.role}</div>
                <a href={`mailto:${m.email}`} className="mt-3 inline-block text-sm text-charcoal/65 hover:text-forest transition-colors">{m.email}</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-forest text-cream py-28 md:py-36">
        <div className="mx-auto max-w-[1480px] px-5 md:px-10">
          <SectionHeading tone="dark" kicker="2026 Lesson Rates" title="Spring/summer pricing." />
          <div className="mt-12 grid gap-10 md:grid-cols-3 text-cream/85">
            {[
              { t: "Adult ½ Hour", p: "$80", note: "6-pack $450 · 12-pack $840" },
              { t: "Adult 1 Hour", p: "$145", note: "6-pack $810 · 12-pack $1,500 · 24-pack $2,880" },
              { t: "Junior 1 Hour", p: "$125", note: "Ages 18 & under · 6-pack $690 · 12-pack $1,260" },
              { t: "Semi-Private (2:1)", p: "$85 / person", note: "1 hour · 6-pack $480" },
              { t: "Small Group (3:1)", p: "$65 / person", note: "1 hour · 6-pack $360" },
              { t: "Junior Group (3:1)", p: "$55 / person", note: "1 hour · 6-pack $300" },
            ].map((r) => (
              <div key={r.t} className="reveal border-t border-cream/15 pt-6">
                <div className="kicker text-gold mb-2">{r.t}</div>
                <div className="font-serif text-3xl">{r.p}</div>
                <p className="mt-2 text-sm text-cream/70">{r.note}</p>
              </div>
            ))}
          </div>
          <p className="reveal mt-10 text-cream/55 text-sm max-w-2xl">
            All lesson packages are non-refundable but have no expiry date. HST excluded. We do not accept cash. To book: <a className="text-gold hover:text-cream transition-colors" href="https://clients.uschedule.com/richmondhillgolf/booking" target="_blank" rel="noopener noreferrer">book online</a> or call (905) 889-4653 ext.448.
          </p>
        </div>
      </section>
    </>
  );
}
