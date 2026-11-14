"use client";

import * as React from "react";

import { track } from "@/lib/analytics";

/**
 * Counts clicks on the landing page's ways into the app: links marked [data-signup] or [data-signin], named after
 * where they sit (nav, hero, …). They're plain links to /login, where signing in with Google for the first time
 * creates the account.
 */
export function SignUpLinks() {
  React.useEffect(() => {
    function count(event: MouseEvent) {
      const link = (event.target as Element).closest<HTMLElement>("[data-signup], [data-signin]");
      if (!link) return;
      // The page is about to go, so the event is sent now rather than with the next batch.
      if (link.dataset.signin !== undefined) {
        track("sign in clicked", { location: link.dataset.signin || "nav" }, { send_instantly: true });
      } else {
        track("sign up clicked", { location: link.dataset.signup || "nav" }, { send_instantly: true });
      }
    }
    document.addEventListener("click", count);
    return () => document.removeEventListener("click", count);
  }, []);
  return null;
}
