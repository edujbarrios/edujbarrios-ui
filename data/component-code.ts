export const componentCode = {
  "neon-gradient-button": `type NeonGradientButtonProps = {
  children?: React.ReactNode;
};

export function NeonGradientButton({ children = "Launch interface" }: NeonGradientButtonProps) {
  return (
    <button className="rounded-full bg-gradient-to-r from-cyan-300 via-violet-400 to-emerald-300 p-px text-sm font-semibold text-white shadow-[0_0_32px_rgba(34,211,238,0.28)] transition hover:scale-[1.02]">
      <span className="block rounded-full bg-slate-950 px-5 py-2.5">{children}</span>
    </button>
  );
}`,
  "glass-command-card": `export function GlassCommandCard() {
  return (
    <div className="w-full max-w-sm rounded-lg border border-white/12 bg-white/[0.06] p-4 shadow-2xl backdrop-blur">
      <div className="flex items-center justify-between">
        <p className="text-sm font-semibold text-white">Command palette</p>
        <kbd className="rounded border border-white/10 bg-slate-950/80 px-2 py-1 text-xs text-slate-300">Cmd K</kbd>
      </div>
      <div className="mt-4 rounded-lg border border-cyan-300/20 bg-cyan-300/8 px-3 py-2 text-sm text-cyan-100">
        Generate dashboard layout
      </div>
      <p className="mt-3 text-xs text-slate-400">3 actions ready · 1 agent online</p>
    </div>
  );
}`,
  "ai-chat-input": `export function AiChatInput() {
  return (
    <form className="w-full max-w-md rounded-lg border border-white/12 bg-slate-950/70 p-2 shadow-2xl">
      <label htmlFor="ai-message" className="sr-only">Message</label>
      <div className="flex items-end gap-2">
        <textarea
          id="ai-message"
          className="min-h-20 flex-1 resize-none rounded-md border border-white/10 bg-white/[0.04] px-3 py-2 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300/40"
          placeholder="Ask the agent to design a flow..."
        />
        <button className="rounded-md bg-cyan-300 px-4 py-2 text-sm font-bold text-slate-950">Send</button>
      </div>
    </form>
  );
}`,
  "streaming-response-bubble": `export function StreamingResponseBubble() {
  return (
    <div className="max-w-sm rounded-lg border border-emerald-300/20 bg-emerald-300/8 p-4 text-sm text-emerald-50">
      <p>I can turn that product brief into a component map, then draft the first screen.</p>
      <div className="mt-3 flex gap-1" aria-label="Streaming response">
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-300" />
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-300 [animation-delay:150ms]" />
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-300 [animation-delay:300ms]" />
      </div>
    </div>
  );
}`,
  "prompt-badge": `export function PromptBadge() {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-violet-300/30 bg-violet-300/10 px-3 py-1.5 text-xs font-semibold text-violet-100">
      <span className="h-2 w-2 rounded-full bg-violet-300 shadow-[0_0_12px_rgba(196,181,253,0.8)]" />
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
          <span className="grid h-7 w-7 place-items-center rounded-full border border-cyan-300/30 bg-cyan-300/10 text-xs text-cyan-100">
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
    <nav aria-label="Preview navigation" className="rounded-full border border-white/12 bg-slate-950/78 p-1 shadow-2xl backdrop-blur">
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
      <span className="h-4 w-4 animate-ping rounded-full bg-cyan-300" />
      <span className="h-4 w-4 animate-ping rounded-full bg-violet-300 [animation-delay:120ms]" />
      <span className="h-4 w-4 animate-ping rounded-full bg-emerald-300 [animation-delay:240ms]" />
    </div>
  );
}`,
  "copy-code-card": `export function CopyCodeCard() {
  return (
    <div className="w-full max-w-sm rounded-lg border border-white/12 bg-slate-950/90">
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
        <span className="text-xs text-slate-400">component.tsx</span>
        <button className="rounded-full bg-white/10 px-3 py-1 text-xs text-white">Copy</button>
      </div>
      <pre className="overflow-hidden p-4 text-xs leading-5 text-cyan-100">{\`<Button glow>\\n  Ship it\\n</Button>\`}</pre>
    </div>
  );
}`,
  "source-citation-card": `export function SourceCitationCard() {
  return (
    <figure className="w-full max-w-sm rounded-lg border border-blue-300/20 bg-blue-300/8 p-4">
      <blockquote className="text-sm text-blue-50">Grounded responses should show the trail back to source material.</blockquote>
      <figcaption className="mt-3 text-xs font-medium text-blue-200">Source · docs/agent-interface.md</figcaption>
    </figure>
  );
}`,
  "model-switcher": `const models = ["fast", "smart", "deep"];

export function ModelSwitcher() {
  return (
    <div className="inline-flex rounded-full border border-white/12 bg-slate-950/80 p-1">
      {models.map((model) => (
        <button
          key={model}
          className={model === "smart" ? "rounded-full bg-cyan-300 px-3 py-1.5 text-xs font-semibold text-slate-950" : "rounded-full px-3 py-1.5 text-xs font-semibold text-slate-400 transition hover:text-white"}
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
    <span className="inline-flex items-center gap-2 rounded-full border border-emerald-300/25 bg-emerald-300/10 px-4 py-2 text-sm font-semibold text-emerald-100">
      <span className="h-2 w-16 overflow-hidden rounded-full bg-slate-800">
        <span className="block h-full w-2/3 rounded-full bg-emerald-300" />
      </span>
      4.2k tokens
    </span>
  );
}`,
} as const;
