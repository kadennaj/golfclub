import { useEffect, useState } from "react";

const ITEMS = [
  {
    quote:
      "I would like to thank the whole team at Richmond Hill Golf Club for a first class event — the service was amazing from the proshop to the food and beverage to the grounds staff. I have been involved in running tournaments for thirty years and have not seen this service quality from a golf event to date.",
    name: "Mike Butler",
    role: "Symtech",
  },
  {
    quote:
      "Seldom does one see a truly honest effort to cater an event, and you have certainly shown true professionalism in delivering what you promised. The golf course is well groomed and has become one of my choices to play a round!",
    name: "Guy Schembri",
    role: "Local 416",
  },
  {
    quote:
      "Once again you have shown us a great tournament. You have always gone above and beyond for us and this makes our decision to come back year after year easy. Your job and execution on tournament day is flawless!",
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
