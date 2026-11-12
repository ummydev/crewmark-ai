import type messages from "../messages/en.json";
import type { routing } from "./i18n/routing";

// English is the source of truth for message keys, so a typo in t("...") fails type checking.
declare module "next-intl" {
  interface AppConfig {
    Locale: (typeof routing.locales)[number];
    Messages: typeof messages;
  }
}
