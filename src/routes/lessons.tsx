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
      { name: "description", content: "PGA instruction, TrackMan simulators and seasonal short-game clinics." },
      { property: "og:title", content: "Academy — Richmond Hill Golf Club" },
      { property: "og:description", content: "Lessons that move your handicap." },
    ],
  }),
  component: LessonsPage,
});

function LessonsPage() {
  useReveal();
  return (
    <>
      <PageHero kicker="Academy" title="Lessons that move your handicap." intro="Private instruction with PGA professionals, TrackMan analysis and clinics for every level." videoId="zkKFWa2x9DI" poster={lessonsImg} />

      <section className="bg-cream py-28 md:py-36">
        <div className="mx-auto max-w-[1480px] px-5 md:px-10 grid gap-16 lg:grid-cols-2">
          {[
            { img: lessonsImg, k: "Private Lessons", t: "One-on-one with a PGA professional.", d: "Hour-long sessions with TrackMan analysis. Junior, beginner and competitive tracks available." },
            { img: simulatorImg, k: "Simulator Bays", t: "Year-round play in the lounge.", d: "Three TrackMan bays with curated whisky service. Book by the hour for foursomes." },
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

      <section className="bg-forest text-cream py-28 md:py-36">
        <div className="mx-auto max-w-[1480px] px-5 md:px-10">
          <SectionHeading tone="dark" kicker="Programs" title="Seasonal clinics, year-round." />
          <div className="mt-12 grid gap-8 md:grid-cols-3 text-cream/80">
            {[["Junior Academy", "Spring + summer programs, ages 7–17."], ["Women's Clinic", "Six-week tracks led by our PGA team."], ["Short Game Lab", "Weekly winter sessions in the simulator lounge."]].map(([t, d]) => (
              <div key={t} className="reveal border-t border-cream/15 pt-6">
                <div className="font-serif text-2xl text-cream">{t}</div>
                <p className="mt-2 text-sm">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
