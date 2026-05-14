import { createFileRoute } from "@tanstack/react-router";
import { useReveal } from "../hooks/use-reveal";
import { PageHero } from "../components/site/PageHero";
import { Mail, Phone, MapPin, Calendar, Smartphone, Users } from "lucide-react";
import poster from "../assets/hero-aerial.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Richmond Hill Golf Club" },
      { name: "description", content: "Visit, call, or send a note. Reach the Proshop, Golf Learning Centre, Events team or Club Director at Richmond Hill Golf Club." },
      { property: "og:title", content: "Contact — Richmond Hill Golf Club" },
      { property: "og:description", content: "Visit, call, or send a note." },
    ],
  }),
  component: ContactPage,
});

const DEPARTMENTS: { dept: string; phone?: string; email?: string; note?: string }[] = [
  { dept: "Proshop & Tee Times", phone: "(905) 889-4653", note: "Bookings up to 4 weeks in advance, 7 days a week." },
  { dept: "Golf Learning Centre / Lessons", phone: "(905) 889-4653 ext. 448", email: "learningcentre@richmondhillgolf.com" },
  { dept: "Events & Tournaments", email: "lbodanis@richmondhillgolf.com", note: "Lori Bodanis — Event Manager" },
  { dept: "Employment", phone: "(905) 889-4653 ext. 422", email: "dyoung@richmondhillgolf.com", note: "Doug Young — Club Director" },
];

