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
      { name: "description", content: "Eighteen holes of public parkland golf in Richmond Hill, Ontario. Three tee decks, par 70, brand new 2026 EZ-GO electric cart fleet." },
      { property: "og:title", content: "The Course — Richmond Hill Golf Club" },
      { property: "og:description", content: "A walkable parkland course open to the public — 18 holes, par 70." },
    ],
  }),
  component: GolfPage,
});

const HOLE_IMAGES = [h1, h2, h3, h4];
const HOLES = [
  { n: "01", par: "4", yd: "408", hdcp: "4", name: "Opening Dogleg", desc: "A tough opening hole featuring a sharp dogleg left. An aggressive drive around the corner is rewarded with a short approach to a two-tiered green." },
  { n: "02", par: "4", yd: "340", hdcp: "12", name: "Narrow Par 4", desc: "A short but narrow par 4. Hitting your tee shot in the fairway is critical — favour the right side for a clear look at a long, narrow green guarded by two bunkers." },
  { n: "03", par: "5", yd: "517", hdcp: "16", name: "Reachable Par 5", desc: "A great chance for birdie — reachable in two after a good drive down the left side. Be careful not to go long with your approach." },
  { n: "04", par: "3", yd: "164", hdcp: "18", name: "Short & Tricky", desc: "A short but very difficult par 3. Out of bounds right and long, lateral hazard left — the best miss is short of this two-tiered green." },
  { n: "05", par: "4", yd: "389", hdcp: "2", name: "The Carry", desc: "Play to the 150 stake for safety, or be aggressive and carry the water on the right. A wide but sharply two-tiered green awaits." },
  { n: "06", par: "4", yd: "330", hdcp: "14", name: "Sloped Green", desc: "After an ideal tee shot of 200 yards down the right side, pay careful attention to the pin location on this very large and sloped green." },
  { n: "07", par: "3", yd: "195", hdcp: "6", name: "Long Par 3", desc: "Wind often plays a part on this long par 3. Safest misses are short and right; the green has front, middle and back tiers." },
  { n: "08", par: "4", yd: "359", hdcp: "8", name: "Water Left", desc: "Right-centre of the fairway, short of the far bunker, is the ideal target. The approach is difficult with water left and fescue right." },
  { n: "09", par: "3", yd: "166", hdcp: "10", name: "Over Water", desc: "The outward nine ends with a challenging par 3 over water. Favour the left side — par is a great score here." },
  { n: "10", par: "5", yd: "538", hdcp: "11", name: "Long Par 5", desc: "Downwind this long par 5 can be reached in two; into the wind it becomes a beast. Favour the left side off the tee and on approach." },
  { n: "11", par: "4", yd: "393", hdcp: "1", name: "The Chute", desc: "A notorious tee shot, steeply downhill through a narrow chute of trees to a small landing area sloping right to left." },
  { n: "12", par: "4", yd: "327", hdcp: "9", name: "Pond Carry", desc: "More room left than appears off the tee — choose a shorter club to stay in front of the pond. Distance control is key on approach." },
  { n: "13", par: "3", yd: "165", hdcp: "15", name: "Elevated Tee", desc: "Club selection is the biggest challenge on this short par 3 with an elevated tee deck. Hazards guard all sides — little margin for error." },
  { n: "14", par: "4", yd: "406", hdcp: "7", name: "Three-Tier Green", desc: "Getting the ball in the fairway is key. Favour the left side off the tee to open a better angle into a small, three-tiered green." },
  { n: "15", par: "4", yd: "330", hdcp: "13", name: "Drivable Risk-Reward", desc: "A drivable par 4 with great risk-reward — but you can still make birdie by laying up safely on the left side of the fairway." },
  { n: "16", par: "4", yd: "319", hdcp: "17", name: "Drivable Dogleg", desc: "Another drivable par 4. The green is less accessible from the tee and asks for a left-to-right shot. Short is a good miss on approach." },
  { n: "17", par: "3", yd: "163", hdcp: "5", name: "Nerve Test", desc: "The last par 3 on the course will test your nerves. The only safe miss is left — creek and brush right, and wind is often a factor." },
  { n: "18", par: "5", yd: "495", hdcp: "3", name: "Make or Ruin", desc: "Rounds are made or ruined on this difficult finishing hole. Choose your 200-yard club off the tee and lay up to 100 yards." },
].map((h, i) => ({
  number: h.n, par: h.par, yardage: h.yd, hdcp: h.hdcp, name: h.name,
  description: h.desc, image: HOLE_IMAGES[i % HOLE_IMAGES.length],
}));

