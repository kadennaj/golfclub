import { createFileRoute, Link } from "@tanstack/react-router";
import { ChevronDown } from "lucide-react";
import { useReveal } from "../hooks/use-reveal";
import { HeroVideo } from "../components/site/HeroVideo";
import { SectionHeading } from "../components/site/SectionHeading";
import { ExperienceTile } from "../components/site/ExperienceTile";
import { HolesCarousel } from "../components/site/HolesCarousel";
import { Stat } from "../components/site/Stat";
import { Testimonials } from "../components/site/Testimonials";

import heroPoster from "../assets/hero-aerial.jpg";
import golfImg from "../assets/golf-green.jpg";
import tournamentImg from "../assets/tournament.jpg";
import lessonsImg from "../assets/lessons.jpg";
import eventsImg from "../assets/events.jpg";
import simulatorImg from "../assets/simulator.jpg";
import diningImg from "../assets/dining.jpg";
import hole1 from "../assets/hole-1.jpg";
import hole2 from "../assets/hole-2.jpg";
import hole3 from "../assets/hole-3.jpg";
import hole4 from "../assets/hole-4.jpg";

export const Route = createFileRoute("/")({
  component: HomePage,
});

const HOLES = [
  { number: "01", par: "4", yardage: "408", name: "Opener", description: "A tough opening hole featuring a sharp dogleg left. An aggressive drive around the corner is rewarded with a short approach to a two-tiered green.", image: hole1 },
  { number: "05", par: "4", yardage: "389", name: "The Carry", description: "Play to the 150 stake for safety, or be aggressive and carry the water on the right. A wide but sharply two-tiered green awaits.", image: hole2 },
  { number: "11", par: "4", yardage: "393", name: "The Chute", description: "A notorious tee shot, steeply downhill through a narrow chute of trees to a small landing area sloping right to left.", image: hole3 },
  { number: "18", par: "5", yardage: "495", name: "The Finish", description: "Rounds are made or ruined here. Choose your 200-yard club off the tee and lay up to 100 for the best chance of par or birdie.", image: hole4 },
];

