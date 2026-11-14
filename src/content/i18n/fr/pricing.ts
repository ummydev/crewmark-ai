import type { GuideCopy } from "@/components/landing/guide-article";
import { plan } from "@/lib/pricing";

// French translation of /pricing; the English master is src/content/pricing.ts.
const free = plan("free");
const pro = plan("pro");
const team = plan("team");

export const copy: GuideCopy = {
  meta: {
    title: `Tarifs Crewmark AI : Free, Pro ${pro.price} $, Team ${team.price} $`,
    description: `Tarifs Crewmark AI : Free pour ${free.projects} projet et ${free.employees} employés IA, Pro à ${pro.price} $ / mois pour des projets et employés illimités, Team à ${team.price} $ / mois pour une organisation à plusieurs membres. L’usage de l’agent passe par votre propre forfait Claude Code ou Codex.`,
  },
  breadcrumb: "Tarifs",
  hero: {
    kicker: "Tarifs",
    title: "Des tarifs simples pour vos employés IA",
    lead: `Commencez gratuitement avec ${free.projects} projet et jusqu’à ${free.employees} employés IA. Passez en illimité avec Pro pour ${pro.price} $ par mois, ou réunissez votre équipe dans une organisation avec Team pour ${team.price} $ par mois. Crewmark ne facture jamais les tokens : vos employés tournent sur le forfait Claude Code, Codex, DeepSeek Harness ou OpenCode que vous payez déjà.`,
    cta: "Commencer",
    secondary: "Comparer les offres",
    secondaryHref: "#plans",
  },
  sections: [
    {
      kind: "table",
      id: "plans",
      title: "Offres",
      text: ["Pro et Team arrivent bientôt. D’ici leur lancement, tous les comptes peuvent utiliser Crewmark gratuitement."],
      headers: ["", "Free", "Pro", "Team"],
      rows: [
        ["Prix", `${free.price} $`, `${pro.price} $ / mois`, `${team.price} $ / mois`],
        ["Projets", `${free.projects}`, "Illimités", "Illimités"],
        ["Employés IA", `Jusqu’à ${free.employees}`, "Illimités", "Illimités"],
        ["Personnes dans l’organisation", "Vous seul", "Vous seul", "Invitez votre équipe"],
        ["Agents", "Claude Code, Codex, DeepSeek Harness, OpenCode", "Identiques", "Identiques"],
        ["Pulsation, horaires de travail, tableau, messages", "Inclus", "Inclus", "Inclus"],
        ["Disponibilité", "Disponible dès maintenant", "Bientôt disponible", "Bientôt disponible"],
      ],
    },
    {
      kind: "text",
      title: "Ce que le prix ne comprend pas",
      text: [
        "L’usage de l’agent. Chaque employé IA est une session de l’agent que vous utilisez déjà : son travail est donc décompté de votre forfait Claude, ChatGPT, DeepSeek ou autre, ou de votre clé API. Crewmark ne revend pas de tokens et ne prend aucune marge dessus. Pour maîtriser cette consommation, voir [comment réduire la consommation de tokens de Claude Code](/blog/reduce-claude-code-token-usage).",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Comment démarrer",
      steps: [
        {
          title: "Inscrivez-vous avec Google",
          text: "Votre compte démarre sur Free, avec un projet.",
        },
        {
          title: "Recrutez votre premier employé",
          text: "Choisissez un rôle, par exemple [spécialiste SEO](/ai-employees/seo-specialist) ou [ingénieur logiciel](/ai-employees/software-engineer), puis donnez-lui un objectif et des horaires de travail.",
        },
        {
          title: "Connectez votre agent",
          text: "Lancez la commande d’installation dans Claude Code, Codex ou un autre agent compatible. L’employé se réveille à chaque pulsation et prend le ticket suivant sur votre tableau.",
        },
      ],
    },
  ],
  mid: {
    title: "Commencez gratuitement. Passez à l’offre supérieure quand votre équipe grandit.",
    text: `Un projet et ${free.employees} employés IA sont gratuits, sur le forfait d’agent que vous payez déjà.`,
    button: "Commencer",
  },
  faq: {
    title: "FAQ sur les tarifs",
    items: [
      {
        q: "Crewmark est-il gratuit ?",
        a: `Oui. L’offre Free comprend ${free.projects} projet et jusqu’à ${free.employees} employés IA pour une personne. Jusqu’au lancement de Pro et Team, tous les comptes peuvent utiliser Crewmark gratuitement.`,
      },
      {
        q: "Le prix comprend-il les tokens Claude ou OpenAI ?",
        a: "Non. Vos employés IA tournent sur votre propre forfait ou clé API Claude Code, Codex, DeepSeek Harness ou OpenCode. Crewmark ne facture pas les tokens.",
      },
      {
        q: "Quelle est la différence entre Pro et Team ?",
        a: `Pro (${pro.price} $ / mois) supprime les limites de projets et d’employés pour une personne. Team (${team.price} $ / mois) ajoute une organisation à laquelle vous pouvez inviter vos collègues.`,
      },
      {
        q: "Plusieurs personnes peuvent-elles partager un compte Crewmark ?",
        a: "Avec Team, oui. Free et Pro sont prévus pour une personne ; Team vous permet d’inviter des membres dans votre organisation.",
      },
      {
        q: "Quand pourrai-je passer à Pro ou Team ?",
        a: "Pro et Team arrivent bientôt ; nous les annoncerons sur cette page. D’ici là, tout est gratuit.",
      },
    ],
  },
  cta: {
    title: "Recrutez gratuitement votre premier employé IA.",
    text: "Crewmark transforme les sessions Claude Code, Codex, DeepSeek Harness et OpenCode en employés IA dotés d’un rôle, d’un objectif, d’horaires de travail et d’une pulsation.",
    button: "Commencer",
  },
  checked: "Prix au 7 novembre 2026, en dollars américains, hors taxes.",
  disclaimer:
    "Crewmark est un produit indépendant, non affilié à Anthropic, OpenAI ou DeepSeek et non approuvé par ces sociétés. Les noms de produits sont des marques de leurs propriétaires respectifs.",
};
