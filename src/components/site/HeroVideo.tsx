import { useEffect, useRef, useState } from "react";

type Props = {
  videoId: string;
  poster: string;
  className?: string;
  /** Start offset in seconds for the loop. */
  start?: number;
};

/**
 * Cinematic background YouTube embed. Lazy-mounts on viewport, falls back to
 * still image on mobile / reduced-motion. Iframe is styled to cover its parent
 * while preserving 16:9 to avoid letterboxing.
 */
export function HeroVideo({ videoId, poster, className = "", start = 0 }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [mount, setMount] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const small = window.matchMedia("(max-width: 768px)").matches;
    if (reduced || small) return;

    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setMount(true);
            io.disconnect();
          }
        });
      },
      { rootMargin: "200px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const src = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${videoId}&playsinline=1&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3&disablekb=1&fs=0&cc_load_policy=0&start=${start}`;

  return (
    <div ref={ref} className={`absolute inset-0 overflow-hidden ${className}`}>
      <img
        src={poster}
        alt=""
        aria-hidden="true"
        className={`absolute inset-0 h-full w-full object-cover ken-burns ${
          mount ? "opacity-0" : "opacity-100"
        } transition-opacity duration-700`}
      />
      {mount && (
        <div className="absolute inset-0 select-none">
          {/* Scale up to crop YT chrome + any baked-in lower-third overlays from source footage */}
          <iframe
            title="Course aerial"
            src={src}
            allow="autoplay; encrypted-media"
            tabIndex={-1}
            aria-hidden="true"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[56.25vw] min-h-full w-[177.78vh] min-w-full border-0 scale-[1.35] origin-center pointer-events-none"
          />
          {/* Click-shield ABOVE the iframe — captures every pointer event so YT
              never receives a hover/click that would surface the play/pause UI. */}
          <div
            aria-hidden="true"
            className="absolute inset-0 z-10"
            style={{ pointerEvents: "auto" }}
            onClick={(e) => e.preventDefault()}
          />
        </div>
      )}
    </div>
  );
}
