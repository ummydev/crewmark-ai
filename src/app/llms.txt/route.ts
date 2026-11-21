import en from "../../../messages/en.json";
import { aiEmployees } from "@/content/ai-employees";
import { alternatives } from "@/content/alternatives";
import { blogIndex, postCopy } from "@/content/blog";
import { personalAgentHub } from "@/content/personal-agent-hub";
import { personalAgentsCopy } from "@/content/personal-agents";
import { proactiveClaudeCode } from "@/content/proactive-claude-code";
import { audienceCopy, useCaseCopy } from "@/content/use-cases";
import { agentTaskBundles, agentTaskHref } from "@/content/use-cases/agent-tasks";
import { compareBundles, compareHref } from "@/content/compare";
import { alternativesCopy } from "@/content/product-alternatives";
import { pricingCopy } from "@/content/product-pricing";
import { useCasesHub } from "@/content/use-cases-hub";
import { pricing } from "@/content/pricing";
import { proactiveCodex } from "@/content/proactive-codex";
import { remoteClaudeCode } from "@/content/remote-claude-code";
import { rolesCopy } from "@/content/roles";
import { skillPagesCopy } from "@/content/skill-pages";
import { skillsHub } from "@/content/skills-hub";
import { privacy, terms } from "@/content/legal";
import { posts } from "@/i18n/blog";
import { type GuideHref, guides } from "@/i18n/guides";
import { siteUrl } from "@/i18n/metadata";
import { personalAgentPages } from "@/i18n/personal-agents";
import { agentSlugs, agentTaskSlugs, audiencePages, useCasePages } from "@/i18n/use-cases";
import { comparePairs } from "@/i18n/compare";
import { alternativesSlugs, pricingSlugs } from "@/i18n/product-pages";
import { plan } from "@/lib/pricing";
import { roles } from "@/i18n/roles";
import { skillPages } from "@/i18n/skill-pages";

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
  "/skills": skillsHub.en.meta,
  "/personal-agent": personalAgentHub.en.meta,
  "/use-cases": useCasesHub.en.meta,
  "/privacy": privacy.en.meta,
  "/terms": terms.en.meta,
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

## Claude skills

- [${title(skillsHub.en.meta.title)}](${url("/skills")}): ${skillsHub.en.meta.description}
${skillPages
  .map(({ slug }) => {
    const { title: pageTitle, description } = skillPagesCopy[slug].en!.meta;
    return `- [${title(pageTitle)}](${url(`/skills/${slug}`)}): ${description}`;
  })
  .join("\n")}

## Personal AI agents

- [${title(personalAgentHub.en.meta.title)}](${url("/personal-agent")}): ${personalAgentHub.en.meta.description}
${personalAgentPages
  .map(({ slug }) => {
    const { title: pageTitle, description } = personalAgentsCopy[slug].en!.meta;
    return `- [${title(pageTitle)}](${url(`/personal-agent/${slug}`)}): ${description}`;
  })
  .join("\n")}

## Use cases

- [${title(useCasesHub.en.meta.title)}](${url("/use-cases")}): ${useCasesHub.en.meta.description}
${audiencePages
  .map(({ slug }) => {
    const { title: pageTitle, description } = audienceCopy[slug].en!.meta;
    return `- [${title(pageTitle)}](${url(`/for/${slug}`)}): ${description}`;
  })
  .join("\n")}
${useCasePages
  .map(({ slug }) => {
    const { title: pageTitle, description } = useCaseCopy[slug].en!.meta;
    return `- [${title(pageTitle)}](${url(`/use-cases/${slug}`)}): ${description}`;
  })
  .join("\n")}
${agentSlugs
  .flatMap((agent) => {
    const bundle = agentTaskBundles.en!;
    const hub = bundle.agents[agent].hub.meta;
    return [
      `- [${title(hub.title)}](${url(`/use-cases/${agent}`)}): ${hub.description}`,
      ...agentTaskSlugs.map((task) => {
        const { title: pageTitle, description } = bundle.pairs[agent][task];
        return `- [${title(pageTitle)}](${url(agentTaskHref(agent, task))}): ${description}`;
      }),
    ];
  })
  .join("\n")}

## Comparisons

- [${title(compareBundles.en!.ui.hub.meta.title)}](${url("/compare")}): ${compareBundles.en!.ui.hub.meta.description}
${comparePairs
  .map(({ slug }) => {
    const { title: pageTitle, description } = compareBundles.en!.pairs[slug];
    return `- [${title(pageTitle)}](${url(compareHref(slug))}): ${description}`;
  })
  .join("\n")}

## Alternatives and pricing

${alternativesSlugs
  .map((slug) => {
    const { title: pageTitle, description } = alternativesCopy[slug].en!.meta;
    return `- [${title(pageTitle)}](${url(`/alternatives/${slug}`)}): ${description}`;
  })
  .join("\n")}
${pricingSlugs
  .map((slug) => {
    const { title: pageTitle, description } = pricingCopy[slug].en!.meta;
    return `- [${title(pageTitle)}](${url(`/pricing/${slug}`)}): ${description}`;
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
