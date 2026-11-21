import { getTranslations } from "next-intl/server";

import { Link } from "@/i18n/navigation";

/** The address people write to; the footers, /privacy and /terms all give this one. */
export const CONTACT_EMAIL = "info@crewmark.ai";

/**
 * Privacy, Terms and a plain mailto link to us (MC-360), in the bottom row of every public footer: the home page's and
 * GuideShell's, which frames every other marketing page.
 */
export async function LegalLinks() {
  const t = await getTranslations("Landing");
  return (
    <nav className="legal" aria-label={t("footer.legal")}>
      <Link href="/privacy">{t("footer.privacy")}</Link>
      <Link href="/terms">{t("footer.terms")}</Link>
      <a href={`mailto:${CONTACT_EMAIL}`}>{t("footer.contact")}</a>
    </nav>
  );
}
