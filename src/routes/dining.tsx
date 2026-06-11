import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/dining")({
  beforeLoad: () => {
    throw redirect({ to: "/events" });
  },
});
