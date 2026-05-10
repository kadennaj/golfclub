type Props = { className?: string; tone?: "light" | "dark" };

export function Logo({ className = "", tone = "light" }: Props) {
  const stroke = tone === "light" ? "currentColor" : "currentColor";
  return (
    <div className={`flex items-center gap-2.5 ${className}`} aria-label="Richmond Hill Golf Club">
      <svg viewBox="0 0 40 40" className="h-9 w-9" fill="none" stroke={stroke} strokeWidth={1.2}>
        <circle cx="20" cy="20" r="18.5" />
        <path d="M20 6 v18 M20 24 l9 -5 -9 -5" strokeLinejoin="round" strokeLinecap="round" />
        <circle cx="20" cy="32" r="1.6" fill="currentColor" stroke="none" />
      </svg>
      <div className="leading-[0.95] font-serif">
        <div className="text-[0.95rem] tracking-[0.18em] uppercase">Richmond Hill</div>
        <div className="text-[0.62rem] tracking-[0.42em] uppercase opacity-80">Golf Club</div>
      </div>
    </div>
  );
}
