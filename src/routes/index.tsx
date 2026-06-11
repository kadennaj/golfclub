import { createFileRoute, Link } from "@tanstack/react-router";
import { ChevronDown } from "lucide-react";
import { useReveal } from "../hooks/use-reveal";
import { SectionHeading } from "../components/site/SectionHeading";
import { ExperienceTile } from "../components/site/ExperienceTile";
import { HolesCarousel } from "../components/site/HolesCarousel";
import { Stat } from "../components/site/Stat";
import { Testimonials } from "../components/site/Testimonials";
import { HOLES } from "../data/holes";
import rhgcLogo from "../assets/brand/rhgc-logo.png";
import heroAerial from "../assets/hero-rhgc-aerial.jpg";
import eventGolf01 from "../assets/events-real/event-golf-01.jpg";
import eventGolf02 from "../assets/events-real/event-golf-02.jpg";
import eventGolf03 from "../assets/events-real/event-golf-03.jpg";
import eventDinner01 from "../assets/events-real/event-dinner-01.jpg";
import eventDinner02 from "../assets/events-real/event-dinner-02.jpg";
import eventDinner03 from "../assets/events-real/event-dinner-03.jpg";

export const Route = createFileRoute("/")({
  component: HomePage,
});

function HomePage() {
  useReveal();
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[100svh] overflow-hidden bg-charcoal text-cream">
        <img
          src={heroAerial}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/5 to-black/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/35 via-transparent to-black/10" />

        <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-[1480px] flex-col justify-end px-5 pb-24 pt-32 md:px-10 md:pb-28">
          <h1 className="sr-only">Richmond Hill Golf Club</h1>
          <div className="max-w-sm">
            <img
              src={rhgcLogo}
              alt="Richmond Hill Golf Club"
              className="reveal w-44 object-contain brightness-0 invert drop-shadow-[0_12px_28px_rgba(0,0,0,0.45)] md:w-56"
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

      {/* BRAND STATEMENT */}
      <section className="bg-cream py-24 md:py-36">
        <div className="mx-auto grid max-w-[1480px] items-end gap-12 px-5 md:px-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <div className="reveal kicker text-forest mb-8">Open To Everyone</div>
            <p className="reveal font-serif text-4xl md:text-6xl lg:text-7xl leading-[1.05] max-w-5xl text-balance text-charcoal">
              A quiet round, a full tournament, a winter swing session.
            </p>
          </div>
          <div className="reveal grid grid-cols-3 gap-3 md:gap-4">
            {[HOLES[7].image, eventDinner01, eventGolf01].map((src, i) => (
              <div
                key={src}
                className={`image-polish overflow-hidden bg-charcoal ${
                  i === 1 ? "mt-10 aspect-[4/5]" : "aspect-[4/5]"
                }`}
              >
                <img src={src} alt="" loading="lazy" className="h-full w-full object-cover transition-transform duration-[1200ms] hover:scale-105" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE GRID */}
      <section className="bg-cream pb-28 md:pb-40">
        <div className="mx-auto max-w-[1480px] px-5 md:px-10">
          <SectionHeading
            kicker="The Experience"
            title="Pick your pace."
            intro="Golf, dining, events and instruction, all in one beautifully kept place."
            className="mb-20 md:mb-28"
          />
          <div className="space-y-24 md:space-y-36">
            <ExperienceTile
              index="01"
              kicker="The Course"
              title="Eighteen parkland holes."
              body="Three tee decks, thoughtful angles and just enough trouble to keep the round honest."
              image={HOLES[7].image}
              to="/golf"
            />
            <ExperienceTile
              index="02"
              kicker="Events & Dining"
              title="Gather, play, dine."
              body="Tournament mornings, banquet evenings and relaxed meals in one polished clubhouse setting."
              image={eventGolf02}
              to="/events"
              reverse
            />
            <ExperienceTile
              index="03"
              kicker="Academy"
              title="A swing worth returning to."
              body="Private lessons, clinics and simulator sessions with CPGA professionals year-round."
              image={HOLES[12].image}
              to="/lessons"
            />
            <ExperienceTile
              index="04"
              kicker="Weddings"
              title="The Richvale Room."
              body="Vaulted ceilings, forest views and a polished setting for weddings and private celebrations."
              image={eventDinner02}
              to="/events"
              reverse
            />
            <ExperienceTile
              index="05"
              kicker="Simulators"
              title="Winter, solved."
              body="Three Foresight GC Hawk bays for practice, play and clean data when the course rests."
              image={HOLES[15].image}
              to="/lessons"
            />
          </div>
        </div>
      </section>

      {/* SIGNATURE HOLES */}
      <section className="relative bg-charcoal text-cream py-28 md:py-40 overflow-hidden">
        <div className="absolute inset-0 opacity-25">
          <img src={HOLES[4].image} alt="" aria-hidden="true" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-charcoal/70 to-charcoal" />
        </div>
        <div className="relative z-10 mx-auto max-w-[1480px] px-5 md:px-10">
          <SectionHeading
            tone="dark"
            kicker="Hole-by-Hole"
            title="See the round before you play it."
            intro="Par, yardage, handicap and the shot that matters."
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
          <div className="lg:px-10"><Stat kicker="Since" value={1958} label="Richmond Hill golf" /></div>
          <div className="lg:px-10"><Stat kicker="Course" value={18} label="Public parkland holes" /></div>
          <div className="lg:px-10"><Stat kicker="Round" value={4} suffix="h 20m" label="Average pace" /></div>
          <div className="lg:px-10"><Stat kicker="Book" value={4} suffix=" weeks" label="Advance window" /></div>
        </div>
      </section>

      {/* PREPAID ELITE */}
      <section className="relative overflow-hidden bg-charcoal text-cream py-28 md:py-40" id="elite">
        <div className="absolute inset-0 soft-vignette opacity-30" />
        <div className="mx-auto max-w-[1480px] px-5 md:px-10">
          <SectionHeading
            tone="dark"
            kicker="Prepaid Elite Membership"
            title="Simple privileges. Clean savings."
            intro="A prepaid account for golf, range, pro shop, food and beverage."
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
                className={`reveal glass p-8 md:p-10 flex flex-col transition-transform duration-300 hover:-translate-y-1 ${
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
                  className={`mt-10 inline-flex cursor-pointer items-center justify-center px-6 py-3.5 text-xs tracking-[0.24em] uppercase transition-colors ${
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
            2026 is currently at capacity. The 2027 waitlist opens this fall.
          </p>
        </div>
      </section>

      {/* EVENTS & RICHVALE ROOM */}
      <section className="bg-cream py-28 md:py-40">
        <div className="mx-auto max-w-[1480px] px-5 md:px-10 grid gap-12 lg:gap-20 lg:grid-cols-2 items-center">
          <div className="reveal relative aspect-[4/5] overflow-hidden image-polish">
            <img src={eventDinner03} alt="Event dining at Richmond Hill Golf Club" loading="lazy" className="absolute inset-0 h-full w-full object-cover scale-105 hover:scale-110 transition-transform duration-[1600ms]" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 glass p-5 text-cream">
              <div className="kicker text-gold mb-2">Up To 200 Guests</div>
              <div className="font-serif text-3xl leading-none">Forest views. Polished service.</div>
            </div>
          </div>
          <div>
            <SectionHeading
              kicker="Weddings & Private Events"
              title="Events and dining, together."
              intro="Tournament receptions, private dinners, weddings and patio service under one roof."
            />
            <div className="reveal mt-10 grid grid-cols-3 gap-3">
              {[eventDinner01, eventGolf03, eventDinner02].map((src, i) => (
                <div key={i} className="aspect-square overflow-hidden">
                  <img src={src} alt="" loading="lazy" className="h-full w-full object-cover hover:scale-110 transition-transform duration-700" />
                </div>
              ))}
            </div>
            <Link
              to="/events"
              className="reveal mt-10 inline-flex cursor-pointer items-center px-7 py-4 text-xs tracking-[0.24em] uppercase bg-forest text-cream hover:bg-charcoal transition-colors"
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
        <img src={HOLES[17].image} alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover" />
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
