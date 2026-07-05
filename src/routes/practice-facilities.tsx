import { createFileRoute } from "@tanstack/react-router";
import { useReveal } from "../hooks/use-reveal";
import { PageHero } from "../components/site/PageHero";
import { SectionHeading } from "../components/site/SectionHeading";
import rangeFour from "../assets/academy/range-4.jpg";
import academyBays from "../assets/academy/academy-bays.jpg";
import academyBayDark from "../assets/academy/academy-bay-dark.jpg";
import academyRoom from "../assets/academy/academy-room.jpg";

export const Route = createFileRoute("/practice-facilities")({
  head: () => ({
    meta: [
      { title: "Practice Facilities — Richmond Hill Golf Club" },
      {
        name: "description",
        content:
          "Driving range, sheltered hitting stations, short-game practice areas and GC Hawk simulators at Richmond Hill Golf Club.",
      },
      { property: "og:title", content: "Practice Facilities — Richmond Hill Golf Club" },
      {
        property: "og:description",
        content:
          "Outdoor range, practice greens, bunker work, heated indoor space and three GC Hawk simulators.",
      },
    ],
    links: [{ rel: "canonical", href: "https://www.richmondhillgolf.com/practice-facilities" }],
  }),
  component: PracticeFacilitiesPage,
});

function PracticeFacilitiesPage() {
  useReveal();
  return (
    <>
      <PageHero
        kicker="Practice Facilities"
        title="Range, short game and simulator work."
        intro="Warm up before a round or build a better swing with outdoor turf, sheltered hitting stations, short-game areas and indoor technology."
        poster={rangeFour}
      />

      <section className="bg-cream py-28 md:py-36">
        <div className="mx-auto max-w-[1480px] px-5 md:px-10">
          <SectionHeading
            kicker="Outdoor Practice"
            title="A range that feels like golf."
            intro="Newly replaced Tee-line turf, Pinnacle range balls, bag racks, patio furniture and sheltered Dry-Range canopies keep practice comfortable."
            className="mb-14"
          />
          <div className="grid gap-10 lg:grid-cols-4">
            {[
              [
                "Driving Range",
                "Sun up to sun down through the season, with a weekly Sunday maintenance close approximately 1.5 hours before sunset.",
              ],
              [
                "Putting Green",
                "Roll putts before your tee time or stay after the round to sharpen speed control.",
              ],
              [
                "Chipping Area",
                "Dial in touch around the green with a dedicated short-game space.",
              ],
              ["Practice Bunker", "Build confidence from sand before it counts on the course."],
            ].map(([title, body]) => (
              <div key={title} className="reveal border-t border-charcoal/15 pt-6">
                <div className="kicker text-forest mb-3">{title}</div>
                <p className="text-charcoal/68 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-charcoal text-cream py-28 md:py-36">
        <div className="mx-auto grid max-w-[1480px] gap-16 px-5 md:px-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div className="reveal grid grid-cols-2 gap-4">
            {[academyBays, academyBayDark, academyRoom, rangeFour].map((src, index) => (
              <div key={src} className={`overflow-hidden image-polish ${index % 2 ? "mt-8" : ""}`}>
                <img
                  src={src}
                  alt=""
                  loading="lazy"
                  className="aspect-[4/5] h-full w-full object-cover transition-transform duration-[1200ms] hover:scale-105"
                />
              </div>
            ))}
          </div>
          <div>
            <SectionHeading
              tone="dark"
              kicker="Indoor Technology"
              title="Three GC Hawk simulator bays."
              intro="Practice, play and collect clean feedback year-round in heated indoor space with video support, training aids and fitting tools."
            />
            <div className="reveal mt-10 grid gap-4 sm:grid-cols-2">
              {[
                "GC Hawk simulators",
                "Custom club fitting",
                "Video feedback",
                "On-course lesson support",
              ].map((item) => (
                <div key={item} className="border border-cream/12 px-5 py-4 text-sm text-cream/72">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cream py-28 md:py-36">
        <div className="mx-auto max-w-[1480px] px-5 md:px-10">
          <SectionHeading
            kicker="Range Rates"
            title="Practice by the bucket."
            intro="Rates exclude HST. Range cards do not expire, and member discounts do not apply to range cards."
            className="mb-12"
          />
          <div className="grid gap-6 md:grid-cols-5">
            {[
              ["Regular Bucket", "$17"],
              ["Warm-up Bucket", "$12"],
              ["10 Bucket Card", "$155"],
              ["25 Bucket Card", "$350"],
              ["50 Bucket Card", "$650"],
            ].map(([label, price]) => (
              <div key={label} className="reveal border-t border-charcoal/15 pt-6">
                <div className="kicker text-forest mb-3">{label}</div>
                <div className="font-serif text-4xl text-charcoal">{price}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
