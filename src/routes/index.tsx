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
  { number: "04", par: "5", yardage: "548", name: "The Reach", description: "A sweeping dogleg framed by century maples; risk-reward at every yard.", image: hole1 },
  { number: "07", par: "3", yardage: "186", name: "Glasshouse", description: "Tabletop green guarded by a horseshoe of bunkers — placement over power.", image: hole2 },
  { number: "12", par: "4", yardage: "402", name: "Mill Pond", description: "An island-style approach across glassy water at the fold of the property.", image: hole3 },
  { number: "16", par: "4", yardage: "421", name: "The Vale", description: "Elevated tee, fog-soft mornings, the most photographed hole on property.", image: hole4 },
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
            Established 1958 · Richmond Hill, Ontario
          </div>
          <h1 className="reveal font-serif text-[clamp(3rem,8vw,8rem)] leading-[0.95] max-w-[16ch] text-balance">
            Toronto's premier
            <br />
            <em className="not-italic text-gold/95">public golf</em> experience.
          </h1>
          <p className="reveal mt-8 max-w-xl text-base md:text-lg text-cream/80 leading-relaxed">
            A heritage parkland course, an unhurried clubhouse and a modern membership —
            shaped by sixty years of quiet refinement.
          </p>
          <div className="reveal mt-10 flex flex-wrap gap-4">
            <a
              href="#book"
              className="inline-flex items-center gap-3 bg-cream text-charcoal px-7 py-4 text-xs tracking-[0.24em] uppercase hover:bg-gold transition-colors duration-300"
            >
              Book Tee Time
            </a>
            <Link
              to="/membership"
              className="inline-flex items-center gap-3 border border-cream/40 px-7 py-4 text-xs tracking-[0.24em] uppercase hover:bg-cream hover:text-charcoal transition-colors duration-300"
            >
              Explore Membership
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
          <div className="reveal kicker text-forest mb-8">A Course With Memory</div>
          <p className="reveal font-serif text-3xl md:text-5xl lg:text-6xl leading-[1.15] max-w-5xl text-balance text-charcoal">
            Six decades of fairways carved through mature parkland, finished with a
            clubhouse that knows your name and a round that asks for your best.
          </p>
        </div>
      </section>

      {/* EXPERIENCE GRID */}
      <section className="bg-cream pb-28 md:pb-40">
        <div className="mx-auto max-w-[1480px] px-5 md:px-10">
          <SectionHeading
            kicker="The Experience"
            title="Six ways to spend a day at Richmond Hill."
            intro="From an honest round on a heritage course to a private tasting in the clubhouse, every visit is shaped around the unhurried rituals of the game."
            className="mb-20 md:mb-28"
          />
          <div className="space-y-24 md:space-y-36">
            <ExperienceTile
              index="01"
              kicker="The Course"
              title="Eighteen holes of considered parkland."
              body="A walkable, classically-routed course through mature trees and gentle elevation — refined annually by the grounds team without losing its 1958 character."
              image={golfImg}
              to="/golf"
            />
            <ExperienceTile
              index="02"
              kicker="Tournaments"
              title="Corporate tournaments, faithfully run."
              body="From foursomes to full shotgun events. We handle the logistics so you can focus on hosting — caddies, scoring, hospitality, the full programme."
              image={tournamentImg}
              to="/events"
              reverse
            />
            <ExperienceTile
              index="03"
              kicker="Academy"
              title="Lessons that move your handicap."
              body="Private instruction with PGA professionals using TrackMan analysis and seasonal short-game clinics for every level of player."
              image={lessonsImg}
              to="/lessons"
            />
            <ExperienceTile
              index="04"
              kicker="Events & Weddings"
              title="A pavilion built for golden hour."
              body="Floor-to-ceiling glass, panoramic 9th-fairway views and a culinary team that's quietly become one of York Region's best-kept secrets."
              image={eventsImg}
              to="/events"
              reverse
            />
            <ExperienceTile
              index="05"
              kicker="Simulators"
              title="Year-round play in the lounge."
              body="State-of-the-art TrackMan simulators with curated whisky service. Practice in January like it's July — and book the bay for your foursome."
              image={simulatorImg}
              to="/lessons"
            />
            <ExperienceTile
              index="06"
              kicker="Dining"
              title="The clubhouse, after the round."
              body="A seasonal kitchen rooted in Ontario producers. Open for breakfast, lunch and quiet dinners — members and guests welcome."
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
            intro="Each was reshaped by our agronomy team in the last decade — and each rewards thought over force."
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
          <div className="lg:px-10"><Stat kicker="Heritage" value={67} suffix=" yrs" label="Of continuous play in Richmond Hill" /></div>
          <div className="lg:px-10"><Stat kicker="Annual Rounds" value={48000} label="Played across our membership and guests" /></div>
          <div className="lg:px-10"><Stat kicker="Members" value={1100} suffix="+" label="Quiet, multi-generational community" /></div>
          <div className="lg:px-10"><Stat kicker="Awards" value={14} label="Best parkland course recognitions since 2010" /></div>
        </div>
      </section>

      {/* MEMBERSHIP */}
      <section className="bg-charcoal text-cream py-28 md:py-40" id="book">
        <div className="mx-auto max-w-[1480px] px-5 md:px-10">
          <SectionHeading
            tone="dark"
            kicker="Membership"
            title="Belong to a course you'll know for a lifetime."
            intro="Three considered tiers, each with full access to the clubhouse, simulator lounge and member calendar."
            className="mb-16"
          />
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { name: "Social", price: "From $1,800", featured: false, items: ["Full clubhouse + dining", "Simulator + practice access", "Member events"] },
              { name: "Weekday", price: "From $4,400", featured: true, items: ["Unlimited weekday play", "Advance tee time priority", "All Social benefits"] },
              { name: "Full", price: "From $7,200", featured: false, items: ["Unlimited 7-day play", "Reciprocal Ontario clubs", "Locker + bag storage"] },
            ].map((t) => (
              <div
                key={t.name}
                className={`reveal glass p-8 md:p-10 flex flex-col ${
                  t.featured ? "border-gold/60 ring-1 ring-gold/30" : ""
                }`}
              >
                {t.featured && <div className="kicker text-gold mb-3">Most Chosen</div>}
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
                  Inquire
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EVENTS & WEDDINGS */}
      <section className="bg-cream py-28 md:py-40">
        <div className="mx-auto max-w-[1480px] px-5 md:px-10 grid gap-12 lg:gap-20 lg:grid-cols-2 items-center">
          <div className="reveal relative aspect-[4/5] overflow-hidden">
            <img src={eventsImg} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover scale-105 hover:scale-110 transition-transform duration-[1600ms]" />
          </div>
          <div>
            <SectionHeading
              kicker="Weddings & Private Events"
              title="A pavilion designed for the most cinematic light of the day."
              intro="Hosting up to 220 guests across the pavilion, terrace and the 9th-fairway lawn. Sit-down dinners, cocktail receptions and corporate retreats."
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

      {/* APP */}
      <section className="bg-forest-deep text-cream py-28 md:py-40 overflow-hidden">
        <div className="mx-auto max-w-[1480px] px-5 md:px-10 grid gap-16 lg:grid-cols-2 items-center">
          <div>
            <SectionHeading
              tone="dark"
              kicker="Member App"
              title="Your tee sheet, in your pocket."
              intro="Book rounds, reserve simulator bays, scan the seasonal menu and track your handicap — designed for the way you actually use a phone on a course."
            />
            <ul className="reveal mt-10 grid grid-cols-2 gap-y-5 gap-x-8 text-sm text-cream/75 max-w-md">
              <li>· Live tee sheet</li>
              <li>· Simulator bookings</li>
              <li>· Member chat</li>
              <li>· Course conditions</li>
              <li>· Events RSVP</li>
              <li>· Apple Wallet pass</li>
            </ul>
            <div className="reveal mt-10 flex gap-3">
              <a href="#" className="px-6 py-3 text-xs tracking-[0.24em] uppercase border border-cream/30 hover:bg-cream hover:text-charcoal transition-colors">App Store</a>
              <a href="#" className="px-6 py-3 text-xs tracking-[0.24em] uppercase border border-cream/30 hover:bg-cream hover:text-charcoal transition-colors">Google Play</a>
            </div>
          </div>
          <div className="reveal relative">
            <div className="mx-auto w-[260px] md:w-[320px] aspect-[9/19] rounded-[2.6rem] bg-charcoal border border-cream/20 shadow-[0_60px_120px_-40px_rgba(0,0,0,0.6)] p-3 rotate-[6deg] hover:rotate-[2deg] transition-transform duration-700">
              <div className="h-full w-full rounded-[2rem] overflow-hidden relative">
                <img src={golfImg} alt="App" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-b from-charcoal/40 via-transparent to-charcoal/80" />
                <div className="absolute top-6 inset-x-6 flex items-center justify-between text-cream/90 text-[0.7rem] tracking-[0.18em] uppercase">
                  <span>Tee Sheet</span>
                  <span>RHGC</span>
                </div>
                <div className="absolute bottom-6 inset-x-6 space-y-3">
                  {["7:42 — Whitford / Park", "8:14 — Reyes / Singh / Cole", "8:36 — Open · Reserve"].map((s) => (
                    <div key={s} className="bg-cream/10 backdrop-blur-md border border-cream/15 px-4 py-3 text-cream text-[0.78rem]">
                      {s}
                    </div>
                  ))}
                </div>
              </div>
            </div>
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
            href="#book"
            className="reveal mt-12 inline-flex items-center gap-3 bg-cream text-charcoal px-8 py-4 text-xs tracking-[0.24em] uppercase hover:bg-gold transition-colors"
          >
            Book Tee Time
          </a>
        </div>
      </section>
    </>
  );
}
