import type { Locale } from "next-intl";
import { ImageResponse } from "next/og";

// The card shown when a marketing page is shared on X, LinkedIn, Slack, WeChat and the like: the Crewmark logo, a
// headline with a yellow marker under its key words, and a line underneath. Each page's opengraph-image file passes
// its own text.

export const shareCardSize = { width: 1200, height: 630 };

// Inter covers the Latin-script languages; CJK needs a Noto Sans for its own script.
const FONT_FAMILY = {
  en: "Inter",
  es: "Inter",
  "pt-BR": "Inter",
  fr: "Inter",
  de: "Inter",
  zh: "Noto Sans SC",
  "zh-TW": "Noto Sans TC",
  ja: "Noto Sans JP",
  ko: "Noto Sans KR",
} satisfies Record<Locale, string>;

/** A font subset with just the characters in `text`. Asked without a browser user agent, Google Fonts returns
 * TrueType, which next/og can read. Cached so the image is still prerendered. */
async function loadFont(family: string, weight: number, text: string) {
  "use cache";
  const query = `family=${family.replaceAll(" ", "+")}:wght@${weight}&text=${encodeURIComponent(text)}`;
  const css = await (await fetchWithRetry(`https://fonts.googleapis.com/css2?${query}`)).text();
  const src = css.match(/src: url\((.+?)\) format\('(?:opentype|truetype)'\)/)?.[1];
  if (!src) throw new Error(`Google Fonts returned no font file for ${family} ${weight}`);
  return (await fetchWithRetry(src)).arrayBuffer();
}

/** fetch, tried up to three times. The build renders every share card in every language, so one dropped connection
 * to Google Fonts would otherwise fail the whole deploy. */
async function fetchWithRetry(url: string, attempts = 3): Promise<Response> {
  for (let attempt = 1; ; attempt++) {
    try {
      const response = await fetch(url);
      if (response.ok || attempt === attempts) return response;
    } catch (error) {
      if (attempt === attempts) throw error;
    }
    await new Promise((resolve) => setTimeout(resolve, 500 * attempt));
  }
}

/** One line of the headline; `marked` gets the yellow marker. */
export type ShareCardLine = { before: string; marked?: string; after?: string };

/** Splits a message like "Hire AI employees<br></br>that <mark>hit their numbers.</mark>" into headline lines. */
export function shareCardLines(raw: string): ShareCardLine[] {
  return raw.split("<br></br>").map((line) => {
    const [before, marked = "", after = ""] = line.split(/<\/?mark>/);
    return { before, marked, after };
  });
}

export async function shareCard({
  locale,
  lines: headline,
  footer,
}: {
  locale: Locale;
  lines: ShareCardLine[];
  footer: string;
}) {
  const lines = headline.map(({ before, marked = "", after = "" }) => ({ before, marked, after }));

  // Shrink the headline until its longest line fits the 1040px between the margins. A CJK character is about 1em
  // wide in bold, a Latin one about 0.58em.
  const ems = (s: string) => [...s].reduce((sum, c) => sum + (c.codePointAt(0)! >= 0x2e80 ? 1 : 0.58), 0);
  const longest = Math.max(...lines.map((l) => ems(l.before + l.marked + l.after)));
  const fontSize = Math.min(78, Math.floor(1040 / longest));

  const family = FONT_FAMILY[locale];
  const text = ["Crewmark", "crewmark.ai", footer, ...lines.map((l) => l.before + l.marked + l.after)].join("");
  const [bold, regular] = await Promise.all([loadFont(family, 700, text), loadFont(family, 500, text)]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 80px",
          background: "#ffffff",
          color: "#171717",
          fontFamily: family,
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 34, fontWeight: 700 }}>
            <svg width="56" height="56" viewBox="0 0 32 32">
              <rect width="32" height="32" rx="7" fill="#1f1f1f" />
              <g
                transform="translate(16 16) scale(0.8) translate(-15.4 -17.7)"
                fill="none"
                strokeWidth="3.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M11.6 13.2 A4.6 4.6 0 1 0 11.6 20.8" stroke="#F3CE49" />
                <path
                  d="M15.6 23 V16.4 A2.7 2.7 0 0 1 21 16.4 V23 M21 16.4 A2.7 2.7 0 0 1 26.4 16.4 V23"
                  stroke="#ffffff"
                />
              </g>
            </svg>
            Crewmark
          </div>
          <span style={{ fontSize: 26, fontWeight: 500, color: "#5f5f5b" }}>crewmark.ai</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", fontSize, fontWeight: 700, lineHeight: 1.12 }}>
          {lines.map((line, i) => (
            <div key={i} style={{ display: "flex", flexWrap: "wrap" }}>
              {line.before && <span style={{ whiteSpace: "pre" }}>{line.before}</span>}
              {line.marked && (
                <div style={{ display: "flex", position: "relative" }}>
                  {/* The yellow marker stroke under the words, as on the landing page. */}
                  <div
                    style={{
                      position: "absolute",
                      left: -4,
                      right: -4,
                      bottom: Math.round(fontSize * 0.13),
                      height: Math.round(fontSize * 0.23),
                      background: "#f3ce49",
                      borderRadius: 4,
                    }}
                  />
                  <span style={{ whiteSpace: "pre" }}>{line.marked}</span>
                </div>
              )}
              {line.after && <span style={{ whiteSpace: "pre" }}>{line.after}</span>}
            </div>
          ))}
        </div>

        <div style={{ display: "flex", fontSize: 26, fontWeight: 500, color: "#5f5f5b", whiteSpace: "pre" }}>
          {footer}
        </div>
      </div>
    ),
    {
      ...shareCardSize,
      fonts: [
        { name: family, data: bold, weight: 700, style: "normal" },
        { name: family, data: regular, weight: 500, style: "normal" },
      ],
    },
  );
}
