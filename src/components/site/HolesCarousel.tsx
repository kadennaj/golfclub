type Hole = {
  number: string;
  par: string;
  yardage: string;
  hdcp?: string;
  name: string;
  description: string;
  image: string;
};

export function HolesCarousel({ holes }: { holes: Hole[] }) {
  return (
    <div className="relative">
      <div className="flex gap-5 md:gap-7 overflow-x-auto snap-x snap-mandatory pb-8 px-5 md:px-10 -mx-5 md:-mx-10 scroll-smooth [scrollbar-width:thin]">
        {holes.map((h) => (
          <article
            key={h.number}
            className="reveal group relative shrink-0 w-[78vw] sm:w-[58vw] md:w-[44vw] lg:w-[34vw] snap-center bg-charcoal text-cream overflow-hidden"
          >
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src={h.image}
                alt={`Hole ${h.number} — ${h.name}`}
                loading="lazy"
                className="h-full w-full object-cover scale-105 group-hover:scale-110 transition-transform duration-[1400ms]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/30 to-transparent" />
            </div>
            <div className="absolute top-5 left-5 right-5 flex items-start justify-between">
              <div className="font-serif text-6xl md:text-7xl leading-none text-cream">
                {h.number}
              </div>
              <div className="text-right text-xs tracking-[0.2em] uppercase text-cream/75 mt-2">
                <div>Par {h.par}</div>
                <div className="mt-1">{h.yardage} yd</div>
                {h.hdcp && <div className="mt-1">HDCP {h.hdcp}</div>}
              </div>
            </div>
            <div className="absolute bottom-0 inset-x-0 p-6 md:p-8">
              <div className="kicker text-gold mb-2">{h.name}</div>
              <p className="mt-2 text-sm text-cream/80 max-w-[40ch] leading-relaxed">
                {h.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
