import { useEffect, useRef, useState } from "react";

type Props = {
  /** MP4 URL (served from /public). */
  src: string;
  poster: string;
  className?: string;
};

/**
 * Cinematic background video. Native muted/looped <video> — no controls,
 * no captions, no UI. Falls back to still image on mobile / reduced-motion.
 * Slight scale crop hides any baked-in watermark / lower-third text along the edges.
 */
export function HeroVideo({ src, poster, className = "" }: Props) {
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
        <video
          src={src}
          poster={poster}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          disablePictureInPicture
          controlsList="nodownload nofullscreen noremoteplayback"
          tabIndex={-1}
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover scale-[1.6] origin-center pointer-events-none select-none"
        />
      )}
    </div>
  );
}
