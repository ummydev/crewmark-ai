import posthog from "posthog-js";

import { posthogConfig, posthogKey } from "@/lib/posthog-config";

// PostHog web analytics (pageviews, sessions, web vitals) and product analytics (autocapture plus the events
// sent through lib/analytics). See lib/posthog-config for when it sends anything.
if (posthogKey) posthog.init(posthogKey, posthogConfig);
