import { createFileRoute } from "@tanstack/react-router";
import { useReveal } from "../hooks/use-reveal";
import { PageHero } from "../components/site/PageHero";
import { SectionHeading } from "../components/site/SectionHeading";
import diningImg from "../assets/dining.jpg";

export const Route = createFileRoute("/dining")({
  head: () => ({
    meta: [
      { title: "Dining — Richmond Hill Golf Club" },
      { name: "description", content: "A seasonal kitchen rooted in Ontario producers. Open for breakfast, lunch and dinner." },
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
        title="The clubhouse, after the round."
        intro="A seasonal kitchen rooted in Ontario producers. Open daily — members and guests welcome."
        videoId="nadhgQrHMDc"
        poster={diningImg}
      />

      <section className="bg-cream py-28 md:py-36">
        <div className="mx-auto max-w-[1480px] px-5 md:px-10 grid gap-16 lg:grid-cols-[1.1fr_1fr] items-center">
          <div className="reveal aspect-[4/5] overflow-hidden">
            <img src={diningImg} alt="Clubhouse dining" loading="lazy" className="h-full w-full object-cover" />
          </div>
          <div>
            <SectionHeading kicker="Kitchen" title="Quietly, one of York Region's best-kept secrets." intro="Chef Marc Reyes leads a kitchen that's earned a quiet following — Ontario lamb, Lake Erie pickerel, weekly tasting menus." />
            <div className="reveal mt-10 grid grid-cols-2 gap-6 text-sm text-charcoal/80">
              <div><div className="kicker text-forest mb-2">Breakfast</div>Daily · 7am – 10:30am</div>
              <div><div className="kicker text-forest mb-2">Lunch</div>Daily · 11am – 3pm</div>
              <div><div className="kicker text-forest mb-2">Dinner</div>Wed–Sat · 5pm – 10pm</div>
              <div><div className="kicker text-forest mb-2">Bar</div>Daily · until close</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
