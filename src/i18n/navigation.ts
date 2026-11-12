import { createNavigation } from "next-intl/navigation";

import { routing } from "./routing";

// Locale-aware versions of Next's navigation APIs: <Link href="/pricing"> goes to /zh/pricing on a Chinese page.
export const { Link, redirect, usePathname, useRouter, getPathname } = createNavigation(routing);
