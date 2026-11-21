import type { LegalCopy } from "@/components/landing/legal-page";

// Simplified Chinese translation of /terms; the English master is src/content/legal.ts.
const MAIL = "[info@crewmark.ai](mailto:info@crewmark.ai)";

export const copy: LegalCopy = {
  meta: {
    title: "服务条款 | Crewmark",
    description: "使用 crewmark.ai 和 crewmark CLI 的条款：你的账户、你在自己电脑上运行的 AI 智能体、你的内容、价格以及我们的责任。",
  },
  title: "服务条款",
  updated: "最后更新：2026 年 11 月 12 日",
  lead: `本条款适用于你对 crewmark.ai 和 crewmark CLI（统称“Crewmark”）的使用。使用 Crewmark 即表示你同意本条款。如有疑问，请写信至 ${MAIL}。`,
  sections: [
    {
      title: "服务内容",
      text: [
        "Crewmark 让你把 AI 智能体当作“员工”来管理：你为它们设定角色、目标、工作时间并分配 issue，它们通过你选择的 AI 智能体（例如 Claude Code 或 Codex）和 crewmark CLI，在你自己的电脑上完成工作。",
      ],
    },
    {
      title: "你的账户",
      text: [
        "你使用 Google 账户登录，并对该账户下发生的一切负责。如果你创建组织或邀请他人加入，你要对授予谁访问权限以及分配的角色负责。组织成员可以看到组织的项目、issue、员工和消息。",
      ],
    },
    {
      title: "你的 AI 智能体和你的电脑",
      points: [
        "你的员工运行在你的电脑上，拥有你在那里授予智能体的权限。它们可以读取和修改文件、运行命令。请谨慎选择给它们的文件夹和权限，并检查它们的工作。",
        "AI 智能体会犯错。Crewmark 无法控制智能体做什么或产出什么，也不保证其工作正确、完整或可以安全使用。",
        "你通过自己在服务商（例如 Anthropic 或 OpenAI）处的账户使用智能体，这部分使用适用该服务商的条款和费用。Crewmark 不为你的智能体用量付费，也不转售。",
        "你要对员工代表你所做的事负责，包括它们发布、发送或修改的任何内容。",
      ],
    },
    {
      title: "你的内容",
      text: [
        "你放进 Crewmark 的内容，以及员工产出的工作，仍归你所有。你允许我们仅在为你和你所在组织的成员运行 Crewmark 所需的范围内存储、处理和展示这些内容。我们如何处理信息，见[隐私政策](/privacy)。",
      ],
    },
    {
      title: "可接受的使用",
      text: ["请勿使用 Crewmark 或通过它管理的员工："],
      points: [
        "违反法律或侵犯他人权利；",
        "发送垃圾信息，或骚扰、欺骗、伤害他人；",
        "进入你无权访问的系统或数据，或干扰 Crewmark 或其他服务；",
        "绕过我们对服务设置的限制，或未经我们同意转售服务。",
      ],
    },
    {
      title: "价格",
      text: [
        "目前 Crewmark 可以免费使用。我们计划推出付费方案，见[价格](/pricing)。未经你同意我们不会向你收费；在你订阅付费方案前，我们会展示价格和条款。",
      ],
    },
    {
      title: "变更与可用性",
      text: [
        "Crewmark 是一个新产品，变化频繁。我们可能增加、修改或移除功能，服务有时也可能无法使用。对于显著影响你的变更，我们会尽量提前告知。",
      ],
    },
    {
      title: "停止使用",
      text: [
        `你可以随时停止使用 Crewmark，并写信至 ${MAIL} 要求删除你的账户。对于违反本条款、或使服务或他人面临风险的账户，我们可能暂停或关闭；在合理可行的情况下，我们会先通知你。`,
      ],
    },
    {
      title: "免责声明",
      text: [
        "在法律允许的范围内，Crewmark 按“现状”和“现有”提供，不附带任何形式的保证。我们不承诺服务不会中断、没有错误或适合特定用途。",
      ],
    },
    {
      title: "责任限制",
      text: [
        "在法律允许的范围内，对于因你使用 Crewmark 或你用它运行的 AI 智能体而产生的间接或后果性损失，或数据、利润、业务的损失，Crewmark 不承担责任。对于任何索赔或争议，无论其原因为何，我们的总责任不超过 50 美元。有些地区不允许这些限制，因此它们可能不全适用于你。",
      ],
    },
    {
      title: "本条款的变更",
      text: [
        "我们修改本条款时，会更新本页顶部的日期。如果变更重大，我们会在生效前在应用内告知你。此后继续使用 Crewmark，即表示你接受新条款。",
      ],
    },
    {
      title: "联系我们",
      text: [`关于本条款的任何问题，请写信至 ${MAIL}。`],
    },
  ],
};
