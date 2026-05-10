import { createFileRoute } from "@tanstack/react-router";
import { useReveal } from "../hooks/use-reveal";
import { PageHero } from "../components/site/PageHero";
import { HolesCarousel } from "../components/site/HolesCarousel";
import { SectionHeading } from "../components/site/SectionHeading";
import golfImg from "../assets/golf-green.jpg";
import h1 from "../assets/hole-1.jpg";
import h2 from "../assets/hole-2.jpg";
import h3 from "../assets/hole-3.jpg";
import h4 from "../assets/hole-4.jpg";

export const Route = createFileRoute("/golf")({
  head: () => ({
    meta: [
      { title: "The Course — Richmond Hill Golf Club" },
      { name: "description", content: "Eighteen holes of considered parkland golf, walkable and classically routed since 1958." },
      { property: "og:title", content: "The Course — Richmond Hill Golf Club" },
      { property: "og:description", content: "A heritage parkland course minutes from Toronto." },
    ],
  }),
  component: GolfPage,
});

const HOLES = [
  { number: "04", par: "5", yardage: "548", name: "The Reach", description: "A sweeping dogleg framed by century maples.", image: h1 },
  { number: "07", par: "3", yardage: "186", name: "Glasshouse", description: "Tabletop green guarded by a horseshoe of bunkers.", image: h2 },
  { number: "12", par: "4", yardage: "402", name: "Mill Pond", description: "An island-style approach across glassy water.", image: h3 },
  { number: "16", par: "4", yardage: "421", name: "The Vale", description: "Elevated tee, fog-soft mornings.", image: h4 },
];

function GolfPage() {
  useReveal();
  return (
    <>
      <PageHero
        kicker="The Course"
        title="Eighteen holes, six decades, one quiet obsession."
        intro="A walkable parkland course that rewards thought, conditioning and patience. 6,851 yards from the back tees, par 71."
        videoId="6QR2QCSkXnI"
        poster={golfImg}
      />

      <section className="bg-cream py-28 md:py-36">
        <div className="mx-auto max-w-[1480px] px-5 md:px-10 grid gap-16 lg:grid-cols-3">
          {[
            { k: "Course", t: "Par 71 · 6,851 yd", d: "Five tee sets to fit every player. Walking encouraged, carts available." },
            { k: "Conditioning", t: "Bent grass tee-to-green", d: "Refined annually by a tenured agronomy team. Always tournament-ready." },
            { k: "Pace", t: "4h 15m average round", d: "Marshalled, with a member-first ethos. Honest golf, on a sensible clock." },
          ].map((c) => (
            <div key={c.k} className="reveal">
              <div className="kicker text-forest mb-3">{c.k}</div>
              <div className="font-serif text-3xl md:text-4xl text-charcoal">{c.t}</div>
              <p className="mt-4 text-charcoal/65 leading-relaxed">{c.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-charcoal text-cream py-28 md:py-36">
        <div className="mx-auto max-w-[1480px] px-5 md:px-10 mb-16">
          <SectionHeading tone="dark" kicker="Signature Holes" title="Holes that ask for your best."/>
        </div>
        <div className="mx-auto max-w-[1480px]">
          <HolesCarousel holes={HOLES} />
        </div>
      </section>

      <section className="bg-forest text-cream py-28 md:py-36">
        <div className="mx-auto max-w-[1480px] px-5 md:px-10 text-center">
          <h2 className="reveal font-serif text-4xl md:text-6xl max-w-3xl mx-auto text-balance">
            Reserve a tee time. Bring two friends.
          </h2>
          <a
            href="#"
            className="reveal mt-10 inline-flex items-center px-8 py-4 text-xs tracking-[0.24em] uppercase bg-cream text-charcoal hover:bg-gold transition-colors"
          >
            Book Tee Time
          </a>
        </div>
      </section>
    </>
  );
}
