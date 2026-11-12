import type { Metadata } from "next";
import type { CSSProperties, ReactNode } from "react";
import type { Locale } from "next-intl";
import { getLocale, getTranslations } from "next-intl/server";

import { EarlyAccess } from "@/components/landing/early-access";
import { HeroBoard } from "@/components/landing/hero-board";
import { LandingIcons } from "@/components/landing/landing-icons";
import { LandingMotion } from "@/components/landing/landing-motion";
import { ShiftDemo } from "@/components/landing/shift-demo";
import { JsonLd } from "@/components/json-ld";
import { type GuideHref, guideLocale, guides } from "@/i18n/guides";
import { localizedMetadata } from "@/i18n/metadata";
import { getPathname, Link } from "@/i18n/navigation";
import { localeNames, routing } from "@/i18n/routing";
import { homeStructuredData } from "@/lib/structured-data";

export async function generateMetadata(): Promise<Metadata> {
  const [locale, t] = await Promise.all([getLocale(), getTranslations("Landing.meta")]);
  return localizedMetadata({ href: "/", locale, title: t("title"), description: t("description") });
}

/** When a step of a .play sequence rises in, as a delay after the block comes into view. */
const at = (delay: string) => ({ "--t": delay }) as CSSProperties;
const bold = (chunks: ReactNode) => <b>{chunks}</b>;

const RUNTIMES = [
  ["logo-claude", "Claude Code"],
  ["logo-codex", "Codex"],
  ["logo-deepseek", "DeepSeek Harness"],
  ["logo-opencode", "OpenCode"],
] as const;

// Avatar letter and colour, and the reveal delay that staggers each row of three.
const PRESETS = [
  { id: "seo", initial: "S", avatar: "s", delay: "", demo: true },
  { id: "growth", initial: "G", avatar: "g", delay: " d1" },
  { id: "social", initial: "N", avatar: "n", delay: " d2" },
  { id: "engineer", initial: "A", avatar: "a", delay: "" },
  { id: "ui", initial: "U", avatar: "y", delay: " d1" },
  { id: "app", initial: "M", avatar: "s", delay: " d2" },
] as const;
const DELAYS = ["", " d1", " d2"];

