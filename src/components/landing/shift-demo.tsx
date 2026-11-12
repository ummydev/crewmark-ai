"use client";

import * as React from "react";
import { useTranslations } from "next-intl";

// The interactive schedule demo: change an employee's hours, heartbeat, goal and weekends and watch its day on a
// 24-hour ruler, with a log of what it does at each wake-up (advancing every 1.2s).
const ROLES = {
  seo: ["Sage", "s"],
  growth: ["Gus", "g"],
  engineer: ["Ada", "a"],
  social: ["Nova", "n"],
} as const;
type Role = keyof typeof ROLES;

const RUNTIMES = {
  claude: ["logo-claude", "Claude Code"],
  codex: ["logo-codex", "Codex"],
  deepseek: ["logo-deepseek", "DeepSeek Harness"],
  opencode: ["logo-opencode", "OpenCode"],
} as const;
type Runtime = keyof typeof RUNTIMES;

const HEARTBEATS = [
  [15, "hb15"],
  [30, "hb30"],
  [60, "hb60"],
] as const;

const hhmm = (m: number) => `${String(Math.floor(m / 60) % 24).padStart(2, "0")}:${String(m % 60).padStart(2, "0")}`;
const pct = (m: number) => `${(m / 1440) * 100}%`;

export function ShiftDemo() {
  const t = useTranslations("Landing.demo.shift");
  const [role, setRole] = React.useState<Role>("seo");
  const [runtime, setRuntime] = React.useState<Runtime>("claude");
  const [hours, setHours] = React.useState({ start: 9, end: 18 });
  const [heartbeat, setHeartbeat] = React.useState(30);
  const [goal, setGoal] = React.useState(10);
  const [weekends, setWeekends] = React.useState(false);
  const [now, setNow] = React.useState(0);

  React.useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => setNow((n) => n + 1), 1200);
    return () => clearInterval(id);
  }, []);

  function step(edge: "start" | "end", by: number) {
    setHours(({ start, end }) => {
      if (edge === "start" && start + by >= 0 && start + by < end) return { start: start + by, end };
      if (edge === "end" && end + by > start && end + by <= 24) return { start, end: end + by };
      return { start, end };
    });
  }

  const [name, avatar] = ROLES[role];
  const [logo, runtimeName] = RUNTIMES[runtime];
  const work = t.raw(`roles.${role}.work`) as string[];
  const wakes: number[] = [];
  for (let m = hours.start * 60; m < hours.end * 60; m += heartbeat) wakes.push(m);
  const cur = now % wakes.length;
  const days = weekends ? 7 : 5;
  const from = Math.max(0, Math.min(cur - 2, wakes.length - 5));

  return (
    <div className="shift reveal d1" id="shift">
      <div className="shift-stage">
        <div className="who">
          <span className={`av lg ${avatar}`}>{name[0]}</span>
          <div>
            <b>{name}</b>
            <small>{t("subtitle", { title: t(`roles.${role}.title`), goal, metric: t(`roles.${role}.metric`) })}</small>
          </div>
          <span className="rt">
            <svg className="lg">
              <use href={`#${logo}`} />
            </svg>
            {runtimeName}
          </span>
        </div>
        <div
          className="ruler"
          role="img"
          aria-label={t("ruler", { start: hhmm(hours.start * 60), end: hhmm(hours.end * 60), heartbeat })}
        >
          <span
            className="shiftband"
            style={{ left: pct(hours.start * 60), width: pct((hours.end - hours.start) * 60) }}
          />
          {[3, 6, 9, 12, 15, 18, 21].map((h) => (
            <span key={h} className="lab" style={{ left: pct(h * 60) }}>
              {hhmm(h * 60)}
            </span>
          ))}
          {wakes.map((m, i) => (
            <span
              key={m}
              className={`tick${m % 60 === 0 ? " hour" : ""}${i === cur ? " lit" : ""}`}
              style={{ left: pct(m) }}
            />
          ))}
          <span className="now" style={{ left: pct(wakes[cur]) }} />
        </div>
        <div className="stats">
          <div>
            <b>{wakes.length}</b>
            <span>{t("perDay")}</span>
          </div>
          <div>
            <b>{t("hours", { hours: (hours.end - hours.start) * days })}</b>
            <span>{t("hoursWeek")}</span>
          </div>
          <div>
            <b>{wakes.length * days}</b>
            <span>{t("perWeek")}</span>
          </div>
        </div>
        <ol className="log">
          {wakes.slice(from, from + 5).map((m, i) => (
            <li key={m} className={from + i === cur ? "now" : undefined}>
              <time>{hhmm(m)}</time>
              <span>{work[(from + i) % work.length]}</span>
            </li>
          ))}
        </ol>
      </div>
      <div className="controls">
        <h3>{t("settings")}</h3>
        <div className="ctl">
          <label htmlFor="c-role">{t("role")}</label>
          <select id="c-role" value={role} onChange={(e) => setRole(e.target.value as Role)}>
            {(Object.keys(ROLES) as Role[]).map((r) => (
              <option key={r} value={r}>
                {t(`roles.${r}.title`)}
              </option>
            ))}
          </select>
        </div>
        <div className="ctl">
          <label htmlFor="c-rt">{t("runsOn")}</label>
          <select id="c-rt" value={runtime} onChange={(e) => setRuntime(e.target.value as Runtime)}>
            {(Object.keys(RUNTIMES) as Runtime[]).map((r) => (
              <option key={r} value={r}>
                {RUNTIMES[r][1]}
              </option>
            ))}
          </select>
        </div>
        <div className="ctl">
          <span>{t("starts")}</span>
          <span className="stepper">
            <button type="button" aria-label={t("startEarlier")} onClick={() => step("start", -1)}>
              −
            </button>
            <output>{hhmm(hours.start * 60)}</output>
            <button type="button" aria-label={t("startLater")} onClick={() => step("start", 1)}>
              +
            </button>
          </span>
        </div>
        <div className="ctl">
          <span>{t("stops")}</span>
          <span className="stepper">
            <button type="button" aria-label={t("stopEarlier")} onClick={() => step("end", -1)}>
              −
            </button>
            <output>{hhmm(hours.end * 60)}</output>
            <button type="button" aria-label={t("stopLater")} onClick={() => step("end", 1)}>
              +
            </button>
          </span>
        </div>
        <div className="ctl">
          <span id="hb-l">{t("heartbeat")}</span>
          <span className="dseg" role="group" aria-labelledby="hb-l">
            {HEARTBEATS.map(([minutes, label]) => (
              <button
                key={minutes}
                type="button"
                aria-pressed={heartbeat === minutes}
                onClick={() => setHeartbeat(minutes)}
              >
                {t(label)}
              </button>
            ))}
          </span>
        </div>
        <div className="ctl">
          <label htmlFor="c-goal">
            {t("goal")} <b>+{goal}%</b>
          </label>
          <input
            id="c-goal"
            type="range"
            min={5}
            max={30}
            value={goal}
            onChange={(e) => setGoal(Number(e.target.value))}
          />
        </div>
        <div className="ctl">
          <span id="we-l">{t("weekends")}</span>
          <button
            type="button"
            className="switch"
            role="switch"
            aria-checked={weekends}
            aria-labelledby="we-l"
            onClick={() => setWeekends((w) => !w)}
          />
        </div>
        <p className="note">{t("note")}</p>
      </div>
    </div>
  );
}
