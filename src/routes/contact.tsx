import { createFileRoute } from "@tanstack/react-router";
import { useReveal } from "../hooks/use-reveal";
import { PageHero } from "../components/site/PageHero";
import { Mail, Phone, MapPin, Calendar, Smartphone, Users, FileText } from "lucide-react";
import { HOLES } from "../data/holes";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Richmond Hill Golf Club" },
      {
        name: "description",
        content:
          "Visit, call, or send a note. Reach the Proshop, Golf Learning Centre, Events team or Club Director at Richmond Hill Golf Club.",
      },
      { property: "og:title", content: "Contact — Richmond Hill Golf Club" },
      { property: "og:description", content: "Visit, call, or send a note." },
    ],
    links: [{ rel: "canonical", href: "https://www.richmondhillgolf.com/contact" }],
  }),
  component: ContactPage,
});

const DEPARTMENTS: { dept: string; phone?: string; email?: string; note?: string }[] = [
  {
    dept: "Proshop & General Inquiries",
    phone: "(905) 889-4653 ext. 422",
    email: "info@richmondhillgolf.com",
    note: "Contact the Proshop for general inquiries.",
  },
  {
    dept: "Tee Times",
    phone: "(905) 889-4653",
    note: "Bookings up to 4 weeks in advance by phone or online.",
  },
  {
    dept: "Golf Learning Centre / Lessons",
    phone: "(905) 889-4653 ext. 448",
    email: "learningcentre@richmondhillgolf.com",
  },
  {
    dept: "Events & Tournaments",
    phone: "(905) 889-4653 ext. 425",
    email: "lbodanis@richmondhillgolf.com",
    note: "Lorie Bodanis — Event Manager",
  },
  {
    dept: "Employment",
    phone: "(905) 889-4653 ext. 422",
    email: "dyoung@richmondhillgolf.com",
    note: "Doug Young — Club Director",
  },
  {
    dept: "Turf Maintenance",
    phone: "(905) 731-7541",
    note: "Maintenance department direct line.",
  },
];

const TEAM_CONTACTS = [
  { name: "Doug Young", title: "Club Director", ext: "413", email: "dyoung@richmondhillgolf.com" },
  {
    name: "Paul Davies",
    title: "Head Professional",
    ext: "417",
    email: "pdavies@richmondhillgolf.com",
  },
  {
    name: "Lorie Bodanis",
    title: "Event Manager",
    ext: "425",
    email: "lbodanis@richmondhillgolf.com",
  },
  {
    name: "Samantha Cooper",
    title: "Front of House F&B Manager",
    ext: "410",
    email: "scooper@richmondhillgolf.com",
  },
  { name: "Mena Torrice", title: "Banquet Manager", email: "mtorrice@richmondhillgolf.com" },
  {
    name: "David Rogers",
    title: "Associate Professional",
    ext: "451",
    email: "drogers@richmondhillgolf.com",
  },
  {
    name: "Joel Rodgers",
    title: "Member Services & Marketing Manager",
    ext: "412",
    email: "jrodgers@richmondhillgolf.com",
  },
];

const TURF_CONTACTS = [
  {
    name: "Peter Barnett",
    title: "Superintendent",
    ext: "21",
    email: "pbarnett@richmondhillgolf.com",
  },
  {
    name: "Koree Wait",
    title: "Assistant Superintendent",
    ext: "22",
    email: "kwait@richmondhillgolf.com",
  },
];

const POLICIES = [
  {
    label: "Privacy Policy",
    href: "/docs/privacy-policy.pdf",
  },
  {
    label: "Accessibility Policy",
    href: "/docs/accessibility-policy.pdf",
  },
];

