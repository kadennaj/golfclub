import { createFileRoute } from "@tanstack/react-router";
import { ChevronDown } from "lucide-react";
import { useReveal } from "../hooks/use-reveal";
import { SectionHeading } from "../components/site/SectionHeading";
import { ExperienceTile } from "../components/site/ExperienceTile";
import { HOLES } from "../data/holes";
import rhgcLogo from "../assets/brand/rhgc-logo.png";
import homeHero from "../assets/home-hero-8-006.jpg";
import homeCourse from "../assets/home-course-5-006.jpg";
import eventGolf02 from "../assets/events-real/event-golf-02.jpg";
import eventGolf03 from "../assets/events-real/event-golf-03.jpg";
import eventDinner03 from "../assets/events-real/event-dinner-03.jpg";
import rangeFour from "../assets/academy/range-4.jpg";
import academyBays from "../assets/academy/academy-bays.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    links: [{ rel: "canonical", href: "https://www.richmondhillgolf.com/" }],
  }),
  component: HomePage,
});

function HomePage() {
  useReveal();
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[100svh] overflow-hidden bg-charcoal text-cream">
        <img
          src={homeHero}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover object-[52%_50%]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/0 to-black/55" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/12 to-black/5" />
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-charcoal/65 to-transparent" />

        <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-[1480px] flex-col justify-end px-5 pb-24 pt-32 md:px-10 md:pb-28">
          <h1 className="sr-only">Richmond Hill Golf Club</h1>
          <div className="max-w-md border-l border-cream/25 pl-6">
            <img
              src={rhgcLogo}
              alt="Richmond Hill Golf Club"
              className="reveal w-44 object-contain brightness-0 invert drop-shadow-[0_14px_34px_rgba(0,0,0,0.5)] md:w-56"
            />
            <p className="reveal mt-5 max-w-xs text-xs uppercase tracking-[0.32em] text-cream/90">
              Welcome to Richmond Hill Golf Club
            </p>
          </div>
        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center text-cream/60">
          <div className="kicker text-[0.6rem] mb-2">Scroll</div>
          <ChevronDown className="h-4 w-4 scroll-hint" />
        </div>
      </section>

      {/* EXPERIENCE GRID */}
      <section className="bg-cream pb-28 md:pb-40">
        <div className="mx-auto max-w-[1480px] px-5 md:px-10">
          <SectionHeading
            kicker="The Experience"
            title="Pick your pace."
            intro="Choose where you want to go next."
            className="mb-20 md:mb-28"
          />
          <div className="space-y-24 md:space-y-36">
            <ExperienceTile
              index="01"
              kicker="The Course"
              title="Championship Golf in the heart of the GTA."
              body="Three tee decks, 18 challenging holes suitable for all skill levels."
              image={homeCourse}
              to="/golf"
            />
            <ExperienceTile
              index="02"
              kicker="Golf Academy"
              title="Our Team is here to make you better."
              body="Private lessons, clinics."
              image={rangeFour}
              to="/academy"
              reverse
            />
            <ExperienceTile
              index="03"
              kicker="Events"
              title="Tournaments are what we do best."
              body="Corporate days, charity events & small group outings, all with top notch service."
              image={eventGolf02}
              to="/events"
            />
            <ExperienceTile
              index="04"
              kicker="Dining"
              title="The 19th Hole and patios."
              body="A relaxed clubhouse stop for meals, drinks and the easy finish after golf."
              image={eventDinner03}
              to="/dining"
              reverse
            />
            <ExperienceTile
              index="05"
              kicker="Practice Facilities"
              title="Range, short game and simulator work."
              body="Outdoor turf, sheltered hitting stations, short-game areas and three GC Hawk bays."
              image={academyBays}
              to="/practice-facilities"
            />
            <ExperienceTile
              index="06"
              kicker="League"
              title="Weekly competition, season-long stories."
              body="Men's League and Women in Golf bring prizes, scoring and community to the season."
              image={eventGolf03}
              to="/league"
              reverse
            />
            <ExperienceTile
              index="07"
              kicker="Elite Prepaid Membership"
              title="Public golf with private-club privileges."
              body="A prepaid account with meaningful member perks, advanced booking and golf discounts."
              image={HOLES[9].image}
              to="/elite-prepaid-membership"
            />
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative h-[80svh] min-h-[560px] overflow-hidden bg-charcoal text-cream">
        <img
          src={HOLES[17].image}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/30 to-black/70" />
        <div className="absolute inset-0 soft-vignette opacity-40 mix-blend-screen" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-5">
          <div className="reveal kicker text-gold mb-6">Reserve Your Round</div>
          <h2 className="reveal font-serif text-5xl md:text-7xl lg:text-8xl leading-[1] max-w-[20ch] text-balance">
            The fairway is waiting.
          </h2>
          <a
            href="https://richmond-hill-golf.book.teeitup.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="reveal mt-12 inline-flex cursor-pointer items-center gap-3 bg-cream text-charcoal px-8 py-4 text-xs tracking-[0.24em] uppercase hover:bg-gold transition-colors"
          >
            Book Tee Time
          </a>
        </div>
      </section>
    </>
  );
}
