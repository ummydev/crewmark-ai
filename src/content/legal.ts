import type { LegalCopy } from "@/components/landing/legal-page";
import { guideLocales } from "@/i18n/guides";

import { privacyTranslations, termsTranslations } from "./i18n/legal";

// Copy for /privacy and /terms (MC-360, 2026-11-12). What the privacy policy says is collected comes from the code:
// Google sign-in (lib/auth.ts), PostHog (lib/posthog-config.ts, lib/analytics.ts, lib/server-analytics.ts,
// public/install.sh), pasted files in Cloudflare R2 (lib/attachments.ts), the database (db/schema.ts), the realtime
// Worker that relays an employee's work and files without keeping them (realtime/src/index.ts), Vercel in pdx1
// (vercel.json). Change the policy when any of those change, and the date with it. English here, the other languages
// in content/i18n/<locale>/privacy.ts and terms.ts.

export const LEGAL_LOCALES = guideLocales["/privacy"];
export type LegalLocale = (typeof LEGAL_LOCALES)[number];

const MAIL = "[info@crewmark.ai](mailto:info@crewmark.ai)";

export const privacy: Record<LegalLocale, LegalCopy> = {
  ...privacyTranslations,
  en: {
    meta: {
      title: "Privacy Policy | Crewmark",
      description:
        "What Crewmark collects when you use crewmark.ai and the crewmark CLI, why, who processes it for us, and how to have it deleted.",
    },
    title: "Privacy Policy",
    updated: "Last updated: November 12, 2026",
    lead: `This policy explains what Crewmark ("we") collects when you use crewmark.ai and the crewmark CLI, what we do with it, and the choices you have. Questions go to ${MAIL}.`,
    sections: [
      {
        title: "What Crewmark is",
        text: [
          "Crewmark is a web app for managing AI agent \"employees\": you give each one a role, goals, working hours and issues on a board. The agents themselves (Claude Code, Codex and others) run on your own computer, connected to Crewmark by the crewmark CLI and its background daemon.",
        ],
      },
      {
        title: "Information we collect",
        points: [
          "Your account. You sign in with Google. Google gives us your name, email address, profile picture and an account identifier; we only create accounts for email addresses Google has verified. We store a session for each browser you sign in on, with its IP address and browser (user agent), and keep a session cookie in your browser.",
          "What you put into Crewmark. Organizations, members and their roles, invitations (the invited email address), projects, employees and their settings, issues, comments, direct messages and the messages you write to an employee in its work log.",
          "Images and files you paste or drop into descriptions and comments. They're stored in a private Cloudflare R2 bucket and shown only to members of your organization, through short-lived signed links.",
          "Your computer, when you use the CLI. A random identifier the CLI creates for your computer, its hostname and operating system, which supported agents it found, the CLI version, and when it was last connected. The keys the CLI uses to sign in are stored only as hashes.",
          "Usage analytics. See \"Analytics\" below.",
        ],
      },
      {
        title: "What stays on your computer",
        text: [
          "An employee's conversation with its agent, and the files it works on, stay on your computer. When you open an employee's work in the dashboard, or a picture or video it sent you, the daemon on your computer sends that content through our realtime service (a Cloudflare Worker) straight to your browser. The realtime service passes it on and doesn't keep it.",
          "Crewmark tells your employees about things like issues assigned to them, so that text (issue titles, descriptions, comments and messages) goes into the agent's conversation on your computer. Whatever your agent then sends to its own provider, such as Anthropic or OpenAI, is governed by your agreement with that provider, not by this policy.",
        ],
      },
      {
        title: "Analytics",
        text: [
          "We use PostHog (US cloud) to understand how the site and the app are used. In the browser it records page views, clicks on the page, page-load performance and named product events such as \"issue created\". Product events carry only ids, settings and counts, not the titles or text you write. When you're signed in, these events are linked to your user id, and your email and name are attached to your PostHog profile. PostHog stores an identifier in a cookie and in your browser's local storage.",
          "The CLI install scripts send two anonymous events (install started and finished) with your operating system, processor, CLI version and a random install id. Set `CREWMARK_NO_TELEMETRY=1` or `DO_NOT_TRACK=1` to turn them off. When an agent connects as an employee, our server sends one event with ids, the agent type, platform and CLI version.",
        ],
      },
      {
        title: "How we use information",
        text: ["We use it:"],
        points: [
          "to run Crewmark: sign you in, show your organization's data to its members, and deliver work to your employees;",
          "to keep it secure and fix problems;",
          "to understand which features are used, so we can improve them;",
          "to answer you when you write to us.",
        ],
      },
      {
        title: "Who processes it for us",
        text: [
          "We don't sell your information, and we don't use it for advertising. We use these providers to run Crewmark; each handles data only as needed for the service it provides us.",
        ],
        points: [
          "Vercel: hosts the website and app (US West).",
          "Neon: our Postgres database, in the United States.",
          "Cloudflare: DNS, the realtime Worker, and R2 storage for pasted images and files.",
          "Google: sign-in.",
          "PostHog: analytics.",
          "GitHub: hosts the CLI downloads that the install scripts fetch.",
        ],
      },
      {
        title: "Where data is stored",
        text: [
          "Our servers and database are in the United States. If you use Crewmark from elsewhere, your information is transferred to and processed in the United States.",
        ],
      },
      {
        title: "How long we keep it",
        text: [
          "We keep your account and your organization's data while the account and organization exist. What you delete in the app (an issue, an employee) is removed from the database, though it may remain in database backups for a limited time. Write to us to delete your account or an organization, and we'll delete it and confirm.",
        ],
      },
      {
        title: "Your choices and rights",
        text: [
          `You can ask us for a copy of your information, to correct it, or to delete it, by writing to ${MAIL}. Depending on where you live, you may have further rights under local law, such as objecting to some processing; write to us and we'll handle your request. You can block or clear cookies in your browser, though you'll need the session cookie to stay signed in.`,
        ],
      },
      {
        title: "Children",
        text: ["Crewmark isn't meant for children under 16, and we don't knowingly collect their information."],
      },
      {
        title: "Changes to this policy",
        text: [
          "When we change this policy, we update the date at the top of this page. If a change significantly affects how we handle your information, we'll also tell you in the app before it takes effect.",
        ],
      },
      {
        title: "Contact",
        text: [`Write to ${MAIL} with any question about privacy or this policy.`],
      },
    ],
  },
};

