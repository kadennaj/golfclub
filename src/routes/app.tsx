import { createFileRoute } from "@tanstack/react-router";
import { useReveal } from "../hooks/use-reveal";
import { PageHero } from "../components/site/PageHero";
import golfImg from "../assets/golf-green.jpg";

export const Route = createFileRoute("/app")({
  head: () => ({
    meta: [
      { title: "Member App — Richmond Hill Golf Club" },
      { name: "description", content: "Book rounds, reserve simulator bays and track your handicap from your phone." },
      { property: "og:title", content: "Member App — Richmond Hill Golf Club" },
      { property: "og:description", content: "Your tee sheet, in your pocket." },
    ],
  }),
  component: AppPage,
});

function AppPage() {
  useReveal();
  return (
    <>
      <PageHero kicker="Member App" title="Your tee sheet, in your pocket." intro="Designed for the way you actually use a phone on a course — fast, quiet, and out of your way." videoId="6QR2QCSkXnI" poster={golfImg} />

      <section className="bg-cream py-28 md:py-36">
        <div className="mx-auto max-w-[1480px] px-5 md:px-10 grid gap-16 lg:grid-cols-2 items-center">
          <div className="reveal flex justify-center">
            <div className="w-[280px] md:w-[340px] aspect-[9/19] rounded-[2.6rem] bg-charcoal border border-charcoal/20 shadow-[0_60px_120px_-40px_rgba(0,0,0,0.4)] p-3">
              <div className="h-full w-full rounded-[2rem] overflow-hidden relative">
                <img src={golfImg} alt="App" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-b from-charcoal/40 via-transparent to-charcoal/85" />
                <div className="absolute top-6 inset-x-6 flex items-center justify-between text-cream text-[0.7rem] tracking-[0.18em] uppercase">
                  <span>Tee Sheet</span><span>RHGC</span>
                </div>
                <div className="absolute bottom-6 inset-x-6 space-y-3">
                  {["7:42 — Whitford / Park", "8:14 — Reyes / Singh", "8:36 — Open · Reserve"].map((s) => (
                    <div key={s} className="bg-cream/10 backdrop-blur-md border border-cream/15 px-4 py-3 text-cream text-[0.78rem]">{s}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="reveal kicker text-forest mb-4">Features</div>
            <h2 className="reveal font-serif text-4xl md:text-5xl text-charcoal">Built for the round, not the screen.</h2>
            <ul className="reveal mt-8 grid grid-cols-2 gap-y-4 gap-x-8 text-sm text-charcoal/75">
              <li>· Live tee sheet</li>
              <li>· Simulator bookings</li>
              <li>· Member chat</li>
              <li>· Course conditions</li>
              <li>· Events RSVP</li>
              <li>· Apple Wallet pass</li>
              <li>· Handicap tracking</li>
              <li>· Dining menus</li>
            </ul>
            <div className="reveal mt-10 flex gap-3">
              <a href="#" className="px-6 py-3 text-xs tracking-[0.24em] uppercase bg-charcoal text-cream hover:bg-forest transition-colors">App Store</a>
              <a href="#" className="px-6 py-3 text-xs tracking-[0.24em] uppercase bg-charcoal text-cream hover:bg-forest transition-colors">Google Play</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
