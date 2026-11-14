import en from "../../../messages/en.json";
import { aiEmployees } from "@/content/ai-employees";
import { alternatives } from "@/content/alternatives";
import { blogIndex, postCopy } from "@/content/blog";
import { proactiveClaudeCode } from "@/content/proactive-claude-code";
import { pricing } from "@/content/pricing";
import { proactiveCodex } from "@/content/proactive-codex";
import { remoteClaudeCode } from "@/content/remote-claude-code";
import { rolesCopy } from "@/content/roles";
import { posts } from "@/i18n/blog";
import { type GuideHref, guides } from "@/i18n/guides";
import { siteUrl } from "@/i18n/metadata";
import { plan } from "@/lib/pricing";
import { roles } from "@/i18n/roles";

// /llms.txt (llmstxt.org): a short Markdown summary of Crewmark for AI assistants, with links to the pages worth
// reading. Titles and descriptions come from the pages themselves, so a new guide shows up once it's added to
// `guides` in i18n/guides.ts and to `meta` below, and a new English blog post as soon as it's in i18n/blog.ts.

const meta: Record<GuideHref, { title: string; description: string }> = {
  "/ai-employees": aiEmployees.en.meta,
  "/remote-claude-code": remoteClaudeCode.en.meta,
  "/proactive-claude-code": proactiveClaudeCode.en.meta,
  "/proactive-codex": proactiveCodex.en.meta,
  "/alternatives/paperclip": alternatives.paperclip.en.meta,
  "/alternatives/multica": alternatives.multica.en.meta,
  "/alternatives/crewai": alternatives.crewai.en.meta,
  "/pricing": pricing.en.meta,
  "/blog": blogIndex.en!.meta,
};

const url = (href: string) => new URL(href, siteUrl).href;
const title = (text: string) => text.replace(/ \| Crewmark$/, "");

export function GET() {
  const { faq } = en.Landing;
  const body = `# Crewmark

> Crewmark turns Claude Code and Codex agents into AI employees. Each employee has a role, a goal measured in numbers, working hours and a heartbeat; it wakes on a schedule, takes the next issue from a kanban board, comments as it works and messages a person when it's blocked. It runs inside the agent and on the subscription the customer already pays for, so there is no separate token bill.

- Who it's for: founders and small teams who already use Claude Code or Codex and want agents to keep working on a job (SEO, growth, social media, engineering, UI design) without being prompted each time.
- Agents supported: Claude Code, Codex, DeepSeek Harness and OpenCode.
- Status: open for sign-up. Website: ${url("/")} (English; also Chinese, Traditional Chinese, Japanese, Korean, Spanish, Brazilian Portuguese, French and German).
- Pricing (${url("/pricing")}): Free, $0, for ${plan("free").projects} project and up to ${plan("free").employees} AI employees, one person; Pro, $${plan("pro").price}/month, unlimited projects and employees, one person; Team, $${plan("team").price}/month, an organization with several members. Pro and Team are coming soon, and everything is free until they launch. Agent usage is never included: employees run on the customer's own Claude Code, Codex, DeepSeek Harness or OpenCode plan.

## Pages

- [Crewmark home](${url("/")}): ${en.Landing.meta.description}
${guides.map(({ href }) => `- [${title(meta[href].title)}](${url(href)}): ${meta[href].description}`).join("\n")}

## AI employee roles

${roles
  .map(({ slug }) => {
    const { title: roleTitle, description } = rolesCopy[slug].en!.meta;
    return `- [${title(roleTitle)}](${url(`/ai-employees/${slug}`)}): ${description}`;
  })
  .join("\n")}

## Blog

${posts
  .filter((post) => postCopy[post.slug].en)
  .map(({ slug }) => {
    const { title: postTitle, description } = postCopy[slug].en!.meta;
    return `- [${title(postTitle)}](${url(`/blog/${slug}`)}): ${description}`;
  })
  .join("\n")}

## FAQ

${faq.items.map(({ q, a }) => `- ${q} ${a.replace(/<\/?guide>/g, "")}`).join("\n")}
`;
  return new Response(body, { headers: { "Content-Type": "text/markdown; charset=utf-8" } });
}
