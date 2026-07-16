export const componentCode = {
  "neon-gradient-button": `type NeonGradientButtonProps = {
  children?: React.ReactNode;
};

export function NeonGradientButton({ children = "Launch interface" }: NeonGradientButtonProps) {
  return (
    <button className="rounded-full bg-gradient-to-r from-[#40E0D0] via-[#a78bfa] to-[#fb923c] p-px text-sm font-semibold text-white shadow-[0_0_32px_rgba(64,224,208,0.25)] transition hover:scale-[1.02]">
      <span className="block rounded-full bg-[#0b0f14] px-5 py-2.5">{children}</span>
    </button>
  );
}`,
  "glass-command-card": `export function GlassCommandCard() {
  return (
    <div className="w-full max-w-sm rounded-lg border border-white/12 bg-white/[0.06] p-4 shadow-2xl backdrop-blur">
      <div className="flex items-center justify-between">
        <p className="text-sm font-semibold text-white">Command palette</p>
        <kbd className="rounded border border-white/10 bg-[#0b0f14]/80 px-2 py-1 text-xs text-slate-300">Cmd K</kbd>
      </div>
      <div className="mt-4 rounded-lg border border-[#40E0D0]/24 bg-[#40E0D0]/8 px-3 py-2 text-sm text-[#d8fffb]">
        Generate dashboard layout
      </div>
      <p className="mt-3 text-xs text-slate-400">3 actions ready - 1 agent online</p>
    </div>
  );
}`,
  "ai-chat-input": `export function AiChatInput() {
  return (
    <form className="w-[min(28rem,100%)] rounded-lg border border-white/12 bg-[#0b0f14]/70 p-2 shadow-2xl">
      <label htmlFor="ai-message" className="sr-only">Message</label>
      <div className="flex min-w-0 items-end gap-2">
        <textarea
          id="ai-message"
          className="min-h-20 min-w-0 flex-1 resize-none rounded-md border border-white/10 bg-white/[0.04] px-3 py-2 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-[#40E0D0]/40"
          placeholder="Ask the agent to design a flow..."
        />
        <button className="shrink-0 rounded-md bg-[#40E0D0] px-4 py-2 text-sm font-bold text-[#0b0f14]">Send</button>
      </div>
    </form>
  );
}`,
  "streaming-response-bubble": `export function StreamingResponseBubble() {
  return (
    <div className="max-w-sm rounded-lg border border-[#40E0D0]/24 bg-[#40E0D0]/8 p-4 text-sm text-[#d8fffb]">
      <p>I can turn that product brief into a component map, then draft the first screen.</p>
      <div className="mt-3 flex gap-1" aria-label="Streaming response">
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#40E0D0]" />
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#40E0D0] [animation-delay:150ms]" />
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#40E0D0] [animation-delay:300ms]" />
      </div>
    </div>
  );
}`,
  "prompt-badge": `export function PromptBadge() {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-[#a78bfa]/30 bg-[#a78bfa]/10 px-3 py-1.5 text-xs font-semibold text-[#eee7ff]">
      <span className="h-2 w-2 rounded-full bg-[#a78bfa] shadow-[0_0_12px_rgba(167,139,250,0.8)]" />
      Prompt tuned
    </span>
  );
}`,
  "agent-step-timeline": `const steps = ["Parse brief", "Create variants", "Ship preview"];

export function AgentStepTimeline() {
  return (
    <ol className="w-full max-w-xs space-y-3">
      {steps.map((step, index) => (
        <li key={step} className="flex items-center gap-3 text-sm text-slate-200">
          <span className="grid h-7 w-7 place-items-center rounded-full border border-[#40E0D0]/30 bg-[#40E0D0]/10 text-xs text-[#d8fffb]">
            {index + 1}
          </span>
          <span>{step}</span>
        </li>
      ))}
    </ol>
  );
}`,
  "floating-nav-dock": `const items = ["Home", "UI", "AI", "Docs"];

export function FloatingNavDock() {
  return (
    <nav aria-label="Preview navigation" className="rounded-full border border-white/12 bg-[#0b0f14]/78 p-1 shadow-2xl backdrop-blur">
      <ul className="flex gap-1">
        {items.map((item) => (
          <li key={item}>
            <button className="block rounded-full px-3 py-2 text-xs font-medium text-slate-300 transition hover:bg-white/10 hover:text-white" type="button">
              {item}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}`,
  "glow-loader": `export function GlowLoader() {
  return (
    <div className="flex items-center gap-3" role="status" aria-label="Loading">
      <span className="h-4 w-4 animate-ping rounded-full bg-[#40E0D0]" />
      <span className="h-4 w-4 animate-ping rounded-full bg-[#a78bfa] [animation-delay:120ms]" />
      <span className="h-4 w-4 animate-ping rounded-full bg-[#fb923c] [animation-delay:240ms]" />
    </div>
  );
}`,
  "copy-code-card": `export function CopyCodeCard() {
  return (
    <div className="w-full max-w-sm rounded-lg border border-white/12 bg-[#0b0f14]/90">
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
        <span className="text-xs text-slate-400">component.tsx</span>
        <button className="rounded-full bg-white/10 px-3 py-1 text-xs text-white">Copy</button>
      </div>
      <pre className="overflow-hidden p-4 text-xs leading-5 text-[#d8fffb]">{\`<Button glow>\\n  Ship it\\n</Button>\`}</pre>
    </div>
  );
}`,
  "source-citation-card": `export function SourceCitationCard() {
  return (
    <figure className="w-full max-w-sm rounded-lg border border-[#fb923c]/24 bg-[#fb923c]/8 p-4">
      <blockquote className="text-sm text-orange-50">Grounded responses should show the trail back to source material.</blockquote>
      <figcaption className="mt-3 text-xs font-medium text-[#fdba74]">Source - docs/agent-interface.md</figcaption>
    </figure>
  );
}`,
  "model-switcher": `const models = ["fast", "smart", "deep"];

export function ModelSwitcher() {
  return (
    <div className="inline-flex rounded-full border border-white/12 bg-[#0b0f14]/80 p-1">
      {models.map((model) => (
        <button
          key={model}
          className={model === "smart" ? "rounded-full bg-[#40E0D0] px-3 py-1.5 text-xs font-semibold text-[#0b0f14]" : "rounded-full px-3 py-1.5 text-xs font-semibold text-slate-400 transition hover:text-white"}
          type="button"
        >
          {model}
        </button>
      ))}
    </div>
  );
}`,
  "token-usage-pill": `export function TokenUsagePill() {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-[#40E0D0]/25 bg-[#40E0D0]/10 px-4 py-2 text-sm font-semibold text-[#d8fffb]">
      <span className="h-2 w-16 overflow-hidden rounded-full bg-[#1b1b1d]">
        <span className="block h-full w-2/3 rounded-full bg-[#40E0D0]" />
      </span>
      4.2k tokens
    </span>
  );
}`,
  "gradient-split-button": `export function GradientSplitButton() {
  return (
    <div className="inline-flex overflow-hidden rounded-full border border-[#40E0D0]/25 bg-[#0b0f14] shadow-[0_0_28px_rgba(64,224,208,0.16)]">
      <button className="bg-[#40E0D0] px-4 py-2.5 text-sm font-bold text-[#0b0f14]" type="button">
        Deploy
      </button>
      <button
        aria-label="Open deploy options"
        className="border-l border-[#0b0f14]/20 px-3 py-2.5 text-sm font-bold text-[#d8fffb] transition hover:bg-[#40E0D0]/12"
        type="button"
      >
        v
      </button>
    </div>
  );
}`,
  "glass-metric-card": `export function GlassMetricCard() {
  return (
    <div className="w-full max-w-xs rounded-lg border border-[#40E0D0]/20 bg-white/[0.06] p-5 backdrop-blur">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#40E0D0]">Eval score</p>
      <div className="mt-3 flex items-end justify-between">
        <span className="text-4xl font-black text-white">94.8%</span>
        <span className="rounded-full bg-[#40E0D0]/12 px-2.5 py-1 text-xs font-semibold text-[#d8fffb]">+6.2</span>
      </div>
      <div className="mt-4 h-2 overflow-hidden rounded-full bg-[#1b1b1d]">
        <div className="h-full w-[82%] rounded-full bg-gradient-to-r from-[#40E0D0] to-[#a78bfa]" />
      </div>
    </div>
  );
}`,
  "neural-search-input": `export function NeuralSearchInput() {
  return (
    <label className="flex w-full max-w-sm items-center gap-3 rounded-full border border-[#40E0D0]/25 bg-[#0b0f14]/80 px-4 py-3 shadow-2xl">
      <span className="h-2.5 w-2.5 rounded-full bg-[#40E0D0] shadow-[0_0_14px_rgba(64,224,208,0.75)]" />
      <span className="sr-only">Search components</span>
      <input
        className="min-w-0 flex-1 bg-transparent text-sm text-white outline-none placeholder:text-slate-500"
        placeholder="Search command, prompt, or UI..."
        type="search"
      />
      <kbd className="rounded border border-white/10 bg-white/[0.06] px-2 py-1 text-xs text-slate-300">/</kbd>
    </label>
  );
}`,
  "voice-wave-loader": `const bars = ["h-5", "h-8", "h-12", "h-7", "h-10", "h-6"];

export function VoiceWaveLoader() {
  return (
    <div className="flex items-center gap-1.5" role="status" aria-label="Audio processing">
      {bars.map((height, index) => (
        <span
          key={\`\${height}-\${index}\`}
          className={\`\${height} w-2 animate-pulse rounded-full bg-[#40E0D0] shadow-[0_0_16px_rgba(64,224,208,0.45)]\`}
          style={{ animationDelay: \`\${index * 90}ms\` }}
        />
      ))}
    </div>
  );
}`,
  "context-menu-panel": `const actions = ["Duplicate", "Copy link", "Open in agent", "Archive"];

export function ContextMenuPanel() {
  return (
    <div className="w-56 rounded-lg border border-white/12 bg-[#0b0f14]/92 p-2 shadow-2xl backdrop-blur">
      {actions.map((action, index) => (
        <button
          key={action}
          className="flex w-full items-center justify-between rounded-md px-3 py-2 text-left text-sm text-slate-200 transition hover:bg-[#40E0D0]/10 hover:text-white"
          type="button"
        >
          <span>{action}</span>
          {index === 2 ? <span className="text-xs text-[#40E0D0]">new</span> : null}
        </button>
      ))}
    </div>
  );
}`,
  "shortcut-key": `export function ShortcutKey() {
  return (
    <span className="inline-flex items-center gap-1 rounded-md border border-white/12 bg-white/[0.06] p-1 text-xs font-semibold text-slate-200">
      <kbd className="rounded bg-[#1b1b1d] px-2 py-1 text-[#d8fffb]">Ctrl</kbd>
      <span className="text-slate-500">+</span>
      <kbd className="rounded bg-[#1b1b1d] px-2 py-1 text-[#d8fffb]">K</kbd>
    </span>
  );
}`,
  "modal-shell": `export function ModalShell() {
  return (
    <div className="w-full max-w-sm rounded-lg border border-[#40E0D0]/20 bg-[#0b0f14] p-5 shadow-[0_22px_80px_rgba(0,0,0,0.45)]">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#40E0D0]">Confirm action</p>
          <h2 className="mt-2 text-lg font-bold text-white">Publish component?</h2>
        </div>
        <button aria-label="Close modal" className="rounded-full bg-white/8 px-2 py-1 text-sm text-slate-300" type="button">
          x
        </button>
      </div>
      <p className="mt-3 text-sm leading-6 text-slate-400">This will make the component visible in the public gallery.</p>
      <div className="mt-5 flex justify-end gap-2">
        <button className="rounded-full border border-white/12 px-4 py-2 text-sm font-semibold text-slate-200" type="button">
          Cancel
        </button>
        <button className="rounded-full bg-[#40E0D0] px-4 py-2 text-sm font-bold text-[#0b0f14]" type="button">
          Publish
        </button>
      </div>
    </div>
  );
}`,
  "status-toast-stack": `const toasts = [
  { label: "Build passed", color: "bg-[#40E0D0]" },
  { label: "Preview deployed", color: "bg-[#a78bfa]" },
  { label: "Docs synced", color: "bg-[#fb923c]" },
];

export function StatusToastStack() {
  return (
    <div className="grid w-full max-w-xs gap-2">
      {toasts.map((toast) => (
        <div key={toast.label} className="flex items-center gap-3 rounded-lg border border-white/12 bg-white/[0.06] px-4 py-3 shadow-xl backdrop-blur">
          <span className={\`h-2.5 w-2.5 rounded-full \${toast.color}\`} />
          <span className="text-sm font-semibold text-white">{toast.label}</span>
        </div>
      ))}
    </div>
  );
}`,
  "icon-pulse-button": `export function IconPulseButton() {
  return (
    <button
      aria-label="Run agent"
      className="relative grid h-14 w-14 place-items-center rounded-full border border-[#40E0D0]/30 bg-[#40E0D0]/10 text-[#d8fffb] shadow-[0_0_28px_rgba(64,224,208,0.18)] transition hover:scale-105 hover:bg-[#40E0D0]/16"
      type="button"
    >
      <span className="absolute inset-0 animate-ping rounded-full border border-[#40E0D0]/30" />
      <span className="relative text-xl font-black">AI</span>
    </button>
  );
}`,
  "pricing-tier-card": `const perks = ["20 components", "Copy source", "MIT-free remix"];

export function PricingTierCard() {
  return (
    <section className="w-full max-w-xs rounded-lg border border-[#40E0D0]/22 bg-white/[0.06] p-5 backdrop-blur">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#40E0D0]">Creator kit</p>
      <div className="mt-3 flex items-end gap-2">
        <span className="text-4xl font-black text-white">$0</span>
        <span className="pb-1 text-sm text-slate-400">open source</span>
      </div>
      <ul className="mt-4 space-y-2 text-sm text-slate-300">
        {perks.map((perk) => (
          <li key={perk} className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#40E0D0]" />
            {perk}
          </li>
        ))}
      </ul>
    </section>
  );
}`,
  "file-dropzone": `export function FileDropzone() {
  return (
    <label className="grid w-full max-w-sm cursor-pointer place-items-center rounded-lg border border-dashed border-[#40E0D0]/35 bg-[#40E0D0]/8 px-6 py-8 text-center transition hover:bg-[#40E0D0]/12">
      <span className="grid h-10 w-10 place-items-center rounded-full bg-[#40E0D0]/14 text-sm font-black text-[#d8fffb]">UP</span>
      <span className="mt-3 text-sm font-semibold text-white">Drop UI references here</span>
      <span className="mt-1 text-xs text-slate-400">PNG, JPG, or SVG up to 5MB</span>
      <input className="sr-only" type="file" />
    </label>
  );
}`,
  "progress-stepper": `const stages = ["Brief", "Design", "Code"];

export function ProgressStepper() {
  return (
    <ol className="flex w-full max-w-sm items-center">
      {stages.map((stage, index) => (
        <li key={stage} className="flex flex-1 items-center">
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-[#40E0D0]/30 bg-[#40E0D0]/10 text-xs font-bold text-[#d8fffb]">
            {index + 1}
          </span>
          <span className="ml-2 text-xs font-semibold text-slate-300">{stage}</span>
          {index < stages.length - 1 ? <span className="mx-3 h-px flex-1 bg-gradient-to-r from-[#40E0D0]/60 to-[#a78bfa]/40" /> : null}
        </li>
      ))}
    </ol>
  );
}`,
  "notification-bell": `export function NotificationBell() {
  return (
    <button
      aria-label="Open notifications"
      className="relative rounded-full border border-white/12 bg-white/[0.06] p-4 text-white shadow-xl transition hover:border-[#40E0D0]/35 hover:bg-[#40E0D0]/10"
      type="button"
    >
      <span className="block h-6 w-6 rounded-full border-2 border-current border-b-transparent" />
      <span className="absolute right-3 top-3 h-3 w-3 rounded-full border-2 border-[#0b0f14] bg-[#fb923c]" />
      <span className="absolute inset-x-0 bottom-2 mx-auto h-1 w-3 rounded-full bg-current" />
    </button>
  );
}`,
  "code-tab-switcher": `const tabs = ["Preview", "Code", "Usage"];

export function CodeTabSwitcher() {
  return (
    <div className="inline-flex rounded-lg border border-white/12 bg-[#0b0f14]/82 p-1">
      {tabs.map((tab) => (
        <button
          key={tab}
          className={\`rounded-md px-3 py-2 text-xs font-semibold transition \${tab === "Code" ? "bg-[#40E0D0] text-[#0b0f14]" : "text-slate-400 hover:text-white"}\`}
          type="button"
        >
          {tab}
        </button>
      ))}
    </div>
  );
}`,
  "agent-memory-card": `const memories = ["Prefers compact dashboards", "Uses eval scorecards", "Ships with dark themes"];

export function AgentMemoryCard() {
  return (
    <section className="w-full max-w-sm rounded-lg border border-[#40E0D0]/22 bg-white/[0.06] p-5 shadow-2xl backdrop-blur">
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#40E0D0]">Agent memory</p>
          <h3 className="mt-2 text-lg font-bold text-white">Eduardo workspace</h3>
        </div>
        <span className="rounded-full bg-[#40E0D0]/12 px-2.5 py-1 text-xs font-semibold text-[#d8fffb]">3 saved</span>
      </div>
      <ul className="mt-4 space-y-2">
        {memories.map((memory) => (
          <li key={memory} className="flex items-center gap-2 text-sm text-slate-300">
            <span className="h-1.5 w-1.5 rounded-full bg-[#a78bfa]" />
            {memory}
          </li>
        ))}
      </ul>
    </section>
  );
}`,
  "eval-radar-card": `const scores = [
  { label: "Accuracy", value: "96" },
  { label: "Latency", value: "42ms" },
  { label: "Grounding", value: "91" },
];

export function EvalRadarCard() {
  return (
    <section className="w-full max-w-sm rounded-lg border border-white/12 bg-[#0b0f14]/88 p-5 shadow-2xl">
      <div className="flex items-center justify-between">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#40E0D0]">Eval radar</p>
        <span className="rounded-full bg-[#fb923c]/12 px-2.5 py-1 text-xs font-semibold text-[#fdba74]">live</span>
      </div>
      <div className="mt-5 grid grid-cols-3 gap-2">
        {scores.map((score) => (
          <div key={score.label} className="rounded-md border border-white/10 bg-white/[0.04] p-3">
            <p className="text-[0.65rem] uppercase tracking-[0.14em] text-slate-500">{score.label}</p>
            <p className="mt-2 text-xl font-black text-white">{score.value}</p>
          </div>
        ))}
      </div>
      <div className="mt-4 h-2 overflow-hidden rounded-full bg-[#1b1b1d]">
        <div className="h-full w-[88%] rounded-full bg-gradient-to-r from-[#40E0D0] via-[#a78bfa] to-[#fb923c]" />
      </div>
    </section>
  );
}`,
  "prompt-version-select": `const versions = ["v3.2 production", "v3.1 stable", "v2.9 fallback"];

export function PromptVersionSelect() {
  return (
    <label className="grid w-full max-w-sm gap-2 rounded-lg border border-white/12 bg-[#0b0f14]/82 p-4 shadow-2xl">
      <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#40E0D0]">Prompt version</span>
      <select className="rounded-md border border-[#40E0D0]/24 bg-white/[0.05] px-3 py-2.5 text-sm font-semibold text-white outline-none transition focus:border-[#40E0D0]/60">
        {versions.map((version) => (
          <option key={version}>{version}</option>
        ))}
      </select>
      <span className="text-xs text-slate-400">Pinned for deterministic release reviews</span>
    </label>
  );
}`,
  "api-key-field": `export function ApiKeyField() {
  return (
    <div className="w-full max-w-sm rounded-lg border border-[#40E0D0]/20 bg-white/[0.06] p-4 shadow-2xl backdrop-blur">
      <label htmlFor="api-key" className="text-xs font-semibold uppercase tracking-[0.18em] text-[#40E0D0]">
        API key
      </label>
      <div className="mt-3 flex min-w-0 items-center gap-2 rounded-md border border-white/10 bg-[#0b0f14]/80 p-2">
        <input
          id="api-key"
          className="min-w-0 flex-1 bg-transparent text-sm text-white outline-none placeholder:text-slate-500"
          placeholder="sk_live_************"
          type="password"
        />
        <button className="rounded-md bg-[#40E0D0] px-3 py-1.5 text-xs font-bold text-[#0b0f14]" type="button">
          Save
        </button>
      </div>
      <p className="mt-2 text-xs text-slate-400">Use environment variables in production.</p>
    </div>
  );
}`,
  "inline-alert-banner": `export function InlineAlertBanner() {
  return (
    <div className="flex w-full max-w-md items-start gap-3 rounded-lg border border-[#fb923c]/25 bg-[#fb923c]/10 p-4 shadow-xl">
      <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[#fb923c]/16 text-xs font-black text-[#fdba74]">!</span>
      <div>
        <p className="text-sm font-semibold text-orange-50">Usage spike detected</p>
        <p className="mt-1 text-xs leading-5 text-slate-400">Token volume is 28% higher than the last release window.</p>
      </div>
    </div>
  );
}`,
  "confidence-meter": `const signals = [
  { label: "Grounded", value: "91%", width: "w-[91%]" },
  { label: "Coverage", value: "84%", width: "w-[84%]" },
  { label: "Risk", value: "12%", width: "w-[12%]" },
];

export function ConfidenceMeter() {
  return (
    <section className="w-full max-w-sm rounded-lg border border-[#40E0D0]/20 bg-white/[0.06] p-5 shadow-2xl backdrop-blur">
      <div className="flex items-center justify-between">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#40E0D0]">Confidence</p>
        <span className="rounded-full bg-[#40E0D0]/12 px-2.5 py-1 text-xs font-semibold text-[#d8fffb]">ready</span>
      </div>
      <div className="mt-4 space-y-3">
        {signals.map((signal) => (
          <div key={signal.label}>
            <div className="flex justify-between text-xs font-semibold text-slate-300">
              <span>{signal.label}</span>
              <span>{signal.value}</span>
            </div>
            <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-[#1b1b1d]">
              <div className={\`\${signal.width} h-full rounded-full bg-gradient-to-r from-[#40E0D0] to-[#a78bfa]\`} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}`,
  "workflow-breadcrumb": `const crumbs = ["Workspace", "Agents", "Release"];

export function WorkflowBreadcrumb() {
  return (
    <nav aria-label="Workflow breadcrumb" className="rounded-full border border-white/12 bg-[#0b0f14]/82 px-3 py-2 shadow-xl backdrop-blur">
      <ol className="flex items-center gap-2 text-xs font-semibold">
        {crumbs.map((crumb, index) => (
          <li key={crumb} className="flex items-center gap-2">
            <button className={index === crumbs.length - 1 ? "text-[#d8fffb]" : "text-slate-400 transition hover:text-white"} type="button">
              {crumb}
            </button>
            {index < crumbs.length - 1 ? <span className="text-slate-600">/</span> : null}
          </li>
        ))}
      </ol>
    </nav>
  );
}`,
  "schema-field-row": `export function SchemaFieldRow() {
  return (
    <label className="grid w-full max-w-sm gap-2 rounded-lg border border-white/12 bg-[#0b0f14]/82 p-4 shadow-2xl">
      <span className="flex items-center justify-between gap-3">
        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#40E0D0]">Field name</span>
        <span className="rounded-full bg-[#a78bfa]/12 px-2 py-0.5 text-[0.65rem] font-bold text-[#ddd6fe]">required</span>
      </span>
      <input
        className="rounded-md border border-white/10 bg-white/[0.05] px-3 py-2.5 text-sm text-white outline-none placeholder:text-slate-500 focus:border-[#40E0D0]/55"
        defaultValue="customer_segment"
      />
      <span className="text-xs text-slate-400">String - used by the recommendation model</span>
    </label>
  );
}`,
  "skeleton-card": `export function SkeletonCard() {
  return (
    <div className="w-full max-w-sm rounded-lg border border-white/12 bg-white/[0.06] p-5 shadow-2xl backdrop-blur" role="status" aria-label="Loading card">
      <div className="h-3 w-24 animate-pulse rounded-full bg-[#40E0D0]/25" />
      <div className="mt-5 h-8 w-40 animate-pulse rounded-md bg-white/12" />
      <div className="mt-4 space-y-2">
        <div className="h-2.5 w-full animate-pulse rounded-full bg-white/10" />
        <div className="h-2.5 w-4/5 animate-pulse rounded-full bg-white/10" />
        <div className="h-2.5 w-2/3 animate-pulse rounded-full bg-white/10" />
      </div>
    </div>
  );
}`,
  "stat-strip": `const stats = [
  { label: "Runs", value: "1.8k" },
  { label: "Pass", value: "98%" },
  { label: "Cost", value: "$42" },
];

export function StatStrip() {
  return (
    <dl className="grid w-full max-w-md grid-cols-3 overflow-hidden rounded-lg border border-[#40E0D0]/20 bg-[#0b0f14]/86 shadow-2xl">
      {stats.map((stat) => (
        <div key={stat.label} className="border-r border-white/10 p-4 last:border-r-0">
          <dt className="text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-slate-500">{stat.label}</dt>
          <dd className="mt-2 text-2xl font-black text-white">{stat.value}</dd>
        </div>
      ))}
    </dl>
  );
}`,
  "command-hint-bar": `const hints = [
  { key: "K", label: "Command" },
  { key: "Enter", label: "Run" },
  { key: "Esc", label: "Close" },
];

export function CommandHintBar() {
  return (
    <div className="flex flex-wrap items-center gap-2 rounded-full border border-white/12 bg-[#0b0f14]/82 px-3 py-2 shadow-xl backdrop-blur">
      {hints.map((hint) => (
        <span key={hint.label} className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-400">
          <kbd className="rounded-md border border-white/10 bg-white/[0.06] px-2 py-1 text-[#d8fffb]">{hint.key}</kbd>
          {hint.label}
        </span>
      ))}
    </div>
  );
}`,
  "toggle-setting-row": `export function ToggleSettingRow() {
  return (
    <div className="flex w-full max-w-sm items-center justify-between gap-4 rounded-lg border border-white/12 bg-white/[0.06] p-4 shadow-2xl backdrop-blur">
      <div>
        <p className="text-sm font-semibold text-white">Auto-run evals</p>
        <p className="mt-1 text-xs leading-5 text-slate-400">Start checks whenever a prompt version changes.</p>
      </div>
      <button
        aria-pressed="true"
        className="flex h-7 w-12 shrink-0 items-center justify-end rounded-full border border-[#40E0D0]/35 bg-[#40E0D0]/18 p-1"
        type="button"
      >
        <span className="h-5 w-5 rounded-full bg-[#40E0D0] shadow-[0_0_16px_rgba(64,224,208,0.55)]" />
      </button>
    </div>
  );
}`,
  "avatar-stack": `const people = ["EB", "AI", "QA"];

export function AvatarStack() {
  return (
    <div className="inline-flex items-center rounded-full border border-white/12 bg-[#0b0f14]/82 px-3 py-2 shadow-xl">
      <div className="flex -space-x-2">
        {people.map((person, index) => (
          <span
            key={person}
            className="grid h-9 w-9 place-items-center rounded-full border-2 border-[#0b0f14] bg-[#40E0D0]/14 text-xs font-black text-[#d8fffb]"
            style={{ zIndex: people.length - index }}
          >
            {person}
          </span>
        ))}
      </div>
      <span className="ml-3 text-xs font-semibold text-slate-300">3 reviewers</span>
    </div>
  );
}`,
  "empty-state-panel": `export function EmptyStatePanel() {
  return (
    <section className="grid w-full max-w-sm place-items-center rounded-lg border border-dashed border-[#40E0D0]/30 bg-[#40E0D0]/8 p-8 text-center">
      <span className="grid h-12 w-12 place-items-center rounded-full bg-[#40E0D0]/14 text-sm font-black text-[#d8fffb]">+</span>
      <h3 className="mt-4 text-base font-bold text-white">No variants yet</h3>
      <p className="mt-2 max-w-xs text-sm leading-6 text-slate-400">Create the first prompt variant to compare quality, cost, and latency.</p>
      <button className="mt-5 rounded-full bg-[#40E0D0] px-4 py-2 text-sm font-bold text-[#0b0f14]" type="button">
        Add variant
      </button>
    </section>
  );
}`,
  "release-checklist": `const checks = ["Types pass", "Preview built", "Docs updated"];

export function ReleaseChecklist() {
  return (
    <section className="w-full max-w-sm rounded-lg border border-[#40E0D0]/20 bg-white/[0.06] p-5 shadow-2xl backdrop-blur">
      <div className="flex items-center justify-between gap-3">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#40E0D0]">Release check</p>
        <span className="rounded-full bg-[#40E0D0]/12 px-2.5 py-1 text-xs font-semibold text-[#d8fffb]">3/3</span>
      </div>
      <ul className="mt-4 space-y-3">
        {checks.map((check) => (
          <li key={check} className="flex items-center gap-3 text-sm font-semibold text-slate-200">
            <span className="grid h-6 w-6 place-items-center rounded-full bg-[#40E0D0] text-xs font-black text-[#0b0f14]">OK</span>
            {check}
          </li>
        ))}
      </ul>
    </section>
  );
}`,
  "prompt-diff-viewer": `const changes = [
  { mark: "-", text: "Write a short answer" },
  { mark: "+", text: "Answer with source-backed steps" },
];

export function PromptDiffViewer() {
  return (
    <div className="w-full max-w-sm overflow-hidden rounded-lg border border-white/12 bg-[#0b0f14]/88 shadow-2xl">
      <div className="border-b border-white/10 px-4 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-[#40E0D0]">Prompt diff</div>
      <div className="grid gap-1 p-3 font-mono text-xs">
        {changes.map((change) => (
          <p key={change.text} className={change.mark === "+" ? "rounded bg-[#40E0D0]/10 px-3 py-2 text-[#d8fffb]" : "rounded bg-[#fb923c]/10 px-3 py-2 text-[#fdba74]"}>
            <span className="mr-2 font-bold">{change.mark}</span>
            {change.text}
          </p>
        ))}
      </div>
    </div>
  );
}`,
  "color-token-swatch": `const tokens = [
  { name: "brand", value: "#40E0D0" },
  { name: "violet", value: "#a78bfa" },
  { name: "orange", value: "#fb923c" },
];

export function ColorTokenSwatch() {
  return (
    <div className="grid w-full max-w-sm gap-2 rounded-lg border border-white/12 bg-white/[0.06] p-4 shadow-2xl backdrop-blur">
      {tokens.map((token) => (
        <div key={token.name} className="flex items-center justify-between rounded-md border border-white/10 bg-[#0b0f14]/70 px-3 py-2">
          <span className="flex items-center gap-2 text-sm font-semibold text-white">
            <span className="h-5 w-5 rounded-full" style={{ backgroundColor: token.value }} />
            {token.name}
          </span>
          <code className="text-xs text-slate-400">{token.value}</code>
        </div>
      ))}
    </div>
  );
}`,
  "integration-status-grid": `const integrations = [
  { name: "GitHub", state: "synced" },
  { name: "Vercel", state: "live" },
  { name: "Docs", state: "ready" },
];

export function IntegrationStatusGrid() {
  return (
    <div className="grid w-full max-w-sm grid-cols-3 gap-2">
      {integrations.map((integration) => (
        <div key={integration.name} className="rounded-lg border border-[#40E0D0]/20 bg-[#40E0D0]/8 p-4 text-center shadow-xl">
          <span className="mx-auto block h-2.5 w-2.5 rounded-full bg-[#40E0D0] shadow-[0_0_14px_rgba(64,224,208,0.7)]" />
          <p className="mt-3 text-sm font-bold text-white">{integration.name}</p>
          <p className="mt-1 text-xs text-slate-400">{integration.state}</p>
        </div>
      ))}
    </div>
  );
}`,
  "usage-sparkline-card": `const bars = ["h-5", "h-8", "h-6", "h-10", "h-7", "h-12", "h-9"];

export function UsageSparklineCard() {
  return (
    <section className="w-full max-w-xs rounded-lg border border-white/12 bg-[#0b0f14]/86 p-5 shadow-2xl">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#40E0D0]">Usage trend</p>
      <div className="mt-4 flex h-16 items-end gap-2">
        {bars.map((bar, index) => (
          <span key={\`\${bar}-\${index}\`} className={\`\${bar} flex-1 rounded-t bg-gradient-to-t from-[#40E0D0] to-[#a78bfa]\`} />
        ))}
      </div>
      <div className="mt-4 flex items-end justify-between">
        <span className="text-3xl font-black text-white">12.4k</span>
        <span className="rounded-full bg-[#40E0D0]/12 px-2.5 py-1 text-xs font-semibold text-[#d8fffb]">+18%</span>
      </div>
    </section>
  );
}`,
  "data-pipeline-card": `const nodes = ["Input", "Clean", "Ship"];

export function DataPipelineCard() {
  return (
    <section className="w-full max-w-xs rounded-lg border border-[#40E0D0]/20 bg-white/[0.06] p-5 shadow-2xl backdrop-blur">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#40E0D0]">Pipeline</p>
      <div className="mt-5 grid grid-cols-3 gap-2">
        {nodes.map((node, index) => (
          <div key={node} className="rounded-md border border-white/10 bg-[#0b0f14]/60 p-2 text-center">
            <span className="mx-auto grid h-8 w-8 place-items-center rounded-full border border-[#40E0D0]/35 bg-[#40E0D0]/12 text-xs font-black text-[#d8fffb]">
              {index + 1}
            </span>
            <span className="mt-2 block text-xs font-semibold text-slate-300">{node}</span>
          </div>
        ))}
      </div>
    </section>
  );
}`,
  "approval-action-panel": `const reviewers = ["Design", "Legal", "Ops"];

export function ApprovalActionPanel() {
  return (
    <section className="w-full max-w-sm rounded-lg border border-[#40E0D0]/20 bg-[#0b0f14]/88 p-5 shadow-2xl">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#40E0D0]">Approval</p>
          <h3 className="mt-2 text-lg font-bold text-white">Publish launch prompt</h3>
        </div>
        <span className="rounded-full bg-[#fb923c]/12 px-2.5 py-1 text-xs font-semibold text-[#fdba74]">pending</span>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {reviewers.map((reviewer) => (
          <span key={reviewer} className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5 text-xs font-semibold text-slate-300">
            {reviewer}
          </span>
        ))}
      </div>
      <div className="mt-5 flex gap-2">
        <button className="flex-1 rounded-full border border-white/12 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:bg-white/8" type="button">
          Request edits
        </button>
        <button className="flex-1 rounded-full bg-[#40E0D0] px-4 py-2 text-sm font-bold text-[#0b0f14]" type="button">
          Approve
        </button>
      </div>
    </section>
  );
}`,
  "segmented-filter-tabs": `const filters = [
  { label: "All", count: "42" },
  { label: "Live", count: "18" },
  { label: "Draft", count: "7" },
];

export function SegmentedFilterTabs() {
  return (
    <div className="inline-flex rounded-lg border border-white/12 bg-[#0b0f14]/82 p-1 shadow-xl">
      {filters.map((filter) => (
        <button
          key={filter.label}
          className={filter.label === "Live" ? "rounded-md bg-[#40E0D0] px-3 py-2 text-xs font-bold text-[#0b0f14]" : "rounded-md px-3 py-2 text-xs font-semibold text-slate-400 transition hover:text-white"}
          type="button"
        >
          {filter.label}
          <span className={filter.label === "Live" ? "ml-2 text-[#0b0f14]/70" : "ml-2 text-slate-600"}>{filter.count}</span>
        </button>
      ))}
    </div>
  );
}`,
  "latency-budget-card": `const checkpoints = [
  { label: "Queue", value: "18ms", width: "w-[18%]" },
  { label: "Model", value: "212ms", width: "w-[62%]" },
  { label: "Render", value: "41ms", width: "w-[28%]" },
];

export function LatencyBudgetCard() {
  return (
    <section className="w-full max-w-sm rounded-lg border border-white/12 bg-white/[0.06] p-5 shadow-2xl backdrop-blur">
      <div className="flex items-center justify-between gap-3">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#40E0D0]">Latency budget</p>
        <span className="rounded-full bg-[#40E0D0]/12 px-2.5 py-1 text-xs font-semibold text-[#d8fffb]">271ms</span>
      </div>
      <div className="mt-4 space-y-3">
        {checkpoints.map((checkpoint) => (
          <div key={checkpoint.label}>
            <div className="flex justify-between text-xs font-semibold text-slate-300">
              <span>{checkpoint.label}</span>
              <span>{checkpoint.value}</span>
            </div>
            <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-[#1b1b1d]">
              <div className={\`\${checkpoint.width} h-full rounded-full bg-gradient-to-r from-[#40E0D0] to-[#fb923c]\`} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}`,
  "webhook-event-log": `const events = [
  { name: "component.created", time: "14:22", state: "200" },
  { name: "preview.rendered", time: "14:23", state: "200" },
  { name: "docs.synced", time: "14:24", state: "202" },
];

export function WebhookEventLog() {
  return (
    <div className="w-full max-w-sm overflow-hidden rounded-lg border border-white/12 bg-[#0b0f14]/88 shadow-2xl">
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#40E0D0]">Webhook log</p>
        <span className="h-2.5 w-2.5 rounded-full bg-[#40E0D0] shadow-[0_0_14px_rgba(64,224,208,0.75)]" />
      </div>
      <div className="divide-y divide-white/8">
        {events.map((event) => (
          <div key={event.name} className="grid grid-cols-[1fr_auto_auto] items-center gap-3 px-4 py-3 text-xs">
            <span className="font-semibold text-slate-200">{event.name}</span>
            <time className="text-slate-500">{event.time}</time>
            <span className="rounded-full bg-[#40E0D0]/12 px-2 py-0.5 font-bold text-[#d8fffb]">{event.state}</span>
          </div>
        ))}
      </div>
    </div>
  );
}`,
  "cost-estimate-card": `const lineItems = [
  { label: "Input", value: "$0.12" },
  { label: "Output", value: "$0.28" },
  { label: "Cache", value: "-$0.05" },
];

export function CostEstimateCard() {
  return (
    <section className="w-full max-w-xs rounded-lg border border-[#40E0D0]/20 bg-white/[0.06] p-5 shadow-2xl backdrop-blur">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#40E0D0]">Run estimate</p>
      <div className="mt-3 flex items-end justify-between">
        <span className="text-4xl font-black text-white">$0.35</span>
        <span className="rounded-full bg-[#40E0D0]/12 px-2.5 py-1 text-xs font-semibold text-[#d8fffb]">cached</span>
      </div>
      <dl className="mt-4 space-y-2">
        {lineItems.map((item) => (
          <div key={item.label} className="flex justify-between text-sm">
            <dt className="text-slate-400">{item.label}</dt>
            <dd className="font-semibold text-slate-100">{item.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}`,
  "dataset-upload-queue": `const files = [
  { name: "prompts.csv", progress: "w-[78%]", state: "uploading" },
  { name: "evals.jsonl", progress: "w-full", state: "ready" },
  { name: "screens.zip", progress: "w-[42%]", state: "queued" },
];

export function DatasetUploadQueue() {
  return (
    <section className="w-full max-w-sm rounded-lg border border-white/12 bg-[#0b0f14]/88 p-4 shadow-2xl">
      <div className="flex items-center justify-between">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#40E0D0]">Upload queue</p>
        <span className="text-xs font-semibold text-slate-400">3 files</span>
      </div>
      <div className="mt-4 space-y-3">
        {files.map((file) => (
          <div key={file.name} className="rounded-md border border-white/10 bg-white/[0.04] p-3">
            <div className="flex justify-between gap-3 text-xs font-semibold">
              <span className="text-slate-100">{file.name}</span>
              <span className="text-slate-500">{file.state}</span>
            </div>
            <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-[#1b1b1d]">
              <div className={\`\${file.progress} h-full rounded-full bg-gradient-to-r from-[#40E0D0] to-[#a78bfa]\`} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}`,
  "agent-status-ribbon": `const statuses = ["Planning", "Writing", "Reviewing"];

export function AgentStatusRibbon() {
  return (
    <div className="flex w-full max-w-md flex-wrap items-center gap-2 rounded-full border border-[#40E0D0]/22 bg-[#0b0f14]/86 px-3 py-2 shadow-2xl backdrop-blur">
      <span className="grid h-8 w-8 place-items-center rounded-full bg-[#40E0D0]/14 text-xs font-black text-[#d8fffb]">AI</span>
      {statuses.map((status, index) => (
        <span
          key={status}
          className={index === 1 ? "rounded-full bg-[#40E0D0] px-3 py-1.5 text-xs font-bold text-[#0b0f14]" : "rounded-full bg-white/[0.06] px-3 py-1.5 text-xs font-semibold text-slate-300"}
        >
          {status}
        </span>
      ))}
    </div>
  );
}`,
  "agent-handoff-card": `const context = ["Customer intent", "Billing history", "Draft response"];

export function AgentHandoffCard() {
  return (
    <section className="w-full max-w-sm rounded-xl border border-white/12 bg-[#0b0f14]/92 p-5 shadow-2xl">
      <div className="flex items-center justify-between"><p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#40E0D0]">Agent handoff</p><span className="rounded-full bg-[#a78bfa]/12 px-2.5 py-1 text-xs font-semibold text-[#c4b5fd]">ready</span></div>
      <div className="mt-4 flex items-center gap-3">
        <span className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/[0.06] text-xs font-black text-slate-200">CS</span><span className="text-lg text-slate-600" aria-hidden="true">→</span><span className="grid h-11 w-11 place-items-center rounded-full border border-[#40E0D0]/24 bg-[#40E0D0]/10 text-xs font-black text-[#d8fffb]">BL</span>
        <div className="min-w-0"><p className="truncate text-sm font-bold text-white">Billing specialist</p><p className="mt-1 text-xs text-slate-500">Confidence 96%</p></div>
      </div>
      <div className="mt-4 rounded-lg border border-white/8 bg-white/[0.035] p-3"><p className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-slate-500">Context attached</p><ul className="mt-2 flex flex-wrap gap-2">{context.map((item) => <li key={item} className="rounded-full bg-white/[0.06] px-2.5 py-1 text-[0.65rem] font-semibold text-slate-300">{item}</li>)}</ul></div>
      <button type="button" className="mt-4 w-full rounded-full bg-[#40E0D0] px-4 py-2.5 text-xs font-bold text-[#0b0f14]">Transfer conversation</button>
    </section>
  );
}`,
  "retrieval-health-card": `const sources = [
  { name: "Product docs", freshness: "2m", score: "98%", tone: "bg-[#40E0D0]" },
  { name: "Help center", freshness: "1h", score: "91%", tone: "bg-[#a78bfa]" },
  { name: "Release notes", freshness: "3d", score: "76%", tone: "bg-[#fb923c]" },
];

export function RetrievalHealthCard() {
  return (
    <section className="w-full max-w-sm rounded-xl border border-white/12 bg-[#0b0f14]/92 p-5 shadow-2xl">
      <div className="flex items-end justify-between"><div><p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#40E0D0]">Retrieval health</p><h3 className="mt-2 text-lg font-bold text-white">Knowledge index</h3></div><span className="text-xs font-semibold text-[#d8fffb]">healthy</span></div>
      <dl className="mt-4 space-y-2">{sources.map((source) => <div key={source.name} className="grid grid-cols-[auto_1fr_auto] items-center gap-3 rounded-lg border border-white/8 bg-white/[0.035] p-3"><span className={\`\${source.tone} h-2 w-2 rounded-full\`} aria-hidden="true" /><div><dt className="text-xs font-semibold text-slate-200">{source.name}</dt><dd className="mt-1 text-[0.65rem] text-slate-500">Synced {source.freshness} ago</dd></div><dd className="text-xs font-black tabular-nums text-white">{source.score}</dd></div>)}</dl>
      <p className="mt-4 text-xs leading-5 text-slate-400">12,482 chunks indexed · 3 sources online</p>
    </section>
  );
}`,
  "rate-limit-gauge": `const limits = [
  { label: "Requests", value: "342 / 500", width: "w-[68%]" },
  { label: "Tokens", value: "72k / 100k", width: "w-[72%]" },
];

export function RateLimitGauge() {
  return (
    <section className="w-full max-w-sm rounded-xl border border-white/12 bg-[#0b0f14]/92 p-5 shadow-2xl">
      <div className="flex items-start justify-between gap-4"><div><p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#40E0D0]">Rate limits</p><h3 className="mt-2 text-lg font-bold text-white">Production API</h3></div><span className="rounded-full bg-[#40E0D0]/10 px-2.5 py-1 text-xs font-bold text-[#d8fffb]">resets 42s</span></div>
      <dl className="mt-5 space-y-4">{limits.map((limit) => <div key={limit.label}><div className="flex items-center justify-between text-xs"><dt className="font-semibold text-slate-300">{limit.label}</dt><dd className="font-bold tabular-nums text-white">{limit.value}</dd></div><div className="mt-2 h-2 overflow-hidden rounded-full bg-white/[0.06]"><div className={\`\${limit.width} h-full rounded-full bg-gradient-to-r from-[#40E0D0] to-[#a78bfa]\`} /></div></div>)}</dl>
      <div className="mt-5 flex items-center justify-between rounded-lg border border-white/8 bg-white/[0.035] p-3"><span className="text-xs text-slate-400">Projected headroom</span><strong className="text-sm text-[#fdba74]">~158 requests</strong></div>
    </section>
  );
}`,
  "context-window-meter": `const segments = [
  { label: "System", tokens: "4.2k", width: "w-[18%]", color: "bg-[#40E0D0]" },
  { label: "Conversation", tokens: "12.8k", width: "w-[38%]", color: "bg-[#a78bfa]" },
  { label: "Sources", tokens: "8.4k", width: "w-[27%]", color: "bg-[#fb923c]" },
];

export function ContextWindowMeter() {
  return (
    <section className="w-full max-w-sm rounded-xl border border-white/12 bg-[#0b0f14]/92 p-5 shadow-2xl">
      <div className="flex items-end justify-between gap-4">
        <div><p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#40E0D0]">Context window</p><h3 className="mt-2 text-2xl font-black tabular-nums text-white">25.4k <span className="text-sm font-semibold text-slate-500">/ 32k</span></h3></div>
        <span className="rounded-full bg-[#fb923c]/12 px-2.5 py-1 text-xs font-bold text-[#fdba74]">79% used</span>
      </div>
      <div className="mt-5 flex h-2.5 gap-1 overflow-hidden rounded-full bg-white/[0.06]" aria-hidden="true">
        {segments.map((segment) => <span key={segment.label} className={\`\${segment.width} \${segment.color} rounded-full\`} />)}
      </div>
      <dl className="mt-4 grid grid-cols-3 gap-2">
        {segments.map((segment) => <div key={segment.label} className="rounded-lg border border-white/8 bg-white/[0.035] p-2.5"><dt className="text-[0.65rem] text-slate-500">{segment.label}</dt><dd className="mt-1 text-xs font-bold tabular-nums text-slate-200">{segment.tokens}</dd></div>)}
      </dl>
      <p className="mt-4 flex items-center gap-2 text-xs text-slate-400"><span className="h-1.5 w-1.5 rounded-full bg-[#40E0D0]" /> 6.6k tokens available for response</p>
    </section>
  );
}`,
  "human-checkpoint-card": `const impact = ["Publishes to production", "Notifies 12 subscribers"];

export function HumanCheckpointCard() {
  return (
    <section className="w-full max-w-sm rounded-xl border border-[#fb923c]/24 bg-[#0b0f14]/92 p-5 shadow-2xl">
      <div className="flex items-start gap-3">
        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#fb923c]/12 text-lg text-[#fdba74]" aria-hidden="true">!</span>
        <div><p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#fdba74]">Human checkpoint</p><h3 className="mt-2 text-base font-bold text-white">Approve release action?</h3><p className="mt-1 text-xs leading-5 text-slate-400">The agent is paused before a high-impact step.</p></div>
      </div>
      <ul className="mt-4 space-y-2 rounded-lg border border-white/8 bg-white/[0.04] p-3">
        {impact.map((item) => <li key={item} className="flex items-center gap-2 text-xs text-slate-300"><span className="h-1.5 w-1.5 rounded-full bg-[#fb923c]" aria-hidden="true" /> {item}</li>)}
      </ul>
      <div className="mt-4 grid grid-cols-2 gap-2">
        <button type="button" className="rounded-full border border-white/12 px-4 py-2.5 text-xs font-bold text-slate-200 transition hover:bg-white/8">Reject</button>
        <button type="button" className="rounded-full bg-[#40E0D0] px-4 py-2.5 text-xs font-bold text-[#0b0f14] transition hover:bg-[#72eadf]">Approve once</button>
      </div>
      <p className="mt-3 text-center text-[0.65rem] text-slate-500">Auto-cancels in 4:58</p>
    </section>
  );
}`,
  "tool-call-inspector": `const calls = [
  { tool: "search_docs", detail: "design system tokens", duration: "128ms", status: "done" },
  { tool: "read_file", detail: "components/card.tsx", duration: "42ms", status: "done" },
  { tool: "write_patch", detail: "3 changes proposed", duration: "running", status: "active" },
];

export function ToolCallInspector() {
  return (
    <section className="w-full max-w-md overflow-hidden rounded-xl border border-white/12 bg-[#0b0f14]/92 shadow-2xl">
      <header className="flex items-center justify-between border-b border-white/10 px-4 py-3">
        <div><p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#40E0D0]">Agent activity</p><h3 className="mt-1 text-sm font-bold text-white">3 tool calls</h3></div>
        <span className="inline-flex items-center gap-2 rounded-full bg-[#40E0D0]/10 px-2.5 py-1 text-xs font-semibold text-[#d8fffb]"><span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#40E0D0]" /> live</span>
      </header>
      <ol className="divide-y divide-white/8">
        {calls.map((call, index) => (
          <li key={call.tool} className="grid grid-cols-[auto_1fr_auto] items-center gap-3 px-4 py-3">
            <span className={call.status === "active" ? "grid h-7 w-7 place-items-center rounded-md bg-[#a78bfa]/16 text-xs font-bold text-[#c4b5fd]" : "grid h-7 w-7 place-items-center rounded-md bg-[#40E0D0]/12 text-xs font-bold text-[#d8fffb]"}>{call.status === "active" ? "…" : index + 1}</span>
            <div className="min-w-0"><p className="truncate font-mono text-xs font-semibold text-slate-100">{call.tool}</p><p className="mt-1 truncate text-xs text-slate-500">{call.detail}</p></div>
            <span className="text-[0.65rem] font-semibold tabular-nums text-slate-500">{call.duration}</span>
          </li>
        ))}
      </ol>
    </section>
  );
}`,
  "multimodal-prompt-composer": `const attachments = [
  { name: "dashboard.png", meta: "1.8 MB", icon: "▧" },
  { name: "requirements.pdf", meta: "6 pages", icon: "≡" },
];

export function MultimodalPromptComposer() {
  return (
    <form className="w-full max-w-md rounded-xl border border-white/12 bg-[#0b0f14]/92 p-3 shadow-2xl">
      <label htmlFor="multimodal-prompt" className="sr-only">Prompt with attachments</label>
      <textarea id="multimodal-prompt" rows={3} defaultValue="Turn these references into an accessible analytics dashboard." className="w-full resize-none bg-transparent px-2 py-1 text-sm leading-6 text-slate-100 outline-none" />
      <ul className="mt-2 flex flex-wrap gap-2" aria-label="Attached context">
        {attachments.map((file) => (
          <li key={file.name} className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.045] px-2.5 py-2">
            <span className="grid h-7 w-7 place-items-center rounded-md bg-[#a78bfa]/14 text-[#c4b5fd]" aria-hidden="true">{file.icon}</span>
            <span><span className="block text-xs font-semibold text-slate-200">{file.name}</span><span className="block text-[0.65rem] text-slate-500">{file.meta}</span></span>
            <button type="button" aria-label={"Remove " + file.name}>remove</button>
          </li>
        ))}
      </ul>
      <div className="mt-3 flex items-center justify-between border-t border-white/8 pt-3">
        <button type="button" aria-label="Attach file" className="grid h-8 w-8 place-items-center rounded-full border border-white/10">+</button>
        <button type="submit" className="rounded-full bg-[#40E0D0] px-4 py-2 text-xs font-bold text-[#0b0f14]">Generate</button>
      </div>
    </form>
  );
}`,
  "structured-output-panel": `const fields = [
  { name: "summary", type: "string", required: true },
  { name: "confidence", type: "number", required: true },
  { name: "citations", type: "string[]", required: false },
];

export function StructuredOutputPanel() {
  return (
    <section className="w-full max-w-sm overflow-hidden rounded-xl border border-white/12 bg-[#0b0f14]/92 shadow-2xl">
      <header className="flex items-center justify-between border-b border-white/10 px-4 py-3">
        <div><p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#a78bfa]">Response schema</p><h3 className="mt-1 text-sm font-bold text-white">Research result</h3></div>
        <span className="rounded-full bg-[#40E0D0]/10 px-2.5 py-1 text-[0.65rem] font-bold text-[#d8fffb]">Valid</span>
      </header>
      <dl className="divide-y divide-white/8">
        {fields.map((field) => (
          <div key={field.name} className="grid grid-cols-[1fr_auto] items-center gap-3 px-4 py-3">
            <div><dt className="font-mono text-xs font-semibold text-slate-100">{field.name}</dt><dd className="mt-1 text-[0.65rem] text-slate-500">{field.required ? "Required field" : "Optional field"}</dd></div>
            <span className="rounded-md border border-[#a78bfa]/20 bg-[#a78bfa]/10 px-2 py-1 font-mono text-[0.65rem] text-[#c4b5fd]">{field.type}</span>
          </div>
        ))}
      </dl>
      <footer className="flex items-center justify-between border-t border-white/10 px-4 py-3"><span className="text-[0.65rem] text-slate-500">Strict mode enabled</span><button type="button" className="text-xs font-semibold text-[#40E0D0]">Edit schema</button></footer>
    </section>
  );
}`,
  "model-eval-comparison": `const candidates = [
  { name: "Fast", model: "v2-mini", quality: 86, latency: "420ms", cost: "$0.18" },
  { name: "Balanced", model: "v3", quality: 94, latency: "880ms", cost: "$0.42" },
];

export function ModelEvalComparison() {
  return (
    <section className="w-full max-w-md rounded-xl border border-white/12 bg-[#0b0f14]/92 p-4 shadow-2xl">
      <header className="flex items-start justify-between gap-4">
        <div><p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#40E0D0]">Evaluation run</p><h3 className="mt-1 text-base font-bold text-white">Support answer quality</h3></div>
        <span className="rounded-full bg-white/[0.06] px-2.5 py-1 text-[0.65rem] font-semibold text-slate-400">240 cases</span>
      </header>
      <div className="mt-4 grid grid-cols-2 gap-3">
        {candidates.map((candidate, index) => (
          <article key={candidate.model} className={index === 1 ? "rounded-lg border border-[#40E0D0]/28 bg-[#40E0D0]/[0.07] p-3" : "rounded-lg border border-white/10 bg-white/[0.035] p-3"}>
            <div className="flex items-center justify-between gap-2"><div><h4 className="text-xs font-bold text-white">{candidate.name}</h4><p className="font-mono text-[0.6rem] text-slate-500">{candidate.model}</p></div>{index === 1 && <span className="rounded-full bg-[#40E0D0]/12 px-2 py-1 text-[0.6rem] font-bold text-[#d8fffb]">Best</span>}</div>
            <p className="mt-4 text-2xl font-black text-white">{candidate.quality}%</p><p className="text-[0.65rem] text-slate-500">quality score</p>
            <dl className="mt-3 space-y-1.5 border-t border-white/8 pt-3 text-[0.65rem]"><div className="flex justify-between"><dt>Latency</dt><dd>{candidate.latency}</dd></div><div className="flex justify-between"><dt>Cost / 1k</dt><dd>{candidate.cost}</dd></div></dl>
          </article>
        ))}
      </div>
      <p className="mt-3 text-[0.65rem] text-slate-500">Balanced improves groundedness by 9 points with a 460ms latency tradeoff.</p>
    </section>
  );
}`,
  "tool-permission-card": `const permissions = [
  { label: "Read workspace files", scope: "Project only", enabled: true },
  { label: "Write proposed changes", scope: "Ask each time", enabled: true },
  { label: "Access external services", scope: "Blocked", enabled: false },
];

export function ToolPermissionCard() {
  return (
    <section className="w-full max-w-sm rounded-xl border border-white/12 bg-[#0b0f14]/92 p-4 shadow-2xl">
      <header className="flex items-start justify-between gap-4"><div><p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#40E0D0]">Tool access</p><h3 className="mt-1 text-base font-bold text-white">Workspace permissions</h3></div><span className="rounded-full bg-[#40E0D0]/10 px-2.5 py-1 text-[0.65rem] font-bold text-[#d8fffb]">Restricted</span></header>
      <ul className="mt-4 divide-y divide-white/8 rounded-lg border border-white/10 bg-white/[0.025]">
        {permissions.map((permission) => (
          <li key={permission.label} className="flex items-center justify-between gap-4 px-3 py-3">
            <div><p className="text-xs font-semibold text-slate-200">{permission.label}</p><p className="mt-1 text-[0.65rem] text-slate-500">{permission.scope}</p></div>
            <span role="img" aria-label={permission.enabled ? "Allowed" : "Blocked"} className={permission.enabled ? "relative h-5 w-9 rounded-full bg-[#40E0D0]" : "relative h-5 w-9 rounded-full bg-white/10"}><span className={permission.enabled ? "absolute right-0.5 top-0.5 h-4 w-4 rounded-full bg-[#0b0f14]" : "absolute left-0.5 top-0.5 h-4 w-4 rounded-full bg-slate-500"} /></span>
          </li>
        ))}
      </ul>
      <button type="button" className="mt-3 w-full rounded-full border border-white/12 px-4 py-2.5 text-xs font-bold text-slate-200">Review access policy</button>
    </section>
  );
}`,
  "model-fallback-route": `const route = [
  { model: "Primary · v3", condition: "Default", state: "Ready", tone: "text-[#d8fffb]" },
  { model: "Fallback · v2-mini", condition: "Timeout > 2s", state: "Standby", tone: "text-[#c4b5fd]" },
  { model: "Cached response", condition: "Providers unavailable", state: "Last resort", tone: "text-[#fdba74]" },
];

export function ModelFallbackRoute() {
  return (
    <section className="w-full max-w-sm rounded-xl border border-white/12 bg-[#0b0f14]/92 p-4 shadow-2xl">
      <header className="flex items-start justify-between gap-4"><div><p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#a78bfa]">Resilience route</p><h3 className="mt-1 text-base font-bold text-white">Response fallback chain</h3></div><span className="rounded-full bg-[#40E0D0]/10 px-2.5 py-1 text-[0.65rem] font-bold text-[#d8fffb]">Healthy</span></header>
      <ol className="mt-4 space-y-2">
        {route.map((step, index) => (
          <li key={step.model} className="grid grid-cols-[auto_1fr_auto] items-center gap-3 rounded-lg border border-white/9 bg-white/[0.03] p-3"><span className="grid h-7 w-7 place-items-center rounded-full bg-white/[0.06] text-[0.65rem] font-bold text-slate-400">{index + 1}</span><div><p className="text-xs font-semibold text-slate-100">{step.model}</p><p className="mt-1 text-[0.65rem] text-slate-500">{step.condition}</p></div><span className={"text-[0.65rem] font-semibold " + step.tone}>{step.state}</span></li>
        ))}
      </ol>
      <p className="mt-3 text-[0.65rem] leading-5 text-slate-500">Requests preserve the same output schema across every route.</p>
    </section>
  );
}`,
  "prompt-test-case": `const assertions = [
  { label: "Mentions refund window", passed: true },
  { label: "Includes policy citation", passed: true },
  { label: "Avoids unsupported promise", passed: false },
];

export function PromptTestCase() {
  const passed = assertions.filter((assertion) => assertion.passed).length;
  return (
    <section className="w-full max-w-sm rounded-xl border border-white/12 bg-[#0b0f14]/92 p-4 shadow-2xl">
      <header className="flex items-start justify-between gap-4"><div><p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#40E0D0]">Prompt test</p><h3 className="mt-1 text-base font-bold text-white">Refund policy answer</h3></div><span className="rounded-full bg-[#fb923c]/12 px-2.5 py-1 text-[0.65rem] font-bold text-[#fdba74]">{passed}/{assertions.length} passed</span></header>
      <div className="mt-4 rounded-lg border border-white/9 bg-white/[0.03] p-3"><p className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-slate-500">Input</p><p className="mt-2 text-xs leading-5 text-slate-300">Can I return an annual plan after 20 days?</p></div>
      <ul className="mt-3 space-y-2">{assertions.map((assertion) => <li key={assertion.label} className="flex items-center justify-between gap-3 rounded-lg border border-white/8 px-3 py-2.5"><span className="text-xs text-slate-300">{assertion.label}</span><span className={assertion.passed ? "text-[0.65rem] font-bold text-[#d8fffb]" : "text-[0.65rem] font-bold text-[#fdba74]"}>{assertion.passed ? "Pass" : "Review"}</span></li>)}</ul>
      <button type="button" className="mt-3 w-full rounded-full bg-[#40E0D0] px-4 py-2.5 text-xs font-bold text-[#0b0f14]">Run test again</button>
    </section>
  );
}`,
  "live-voice-session": `const levels = [35, 58, 42, 76, 92, 64, 48, 82, 55, 31, 68, 44];

export function LiveVoiceSession() {
  return (
    <section className="w-full max-w-sm rounded-xl border border-white/12 bg-[#0b0f14]/92 p-4 shadow-2xl">
      <header className="flex items-start justify-between gap-4"><div><p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#40E0D0]">Live voice</p><h3 className="mt-1 text-base font-bold text-white">Product discovery call</h3></div><span className="inline-flex items-center gap-1.5 rounded-full bg-[#fb923c]/12 px-2.5 py-1 text-[0.65rem] font-bold text-[#fdba74]">02:18</span></header>
      <div className="mt-5 flex h-16 items-center justify-center gap-1" role="img" aria-label="Live audio activity">{levels.map((level, index) => <span key={index} className="w-1.5 rounded-full bg-gradient-to-t from-[#40E0D0] to-[#a78bfa]" style={{ height: level + "%" }} />)}</div>
      <div className="mt-4 rounded-lg border border-white/9 bg-white/[0.03] p-3" aria-live="polite"><p className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-slate-500">Live transcript</p><p className="mt-2 text-xs leading-5 text-slate-300">“I need the dashboard to surface risks before the weekly review…”</p></div>
      <div className="mt-3 grid grid-cols-3 gap-2"><button type="button" className="rounded-full border border-white/12 px-3 py-2 text-xs font-semibold text-slate-300">Mute</button><button type="button" className="rounded-full border border-white/12 px-3 py-2 text-xs font-semibold text-slate-300">Notes</button><button type="button" className="rounded-full bg-[#fb923c] px-3 py-2 text-xs font-bold text-[#0b0f14]">End</button></div>
    </section>
  );
}`,
  "response-branch-navigator": `const branches = [
  { label: "Concise", meta: "142 tokens", active: false },
  { label: "Balanced", meta: "318 tokens", active: true },
  { label: "Detailed", meta: "624 tokens", active: false },
];

export function ResponseBranchNavigator() {
  return (
    <section className="w-full max-w-md rounded-xl border border-white/12 bg-[#0b0f14]/92 p-4 shadow-2xl">
      <header className="flex items-center justify-between gap-4"><div><p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#a78bfa]">Response branches</p><h3 className="mt-1 text-base font-bold text-white">Choose an answer direction</h3></div><span className="text-xs font-semibold text-slate-500">2 of 3</span></header>
      <div className="mt-4 grid grid-cols-3 gap-2" role="tablist" aria-label="Response variants">{branches.map((branch) => <button key={branch.label} type="button" role="tab" aria-selected={branch.active} className={branch.active ? "rounded-lg border border-[#40E0D0]/35 bg-[#40E0D0]/10 p-2.5 text-left" : "rounded-lg border border-white/9 bg-white/[0.025] p-2.5 text-left"}><span className="block text-xs font-bold text-slate-200">{branch.label}</span><span className="mt-1 block text-[0.6rem] text-slate-500">{branch.meta}</span></button>)}</div>
      <div className="mt-3 rounded-lg border border-white/9 bg-white/[0.03] p-3" role="tabpanel"><p className="text-xs leading-5 text-slate-300">Start with the highest-impact workflow, validate it with a small evaluation set, then expand around observed user needs.</p><div className="mt-3 flex items-center justify-between border-t border-white/8 pt-3"><span className="text-[0.65rem] text-slate-500">Grounded in 3 sources</span><button type="button" className="text-xs font-bold text-[#40E0D0]">Use this branch</button></div></div>
    </section>
  );
}`,
  "grounding-coverage-card": `const claims = [
  { text: "Revenue increased 18% year over year", source: "Q2 report", covered: true },
  { text: "Enterprise retention reached 96%", source: "Metrics sheet", covered: true },
  { text: "Expansion is expected next quarter", source: "No source", covered: false },
];

export function GroundingCoverageCard() {
  const covered = claims.filter((claim) => claim.covered).length;
  return (
    <section className="w-full max-w-md rounded-xl border border-white/12 bg-[#0b0f14]/92 p-4 shadow-2xl">
      <header className="flex items-start justify-between gap-4"><div><p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#40E0D0]">Grounding coverage</p><h3 className="mt-1 text-base font-bold text-white">Answer evidence</h3></div><span className="rounded-full bg-[#fb923c]/12 px-2.5 py-1 text-[0.65rem] font-bold text-[#fdba74]">{covered}/{claims.length} supported</span></header>
      <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-white/[0.06]" role="progressbar" aria-label="Supported claims" aria-valuenow={covered} aria-valuemin={0} aria-valuemax={claims.length}><span className="block h-full w-2/3 rounded-full bg-gradient-to-r from-[#40E0D0] to-[#a78bfa]" /></div>
      <ul className="mt-4 space-y-2">{claims.map((claim) => <li key={claim.text} className="rounded-lg border border-white/9 bg-white/[0.025] p-3"><div className="flex items-start gap-2"><span className={claim.covered ? "mt-1 h-2 w-2 shrink-0 rounded-full bg-[#40E0D0]" : "mt-1 h-2 w-2 shrink-0 rounded-full bg-[#fb923c]"} /><p className="text-xs leading-5 text-slate-300">{claim.text}</p></div><p className="mt-2 pl-4 text-[0.65rem] font-semibold text-slate-400">{claim.covered ? "Source: " + claim.source : "Needs citation"}</p></li>)}</ul>
    </section>
  );
}`,
  "semantic-cache-monitor": `const metrics = [{ label: "Hit rate", value: "68%" }, { label: "Saved", value: "$42.18" }, { label: "Latency", value: "−310ms" }];

export function SemanticCacheMonitor() {
  return <section className="w-full max-w-sm rounded-xl border border-white/12 bg-[#0b0f14]/92 p-4 shadow-2xl">
    <header className="flex items-start justify-between gap-4"><div><p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#40E0D0]">Semantic cache</p><h3 className="mt-1 text-base font-bold text-white">Response reuse</h3></div><span className="rounded-full bg-[#40E0D0]/10 px-2.5 py-1 text-[0.65rem] font-bold text-[#d8fffb]">Healthy</span></header>
    <dl className="mt-4 grid grid-cols-3 gap-2">{metrics.map((metric) => <div key={metric.label} className="rounded-lg border border-white/9 bg-white/[0.03] p-3"><dt className="text-[0.65rem] text-slate-500">{metric.label}</dt><dd className="mt-2 text-lg font-black text-white">{metric.value}</dd></div>)}</dl>
    <div className="mt-4 h-2 rounded-full bg-white/[0.06]" role="progressbar" aria-label="Semantic cache hit rate" aria-valuenow={68} aria-valuemin={0} aria-valuemax={100}><span className="block h-full w-[68%] rounded-full bg-gradient-to-r from-[#40E0D0] to-[#a78bfa]" /></div>
    <p className="mt-4 text-[0.65rem] leading-5 text-slate-500">Similarity threshold 0.92 · Entries expire after 24 hours</p>
  </section>;
}`,
  "guardrail-policy-card": `const policies = [{ name: "Sensitive data", mode: "Block", events: 3 }, { name: "Unsafe content", mode: "Block", events: 0 }, { name: "Off-topic requests", mode: "Review", events: 12 }];

export function GuardrailPolicyCard() {
  return <section className="w-full max-w-sm rounded-xl border border-white/12 bg-[#0b0f14]/92 p-4 shadow-2xl">
    <header className="flex items-start justify-between gap-4"><div><p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#fb923c]">Guardrails</p><h3 className="mt-1 text-base font-bold text-white">Production policy</h3></div><span className="rounded-full bg-[#40E0D0]/10 px-2.5 py-1 text-[0.65rem] font-bold text-[#d8fffb]">Active</span></header>
    <ul className="mt-4 divide-y divide-white/8 rounded-lg border border-white/9 bg-white/[0.025]">{policies.map((policy) => <li key={policy.name} className="grid grid-cols-[1fr_auto_auto] items-center gap-3 px-3 py-3"><div><p className="text-xs font-semibold text-slate-200">{policy.name}</p><p className="mt-1 text-[0.65rem] text-slate-500">{policy.events} events this week</p></div><span className="rounded-md bg-white/[0.06] px-2 py-1 text-[0.65rem] font-semibold text-slate-300">{policy.mode}</span><span className="h-2 w-2 rounded-full bg-[#40E0D0]" aria-label="Enabled" /></li>)}</ul>
    <button type="button" className="mt-3 w-full rounded-full border border-white/12 px-4 py-2.5 text-xs font-bold text-slate-200">Configure policies</button>
  </section>;
}`,
  "image-generation-queue": `const variants = [{ name: "Editorial", progress: 100, state: "Ready" }, { name: "Cinematic", progress: 72, state: "Rendering" }, { name: "Minimal", progress: 18, state: "Queued" }];

export function ImageGenerationQueue() {
  return <section className="w-full max-w-sm rounded-xl border border-white/12 bg-[#0b0f14]/92 p-4 shadow-2xl">
    <header className="flex items-start justify-between"><div><p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#a78bfa]">Image generation</p><h3 className="mt-1 text-base font-bold text-white">Campaign variants</h3></div><span className="text-[0.65rem] font-semibold text-slate-500">1536 × 1024</span></header>
    <ol className="mt-4 space-y-2">{variants.map((variant, index) => <li key={variant.name} className="grid grid-cols-[auto_1fr_auto] items-center gap-3 rounded-lg border border-white/9 bg-white/[0.025] p-3"><span className="grid h-9 w-9 place-items-center rounded-md bg-[#a78bfa]/15 text-xs font-bold text-white">{index + 1}</span><div><span className="text-xs font-semibold text-slate-200">{variant.name}</span><div className="mt-2 h-1.5 rounded-full bg-white/[0.06]" role="progressbar" aria-label={variant.name + " progress"} aria-valuenow={variant.progress} aria-valuemin={0} aria-valuemax={100}><span className="block h-full rounded-full bg-[#40E0D0]" style={{ width: variant.progress + "%" }} /></div></div><span className="text-[0.65rem] text-slate-400">{variant.state}</span></li>)}</ol>
  </section>;
}`,
  "prompt-variable-editor": `const variables = [{ name: "audience", value: "Product leaders", type: "string" }, { name: "tone", value: "Concise", type: "enum" }, { name: "max_items", value: "5", type: "number" }];

export function PromptVariableEditor() {
  return <section className="w-full max-w-md rounded-xl border border-white/12 bg-[#0b0f14]/92 p-4 shadow-2xl">
    <header className="flex items-start justify-between"><div><p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#40E0D0]">Prompt variables</p><h3 className="mt-1 text-base font-bold text-white">Weekly summary</h3></div><span className="rounded-full bg-[#a78bfa]/12 px-2.5 py-1 text-[0.65rem] font-bold text-[#c4b5fd]">3 inputs</span></header>
    <div className="mt-4 space-y-2">{variables.map((variable) => <label key={variable.name} className="grid grid-cols-[1fr_1.25fr] items-center gap-3 rounded-lg border border-white/9 bg-white/[0.025] p-3"><span><span className="block font-mono text-xs font-semibold text-slate-200">{"{{" + variable.name + "}}"}</span><span className="mt-1 block text-[0.65rem] text-slate-500">{variable.type}</span></span><input defaultValue={variable.value} className="min-w-0 rounded-md border border-white/10 bg-[#0b0f14] px-2.5 py-2 text-xs text-white" /></label>)}</div>
    <div className="mt-3 flex gap-2"><button type="button" className="flex-1 rounded-full border border-white/12 px-4 py-2.5 text-xs font-bold text-slate-200">Preview</button><button type="button" className="flex-1 rounded-full bg-[#40E0D0] px-4 py-2.5 text-xs font-bold text-[#0b0f14]">Run prompt</button></div>
  </section>;
}`,
  "speculative-model-race": `const racers = [{ model: "Fast draft", time: "380ms", status: "Accepted", score: 91 }, { model: "Deep verify", time: "1.2s", status: "Checking", score: 96 }, { model: "Fallback", time: "—", status: "Standby", score: 0 }];

export function SpeculativeModelRace() {
  return <section className="w-full max-w-md rounded-xl border border-white/12 bg-[#0b0f14]/92 p-4 shadow-2xl">
    <header className="flex items-start justify-between"><div><p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#40E0D0]">Speculative race</p><h3 className="mt-1 text-base font-bold text-white">Parallel response routing</h3></div><span className="rounded-full bg-[#40E0D0]/10 px-2.5 py-1 text-[0.65rem] font-bold text-[#d8fffb]">310ms saved</span></header>
    <ol className="mt-4 space-y-2">{racers.map((racer, index) => <li key={racer.model} className="grid grid-cols-[auto_1fr_auto] items-center gap-3 rounded-lg border border-white/9 bg-white/[0.025] p-3"><span className="grid h-8 w-8 place-items-center rounded-full bg-white/[0.06] text-xs font-bold text-slate-400">{index + 1}</span><div><p className="text-xs font-semibold text-slate-200">{racer.model}</p><p className="mt-1 text-[0.65rem] text-slate-500">Quality {racer.score || "pending"}</p></div><div className="text-right"><p className="text-xs font-bold text-white">{racer.time}</p><p className="text-[0.65rem] text-slate-500">{racer.status}</p></div></li>)}</ol>
  </section>;
}`,
  "feedback-score-card": `const ratings = [
  { label: "Useful", value: "94%" },
  { label: "Clear", value: "89%" },
  { label: "Fast", value: "96%" },
];

export function FeedbackScoreCard() {
  return (
    <section className="w-full max-w-sm rounded-lg border border-[#fb923c]/22 bg-[#fb923c]/8 p-5 shadow-2xl">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#fdba74]">Feedback</p>
          <h3 className="mt-2 text-lg font-bold text-white">Beta reviewers</h3>
        </div>
        <span className="rounded-full bg-white/10 px-2.5 py-1 text-xs font-semibold text-orange-50">128 notes</span>
      </div>
      <div className="mt-4 grid grid-cols-3 gap-2">
        {ratings.map((rating) => (
          <div key={rating.label} className="rounded-md border border-white/10 bg-[#0b0f14]/55 p-3 text-center">
            <p className="text-xl font-black text-white">{rating.value}</p>
            <p className="mt-1 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-slate-500">{rating.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}`,
} as const;
