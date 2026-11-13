import type { GuideCopy } from "@/components/landing/guide-article";

// Simplified Chinese translation of /blog/claude-code-hooks; the English master is src/content/blog/claude-code-hooks.ts.

const docs = "https://code.claude.com/docs/en/hooks-guide";

const notify = `{
  "hooks": {
    "Notification": [
      {
        "matcher": "",
        "hooks": [
          {
            "type": "command",
            "command": "osascript -e 'display notification \\"Claude Code needs your attention\\" with title \\"Claude Code\\"'"
          }
        ]
      }
    ]
  }
}`;

const format = `{
  "hooks": {
    "PostToolUse": [
      {
        "matcher": "Edit|Write",
        "hooks": [
          { "type": "command", "command": "jq -r '.tool_input.file_path' | xargs npx prettier --write" }
        ]
      }
    ]
  }
}`;

const block = `#!/bin/bash
# .claude/hooks/block-drop-table.sh，作为 Bash 的 PreToolUse hook 运行
INPUT=$(cat)
COMMAND=$(echo "$INPUT" | jq -r '.tool_input.command')

if echo "$COMMAND" | grep -q "drop table"; then
  echo "Blocked: dropping tables is not allowed" >&2  # 会成为给 Claude 的反馈
  exit 2                                               # 2 = 阻止该操作
fi

exit 0  # 不做决定：照常走权限流程`;

const stop = `{
  "hooks": {
    "Stop": [
      {
        "hooks": [
          {
            "type": "prompt",
            "prompt": "Check if all tasks are complete. If not, respond with {\\"ok\\": false, \\"reason\\": \\"what remains to be done\\"}."
          }
        ]
      }
    ]
  }
}`;