function ContactPage() {
  useReveal();
  return (
    <>
      <PageHero
        kicker="Contact"
        title="Visit, call, or send a note."
        intro="We respond personally — usually within the day. Reach the right department directly below."
        videoSrc="/videos/hole-18.mp4"
        poster={poster}
      />

      <section className="bg-cream py-28 md:py-36">
        <div className="mx-auto max-w-[1480px] px-5 md:px-10 grid gap-16 lg:grid-cols-2">
          <div className="space-y-10">
            {[
              { Icon: MapPin, k: "Visit", l: "8755 Bathurst Street\nRichmond Hill, ON L4C 9T3" },
              { Icon: Phone, k: "Main Line", l: "(905) 889-4653" },
              { Icon: Calendar, k: "Book a Tee Time", l: "richmond-hill-golf.book.teeitup.com" },
            ].map(({ Icon, k, l }) => (
              <div key={k} className="reveal flex gap-5">
                <div className="h-12 w-12 rounded-full border border-forest/30 flex items-center justify-center text-forest shrink-0">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="kicker text-forest mb-2">{k}</div>
                  <div className="font-serif text-2xl text-charcoal whitespace-pre-line">{l}</div>
                </div>
              </div>
            ))}
          </div>

          <form className="reveal space-y-5">
            {[["Name", "text"], ["Email", "email"], ["Subject", "text"]].map(([label, type]) => (
              <div key={label}>
                <label className="kicker text-charcoal/60 mb-2 block">{label}</label>
                <input type={type} className="w-full bg-transparent border-b border-charcoal/30 py-3 focus:border-forest focus:outline-none transition-colors" />
              </div>
            ))}
            <div>
              <label className="kicker text-charcoal/60 mb-2 block">Message</label>
              <textarea rows={5} className="w-full bg-transparent border-b border-charcoal/30 py-3 focus:border-forest focus:outline-none transition-colors resize-none" />
            </div>
            <button type="submit" className="mt-4 inline-flex items-center px-8 py-4 text-xs tracking-[0.24em] uppercase bg-forest text-cream hover:bg-charcoal transition-colors">
              Send Note
            </button>
          </form>
        </div>
      </section>

      <section className="bg-charcoal text-cream py-28 md:py-36">
        <div className="mx-auto max-w-[1480px] px-5 md:px-10">
          <div className="kicker text-gold mb-4">Departments</div>
          <h2 className="font-serif text-4xl md:text-6xl max-w-3xl text-balance mb-16">Reach the right team directly.</h2>
          <div className="grid gap-10 md:grid-cols-2">
            {DEPARTMENTS.map((d) => (
              <div key={d.dept} className="reveal border-t border-cream/15 pt-6">
                <div className="font-serif text-2xl mb-3">{d.dept}</div>
                {d.phone && (
                  <a href={`tel:${d.phone.replace(/[^0-9]/g, "")}`} className="block text-cream/80 hover:text-gold transition-colors text-sm">
                    {d.phone}
                  </a>
                )}
                {d.email && (
                  <a href={`mailto:${d.email}`} className="block text-cream/80 hover:text-gold transition-colors text-sm">
                    {d.email}
                  </a>
                )}
                {d.note && <p className="text-cream/55 text-sm mt-2">{d.note}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream py-28 md:py-36">
        <div className="mx-auto max-w-[1480px] px-5 md:px-10 grid gap-12 lg:grid-cols-2">
          <div className="reveal">
            <div className="kicker text-forest mb-4 flex items-center gap-2"><Smartphone className="h-4 w-4" /> Mobile App</div>
            <h3 className="font-serif text-3xl md:text-4xl text-charcoal mb-4">RHGC on iOS & Android</h3>
            <p className="text-charcoal/65 leading-relaxed mb-6">
              Interactive scorecard, GPS yardage, virtual hole flyovers, live leaderboards, tee-time booking, F&amp;B menu, news and monthly challenges — all in your pocket.
            </p>
            <div className="flex gap-4">
              <a href="https://itunes.apple.com/us/app/richmond-hill-golf/id1244279127" target="_blank" rel="noopener noreferrer" className="text-xs tracking-[0.24em] uppercase border-b border-charcoal pb-1 hover:text-forest transition-colors">Download iOS</a>
              <a href="https://play.google.com/store/apps/details?id=com.gallusgolf.c862.android.richmondhill" target="_blank" rel="noopener noreferrer" className="text-xs tracking-[0.24em] uppercase border-b border-charcoal pb-1 hover:text-forest transition-colors">Download Android</a>
            </div>
          </div>

          <div className="reveal">
            <div className="kicker text-forest mb-4 flex items-center gap-2"><Users className="h-4 w-4" /> Right Next Door</div>
            <h3 className="font-serif text-3xl md:text-4xl text-charcoal mb-4">Richmond Hill Country Club</h3>
            <p className="text-charcoal/65 leading-relaxed mb-6">
              Operating under the same umbrella, the Country Club offers indoor/outdoor tennis, racquetball, squash, pools, fitness centre, spa, restaurant and banquet facilities — connected to the Golf Club by a direct cart path.
            </p>
            <a href="http://www.richmondhillcountryclub.com/" target="_blank" rel="noopener noreferrer" className="text-xs tracking-[0.24em] uppercase border-b border-charcoal pb-1 hover:text-forest transition-colors">Visit Country Club →</a>
          </div>
        </div>
      </section>

      <section className="bg-cream pb-28 md:pb-36">
        <div className="mx-auto max-w-[1480px] px-5 md:px-10">
          <div className="kicker text-forest mb-4">Good to Know</div>
          <h2 className="font-serif text-4xl md:text-5xl text-charcoal mb-12 max-w-2xl text-balance">Frequently asked questions.</h2>
          <div className="grid gap-8 md:grid-cols-2">
            {[
              { q: "Are you public or private?", a: "Fully public. All facilities — including the driving range — are open to anyone." },
              { q: "Do you offer memberships?", a: "We offer Prepaid Elite memberships: place a lump sum on account and draw from it for purchases at a 10–25% discount. Funds never expire (3-year roll-over)." },
              { q: "How far in advance can I book a tee time?", a: "Up to 4 weeks in advance, by phone or online — 24 hours a day, 7 days a week." },
              { q: "What is your cancellation policy?", a: "We request 24 hours' notice to cancel or reduce a group. Repeated late cancellations or no-shows may forfeit advance-booking privileges." },
              { q: "How is the pace of play?", a: "Average 4h 20m, often closer to 4h thanks to wider tee-time intervals." },
              { q: "Is the course beginner-friendly?", a: "Yes — three tee decks accommodate every level. Twilight rounds are recommended for beginners; reduced rates and a 10-hole option are available." },
              { q: "What's the dress code?", a: "Collared shirt with khaki shorts or pants and golf or running shoes. No jeans, t-shirts, tank tops, tracksuits, gym wear or metal spikes." },
              { q: "Rain check policy?", a: "100% rain check before 6 holes, 50% between 6–12 holes, none after teeing off the 13th. Issued only for unplayable conditions, not threat of weather." },
            ].map((f) => (
              <div key={f.q} className="reveal border-t border-charcoal/15 pt-6">
                <div className="font-serif text-xl text-charcoal mb-2">{f.q}</div>
                <p className="text-charcoal/65 text-sm leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
