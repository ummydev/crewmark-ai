"""MC-389 daily traffic numbers across all PostHog projects.

Usage: python3 scripts/analytics/traffic_daily.py [YYYY-MM-DD]   (Beijing date; default yesterday)
Prints a Markdown comment: total UV/PV, per site, change vs the day before, sources.
"""
import collections, datetime, json, os, subprocess, sys

SITES = {"699095": "crewmark.ai", "702416": "codexdesign.io", "717154": "vibegamer.io", "726075": "cozychapel.space"}
SRC = {"search": "自然搜索", "direct": "直接", "social": "社媒", "github": "GitHub", "ai": "AI 助手", "other": "其他"}
HERE = os.path.dirname(os.path.abspath(__file__))
GOAL = 10000

def call(project, tool, body):
    out = subprocess.run(["posthog-cli", "api", "call", "--json", "--project-id", project, tool, json.dumps(body)],
                         capture_output=True, text=True, check=True).stdout
    return json.loads(out)

_filters = {}
def filters(project):
    """The project's own test-account filters (Settings → Filter out internal and test users) as a HogQL condition,
    so these numbers match PostHog insights with "filter test accounts" on."""
    if project not in _filters:
        parts = []
        for f in call(project, "project-get", {"id": int(project)}).get("test_account_filters") or []:
            if f.get("type") == "hogql":
                parts.append(f"({f['key']})")
            elif f.get("type") == "cohort":
                parts.append(f"person_id {'NOT ' if f.get('operator') == 'not_in' else ''}IN COHORT {int(f['value'])}")
            else:
                raise SystemExit(f"project {project}: unsupported test account filter {f}")
        _filters[project] = " AND ".join(parts) or "1"
    return _filters[project]

def run(project, sql_file, start, end):
    q = (open(os.path.join(HERE, sql_file)).read().replace("{START}", start).replace("{END}", end)
         .replace("{FILTERS}", filters(project)))
    out = call(project, "execute-sql", {"query": q, "context": "MC-389 daily numbers; governed catalog consulted: no match"})
    # PostHog may put <taxonomy_warnings> before the table (e.g. a filter names a property this project never saw)
    lines = out["results"].split("</taxonomy_warnings>")[-1].strip().split("\n")[1:]
    return [l.split("|") for l in lines if l]

day = datetime.date.fromisoformat(sys.argv[1]) if len(sys.argv) > 1 else (datetime.datetime.utcnow() + datetime.timedelta(hours=8)).date() - datetime.timedelta(days=1)
prev = day - datetime.timedelta(days=1)
start = f"{prev - datetime.timedelta(days=1)} 16:00:00"  # Beijing 00:00 of prev, in UTC
end = f"{day} 16:00:00"
uv = collections.defaultdict(dict); pv = collections.defaultdict(dict); src = collections.Counter(); pages = []
for p in SITES:
    for d, v_pv, v_uv in run(p, "totals.sql", start, end):
        uv[d][p] = int(v_uv); pv[d][p] = int(v_pv)
    for d, s, v_pv, v_uv in run(p, "by_source.sql", start, end):
        if d == str(day) and s: src[s] += int(v_uv)
    for ref, page, v_uv in run(p, "top_page.sql", f"{day - datetime.timedelta(days=1)} 16:00:00", end):
        pages.append((int(v_uv), ref, page, SITES[p]))
D, P = str(day), str(prev)
tot = sum(uv[D].values()); ptot = sum(uv[P].values())
chg = f"{(tot - ptot) / ptot * 100:+.0f}%" if ptot else "n/a"
print(f"**{D} 全公司 UV {tot}**（PV {sum(pv[D].values())}），环比 {chg}（前一天 {ptot}），目标 {GOAL} 的 {tot / GOAL * 100:.1f}%\n")
print("| 站 | UV | PV | 前一天 UV |\n|---|---|---|---|")
for p, n in SITES.items():
    print(f"| {n} | {uv[D].get(p, 0)} | {pv[D].get(p, 0)} | {uv[P].get(p, 0)} |")
print("\n来源（UV）：" + "，".join(f"{SRC[k]} {v}" for k, v in src.most_common()))
top = sorted(pages, reverse=True)[:3]
if top:
    n, ref, page, site = top[0]
    print(f"\n**当天最大单页来源：{ref} → {site}{page}（{n} UV）**")
    if len(top) > 1:
        print("其次：" + "；".join(f"{r} → {s}{pg}（{v}）" for v, r, pg, s in top[1:]))