function HomePage() {
  useReveal();
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[100svh] overflow-hidden bg-charcoal text-cream">
        <HeroVideo videoId="6QR2QCSkXnI" poster={heroPoster} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/25 to-black/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-transparent to-transparent" />

        <div className="relative z-10 mx-auto max-w-[1480px] px-5 md:px-10 min-h-[100svh] flex flex-col justify-end pb-20 md:pb-28 pt-32">
          <div className="reveal kicker text-gold mb-6 flex items-center gap-3">
            <span className="h-px w-10 bg-gold/70" />
            Public Golf Club · Richmond Hill, Ontario
          </div>
          <h1 className="reveal font-serif text-[clamp(3rem,8vw,8rem)] leading-[0.95] max-w-[16ch] text-balance">
            Golf Course
            <br />
            <em className="not-italic text-gold/95">Now Open</em> for the Season.
          </h1>
          <p className="reveal mt-8 max-w-xl text-base md:text-lg text-cream/80 leading-relaxed">
            A fully public 18-hole parkland course minutes from Toronto. Tee
            times, lessons and simulators — all open to everyone, every day.
          </p>
          <div className="reveal mt-10 flex flex-wrap gap-4">
            <a
              href="https://richmond-hill-golf.book.teeitup.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-cream text-charcoal px-7 py-4 text-xs tracking-[0.24em] uppercase hover:bg-gold transition-colors duration-300"
            >
              Book Tee Time
            </a>
            <Link
              to="/golf"
              className="inline-flex items-center gap-3 border border-cream/40 px-7 py-4 text-xs tracking-[0.24em] uppercase hover:bg-cream hover:text-charcoal transition-colors duration-300"
            >
              Tour the Course
            </Link>
          </div>
        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center text-cream/60">
          <div className="kicker text-[0.6rem] mb-2">Scroll</div>
          <ChevronDown className="h-4 w-4 scroll-hint" />
        </div>
      </section>

      {/* BRAND STATEMENT */}
      <section className="bg-cream py-28 md:py-40">
        <div className="mx-auto max-w-[1480px] px-5 md:px-10">
          <div className="reveal kicker text-forest mb-8">A Course For Everyone</div>
          <p className="reveal font-serif text-3xl md:text-5xl lg:text-6xl leading-[1.15] max-w-5xl text-balance text-charcoal">
            Eighteen holes, three tee decks and an open door — Richmond Hill
            Golf Club is a fully public facility where every player, from
            beginner to scratch, is welcome.
          </p>
        </div>
      </section>

      {/* EXPERIENCE GRID */}
      <section className="bg-cream pb-28 md:pb-40">
        <div className="mx-auto max-w-[1480px] px-5 md:px-10">
          <SectionHeading
            kicker="The Experience"
            title="Six ways to spend a day at Richmond Hill."
            intro="An honest round on a parkland course, lessons in our heated indoor academy, simulator bays in the off-season and a clubhouse that serves all of it."
            className="mb-20 md:mb-28"
          />
          <div className="space-y-24 md:space-y-36">
            <ExperienceTile
              index="01"
              kicker="The Course"
              title="Eighteen holes of considered parkland."
              body="A walkable, classically-routed course featuring three tee decks suited to every skill level — narrow holes, several hazards and plenty of opportunities for birdie."
              image={golfImg}
              to="/golf"
            />
            <ExperienceTile
              index="02"
              kicker="Tournaments"
              title="Corporate and charity tournaments, faithfully run."
              body="From foursomes to full shotgun events. Pre-planning, scoring, contest holes, GPS-enabled carts and on-day support from a staff who handle the details for you."
              image={tournamentImg}
              to="/events"
              reverse
            />
            <ExperienceTile
              index="03"
              kicker="Academy"
              title="Lessons that move your handicap."
              body="Private, semi-private, group, junior camps and clinics — year-round, with CPGA professionals and three Foresight Sports GC Hawk simulators."
              image={lessonsImg}
              to="/lessons"
            />
            <ExperienceTile
              index="04"
              kicker="Events & Weddings"
              title="The Richvale Room — up to 200 guests."
              body="A vaulted ceiling, a 60-foot section of windows overlooking the forest and ravine and custom menus for weddings, social functions and corporate meetings."
              image={eventsImg}
              to="/events"
              reverse
            />
            <ExperienceTile
              index="05"
              kicker="Simulators"
              title="Year-round play in the Learning Centre."
              body="Three state-of-the-art Foresight Sports GC Hawk simulators — 10 ft high, 15 ft wide hitting bays. Available all winter and bookable by the hour."
              image={simulatorImg}
              to="/lessons"
            />
            <ExperienceTile
              index="06"
              kicker="Dining"
              title="The 19th Hole Lounge."
              body="A newly renovated lounge seating 40, plus an upper and lower patio overlooking the 18th hole — the perfect spot for a meal and a drink after the round."
              image={diningImg}
              to="/dining"
              reverse
            />
          </div>
        </div>
      </section>

      {/* SIGNATURE HOLES */}
      <section className="relative bg-charcoal text-cream py-28 md:py-40 overflow-hidden">
        <div className="absolute inset-0 opacity-25">
          <HeroVideo videoId="wsBTFZQ2rd0" poster={hole4} />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-charcoal/70 to-charcoal" />
        </div>
        <div className="relative z-10 mx-auto max-w-[1480px] px-5 md:px-10">
          <SectionHeading
            tone="dark"
            kicker="Signature Holes"
            title="Four holes that tell the story of the course."
            intro="From a sharp dogleg opener to a finishing par 5 that has decided more matches than we can count."
            className="mb-16"
          />
        </div>
        <div className="relative z-10 mx-auto max-w-[1480px]">
          <HolesCarousel holes={HOLES} />
        </div>
      </section>

      {/* STATS */}
      <section className="bg-forest-deep text-cream py-8 md:py-16">
        <div className="mx-auto max-w-[1480px] px-5 md:px-10 grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-cream/10">
          <div className="lg:px-10"><Stat kicker="Established" value={1958} label="A heritage of public golf in Richmond Hill" /></div>
          <div className="lg:px-10"><Stat kicker="The Course" value={18} label="Holes · Par 70 · three tee decks" /></div>
          <div className="lg:px-10"><Stat kicker="Pace of Play" value={4} suffix="h 20m" label="Average round across the season" /></div>
          <div className="lg:px-10"><Stat kicker="Booking Window" value={4} suffix=" weeks" label="Advance tee time reservations" /></div>
        </div>
      </section>

      {/* PREPAID ELITE */}
      <section className="bg-charcoal text-cream py-28 md:py-40" id="elite">
        <div className="mx-auto max-w-[1480px] px-5 md:px-10">
          <SectionHeading
            tone="dark"
            kicker="Prepaid Elite Membership"
            title="Convenience and savings, without losing your spot in line."
            intro="Top up an account and draw down for everything at the club — golf, range, proshop, food and beverage. Funds roll over for three years and discounts apply automatically."
            className="mb-16"
          />
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { name: "Silver", price: "Save 15% off green fees", featured: false, items: ["10% off Proshop, F&B and range", "4-week advance booking", "Signing privileges", "Funds roll over 3 years"] },
              { name: "Gold", price: "Save 20% off green fees", featured: true, items: ["10% off Proshop, F&B and range", "4-week advance booking", "Signing privileges", "Funds roll over 3 years"] },
              { name: "Platinum", price: "Save 25% off green fees", featured: false, items: ["10% off Proshop, F&B and range", "4-week advance booking", "Signing privileges", "Funds roll over 3 years"] },
            ].map((t) => (
              <div
                key={t.name}
                className={`reveal glass p-8 md:p-10 flex flex-col ${
                  t.featured ? "border-gold/60 ring-1 ring-gold/30" : ""
                }`}
              >
                {t.featured && <div className="kicker text-gold mb-3">Most Popular</div>}
                <h3 className="font-serif text-3xl md:text-4xl">{t.name}</h3>
                <div className="mt-3 text-cream/60 text-sm tracking-[0.18em] uppercase">{t.price}</div>
                <div className="my-8 hairline text-cream" />
                <ul className="space-y-3 text-sm text-cream/80 flex-1">
                  {t.items.map((it) => (
                    <li key={it} className="flex gap-3">
                      <span className="text-gold mt-1">—</span>
                      {it}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/membership"
                  className={`mt-10 inline-flex items-center justify-center px-6 py-3.5 text-xs tracking-[0.24em] uppercase transition-colors ${
                    t.featured
                      ? "bg-gold text-charcoal hover:bg-cream"
                      : "border border-cream/30 hover:bg-cream hover:text-charcoal"
                  }`}
                >
                  Learn More
                </Link>
              </div>
            ))}
          </div>
          <p className="reveal mt-10 text-center text-cream/55 text-sm max-w-2xl mx-auto">
            The Prepaid Elite program is at capacity for the 2026 season. A
            waiting list will open in the fall for the 2027 season.
          </p>
        </div>
      </section>

      {/* EVENTS & RICHVALE ROOM */}
      <section className="bg-cream py-28 md:py-40">
        <div className="mx-auto max-w-[1480px] px-5 md:px-10 grid gap-12 lg:gap-20 lg:grid-cols-2 items-center">
          <div className="reveal relative aspect-[4/5] overflow-hidden">
            <img src={eventsImg} alt="The Richvale Room at Richmond Hill Golf Club" loading="lazy" className="absolute inset-0 h-full w-full object-cover scale-105 hover:scale-110 transition-transform duration-[1600ms]" />
          </div>
          <div>
            <SectionHeading
              kicker="Weddings & Private Events"
              title="The Richvale Room — vaulted, light-filled, up to 200 guests."
              intro="A 60-foot section of windows overlooks the forest and ravine. Custom menus, audio/visual equipment, dance floor and a partition wall for smaller, more intimate functions."
            />
            <div className="reveal mt-10 grid grid-cols-3 gap-3">
              {[diningImg, eventsImg, tournamentImg].map((src, i) => (
                <div key={i} className="aspect-square overflow-hidden">
                  <img src={src} alt="" loading="lazy" className="h-full w-full object-cover hover:scale-110 transition-transform duration-700" />
                </div>
              ))}
            </div>
            <Link
              to="/events"
              className="reveal mt-10 inline-flex items-center px-7 py-4 text-xs tracking-[0.24em] uppercase bg-forest text-cream hover:bg-charcoal transition-colors"
            >
              Plan Your Event
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-cream py-28 md:py-40">
        <div className="mx-auto max-w-[1480px] px-5 md:px-10">
          <Testimonials />
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative h-[80svh] min-h-[560px] overflow-hidden bg-charcoal text-cream">
        <HeroVideo videoId="nadhgQrHMDc" poster={hole3} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/30 to-black/70" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-5">
          <div className="reveal kicker text-gold mb-6">Reserve Your Round</div>
          <h2 className="reveal font-serif text-5xl md:text-7xl lg:text-8xl leading-[1] max-w-[20ch] text-balance">
            Some mornings ask to be played.
          </h2>
          <a
            href="https://richmond-hill-golf.book.teeitup.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="reveal mt-12 inline-flex items-center gap-3 bg-cream text-charcoal px-8 py-4 text-xs tracking-[0.24em] uppercase hover:bg-gold transition-colors"
          >
            Book Tee Time
          </a>
        </div>
      </section>
    </>
  );
}
