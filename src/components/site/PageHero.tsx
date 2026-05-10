import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";
import { useReveal } from "../hooks/use-reveal";
import { HeroVideo } from "./HeroVideo";

type Props = {
  kicker: string;
  title: string;
  intro?: string;
  videoId: string;
  poster: string;
};

export function PageHero({ kicker, title, intro, videoId, poster }: Props) {
  useReveal();
  return (
    <section className="relative min-h-[80svh] overflow-hidden bg-charcoal text-cream">
      <HeroVideo videoId={videoId} poster={poster} />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />
      <div className="relative z-10 mx-auto max-w-[1480px] px-5 md:px-10 min-h-[80svh] flex flex-col justify-end pb-16 md:pb-24 pt-32">
        <div className="reveal kicker text-gold mb-5 flex items-center gap-3">
          <Link to="/" className="hover:text-cream transition-colors">Home</Link>
          <ChevronRight className="h-3 w-3" />
          <span>{kicker}</span>
        </div>
        <h1 className="reveal font-serif text-[clamp(2.6rem,7vw,7rem)] leading-[0.98] max-w-[18ch] text-balance">
          {title}
        </h1>
        {intro && (
          <p className="reveal mt-6 max-w-xl text-base md:text-lg text-cream/80 leading-relaxed">
            {intro}
          </p>
        )}
      </div>
    </section>
  );
}
