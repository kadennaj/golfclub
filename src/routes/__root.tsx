import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { Nav } from "../components/site/Nav";
import { Footer } from "../components/site/Footer";

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
  console.error(error);
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
            onClick={() => { router.invalidate(); reset(); }}
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

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Richmond Hill Golf Club — Public Golf in Richmond Hill, Ontario" },
      {
        name: "description",
        content:
          "A fully public 18-hole parkland golf course in Richmond Hill, Ontario. Tee times, lessons, simulators, tournaments and the Richvale Room — open to everyone.",
      },
      { property: "og:title", content: "Richmond Hill Golf Club" },
      {
        property: "og:description",
        content: "Public golf in Richmond Hill, Ontario. 18 holes · Par 70 · open to everyone.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
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
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <Nav />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </QueryClientProvider>
  );
}
