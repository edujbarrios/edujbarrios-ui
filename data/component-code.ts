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
            <a className="block rounded-full px-3 py-2 text-xs font-medium text-slate-300 transition hover:bg-white/10 hover:text-white" href="#">
              {item}
            </a>
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
} as const;
