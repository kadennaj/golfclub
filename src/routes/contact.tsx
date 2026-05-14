import { createFileRoute } from "@tanstack/react-router";
import { useReveal } from "../hooks/use-reveal";
import { PageHero } from "../components/site/PageHero";
import { Mail, Phone, MapPin } from "lucide-react";
import poster from "../assets/hero-aerial.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Richmond Hill Golf Club" },
      { name: "description", content: "Visit, call, or send a note. We respond personally." },
      { property: "og:title", content: "Contact — Richmond Hill Golf Club" },
      { property: "og:description", content: "Visit, call, or send a note." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  useReveal();
  return (
    <>
      <PageHero kicker="Contact" title="Visit, call, or send a note." intro="We respond personally — usually within the day." videoSrc="/videos/hole-18.mp4" poster={poster} />

      <section className="bg-cream py-28 md:py-36">
        <div className="mx-auto max-w-[1480px] px-5 md:px-10 grid gap-16 lg:grid-cols-2">
          <div className="space-y-10">
            {[
              { Icon: MapPin, k: "Visit", l: "8755 Bathurst Street\nRichmond Hill, ON L4C 9T3" },
              { Icon: Phone, k: "Call", l: "(905) 889-4653" },
              { Icon: Mail, k: "Write", l: "concierge@richmondhillgolf.com" },
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
    </>
  );
}
