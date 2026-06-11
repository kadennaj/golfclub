import rhgcLogo from "../../assets/brand/rhgc-logo.png";
import academyLogo from "../../assets/brand/academy-logo.png";

type Props = { className?: string; tone?: "light" | "dark"; variant?: "club" | "academy" };

export function Logo({ className = "", tone = "light", variant = "club" }: Props) {
  const filter = tone === "light" ? "brightness(0) invert(1)" : "none";
  const src = variant === "academy" ? academyLogo : rhgcLogo;
  const alt = variant === "academy" ? "Richmond Hill Golf Academy" : "Richmond Hill Golf Club";
  const size = variant === "academy" ? "h-14" : "h-11";

  return (
    <img
      src={src}
      alt={alt}
      className={`${size} w-auto object-contain ${className}`}
      style={{ filter }}
    />
  );
}
