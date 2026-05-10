
# Richmond Hill Golf Club — Luxury Redesign Plan

A complete visual and structural overhaul transforming the site into a cinematic, resort-grade experience while preserving RHGC's logo, name, and core offerings (golf, memberships, events, lessons, simulators, dining, app).

## Drone Footage Assets

User-provided YouTube drone reels of the course — used throughout the site as cinematic background video:

- https://www.youtube.com/watch?v=6QR2QCSkXnI
- https://youtu.be/wsBTFZQ2rd0
- https://youtu.be/nadhgQrHMDc
- https://youtu.be/zkKFWa2x9DI

**How they're used:**
- **Hero**: full-bleed muted, autoplay, loop YouTube embed (privacy-enhanced `youtube-nocookie.com`) of the strongest aerial reel, with `?autoplay=1&mute=1&loop=1&controls=0&playsinline=1&modestbranding=1` and a poster image overlay until the iframe is ready. CSS `object-fit: cover` via a wrapping aspect-ratio container so the video fills the viewport on all screen sizes.
- **Signature holes section**: secondary reel as a looping background behind the carousel header.
- **Final CTA section**: third reel as a slow-motion full-bleed background behind the "Reserve Your Round" CTA.
- **Experience tiles**: short looped clips on hover for the Golf and Tournaments tiles (desktop only); static cinematic stills on mobile to save bandwidth.
- A dark gradient overlay sits above every video so the serif headlines stay legible.

**Fallback / performance:**
- Mobile (≤768px) and `prefers-reduced-motion` users get a still poster image instead of the iframe.
- Iframes are lazy-mounted via IntersectionObserver so only the hero loads on initial paint.
- If the user later supplies self-hosted MP4s, the same `<HeroVideo />` component swaps `<iframe>` for `<video>` without other changes.

## Design Direction

**Aesthetic:** cinematic luxury golf resort — emotional, immersive, photography-led, generous whitespace.

**Color palette (oklch tokens in `src/styles.css`):**
- Deep forest green (primary, rooted in existing RHGC green)
- Warm cream / bone (light surface)
- Charcoal near-black (dark surface / nav scrolled state)
- Soft beige / sand (accent)
- Muted gold (CTA + divider accent)

**Typography:** refined serif display (Cormorant Garamond or Fraunces) + clean sans (Inter Tight or Manrope), two weights each.

**Motion system:**
- Default entrance: fade + 16px rise, ease-out, IntersectionObserver-triggered
- Hero: slow Ken Burns zoom over the drone video
- Cards: hover scale 1.02, image desaturate→color
- Sticky nav: transparent over hero → frosted dark on scroll

## Site Structure (TanStack routes)

```
src/routes/
  __root.tsx        shell + Nav + Footer + font links
  index.tsx         homepage
  golf.tsx          course, tee times, signature holes
  membership.tsx    tiers + benefits
  events.tsx        weddings, corporate, tournaments
  dining.tsx        clubhouse dining
  lessons.tsx       academy, lessons, simulators
  app.tsx           mobile app showcase
  contact.tsx       contact + map
```

Each route has its own `head()` (title, description, og tags). Shared `<Nav />` and `<Footer />` in `__root.tsx`.

## Homepage Sections

1. **Cinematic hero** — full-viewport YouTube drone video, transparent nav overlay, serif headline "Toronto's Premier Public Golf Experience", primary CTA "Book Tee Time", ghost CTA "Explore Membership", scroll indicator
2. **Brand statement** — oversized serif quote, pure typography moment
3. **Experience grid** — alternating image/text tiles for Golf, Tournaments, Lessons, Events, Simulators, Dining, with parallax
4. **Signature holes carousel** — horizontal snap-scroll of 4–6 holes over a looped drone backdrop
5. **Animated stats** — 4 count-up milestones with hairline dividers
6. **Membership preview** — 3 glassmorphism tier cards on charcoal, gold accent on featured tier
7. **Events & weddings** — split layout, large venue image + elegant copy + 3 thumbs
8. **Mobile app** — tilted iPhone mockup, icon feature list, store badges
9. **Testimonials** — single rotating serif italic quote
10. **Final CTA** — full-bleed drone video with centered "Reserve Your Round"
11. **Footer** — dark charcoal, embedded map, columns (Visit / Play / Connect / Newsletter), social row, RHGC logo

## Components (`src/components/`)

`Nav.tsx`, `Footer.tsx`, `HeroVideo.tsx` (YouTube iframe + poster + overlay), `SectionHeading.tsx`, `ExperienceTile.tsx`, `HolesCarousel.tsx`, `StatCounter.tsx`, `MembershipCard.tsx`, `TestimonialRotator.tsx`, `RevealOnScroll.tsx`, `ParallaxImage.tsx`, `CTAButton.tsx` (cva variants).

## Imagery

- Hero/section drone backgrounds: the four YouTube reels above
- Stills: reuse existing RHGC photography where available; supplement with generated cinematic golf imagery (golden-hour fairways, clubhouse interior, signature greens) as placeholders
- All `<img>` lazy-loaded with explicit dimensions

## Technical Notes

- Tailwind v4 tokens added to `src/styles.css` in oklch (forest, cream, charcoal, sand, gold), semantic tokens remapped for light + dark
- Mobile-first: nav collapses to frosted full-screen drawer; experience grid stacks; carousels become swipe; hero video → poster image
- Animations via CSS + small IntersectionObserver hook — no heavy animation library
- Per-route SEO with unique `head()`
- Performance: lazy-mount YouTube iframes, lazy-load below-fold images, font preconnect

## Out of Scope (this pass)

Live tee-time booking integration, CMS, e-commerce, member auth.

After approval I'll scaffold tokens + routes + shared layout first, then build the homepage section by section, then secondary routes.