export const copy: GuideCopy = {
  meta: {
    title: "Claude Code Hooks：事件、示例与工作原理 | Crewmark",
    description:
      "Claude Code hooks（钩子）详解：生命周期事件、hook 配置位置、退出码与 JSON 输出，以及可直接复制的示例：桌面通知、自动格式化、拦截命令和 Stop hook。",
  },
  breadcrumb: "Claude Code hooks 指南",
  parent: { name: "博客", href: "/blog" },
  article: { published: "2026-11-06" },
  hero: {
    kicker: "博客 · Claude Code",
    title: "Claude Code hooks：事件、示例与工作原理",
    lead: "Claude Code hooks（钩子）是在会话中固定节点自动运行的命令：工具运行之前、文件编辑之后、Claude 回复结束时、需要你输入时。CLAUDE.md 里的指令 Claude 通常会遵守，而 hook 则每次都一定会运行，所以它是强制执行规则、自动处理琐事的办法。本文介绍有哪些事件、hook 配置在哪里、退出码和 JSON 如何决定接下来发生什么、四个拿来就能用的示例，以及较新的 prompt、agent 和 HTTP 类型的 hook。",
    cta: "申请抢先体验",
    secondary: "直接看示例",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "table",
      id: "events",
      title: "Claude Code hook 事件",
      text: [
        "官方参考文档列出了 30 多个事件，下面是大多数 hook 会用到的几个；`matcher` 可以把 hook 限定在特定的工具、文件或来源上。",
      ],
      headers: ["事件", "触发时机", "常见用途"],
      rows: [
        ["`SessionStart`", "会话开始或恢复时", "加载上下文、检查环境"],
        ["`UserPromptSubmit`", "你提交提示词后、Claude 看到之前", "补充上下文、拦截敏感提示词"],
        ["`PreToolUse`", "工具调用运行之前；可以拦截它", "拦截危险命令、保护文件"],
        ["`PermissionRequest`", "工具调用需要权限决定时", "自动批准或拒绝特定请求"],
        ["`PostToolUse`", "工具调用成功之后", "对编辑过的文件做格式化、lint 或测试"],
        ["`Notification`", "Claude Code 发出通知时", "Claude 需要你时弹出桌面提醒"],
        ["`SubagentStart`, `SubagentStop`", "subagent 启动或结束时", "记录或检查委派出去的工作"],
        ["`Stop`", "Claude 回复结束时", "检查任务是否真的完成"],
        ["`PreCompact`, `PostCompact`", "上下文压缩前后", "保存或重新注入关键上下文"],
        ["`FileChanged`, `CwdChanged`", "被监视的文件或工作目录发生变化时", "重新加载环境、重新格式化文件"],
        ["`SessionEnd`", "会话结束时", "清理、写日志"],
      ],
    },
    {
      kind: "table",
      title: "hook 配置在哪里",
      headers: ["位置", "作用范围", "是否共享"],
      rows: [
        ["`~/.claude/settings.json`", "你的所有项目", "否"],
        ["`.claude/settings.json`", "单个项目", "是，提交到仓库"],
        ["`.claude/settings.local.json`", "单个项目", "否，已被 gitignore"],
        ["托管策略设置（managed policy settings）", "整个组织", "由管理员控制"],
        ["插件的 `hooks/hooks.json`", "插件启用期间", "是，随插件分发"],
        ["skill 或 subagent 的 frontmatter", "skill 被调用后，或 subagent 运行期间", "是，写在文件里"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Claude Code hook 示例，一步一步来",
      text: [
        "把每段配置放到设置文件的 `hooks` 键下；如果文件里已经有 `hooks` 对象，就把事件作为同级的键加进去，不要整个替换。运行 `/hooks` 确认 Claude Code 已经加载。你也可以直接让 Claude 帮你写 hook。",
      ],
      steps: [
        {
          title: "Claude 需要你时收到桌面通知",
          text: "在 `~/.claude/settings.json` 里加一个 `Notification` hook。这里在 macOS 上用的是 `osascript`；Linux 上用 `notify-send`，Windows 上用 PowerShell。",
          code: notify,
        },
        {
          title: "自动格式化 Claude 编辑的每个文件",
          text: "一个匹配 `Edit|Write` 的 `PostToolUse` hook，用 `jq` 从 stdin 的 JSON 中读出被编辑文件的路径，再对它运行 Prettier。把它放进 `.claude/settings.json`，整个团队就都能用上。",
          code: format,
        },
        {
          title: "拦截危险命令",
          text: "一个针对 `Bash` 的 `PreToolUse` hook 运行这个脚本。退出码 2 会拦截这次调用，写到 stderr 的内容会作为反馈交给 Claude，让它调整方向。退出码 0 表示不做决定，照常走权限检查。",
          code: block,
        },
        {
          title: "让 Claude 一直干到任务完成",
          text: "一个 `prompt` 类型的 `Stop` hook 会问模型是否全部完成。如果回答是 `ok: false`，Claude 会以 `reason` 作为下一条指令继续工作。这就是经典的 Stop hook 示例。",
          code: stop,
        },
      ],
      source: { label: "来源：Claude Code 文档，Automate actions with hooks", href: docs },
    },
    {
      kind: "text",
      title: "hook 如何决定接下来发生什么",
      points: [
        "输入：每个 hook 都会从 stdin 收到 JSON 格式的事件，比如工具名和 `tool_input`、会话 ID 以及 `cwd`。",
        "退出码 0：没有异议。对少数事件（如 `SessionStart` 和 `UserPromptSubmit`），普通的 stdout 会被加入 Claude 的上下文。",
        "退出码 2：在事件允许的情况下拦截。stderr 会根据事件的不同，返回给 Claude 或显示给你。",
        "stdout 输出 JSON：更精细的控制，比如带权限决定的 `hookSpecificOutput`、用来改写工具输入的 `updatedInput`，或 `additionalContext`。",
        "其他退出码：通常视为不拦截的错误，除非 hook 设置了 `onFailure: \"block\"`。",
        "同一事件下匹配到的多个 hook 会并行运行。",
      ],
    },
    {
      kind: "table",
      title: "command、prompt、agent 和 HTTP 类型的 hook",
      headers: ["类型", "运行什么", "默认超时"],
      rows: [
        ["`command`", "一条 shell 命令", "10 分钟"],
        ["`http`", "把事件 JSON 以 POST 发到一个 URL；响应体的作用和命令输出相同", "10 分钟"],
        ["`mcp_tool`", "已配置的 MCP 服务器上的一个工具", "10 分钟"],
        ["`prompt`", "一次模型调用，回答 `ok` 与否", "30 秒"],
        ["`agent`", "一个能先读文件、运行工具再做决定的 subagent（实验性）", "60 秒"],
      ],
    },
    {
      kind: "text",
      title: "hook、skill 与 CLAUDE.md 的区别，以及其他注意事项",
      points: [
        "CLAUDE.md 和 [skill](/blog/claude-code-skills) 是 Claude 通常会遵守的指令；hook 则每次都会运行。任何绝不能跳过的事情都应该放进 hook。",
        "`PostToolUse` 无法撤销已经执行的操作；要阻止它，用 `PreToolUse`。",
        "`Stop` 在 Claude 每次结束回复时都会触发，不只是在任务结束时，而且用户中断时不会触发。",
        "hook 本身不能运行斜杠命令，也不能调用工具；它们只能通过退出码、stdout、stderr 或 JSON 回传信息。",
        "`\"disableAllHooks\": true` 会关闭 hook；但托管 hook 仍会运行，除非托管设置也把它们关掉。",
        "hook 只作用于你本地的 Claude Code 环境。覆盖所有 Claude 产品的组织级检查是另一项功能：[Claude inference hooks](/blog/claude-inference-hooks)。",
        "用 PreToolUse hook 过滤测试输出，也是[减少 token 用量](/blog/reduce-claude-code-token-usage)最有效的方法之一。",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "用 Crewmark",
      title: "hook 让 Claude Code 守规矩，Crewmark 让它一直干活。",
      text: [
        "hook 是让无人值守的 agent 变得安全的关键：格式化、测试和防护规则每次都会运行。Crewmark 把 Claude Code、Codex、DeepSeek Harness 或 OpenCode 会话变成有岗位、目标和工作时间的 AI 员工，并按心跳唤醒它，从看板上接手下一个 issue，同时加载你项目里的 hook。",
      ],
      steps: [
        {
          title: "把 hook 提交到仓库",
          text: "`.claude/settings.json` 里的 hook 会像在你的会话中一样，在员工的会话中加载，所以它的编辑会被格式化，有风险的命令会被拦截。",
        },
        {
          title: "让心跳启动工作",
          text: "在工作时间内，员工每 15、30 或 60 分钟在同一个对话里醒来一次；参见[如何让 Claude Code 主动工作](/proactive-claude-code)。",
        },
        {
          title: "只回答需要你的问题",
          text: "它会在自己的 issue 下评论，需要你拍板时给你发消息。阅读[什么是 AI 员工](/ai-employees)。",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "为 Claude Code 添加 hook" },
  mid: {
    title: "你的 hook 每次都会运行，你的 agent 呢？",
    text: "Crewmark 用岗位、目标和 issue 看板，按心跳唤醒 Claude Code，用的就是你已经在付费的套餐。",
    button: "申请抢先体验",
  },
  faq: {
    title: "Claude Code hooks 常见问题",
    items: [
      {
        q: "Claude Code hooks 是什么？",
        a: "由用户定义的命令、HTTP 调用或模型检查，Claude Code 会在生命周期事件发生时自动运行它们，比如工具运行之前或 Claude 回复结束时。它们提供确定性的控制，而不是指望 Claude 记住某条指令。",
      },
      {
        q: "Claude Code hooks 在哪里配置？",
        a: "写在 `~/.claude/settings.json`（所有项目）、`.claude/settings.json`（与团队共享）或 `.claude/settings.local.json`（只有你自己）的 `hooks` 下。插件、skill 和 subagent 也可以自带 hook。运行 `/hooks` 查看已加载的内容。",
      },
      {
        q: "怎样用 hook 拦截一条命令？",
        a: "用一个匹配 `Bash` 的 `PreToolUse` hook。从 stdin 的 JSON 中读出命令，要拦截时以退出码 2 退出，并在 stderr 写明原因；Claude 会看到原因并做出调整。",
      },
      {
        q: "Stop hook 是什么？",
        a: "挂在 `Stop` 事件上的 hook，在 Claude 回复结束时触发。prompt 类型的 Stop hook 可以检查任务是否完成，如果没有，就附上原因让 Claude 回去继续干。",
      },
      {
        q: "hook 和 skill 有什么区别？",
        a: "skill 是 Claude 在相关时加载、通常会遵守的指令和文件。hook 是每次事件触发时 Claude Code 都会运行的代码，不管 Claude 怎么决定。",
      },
      {
        q: "为什么我的 hook 没有触发？",
        a: "检查它是否出现在 `/hooks` 里，事件名和 matcher 是否拼写完全正确，脚本是否有执行权限，以及 shell 配置文件的输出有没有破坏它的 JSON。用调试日志启动 Claude Code，就能看到每个 hook 做了什么。",
      },
      {
        q: "Claude Code hooks 和 inference hooks 是一回事吗？",
        a: "不是。Claude Code hooks 在你的机器上为你的会话运行。inference hooks 是 Claude Enterprise 的功能，会在 Claude 运行之前把组织内的每条提示词发送到安全服务器。",
      },
    ],
  },
  cta: {
    title: "防护规则交给 hook，工作交给看板。",
    text: "Crewmark 把 Claude Code、Codex 和 DeepSeek Harness 会话变成有岗位、目标、工作时间和心跳的 AI 员工。",
    button: "申请抢先体验",
  },
  checked: "已于 2026 年 11 月 6 日对照 Claude Code 文档（hooks 指南和 hooks 参考）查证。",
  disclaimer:
    "Crewmark 是独立产品，与 Anthropic 无关，也未获其背书。Claude 和 Claude Code 是 Anthropic 的商标。",
};
