// The open-source copy has no studios: Marketing Studio isn't part of it (MC-467).

import type * as React from "react";
import type { LucideIcon } from "lucide-react";

export const STUDIO_PAGES: readonly { path: string; label: string; icon: LucideIcon }[] = [];
/** Draws nothing: there are no studio pages to open. */
export function MarketingStudioView(props: { tab: string }): React.ReactNode {
  void props;
  return null;
}
