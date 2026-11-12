// Checks every translation in messages/ against English, the source of truth: no missing or leftover keys, and
// each message keeps the same {placeholders} and <tags>.
// Usage: npm run i18n:check, or npm run i18n:check -- ja.json to check only some files. Exits with 1 if anything
// is off.

import { readdirSync, readFileSync } from "node:fs";
import path from "node:path";

const dir = path.join(import.meta.dirname, "../messages");
const read = (file: string): unknown => JSON.parse(readFileSync(path.join(dir, file), "utf8"));

/** Every message by its dotted key; array items are keyed by index ("faq.items.0.q"). */
function flatten(value: unknown, prefix = "", out = new Map<string, string>()) {
  if (typeof value === "string") out.set(prefix, value);
  else if (value && typeof value === "object") {
    for (const [key, child] of Object.entries(value)) flatten(child, prefix ? `${prefix}.${key}` : key, out);
  }
  return out;
}

/** The {arguments} and <tags> a message uses, which a translation has to keep. */
const tokens = (message: string) =>
  [...message.matchAll(/\{\s*(\w+)|<\/?(\w+)>/g)]
    .map(([, arg, tag]) => (arg ? `{${arg}}` : `<${tag}>`))
    .sort()
    .join(" ");

const source = flatten(read("en.json"));
let problems = 0;
const report = (file: string, message: string) => {
  problems++;
  console.error(`${file}: ${message}`);
};

const files = process.argv.slice(2).map((f) => path.basename(f));
const translations = files.length ? files : readdirSync(dir).filter((f) => f.endsWith(".json") && f !== "en.json");
for (const file of translations) {
  const target = flatten(read(file));
  for (const [key, english] of source) {
    const translated = target.get(key);
    if (translated === undefined) report(file, `missing ${key}`);
    else if (tokens(translated) !== tokens(english))
      report(file, `${key} uses ${tokens(translated) || "nothing"} but English uses ${tokens(english) || "nothing"}`);
  }
  for (const key of target.keys()) if (!source.has(key)) report(file, `${key} isn't in en.json`);
}

if (problems) {
  console.error(`\n${problems} problem${problems === 1 ? "" : "s"} in the translations.`);
  process.exit(1);
}
console.log(`All translations match en.json (${source.size} messages).`);
