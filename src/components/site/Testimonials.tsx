import { useEffect, useState } from "react";

const ITEMS = [
  {
    quote:
      "A heritage course that finally feels like the destination it's always been. Every visit feels considered — from the first tee to the last pour.",
    name: "Daniel Whitford",
    role: "Member since 2014",
  },
  {
    quote:
      "We held our wedding here in September. The light, the views, the service — guests are still talking about it.",
    name: "Aisha & Marc",
    role: "Pavilion Wedding",
  },
  {
    quote:
      "The best parkland golf within an hour of Toronto. Conditioning is immaculate and the front nine is unforgettable.",
    name: "Jonathan P.",
    role: "Visiting Player",
  },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((x) => (x + 1) % ITEMS.length), 7000);
    return () => clearInterval(t);
  }, []);
  const cur = ITEMS[i];

  return (
    <div className="max-w-3xl mx-auto text-center">
      <div className="kicker text-forest mb-8">In Their Words</div>
      <blockquote
        key={i}
        className="font-serif italic text-2xl md:text-4xl lg:text-5xl leading-[1.2] text-charcoal text-balance animate-[fade-in_0.8s_ease-out]"
      >
        “{cur.quote}”
      </blockquote>
      <div className="mt-10 text-xs tracking-[0.24em] uppercase text-charcoal/70">
        {cur.name} <span className="text-charcoal/35 mx-2">·</span> {cur.role}
      </div>
      <div className="mt-8 flex justify-center gap-2">
        {ITEMS.map((_, n) => (
          <button
            key={n}
            onClick={() => setI(n)}
            aria-label={`Show testimonial ${n + 1}`}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              n === i ? "w-8 bg-forest" : "w-1.5 bg-charcoal/25"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
