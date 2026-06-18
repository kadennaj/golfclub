import { useEffect, useState } from "react";

const ITEMS = [
  {
    quote: "First-class service from the pro shop to the grounds crew.",
    name: "Mike Butler",
    role: "Symtech",
  },
  {
    quote: "A beautifully groomed course and true professionalism.",
    name: "Guy Schembri",
    role: "Local 416",
  },
  {
    quote: "Flawless tournament days. We come back every year.",
    name: "Agnes Caplan",
    role: "TBMOA",
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
    <div className="mx-auto max-w-4xl text-center">
      <div className="kicker text-forest mb-8">In Their Words</div>
      <blockquote
        key={i}
        className="font-serif italic text-4xl md:text-6xl lg:text-7xl leading-[1.05] text-charcoal text-balance animate-[fade-in_0.8s_ease-out]"
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
            className="inline-flex min-h-6 min-w-6 cursor-pointer items-center justify-center"
          >
            <span
              aria-hidden="true"
              className={`h-1.5 rounded-full transition-all duration-500 ${
                n === i ? "w-8 bg-forest" : "w-1.5 bg-charcoal/25"
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
