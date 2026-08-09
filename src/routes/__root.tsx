import {
  Outlet,
  Link,
  createRootRoute,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

import appCss from "../styles.css?url";
import { Nav } from "../components/site/Nav";
import { Footer } from "../components/site/Footer";

const SITE_URL = "https://www.richmondhillgolf.com";
const SOCIAL_IMAGE_URL = `${SITE_URL}/og/richmond-hill-golf-club.jpg`;

const golfCourseStructuredData = {
  "@context": "https://schema.org",
  "@type": "GolfCourse",
  "@id": `${SITE_URL}/#golf-course`,
  name: "Richmond Hill Golf Club",
  description:
    "A fully public 18-hole parkland golf course with an academy, dining, practice facilities, leagues and events in Richmond Hill, Ontario.",
  url: `${SITE_URL}/`,
  image: SOCIAL_IMAGE_URL,
  logo: `${SITE_URL}/rhgc-logo.png`,
  telephone: "+1-905-889-4653",
  email: "info@richmondhillgolf.com",
  publicAccess: true,
  currenciesAccepted: "CAD",
  address: {
    "@type": "PostalAddress",
    streetAddress: "8755 Bathurst Street",
    addressLocality: "Richmond Hill",
    addressRegion: "ON",
    postalCode: "L4C 0H4",
    addressCountry: "CA",
  },
};

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-cream px-4 text-charcoal">
      <div className="max-w-md text-center">
        <div className="kicker text-forest mb-4">404</div>
        <h1 className="font-serif text-5xl md:text-6xl">Out of bounds.</h1>
        <p className="mt-4 text-charcoal/60">
          The page you're looking for has drifted off the fairway.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex items-center px-6 py-3 text-xs tracking-[0.24em] uppercase bg-forest text-cream hover:bg-charcoal transition-colors"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  if (import.meta.env.DEV) {
    console.error(error);
  }
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center bg-cream px-4 text-charcoal">
      <div className="max-w-md text-center">
        <div className="kicker text-forest mb-4">Pause</div>
        <h1 className="font-serif text-4xl md:text-5xl">This page didn't load.</h1>
        <p className="mt-4 text-charcoal/60 text-sm">
          Something went wrong on our end. Try again, or head home.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="px-6 py-3 text-xs tracking-[0.24em] uppercase bg-forest text-cream hover:bg-charcoal transition-colors"
          >
            Try Again
          </button>
          <a
            href="/"
            className="px-6 py-3 text-xs tracking-[0.24em] uppercase border border-charcoal/30 hover:bg-charcoal hover:text-cream transition-colors"
          >
            Home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Richmond Hill Golf Club — Public Golf in Richmond Hill, Ontario" },
      {
        name: "description",
        content:
          "A fully public 18-hole parkland golf course in Richmond Hill, Ontario. Tee times, academy, dining, practice facilities, leagues and events — open to everyone.",
      },
      { property: "og:title", content: "Richmond Hill Golf Club" },
      {
        property: "og:description",
        content: "Public golf in Richmond Hill, Ontario. 18 holes · Par 70 · open to everyone.",
      },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Richmond Hill Golf Club" },
      { property: "og:locale", content: "en_CA" },
      { property: "og:image", content: SOCIAL_IMAGE_URL },
      { property: "og:image:width", content: "2400" },
      { property: "og:image:height", content: "1500" },
      {
        property: "og:image:alt",
        content: "The course at Richmond Hill Golf Club",
      },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: SOCIAL_IMAGE_URL },
      { name: "twitter:image:alt", content: "The course at Richmond Hill Golf Club" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/png", sizes: "512x512", href: "/favicon.png" },
      { rel: "apple-touch-icon", href: "/favicon.png" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(golfCourseStructuredData) }}
        />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <>
      <Nav />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
      <Analytics />
      <SpeedInsights />
    </>
  );
}
