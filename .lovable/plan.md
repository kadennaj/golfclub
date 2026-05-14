## Plan

### 1. Add uploaded videos as project assets
Copy the four uploaded MP4s into `public/videos/`:
- `Hole_1_Flyover_1.mp4` → `public/videos/hole-1.mp4`
- `Hole5.mp4` → `public/videos/hole-5.mp4`
- `Hole_13_Flyover.mp4` → `public/videos/hole-13.mp4`
- `hole18.mp4` → `public/videos/hole-18.mp4`

### 2. Replace `HeroVideo` (YouTube iframe) with a native muted `<video>`
Rewrite `src/components/site/HeroVideo.tsx` to:
- Accept a `src` prop (mp4 URL) instead of `videoId`
- Render `<video autoplay muted loop playsinline preload="metadata">` covering the parent (object-cover, full-bleed)
- No controls, no captions, no UI — `controls` omitted, `controlsList="nodownload nofullscreen noremoteplayback"`, `disablePictureInPicture`
- Keep the poster fallback + reduced-motion / mobile bail-out
- Slight scale crop (`scale-105`) to safely hide any source watermark/lower-third text along the bottom edge (uploaded clips appear to have on-screen text)
- Drop the click-shield (no longer needed without YouTube chrome)

### 3. Update all callers from `videoId` → `src`
Map current YouTube IDs to nearest uploaded clip:
- `index.tsx` HERO (`6QR2QCSkXnI`) → `/videos/hole-1.mp4`
- `index.tsx` Signature section bg (`wsBTFZQ2rd0`) → `/videos/hole-5.mp4`
- `index.tsx` FINAL CTA (`nadhgQrHMDc`) → `/videos/hole-18.mp4`
- `golf.tsx` PageHero (`6QR2QCSkXnI`) → `/videos/hole-1.mp4`
- Any other `PageHero` callers → reuse `/videos/hole-13.mp4` as a generic course flyover

`PageHero` will pass `src` through to `HeroVideo`.

### 4. Replace Signature Holes with full 18-hole walkthrough
On `src/routes/index.tsx`:
- Replace the `HOLES` array with all 18 holes (number, par, yardage, hdcp, description) sourced from richmondhillgolf.com/golf/
- Rename the section heading from "Signature Holes / Four holes…" to **"Hole-by-Hole / A walk through all eighteen."**
- Keep using `HolesCarousel` (already horizontally scrollable — works for 18 cards). Add an `hdcp` field to the `Hole` type and show it in the top-right meta block alongside Par/Yardage.
- For card images, cycle through the existing `hole-1..hole-4.jpg` assets (4 real photos repeated) since we only have 4 course photos. No new image generation.

Apply the same 18-hole list to `src/routes/golf.tsx` (its Signature Holes carousel) so both pages stay consistent.

### Technical notes
- MP4s served from `/public/videos/` as static assets — referenced by URL string, not ES import.
- Native `<video muted>` + `playsInline` is required for iOS autoplay.
- No business logic / routes / styling tokens change.