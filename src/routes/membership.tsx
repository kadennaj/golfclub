import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/membership")({
  beforeLoad: () => {
    throw redirect({ to: "/elite-prepaid-membership", replace: true });
  },
});
