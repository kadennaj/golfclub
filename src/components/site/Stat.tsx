import { useEffect, useRef, useState } from "react";

type Props = { value: number; suffix?: string; label: string; kicker?: string };

export function Stat({ value, suffix = "", label, kicker }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [n, setN] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        io.disconnect();
        const start = performance.now();
        const dur = 1800;
        const tick = (t: number) => {
          const p = Math.min(1, (t - start) / dur);
          const eased = 1 - Math.pow(1 - p, 3);
          setN(Math.round(value * eased));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      });
    });
    io.observe(el);
    return () => io.disconnect();
  }, [value]);

  return (
    <div ref={ref} className="reveal py-10 md:py-14">
      {kicker && <div className="kicker text-gold mb-3">{kicker}</div>}
      <div className="font-serif text-5xl md:text-6xl lg:text-7xl text-cream leading-none">
        {n.toLocaleString()}
        <span className="text-gold">{suffix}</span>
      </div>
      <div className="mt-4 text-sm text-cream/60 max-w-[18ch]">{label}</div>
    </div>
  );
}
