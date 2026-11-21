import type { LegalCopy } from "@/components/landing/legal-page";

// Simplified Chinese translation of /privacy; the English master is src/content/legal.ts.
const MAIL = "[info@crewmark.ai](mailto:info@crewmark.ai)";

export const copy: LegalCopy = {
  meta: {
    title: "隐私政策 | Crewmark",
    description: "你使用 crewmark.ai 和 crewmark CLI 时，Crewmark 收集哪些信息、用途是什么、由哪些服务商代为处理，以及如何要求删除。",
  },
  title: "隐私政策",
  updated: "最后更新：2026 年 11 月 12 日",
  lead: `本政策说明你使用 crewmark.ai 和 crewmark CLI 时，Crewmark（“我们”）收集哪些信息、如何使用，以及你有哪些选择。如有疑问，请写信至 ${MAIL}。`,
  sections: [
    {
      title: "Crewmark 是什么",
      text: [
        "Crewmark 是一个管理 AI 智能体“员工”的网页应用：你为每个员工设定角色、目标、工作时间，并在看板上给它分配 issue。智能体本身（Claude Code、Codex 等）运行在你自己的电脑上，通过 crewmark CLI 及其后台守护进程与 Crewmark 连接。",
      ],
    },
    {
      title: "我们收集的信息",
      points: [
        "你的账户。你通过 Google 登录。Google 会提供你的姓名、邮箱地址、头像和账户标识；我们只为 Google 已验证的邮箱创建账户。你在每个浏览器上登录时，我们会保存一条会话记录，包含 IP 地址和浏览器信息（user agent），并在浏览器中保存会话 cookie。",
        "你放进 Crewmark 的内容。组织、成员及其角色、邀请（被邀请的邮箱地址）、项目、员工及其设置、issue、评论、私信，以及你在员工工作记录里写给它的消息。",
        "你粘贴或拖入描述和评论中的图片和文件。它们存放在私有的 Cloudflare R2 存储桶中，只通过短时有效的签名链接展示给你所在组织的成员。",
        "使用 CLI 时你电脑的信息。CLI 为你的电脑生成的随机标识、电脑的主机名和操作系统、找到的受支持智能体、CLI 版本，以及最近一次连接的时间。CLI 用于登录的密钥只以哈希形式保存。",
        "使用分析数据。见下文“分析”。",
      ],
    },
    {
      title: "留在你电脑上的内容",
      text: [
        "员工与其智能体的对话，以及它处理的文件，都留在你的电脑上。当你在控制台打开某个员工的工作记录，或它发给你的图片、视频时，你电脑上的守护进程会通过我们的实时服务（一个 Cloudflare Worker）把这些内容直接传到你的浏览器。实时服务只负责转发，不会保存。",
        "Crewmark 会把分配给员工的 issue 等事项告诉员工，因此这些文字（issue 标题、描述、评论和消息）会进入你电脑上智能体的对话。智能体随后发送给其服务商（例如 Anthropic 或 OpenAI）的内容，受你与该服务商之间的协议约束，而不受本政策约束。",
      ],
    },
    {
      title: "分析",
      text: [
        "我们使用 PostHog（美国云）了解网站和应用的使用情况。在浏览器中，它会记录页面浏览、页面上的点击、页面加载性能，以及“issue created”等命名的产品事件。产品事件只包含 ID、设置和数量，不包含你写的标题或正文。登录后，这些事件会关联到你的用户 ID，你的邮箱和姓名会附在你的 PostHog 档案上。PostHog 会在 cookie 和浏览器本地存储中保存一个标识。",
        "CLI 安装脚本会发送两个匿名事件（开始安装和安装完成），包含你的操作系统、处理器、CLI 版本和一个随机安装 ID。设置 `CREWMARK_NO_TELEMETRY=1` 或 `DO_NOT_TRACK=1` 即可关闭。智能体作为员工连接时，我们的服务器会发送一个事件，包含相关 ID、智能体类型、平台和 CLI 版本。",
      ],
    },
    {
      title: "我们如何使用信息",
      text: ["我们使用这些信息："],
      points: [
        "运行 Crewmark：让你登录、向组织成员展示组织的数据、把工作交给你的员工；",
        "保障安全、修复问题；",
        "了解哪些功能被使用，以便改进；",
        "在你来信时回复你。",
      ],
    },
    {
      title: "代我们处理信息的服务商",
      text: ["我们不出售你的信息，也不将其用于广告。我们依靠以下服务商运行 Crewmark；每家只在为我们提供服务所需的范围内处理数据。"],
      points: [
        "Vercel：托管网站和应用（美国西部）。",
        "Neon：我们的 Postgres 数据库，位于美国。",
        "Cloudflare：DNS、实时 Worker，以及存放粘贴图片和文件的 R2 存储。",
        "Google：登录。",
        "PostHog：分析。",
        "GitHub：托管安装脚本下载的 CLI 文件。",
      ],
    },
    {
      title: "数据存放在哪里",
      text: ["我们的服务器和数据库位于美国。如果你在其他地区使用 Crewmark，你的信息会被传输到美国并在美国处理。"],
    },
    {
      title: "保存多久",
      text: [
        "只要你的账户和组织存在，我们就会保存账户和组织的数据。你在应用中删除的内容（一个 issue、一个员工）会从数据库中移除，但可能会在数据库备份中保留一段有限的时间。如需删除你的账户或某个组织，请写信给我们，我们会删除并确认。",
      ],
    },
    {
      title: "你的选择和权利",
      text: [
        `你可以写信至 ${MAIL}，要求获取你的信息副本、更正或删除你的信息。根据你所在地的法律，你可能还享有其他权利，例如反对某些处理；请写信给我们，我们会处理你的请求。你可以在浏览器中阻止或清除 cookie，但保持登录需要会话 cookie。`,
      ],
    },
    {
      title: "儿童",
      text: ["Crewmark 不面向 16 岁以下的儿童，我们也不会有意收集他们的信息。"],
    },
    {
      title: "本政策的变更",
      text: ["我们修改本政策时，会更新本页顶部的日期。如果变更会显著影响我们处理你信息的方式，我们还会在变更生效前在应用内告知你。"],
    },
    {
      title: "联系我们",
      text: [`关于隐私或本政策的任何问题，请写信至 ${MAIL}。`],
    },
  ],
};
