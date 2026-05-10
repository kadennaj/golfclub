import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

type Props = {
  index: string;
  kicker: string;
  title: string;
  body: string;
  image: string;
  to: string;
  reverse?: boolean;
};

export function ExperienceTile({ index, kicker, title, body, image, to, reverse }: Props) {
  return (
    <div className={`grid gap-8 md:gap-14 lg:gap-20 items-center md:grid-cols-12 ${reverse ? "" : ""}`}>
      <Link
        to={to}
        className={`reveal group relative block overflow-hidden md:col-span-7 ${
          reverse ? "md:order-2" : ""
        }`}
      >
        <div className="aspect-[5/4] md:aspect-[4/3] overflow-hidden bg-charcoal">
          <img
            src={image}
            alt={title}
            loading="lazy"
            className="h-full w-full object-cover scale-105 group-hover:scale-110 transition-transform duration-[1400ms] ease-out"
          />
        </div>
        <div className="absolute top-5 left-5 font-serif italic text-cream/90 text-2xl mix-blend-difference">
          {index}
        </div>
      </Link>
      <div className="md:col-span-5 max-w-md">
        <div className="reveal kicker text-forest mb-4 flex items-center gap-3">
          <span className="h-px w-8 bg-current opacity-60" />
          {kicker}
        </div>
        <h3 className="reveal font-serif text-3xl md:text-4xl lg:text-5xl leading-[1.05] text-balance">
          {title}
        </h3>
        <p className="reveal mt-5 text-charcoal/65 leading-relaxed text-pretty">{body}</p>
        <Link
          to={to}
          className="reveal mt-6 inline-flex items-center gap-2 text-xs tracking-[0.24em] uppercase text-forest hover:text-gold transition-colors group"
        >
          Discover
          <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </Link>
      </div>
    </div>
  );
}
