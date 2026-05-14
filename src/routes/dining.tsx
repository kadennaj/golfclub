import { createFileRoute } from "@tanstack/react-router";
import { useReveal } from "../hooks/use-reveal";
import { PageHero } from "../components/site/PageHero";
import { SectionHeading } from "../components/site/SectionHeading";
import diningImg from "../assets/dining.jpg";

export const Route = createFileRoute("/dining")({
  head: () => ({
    meta: [
      { title: "19th Hole Lounge — Richmond Hill Golf Club" },
      { name: "description", content: "The 19th Hole Lounge at Richmond Hill Golf Club — newly renovated, seating for 40, with upper and lower patios overlooking the 18th hole." },
      { property: "og:title", content: "Dining — Richmond Hill Golf Club" },
      { property: "og:description", content: "The clubhouse, after the round." },
    ],
  }),
  component: DiningPage,
});

function DiningPage() {
  useReveal();
  return (
    <>
      <PageHero
        kicker="Dining"
        title="The 19th Hole Lounge."
        intro="A full selection of popular menu items and beverages in our newly renovated lounge — the perfect place to sit and relax after a round."
        videoSrc="/videos/hole-18.mp4"
        poster={diningImg}
      />

      <section className="bg-cream py-28 md:py-36">
        <div className="mx-auto max-w-[1480px] px-5 md:px-10 grid gap-16 lg:grid-cols-[1.1fr_1fr] items-center">
          <div className="reveal aspect-[4/5] overflow-hidden">
            <img src={diningImg} alt="The 19th Hole Lounge at Richmond Hill Golf Club" loading="lazy" className="h-full w-full object-cover" />
          </div>
          <div>
            <SectionHeading kicker="The Lounge" title="Indoor seating for 40 — plus two patios." intro="A variety of tables to suit your seating style and group size. When the weather permits, our lower patio offers comfortable lounge-style seating overlooking the 18th hole, and our upper patio seats 28 — a perfect spot for your foursome or small group." />
            <div className="reveal mt-10 grid grid-cols-2 gap-6 text-sm text-charcoal/80">
              <div><div className="kicker text-forest mb-2">Seating</div>40 indoor · 28 upper patio</div>
              <div><div className="kicker text-forest mb-2">Lower Patio</div>Lounge-style overlooking the 18th</div>
              <div><div className="kicker text-forest mb-2">Open</div>Daily during the season</div>
              <div><div className="kicker text-forest mb-2">Bar</div>Fully licensed by the AGCO</div>
            </div>
            <a
              href="https://www.richmondhillgolf.com/wp-content/uploads/2026/04/19th-hole-lounge-menu-times-new-logo-2026-scaled.jpg"
              target="_blank"
              rel="noopener noreferrer"
              className="reveal mt-10 inline-flex items-center px-7 py-4 text-xs tracking-[0.24em] uppercase bg-forest text-cream hover:bg-charcoal transition-colors"
            >
              View Menu
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
