import { hasLocale } from "next-intl";
import { getRequestConfig } from "next-intl/server";
import { notFound } from "next/navigation";
import { locale as rootLocale } from "next/root-params";

import { routing } from "./routing";

// The locale comes from the [locale] root segment, which keeps localized pages statically rendered. An explicit
// locale (getTranslations({ locale })) wins, for the places root params can't reach: Route Handlers and Server
// Actions.
export default getRequestConfig(async ({ locale: requested }) => {
  const locale = requested ?? (await rootLocale());
  if (!hasLocale(routing.locales, locale)) notFound();
  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
});