export default async function LandingPage() {
  const [locale, t] = await Promise.all([getLocale(), getTranslations("Landing")]);

  return (
    <>
      <JsonLd
        data={homeStructuredData({
          locale,
          title: t("meta.title"),
          description: t("meta.description"),
          faq: (t.raw("faq.items") as { q: string; a: string }[]).map(({ q, a }) => ({ q, a: a.replace(/<\/?guide>/g, "") })),
        })}
      />
      <LandingIcons />

      <nav className="nav" id="nav">
        <div className="container">
          <a className="brand" href="#top">
            <svg>
              <use href="#logo-cm" />
            </svg>
            Crewmark
          </a>
          <div className="nav-links">
            <a href="#features">{t("nav.features")}</a>
            <a href="#how">{t("nav.how")}</a>
            <a href="#marketplace">{t("nav.marketplace")}</a>
            <a href="#faq">{t("nav.faq")}</a>
          </div>
          <div className="nav-right">
            <button type="button" className="signin" data-signin data-early-access="nav">
              {t("nav.signIn")}
            </button>
            <button type="button" className="btn btn-dark btn-sm" data-early-access="nav">
              {t("nav.getStarted")}
            </button>
          </div>
        </div>
      </nav>

      <main id="top">
        {/* 1. Hero */}
        <header className="hero container">
          <h1 className="reveal">
            {t.rich("hero.title", { br: () => <br />, mark: (chunks) => <span className="mark">{chunks}</span> })}
          </h1>
          <p className="sub reveal d1">{t("hero.sub")}</p>
          <div className="actions reveal d2">
            <button type="button" className="btn btn-dark" data-early-access="hero">
              {t("hero.hire")} <Arrow />
            </button>
            <a className="btn btn-line" href="#how">
              {t("hero.seeHow")}
            </a>
          </div>
          <div className="runs-on reveal d2">
            {t("hero.runsOn")}
            {RUNTIMES.map(([logo, name]) => (
              <span key={logo}>
                <Logo id={logo} />
                {name}
              </span>
            ))}
          </div>
        </header>

        {/* 2. Product window */}
        <div className="showcase reveal">
          <div className="showcase-bg">
            <div className="window" aria-label={t("window.label")}>
              <div className="window-bar">
                <i />
                <i />
                <i />
                <span className="url">app.crewmark.ai/issues</span>
              </div>
              <div className="app">
                <aside className="app-side">
                  <div className="ws">
                    <svg>
                      <use href="#logo-cm" />
                    </svg>
                    Crewmark
                  </div>
                  <a className="on">
                    <Icon id="i-issues" />
                    {t("window.issues")}
                  </a>
                  <a>
                    <Icon id="i-users" />
                    {t("window.employees")}
                  </a>
                  <a>
                    <Icon id="i-chat" />
                    {t("window.chats")}
                  </a>
                  <a>
                    <Icon id="i-store" />
                    {t("window.marketplace")}
                  </a>
                  <div className="grp">{t("window.projects")}</div>
                  <a>
                    <span className="dot">📈</span>
                    {t("demo.board.project")}
                  </a>
                  <a>
                    <span className="dot">🚀</span>
                    {t("window.appProject")}
                  </a>
                  <div className="grp">{t("window.employees")}</div>
                  {(
                    [
                      ["Sage", "s"],
                      ["Ada", "a"],
                      ["Gus", "g"],
                      ["Nova", "n"],
                    ] as const
                  ).map(([name, avatar]) => (
                    <a key={name}>
                      <span className={`av ${avatar}`} style={{ width: 18, height: 18, fontSize: 9 }}>
                        {name[0]}
                      </span>
                      {name}
                    </a>
                  ))}
                </aside>
                <HeroBoard />
              </div>
            </div>
          </div>
        </div>

        {/* 3.1 Hire with a goal */}
        <section className="block container" id="features">
          <div className="feature">
            <FeatureText id="hire" />
            <div className="visual reveal d1 play" data-loop="9000">
              <div className="panel">
                <div className="panel-head">
                  {t("hire.newEmployee")} <span className="x">✕</span>
                </div>
                <div className="panel-body">
                  <div className="two seq" style={at(".1s")}>
                    <div className="field">
                      <label>{t("hire.name")}</label>
                      <div className="input">
                        <span className="av s" style={{ width: 20, height: 20, fontSize: 10 }}>
                          S
                        </span>
                        Sage
                      </div>
                    </div>
                    <div className="field">
                      <label>{t("hire.role")}</label>
                      <div className="input focus">
                        <span className="typed">{t("hire.roleValue")}</span>
                      </div>
                    </div>
                  </div>
                  <div className="field seq" style={at("1.5s")}>
                    <label>{t("hire.goal")}</label>
                    <div className="input">
                      {t("hire.goalMetric")} <b style={{ marginLeft: "auto", fontWeight: 600 }}>{t("hire.goalValue")}</b>
                    </div>
                  </div>
                  <div className="two seq" style={at("1.9s")}>
                    <div className="field">
                      <label>{t("hire.hours")}</label>
                      <div className="input">09:00 – 18:00</div>
                    </div>
                    <div className="field">
                      <label>{t("hire.heartbeat")}</label>
                      <div className="seg">
                        <span>{t("hire.hb15")}</span>
                        <span className="on">{t("hire.hb30")}</span>
                        <span>{t("hire.hb60")}</span>
                      </div>
                    </div>
                  </div>
                  <div className="field seq" style={at("2.3s")}>
                    <label>{t("hire.runsOn")}</label>
                    <div className="input">
                      <Logo id="logo-claude" />
                      Claude Code{" "}
                      <span style={{ marginLeft: "auto", color: "var(--faint)", fontSize: 12.5 }}>{t("hire.plan")}</span>
                    </div>
                  </div>
                  <div className="hire-btn seq" style={at("2.7s")}>
                    {t("hire.hireButton", { name: "Sage" })}
                    <span className="done">{t("hire.hired", { name: "Sage" })}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3.2 Hours and heartbeat (interactive) */}
        <section className="block container" id="schedule">
          <div className="center reveal">
            <span className="kicker">{t("schedule.kicker")}</span>
            <h2>{t("schedule.title")}</h2>
            <p className="lead">{t("schedule.lead")}</p>
          </div>
          <ShiftDemo />
        </section>

        {/* 3.3 Bring your own agent */}
        <section className="block container">
          <div className="feature flip">
            <FeatureText id="agents" />
            <div className="visual reveal d1 play" data-loop="8000">
              <div className="panel">
                <div className="panel-head">{t("agents.panel")}</div>
                <div className="panel-body" style={{ gap: 0, paddingTop: 6, paddingBottom: 6 }}>
                  <div className="agent-row">
                    <Logo id="logo-claude" />
                    <div className="nm">
                      Claude Code<small>{t("agents.claudePlan")}</small>
                    </div>
                    <span className="tog flip on" style={at(".7s")} />
                  </div>
                  <div className="agent-row">
                    <Logo id="logo-codex" />
                    <div className="nm">
                      Codex<small>{t("agents.codexPlan")}</small>
                    </div>
                    <span className="tog flip on" style={at("1.3s")} />
                  </div>
                  <div className="agent-row">
                    <Logo id="logo-deepseek" />
                    <div className="nm">
                      DeepSeek Harness<small>{t("agents.detected")}</small>
                    </div>
                    <span className="tog" />
                  </div>
                  <div className="agent-row">
                    <Logo id="logo-opencode" />
                    <div className="nm">
                      OpenCode<small>{t("agents.detected")}</small>
                    </div>
                    <span className="tog" />
                  </div>
                </div>
              </div>
              <div className="zero seq" style={at("1.9s")}>
                <b>$0</b>
                <span>{t("agents.zeroCost")}</span>
              </div>
            </div>
          </div>
        </section>

        {/* 3.4 Board */}
        <section className="block container">
          <div className="feature">
            <FeatureText id="board" />
            <div className="visual reveal d1 play" data-loop="9000">
              <div className="panel">
                <div className="panel-body">
                  <span className="key" style={{ color: "var(--faint)", fontSize: 13 }}>
                    CM-41
                  </span>
                  <div className="issue-title">{t("board.issue")}</div>
                  <div className="props">
                    <span className="chip status">
                      <span>
                        <i className="st" />
                        {t("demo.board.columns.todo")}
                      </span>
                      <span>
                        <i className="st progress" />
                        {t("demo.board.columns.progress")}
                      </span>
                      <span>
                        <i className="st review" />
                        {t("demo.board.columns.review")}
                      </span>
                    </span>
                    <span className="chip">
                      <span className="av s">S</span>Sage
                    </span>
                    <span className="chip">
                      <span className="pri high" style={{ height: "auto", padding: 0, background: "none" }}>
                        {t("demo.board.priority.high")}
                      </span>
                    </span>
                    <span className="chip">📈 {t("demo.board.project")}</span>
                  </div>
                  <div className="activity">
                    <h5>{t("board.activity")}</h5>
                    <div className="act seq" style={at(".3s")}>
                      <span className="ico">
                        <svg width="12" height="12">
                          <use href="#i-plus" />
                        </svg>
                      </span>
                      <span>{t.rich("board.created", { name: "Sage", b: bold })}</span>
                      <time>09:12</time>
                    </div>
                    <div className="act seq" style={at("1.8s")}>
                      <span className="av s">S</span>
                      <span>{t.rich("board.picked", { name: "Sage", b: bold })}</span>
                      <time>09:30</time>
                    </div>
                    <div className="act seq" style={at("2.7s")}>
                      <span className="av s">S</span>
                      <div>
                        {t.rich("board.commented", { name: "Sage", b: bold })}
                        <div className="bubble">{t("board.comment")}</div>
                      </div>
                      <time>10:30</time>
                    </div>
                    <div className="act seq" style={at("3.6s")}>
                      <span className="av s">S</span>
                      <span>{t.rich("board.moved", { name: "Sage", b: bold })}</span>
                      <time>11:00</time>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3.5 Chats */}
        <section className="block container">
          <div className="feature flip">
            <FeatureText id="chats" />
            <div className="visual reveal d1 play" data-loop="10000">
              <div className="panel">
                <div className="panel-head chat-head">
                  <span className="av s">S</span>
                  <div>
                    Sage
                    <small>
                      <span className="live" />
                      {t("chats.working", { id: "CM-41" })}
                    </small>
                  </div>
                </div>
                <div className="msgs">
                  <div className="msg typing-wrap seq" style={at(".2s")}>
                    <span className="av s">S</span>
                    <span className="typing">
                      <i />
                      <i />
                      <i />
                    </span>
                  </div>
                  <div className="msg seq" style={at("1.5s")}>
                    <span className="av s">S</span>
                    <div className="b">{t("chats.ask")}</div>
                  </div>
                  <div className="acts seq" style={at("2.2s")}>
                    <span className="yes">{t("chats.grant")}</span>
                    <span>{t("chats.notNow")}</span>
                  </div>
                  <div className="msg me seq" style={at("3.5s")}>
                    <div className="b">{t("chats.granted")}</div>
                  </div>
                  <div className="msg seq" style={at("4.6s")}>
                    <span className="av s">S</span>
                    <div className="b">{t("chats.thanks")}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3.6 Desktop sync */}
        <section className="block container">
          <div className="feature">
            <FeatureText id="sync" />
            <div className="visual reveal d1 play" data-loop="9000">
              <div className="sync">
                <div className="win cc">
                  <div className="win-top">
                    <i />
                    <i />
                    <i />
                    <Logo id="logo-claude" />
                    Claude Code
                  </div>
                  <div className="win-body">
                    <div className="m me seq" style={at(".4s")}>
                      <small>{t("sync.you")}</small>
                      {t("sync.ask")}
                    </div>
                    <div className="m seq" style={at("1.8s")}>
                      <small>Sage</small>
                      {t("sync.done")}
                    </div>
                    <div className="m me seq" style={at("3.4s")}>
                      <small>{t("sync.you")}</small>
                      {t("sync.ship")}
                    </div>
                  </div>
                  <div className="win-input">{t("sync.replyTo", { name: "Sage" })}</div>
                </div>
                <div className="win cm">
                  <div className="win-top">
                    <i />
                    <i />
                    <i />
                    <svg className="lg" style={{ color: "#171717" }}>
                      <use href="#logo-cm" />
                    </svg>
                    Crewmark
                  </div>
                  <div className="win-body">
                    <div className="m me seq" style={at(".8s")}>
                      <small>{t("sync.youFromClaude")}</small>
                      {t("sync.ask")}
                    </div>
                    <div className="m seq" style={at("2.2s")}>
                      <small>Sage</small>
                      {t("sync.done")}
                    </div>
                    <div className="m me seq" style={at("3.8s")}>
                      <small>{t("sync.youFromClaude")}</small>
                      {t("sync.ship")}
                    </div>
                  </div>
                  <div className="win-input">{t("sync.messageTo", { name: "Sage" })}</div>
                </div>
                <span className="sync-link">
                  <svg width="20" height="20">
                    <use href="#i-link" />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* 3.7 Marketplace */}
        <section className="block container" id="marketplace">
          <div className="center reveal">
            <span className="kicker">{t("marketplace.kicker")}</span>
            <h2>{t("marketplace.title")}</h2>
            <p className="lead">{t("marketplace.lead")}</p>
          </div>
          <div className="presets play" data-loop="7000">
            {PRESETS.map((preset) => (
              <article
                key={preset.id}
                className={`preset reveal${preset.delay}${"demo" in preset ? " demo" : ""}`}
              >
                <header>
                  <span className={`av lg ${preset.avatar}`}>{preset.initial}</span>
                  <div>
                    <b>{t(`marketplace.presets.${preset.id}.title`)}</b>
                    <small>{t("marketplace.meta")}</small>
                  </div>
                </header>
                <p>{t(`marketplace.presets.${preset.id}.text`)}</p>
                <div className="goal">🎯 {t(`marketplace.presets.${preset.id}.goal`)}</div>
                <div className="tags">
                  {(t.raw(`marketplace.presets.${preset.id}.tags`) as string[]).map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <footer>
                  <span className="rts">
                    <Logo id="logo-claude" />
                    <Logo id="logo-codex" />
                  </span>
                  <button type="button" className="hire" data-early-access="marketplace">
                    {t("marketplace.hire")}
                    <span className="ok">{t("marketplace.hired")}</span>
                  </button>
                </footer>
              </article>
            ))}
          </div>
        </section>

        {/* 4. How it works */}
        <section className="block container" id="how">
          <div className="center reveal">
            <span className="kicker">{t("how.kicker")}</span>
            <h2>{t("how.title")}</h2>
          </div>
          <ol className="steps">
            {(t.raw("how.steps") as { title: string; text: string }[]).map((step, i) => (
              <li key={step.title} className={`step reveal${DELAYS[i % 3]}`}>
                <b>{step.title}</b>
                <p>{step.text}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* 5. FAQ */}
        <section className="block container" id="faq">
          <div className="center reveal">
            <h2>{t("faq.title")}</h2>
          </div>
          <div className="faq reveal d1">
            {(t.raw("faq.items") as { q: string; a: string }[]).map((item, i) => (
              <details key={item.q} open={i === 0}>
                <summary>
                  {item.q}
                  <span className="pl">
                    <svg width="14" height="14">
                      <use href="#i-plus" />
                    </svg>
                  </span>
                </summary>
                <p>
                  <FaqAnswer text={item.a} locale={locale} />
                </p>
              </details>
            ))}
          </div>
        </section>

        {/* 6. CTA */}
        <div className="container">
          <section className="cta reveal">
            <svg className="cta-mark" viewBox="1.4 3.7 28 28" style={{ color: "#fff" }}>
              <use href="#logo-cm" />
            </svg>
            <h2>{t("cta.title")}</h2>
            <p>{t("cta.text")}</p>
            <div className="actions">
              <button type="button" className="btn btn-yellow" data-early-access="cta">
                {t("cta.start")} <Arrow />
              </button>
              <a className="btn btn-line" href="#marketplace">
                {t("cta.browse")}
              </a>
            </div>
          </section>
        </div>
      </main>

      <footer className="foot container">
        <div className="foot-grid">
          <div>
            <a className="brand" href="#top">
              <svg>
                <use href="#logo-cm" />
              </svg>
              Crewmark
            </a>
            <p>{t("footer.tagline")}</p>
          </div>
          <div>
            <h4>{t("footer.product")}</h4>
            <ul>
              <li>
                <a href="#features">{t("footer.features")}</a>
              </li>
              <li>
                <a href="#schedule">{t("footer.schedule")}</a>
              </li>
              <li>
                <a href="#marketplace">{t("footer.marketplace")}</a>
              </li>
              <li>
                <a href="#faq">{t("footer.faq")}</a>
              </li>
            </ul>
          </div>
          <div>
            <h4>{t("footer.guides")}</h4>
            <ul>
              {guides.map((guide) => (
                <li key={guide.href}>
                  <GuideLink href={guide.href} locale={locale}>
                    {t(`footer.${guide.label}`)}
                  </GuideLink>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4>{t("footer.account")}</h4>
            <ul>
              <li>
                <button type="button" data-signin data-early-access="footer">
                  {t("footer.signIn")}
                </button>
              </li>
              <li>
                <button type="button" data-early-access="footer">
                  {t("footer.earlyAccess")}
                </button>
              </li>
            </ul>
          </div>
          <div>
            <h4>{t("footer.runsOn")}</h4>
            <ul>
              {RUNTIMES.map(([logo, name]) => (
                <li key={logo}>
                  <Logo id={logo} />
                  {name}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="foot-bottom">
          <span>© 2026 Crewmark</span>
          {/* Plain links to every language, so crawlers find each version too. */}
          <nav className="langs" aria-label={t("footer.language")}>
            {routing.locales.map((l) => (
              <Link key={l} href="/" locale={l} lang={l} aria-current={l === locale ? "page" : undefined}>
                {localeNames[l]}
              </Link>
            ))}
          </nav>
          <span>{t("footer.trademarks")}</span>
        </div>
      </footer>

      <EarlyAccess />
      <LandingMotion />
    </>
  );
}

/**
 * A link to a guide in this page's language, or in English when the guide isn't written in it. It goes straight to
 * the canonical URL (/remote-claude-code, /zh/remote-claude-code): <Link locale="en"> would point at /en/…, which
 * redirects.
 */
function GuideLink({ href, locale, children }: { href: GuideHref; locale: Locale; children: ReactNode }) {
  const target = guideLocale(href, locale);
  return (
    <a href={getPathname({ href, locale: target })} hrefLang={target === locale ? undefined : target}>
      {children}
    </a>
  );
}

/**
 * An FAQ answer, where <guide>…</guide> links to the Remote Control guide. The answers come from t.raw (they're also
 * the FAQ structured data, which gets them without the tags), so the tag is replaced here rather than by t.rich.
 */
function FaqAnswer({ text, locale }: { text: string; locale: Locale }) {
  const [before, label, after] = text.split(/<\/?guide>/);
  if (label === undefined) return text;
  return (
    <>
      {before}
      <GuideLink href="/remote-claude-code" locale={locale}>
        {label}
      </GuideLink>
      {after}
    </>
  );
}

/** A feature's copy: kicker, heading, lead paragraph and checklist. */
async function FeatureText({ id }: { id: "hire" | "agents" | "board" | "chats" | "sync" }) {
  const t = await getTranslations(`Landing.${id}`);
  return (
    <div className="text reveal">
      <span className="kicker">{t("kicker")}</span>
      <h2>{t("title")}</h2>
      <p className="lead">{t("lead")}</p>
      <ul className="checks">
        {(t.raw("checks") as string[]).map((check) => (
          <li key={check}>{check}</li>
        ))}
      </ul>
    </div>
  );
}

function Logo({ id }: { id: (typeof RUNTIMES)[number][0] }) {
  return (
    <svg className="lg">
      <use href={`#${id}`} />
    </svg>
  );
}

function Icon({ id }: { id: string }) {
  return (
    <svg className="ic">
      <use href={`#${id}`} />
    </svg>
  );
}

function Arrow() {
  return (
    <svg width="16" height="16">
      <use href="#i-arrow" />
    </svg>
  );
}
