"use client";

import * as React from "react";
import { useFormatter, useTranslations } from "next-intl";

// The product window's board: every 2.6s one employee moves an issue a column on, and twice per round one asks
// you something in a toast. The script then starts over.
const CREW = [
  ["Sage", "s"],
  ["Ada", "a"],
  ["Gus", "g"],
  ["Nova", "n"],
] as const;
type Who = (typeof CREW)[number][0];

const COLUMNS = ["todo", "progress", "review", "done"] as const;
type Status = (typeof COLUMNS)[number];
const NEXT: Record<Status, Status> = { todo: "progress", progress: "review", review: "done", done: "done" };

const CARDS = {
  "CM-31": ["Sage", "high"],
  "CM-32": ["Sage", "medium"],
  "CM-33": ["Nova", "medium"],
  "CM-34": ["Ada", "urgent"],
  "CM-35": ["Gus", "low"],
  "CM-36": ["Sage", "low"],
  "CM-37": ["Ada", "medium"],
  "CM-30": ["Sage", "low"],
} as const satisfies Record<string, readonly [Who, "urgent" | "high" | "medium" | "low"]>;
type CardId = keyof typeof CARDS;
type AskId = "CM-31" | "CM-34";

const START: Record<CardId, Status> = {
  "CM-34": "todo",
  "CM-36": "todo",
  "CM-37": "todo",
  "CM-35": "todo",
  "CM-31": "progress",
  "CM-33": "progress",
  "CM-32": "review",
  "CM-30": "done",
};
const SCRIPT: ({ id: CardId; ask?: false } | { id: AskId; ask: true })[] = [
  { id: "CM-32" },
  { id: "CM-31", ask: true },
  { id: "CM-34" },
  { id: "CM-33" },
  { id: "CM-31" },
  { id: "CM-36" },
  { id: "CM-34", ask: true },
  { id: "CM-33" },
  { id: "CM-37" },
];

const avatar = (who: Who) => CREW.find(([name]) => name === who)![1];

type Board = {
  status: Record<CardId, Status>;
  step: number;
  /** The card that just moved; null at the start of a round, when every card enters. */
  moved: CardId | null;
  /** Bumped each round so every card mounts again and replays its entrance. */
  round: number;
  toast: { id: AskId; step: number } | null;
};
const initial: Board = { status: START, step: 0, moved: null, round: 0, toast: null };

function advance(board: Board): Board {
  if (board.step >= SCRIPT.length) return { ...initial, round: board.round + 1 };
  const next = SCRIPT[board.step];
  return {
    ...board,
    status: { ...board.status, [next.id]: NEXT[board.status[next.id]] },
    step: board.step + 1,
    moved: next.id,
    toast: next.ask ? { id: next.id, step: board.step } : board.toast,
  };
}

export function HeroBoard() {
  const t = useTranslations("Landing.demo.board");
  const format = useFormatter();
  const [board, setBoard] = React.useState(initial);

  React.useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => setBoard(advance), 2600);
    return () => clearInterval(id);
  }, []);

  const ids = Object.keys(CARDS) as CardId[];
  const done = ids.filter((id) => board.status[id] === "done").length;
  const beat = board.moved && CARDS[board.moved][0];

  return (
    <div className="app-main">
      <div className="app-head">
        <b>{t("project")}</b>
        {/* Keyed by step so the avatar that just worked pings again. */}
        <span className="crew" key={board.step}>
          {CREW.map(([name, c]) => (
            <span key={name} className={`av ${c}${beat === name ? " beat" : ""}`} title={name}>
              {name[0]}
            </span>
          ))}
        </span>
        <span className="pill first kpi">
          {t("clicks")} <b>{format.number(4720 + done * 25)}</b> <span className="up">+8.2%</span>
        </span>
        <span className="pill">
          <span className="live" />
          {t("nextWake")} <Countdown />
        </span>
      </div>
      <div className="board">
        {COLUMNS.map((s) => {
          const cards = ids.filter((id) => board.status[id] === s);
          return (
            <div key={s} className="col">
              <h4>
                <i className={`st ${s}`} />
                {t(`columns.${s}`)} <small>{cards.length}</small>
              </h4>
              {cards.map((id) => {
                const [who, priority] = CARDS[id];
                const fresh = board.moved === null || board.moved === id;
                return (
                  <div key={`${board.round}:${id}`} className={`card${fresh ? " fresh" : ""}`}>
                    <span className="key">{id}</span>
                    <p>{t(`cards.${id}`)}</p>
                    <div className="foot">
                      <span className={`pri ${priority}`}>{t(`priority.${priority}`)}</span>
                      <span className={`av ${avatar(who)}`}>{who[0]}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
      <div>{board.toast && <Toast key={board.toast.step} id={board.toast.id} />}</div>
    </div>
  );
}

function Toast({ id }: { id: AskId }) {
  const t = useTranslations("Landing.demo.board");
  const who = CARDS[id][0];
  return (
    <div className="toast" role="status">
      <header>
        <span className={`av ${avatar(who)}`}>{who[0]}</span>
        {t.rich("needsYou", { name: who, id, b: (chunks) => <b>{chunks}</b> })}
      </header>
      <p>{t(`asks.${id}`)}</p>
      <div className="row">
        <span>{t("approve")}</span>
        <span>{t("reply")}</span>
      </div>
    </div>
  );
}

/** Time to the next heartbeat, counting down from 29:41 and starting over at 30:00. */
function Countdown() {
  const [left, setLeft] = React.useState(29 * 60 + 41);

  React.useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => setLeft((s) => (s <= 0 ? 1800 : s - 1)), 1000);
    return () => clearInterval(id);
  }, []);

  const mm = String(Math.floor(left / 60)).padStart(2, "0");
  const ss = String(left % 60).padStart(2, "0");
  return <span>{`${mm}:${ss}`}</span>;
}