function ContactPage() {
  useReveal();
  return (
    <>
      <PageHero
        kicker="Contact"
        title="Visit, call, or send a note."
        intro="We respond personally — usually within the day. Reach the right department directly below."
        poster={HOLES[17].image}
      />

      <section className="bg-cream py-28 md:py-36">
        <div className="mx-auto max-w-[1480px] px-5 md:px-10 grid gap-16 lg:grid-cols-2">
          <div className="space-y-10">
            {[
              { Icon: MapPin, k: "Visit", l: "8755 Bathurst Street\nRichmond Hill, ON L4C 9T3" },
              { Icon: Phone, k: "Main Line", l: "(905) 889-4653" },
              {
                Icon: Mail,
                k: "General Inquiries",
                l: "info@richmondhillgolf.com\nProshop ext. 422",
              },
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

          <div className="reveal border-t border-charcoal/15 pt-8">
            <div className="kicker text-forest mb-4">Contact Directly</div>
            <h2 className="font-serif text-4xl text-charcoal md:text-5xl">
              No web form needed.
            </h2>
            <p className="mt-5 max-w-xl text-charcoal/65 leading-relaxed">
              Email the right department or call the proshop and the team will route your inquiry.
              This site does not collect or store contact-form submissions.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="mailto:info@richmondhillgolf.com"
                className="inline-flex justify-center bg-forest px-6 py-4 text-xs uppercase tracking-[0.24em] text-cream transition-colors hover:bg-charcoal"
              >
                Email Proshop
              </a>
              <a
                href="tel:9058894653"
                className="inline-flex justify-center border border-charcoal/25 px-6 py-4 text-xs uppercase tracking-[0.24em] text-charcoal transition-colors hover:border-forest hover:text-forest"
              >
                Call Main Line
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-charcoal text-cream py-28 md:py-36">
        <div className="mx-auto max-w-[1480px] px-5 md:px-10">
          <div className="kicker text-gold mb-4">Departments</div>
          <h2 className="font-serif text-4xl md:text-6xl max-w-3xl text-balance mb-16">
            Reach the right team directly.
          </h2>
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {DEPARTMENTS.map((d) => (
              <div key={d.dept} className="reveal border-t border-cream/15 pt-6">
                <div className="font-serif text-2xl mb-3">{d.dept}</div>
                {d.phone && (
                  <a
                    href={`tel:${d.phone.replace(/[^0-9]/g, "")}`}
                    className="block text-cream/80 hover:text-gold transition-colors text-sm"
                  >
                    {d.phone}
                  </a>
                )}
                {d.email && (
                  <a
                    href={`mailto:${d.email}`}
                    className="block text-cream/80 hover:text-gold transition-colors text-sm"
                  >
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
        <div className="mx-auto max-w-[1480px] px-5 md:px-10">
          <div className="grid gap-14 lg:grid-cols-[1fr_0.72fr]">
            <div>
              <div className="kicker text-forest mb-4">Our Team</div>
              <h2 className="font-serif text-4xl md:text-6xl text-charcoal mb-14 max-w-3xl text-balance">
                Current staff contacts.
              </h2>
              <div className="grid gap-x-8 gap-y-8 md:grid-cols-2">
                {TEAM_CONTACTS.map((person) => (
                  <div key={person.email} className="reveal border-t border-charcoal/15 pt-5">
                    <div className="font-serif text-2xl text-charcoal">{person.name}</div>
                    <div className="mt-1 text-sm text-charcoal/60">
                      {person.title}
                      {person.ext ? ` - Ext. ${person.ext}` : ""}
                    </div>
                    <a
                      href={`mailto:${person.email}`}
                      className="mt-3 inline-block text-sm text-forest hover:text-charcoal transition-colors"
                    >
                      {person.email}
                    </a>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-14">
              <div>
                <div className="kicker text-forest mb-4">Turf Maintenance</div>
                <div className="font-serif text-3xl text-charcoal">(905) 731-7541</div>
                <div className="mt-8 space-y-6">
                  {TURF_CONTACTS.map((person) => (
                    <div key={person.email} className="reveal border-t border-charcoal/15 pt-5">
                      <div className="font-serif text-2xl text-charcoal">{person.name}</div>
                      <div className="mt-1 text-sm text-charcoal/60">
                        {person.title} - Ext. {person.ext}
                      </div>
                      <a
                        href={`mailto:${person.email}`}
                        className="mt-3 inline-block text-sm text-forest hover:text-charcoal transition-colors"
                      >
                        {person.email}
                      </a>
                    </div>
                  ))}
                </div>
              </div>

              <div className="reveal border-t border-charcoal/15 pt-6">
                <div className="kicker text-forest mb-4 flex items-center gap-2">
                  <FileText className="h-4 w-4" /> Policies
                </div>
                <div className="flex flex-col gap-3">
                  {POLICIES.map((policy) => (
                    <a
                      key={policy.href}
                      href={policy.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs tracking-[0.24em] uppercase border-b border-charcoal/30 pb-2 hover:text-forest transition-colors"
                    >
                      {policy.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cream py-28 md:py-36">
        <div className="mx-auto max-w-[1480px] px-5 md:px-10 grid gap-12 lg:grid-cols-2">
          <div className="reveal">
            <div className="kicker text-forest mb-4 flex items-center gap-2">
              <Smartphone className="h-4 w-4" /> Mobile App
            </div>
            <h3 className="font-serif text-3xl md:text-4xl text-charcoal mb-4">
              RHGC on iOS & Android
            </h3>
            <p className="text-charcoal/65 leading-relaxed mb-6">
              Interactive scorecard, GPS yardage, virtual hole flyovers, live leaderboards, tee-time
              booking, F&amp;B menu, news and monthly challenges — all in your pocket.
            </p>
            <div className="flex gap-4">
              <span className="text-xs tracking-[0.24em] uppercase border-b border-charcoal/30 pb-1 text-charcoal/55">
                iOS Coming Soon
              </span>
              <span className="text-xs tracking-[0.24em] uppercase border-b border-charcoal/30 pb-1 text-charcoal/55">
                Android Coming Soon
              </span>
            </div>
          </div>

          <div className="reveal">
            <div className="kicker text-forest mb-4 flex items-center gap-2">
              <Users className="h-4 w-4" /> Right Next Door
            </div>
            <h3 className="font-serif text-3xl md:text-4xl text-charcoal mb-4">
              Richmond Hill Country Club
            </h3>
            <p className="text-charcoal/65 leading-relaxed mb-6">
              Operating under the same umbrella, the Country Club offers indoor/outdoor tennis,
              racquetball, squash, pools, fitness centre, spa, restaurant and banquet facilities —
              connected to the Golf Club by a direct cart path.
            </p>
            <a
              href="https://www.richmondhillcountryclub.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs tracking-[0.24em] uppercase border-b border-charcoal pb-1 hover:text-forest transition-colors"
            >
              Visit Country Club →
            </a>
          </div>
        </div>
      </section>

      <section className="bg-cream pb-28 md:pb-36">
        <div className="mx-auto max-w-[1480px] px-5 md:px-10">
          <div className="kicker text-forest mb-4">Good to Know</div>
          <h2 className="font-serif text-4xl md:text-5xl text-charcoal mb-12 max-w-2xl text-balance">
            Frequently asked questions.
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            {[
              {
                q: "Are you public or private?",
                a: "Fully public. All facilities — including the driving range — are open to anyone.",
              },
              {
                q: "Do you offer memberships?",
                a: "We offer Prepaid Elite memberships: place a lump sum on account and draw from it for purchases at a 10–25% discount. Funds never expire (3-year roll-over).",
              },
              {
                q: "How far in advance can I book a tee time?",
                a: "Up to 4 weeks in advance, by phone or online — 24 hours a day, 7 days a week.",
              },
              {
                q: "What is your cancellation policy?",
                a: "We request 24 hours' notice to cancel or reduce a group. Repeated late cancellations or no-shows may forfeit advance-booking privileges.",
              },
              {
                q: "How is the pace of play?",
                a: "Average 4h 20m, often closer to 4h thanks to wider tee-time intervals.",
              },
              {
                q: "Is the course beginner-friendly?",
                a: "Yes — three tee decks accommodate every level. Twilight rounds are recommended for beginners; reduced rates and a 10-hole option are available.",
              },
              {
                q: "What's the dress code?",
                a: "Collared shirt with khaki shorts or pants and golf or running shoes. No jeans, t-shirts, tank tops, tracksuits, gym wear or metal spikes.",
              },
              {
                q: "Rain check policy?",
                a: "100% rain check before 6 holes, 50% between 6–12 holes, none after teeing off the 13th. Issued only for unplayable conditions, not threat of weather.",
              },
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
