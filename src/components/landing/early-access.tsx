"use client";

import * as React from "react";
import { useTranslations } from "next-intl";
import posthog from "posthog-js";

import { track } from "@/lib/analytics";

/**
 * The Get early access dialog. Crewmark is invite-only for now, so Sign in and every way into the app on the
 * landing page (any [data-early-access] button, named after where it sits) open this instead.
 */
export function EarlyAccess() {
  const t = useTranslations("Landing.earlyAccess");
  const dialog = React.useRef<HTMLDialogElement>(null);
  const form = React.useRef<HTMLFormElement>(null);
  const input = React.useRef<HTMLInputElement>(null);
  const doneButton = React.useRef<HTMLButtonElement>(null);
  const location = React.useRef("nav");
  const [invalid, setInvalid] = React.useState(false);
  const [sentTo, setSentTo] = React.useState<string | null>(null);

  React.useEffect(() => {
    function open(event: MouseEvent) {
      const trigger = (event.target as Element).closest<HTMLElement>("[data-early-access]");
      if (!trigger) return;
      location.current = trigger.dataset.earlyAccess ?? "nav";
      track(trigger.hasAttribute("data-signin") ? "sign in clicked" : "early access clicked", {
        location: location.current,
      });
      dialog.current?.showModal();
      input.current?.focus();
    }
    document.addEventListener("click", open);
    return () => document.removeEventListener("click", open);
  }, []);

  React.useEffect(() => {
    if (sentTo) doneButton.current?.focus();
  }, [sentTo]);

  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const email = input.current!.value.trim().toLowerCase();
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    setInvalid(!valid);
    if (!valid) return input.current!.focus();
    // The one event that carries personal data: the email a visitor leaves to be invited.
    if (posthog.__loaded) {
      posthog.identify(email, { email });
      posthog.capture("early access requested", { email, location: location.current }, { send_instantly: true });
    }
    setSentTo(email);
  }

  return (
    <dialog
      ref={dialog}
      className={sentTo ? "ea sent" : "ea"}
      aria-labelledby="ea-title"
      // A click on the dialog itself, outside its body, is a click on the backdrop.
      onClick={(event) => event.target === event.currentTarget && dialog.current?.close()}
      onClose={() => {
        if (!sentTo) return;
        setSentTo(null);
        form.current?.reset();
      }}
    >
      <div className="ea-body">
        <button type="button" className="ea-close" aria-label={t("close")} onClick={() => dialog.current?.close()}>
          <svg width="16" height="16" viewBox="0 0 24 24">
            <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
        <div className="ea-form-view">
          <svg className="ea-mark" viewBox="1.4 3.7 28 28">
            <use href="#logo-cm" />
          </svg>
          <h2 id="ea-title">{t("title")}</h2>
          <p>{t("text")}</p>
          <form ref={form} noValidate onSubmit={submit}>
            <label htmlFor="ea-email">{t("email")}</label>
            <input
              ref={input}
              id="ea-email"
              name="email"
              type="email"
              autoComplete="email"
              inputMode="email"
              placeholder={t("placeholder")}
              aria-describedby="ea-error"
              aria-invalid={invalid}
              required
              onInput={() => setInvalid(false)}
            />
            <p className="ea-error" id="ea-error" role="alert" hidden={!invalid}>
              {t("invalid")}
            </p>
            <button type="submit" className="btn btn-dark">
              {t("submit")}
            </button>
          </form>
          <p className="ea-fine">{t("fine")}</p>
        </div>
        <div className="ea-done" aria-live="polite">
          <span className="ea-check">
            <svg>
              <use href="#i-check" />
            </svg>
          </span>
          <h2>{t("doneTitle")}</h2>
          <p>{t.rich("doneText", { email: sentTo ?? "", b: (chunks) => <b>{chunks}</b> })}</p>
          <button ref={doneButton} type="button" className="btn btn-line" onClick={() => dialog.current?.close()}>
            {t("done")}
          </button>
        </div>
      </div>
    </dialog>
  );
}