function GolfPage() {
  useReveal();
  return (
    <>
      <PageHero
        kicker="The Course"
        title="Eighteen holes of public parkland golf."
        intro="A walkable course with three tee decks, par 70 — challenging for advanced players and friendly for beginners. Open to everyone, seven days a week."
        videoSrc="/videos/hole-1.mp4"
        poster={golfImg}
      />

      <section className="bg-cream py-28 md:py-36">
        <div className="mx-auto max-w-[1480px] px-5 md:px-10 grid gap-16 lg:grid-cols-3">
          {[
            { k: "Course", t: "Par 70 · 18 Holes", d: "Three tee decks suited to every skill level. Walking encouraged with a $12 walk credit; pull cart included." },
            { k: "New for 2026", t: "EZ-GO Electric Carts", d: "Brand new lithium-powered EZ-GO ELiTE RXV 2 fleet — quieter, smoother and more eco-friendly than the previous gas models." },
            { k: "Pace of Play", t: "4h 20m average", d: "Generous tee-time intervals mean less traffic on the course and an unhurried round, even on a busy weekend." },
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
          <SectionHeading tone="dark" kicker="Signature Holes" title="Four holes that ask for your best." />
        </div>
        <div className="mx-auto max-w-[1480px]">
          <HolesCarousel holes={HOLES} />
        </div>
      </section>

      <section className="bg-cream py-28 md:py-36">
        <div className="mx-auto max-w-[1480px] px-5 md:px-10">
          <SectionHeading kicker="2026 Green Fees" title="Three seasons, fair rates, cart included." intro="All posted rates include a shared power cart. A $10–$12 walk credit is available for those who prefer to walk (pull cart included). Rates exclude HST." className="mb-14" />
          <div className="grid gap-10 lg:grid-cols-3">
            {[
              {
                k: "Spring",
                sub: "Opening Day to May 15",
                rows: [["Regular", "$105"], ["Twilight", "$85"], ["Late Twilight", "$75"], ["Senior", "$95"], ["10 Hole", "$85"]],
              },
              {
                k: "In-Season",
                sub: "May 16 to September 27",
                rows: [["Regular", "$127"], ["Weekend after 12 PM", "$107"], ["Weekday after 3 PM", "$107"], ["Twilight", "$87"], ["Early Bird", "$107"], ["Senior", "$97"], ["10 Hole", "$87"]],
              },
              {
                k: "Fall",
                sub: "September 28 to Closing Day",
                rows: [["Regular", "$107"], ["Twilight", "$87"], ["Late Twilight", "$77"], ["Senior", "$97"], ["10 Hole", "$87"]],
              },
            ].map((tab) => (
              <div key={tab.k} className="reveal border-t border-charcoal/15 pt-6">
                <div className="kicker text-forest mb-2">{tab.k}</div>
                <div className="font-serif text-2xl text-charcoal">{tab.sub}</div>
                <ul className="mt-6 space-y-2 text-sm text-charcoal/75">
                  {tab.rows.map(([l, p]) => (
                    <li key={l} className="flex justify-between border-b border-charcoal/10 py-2">
                      <span>{l}</span><span className="font-medium text-charcoal">{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="reveal mt-10 text-charcoal/55 text-sm max-w-3xl">
            Senior rates available Monday–Thursday before 11 AM (65+). Early Bird available Monday–Thursday before 9 AM. 10-Hole rate available same-day only. Junior players (16 &amp; under) play free on weekends after 5 PM with a paying adult.
          </p>
        </div>
      </section>

      <section className="bg-forest text-cream py-28 md:py-36">
        <div className="mx-auto max-w-[1480px] px-5 md:px-10 text-center">
          <h2 className="reveal font-serif text-4xl md:text-6xl max-w-3xl mx-auto text-balance">
            Reserve a tee time. Bring two friends.
          </h2>
          <a
            href="https://richmond-hill-golf.book.teeitup.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="reveal mt-10 inline-flex items-center px-8 py-4 text-xs tracking-[0.24em] uppercase bg-cream text-charcoal hover:bg-gold transition-colors"
          >
            Book Tee Time
          </a>
        </div>
      </section>
    </>
  );
}