export const terms: Record<LegalLocale, LegalCopy> = {
  ...termsTranslations,
  en: {
    meta: {
      title: "Terms of Service | Crewmark",
      description:
        "The terms for using crewmark.ai and the crewmark CLI: your account, the AI agents you run on your computer, your content, pricing and our responsibilities.",
    },
    title: "Terms of Service",
    updated: "Last updated: November 12, 2026",
    lead: `These terms cover your use of crewmark.ai and the crewmark CLI ("Crewmark"). By using Crewmark you agree to them. If you have a question, write to ${MAIL}.`,
    sections: [
      {
        title: "The service",
        text: [
          "Crewmark lets you manage AI agents as \"employees\": you give them roles, goals, working hours and issues, and they do the work on your own computer, through the AI agent you choose (such as Claude Code or Codex) and the crewmark CLI.",
        ],
      },
      {
        title: "Your account",
        text: [
          "You sign in with a Google account and are responsible for what happens under it. If you create an organization or invite people into one, you're responsible for who you give access to and for the roles you give them. Members of an organization can see its projects, issues, employees and messages.",
        ],
      },
      {
        title: "Your AI agents and your computer",
        points: [
          "Your employees run on your computer, with the access you give the agent there. They can read and change files and run commands. Choose the folders and permissions you give them with care, and review their work.",
          "AI agents make mistakes. Crewmark doesn't control what an agent does or produces, and doesn't guarantee that its work is correct, complete or safe to use.",
          "You use your agent through your own account with its provider (for example Anthropic or OpenAI). That provider's terms and charges apply to that use. Crewmark doesn't pay for or resell your agent usage.",
          "You're responsible for what your employees do on your behalf, including anything they publish, send or change.",
        ],
      },
      {
        title: "Your content",
        text: [
          "What you put into Crewmark, and the work your employees produce, remains yours. You give us permission to store, process and display it only as needed to run Crewmark for you and the members of your organization. Our [Privacy Policy](/privacy) explains how we handle information.",
        ],
      },
      {
        title: "Acceptable use",
        text: ["Don't use Crewmark, or employees managed through it, to:"],
        points: [
          "break the law or infringe other people's rights;",
          "send spam, or harass, deceive or harm others;",
          "get into systems or data you aren't allowed to access, or disrupt Crewmark or other services;",
          "get around limits we put on the service, or resell it without our agreement.",
        ],
      },
      {
        title: "Pricing",
        text: [
          "Crewmark is free to use for now. We plan to offer paid plans; see [Pricing](/pricing). We won't charge you without your agreement, and we'll show prices and terms before you sign up for a paid plan.",
        ],
      },
      {
        title: "Changes and availability",
        text: [
          "Crewmark is new and changes often. We may add, change or remove features, and the service may sometimes be unavailable. We'll try to give notice of changes that significantly affect you.",
        ],
      },
      {
        title: "Ending your use",
        text: [
          `You can stop using Crewmark at any time and ask us to delete your account by writing to ${MAIL}. We may suspend or close an account that breaks these terms or puts the service or other people at risk; where we reasonably can, we'll tell you first.`,
        ],
      },
      {
        title: "Disclaimer",
        text: [
          "Crewmark is provided \"as is\" and \"as available\", without warranties of any kind, to the extent the law allows. We don't promise that it will be uninterrupted, error-free or fit for a particular purpose.",
        ],
      },
      {
        title: "Limitation of liability",
        text: [
          "To the extent the law allows, Crewmark isn't liable for indirect or consequential losses, or for loss of data, profits or business, arising from your use of Crewmark or of the AI agents you run with it. For any claim or dispute, whatever its cause, our total liability will not exceed US$50. Some places don't allow these limits, so they may not all apply to you.",
        ],
      },
      {
        title: "Changes to these terms",
        text: [
          "When we change these terms, we update the date at the top of this page. If a change is significant, we'll tell you in the app before it takes effect. Continuing to use Crewmark after that means you accept the new terms.",
        ],
      },
      {
        title: "Contact",
        text: [`Write to ${MAIL} with any question about these terms.`],
      },
    ],
  },
};
