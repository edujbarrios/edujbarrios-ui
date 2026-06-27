import { componentCode } from "@/data/component-code";

export const categories = [
  "Buttons",
  "Cards",
  "Inputs",
  "Loaders",
  "AI Interfaces",
  "Navigation",
  "Badges",
  "Modals",
  "Effects",
] as const;

export type ComponentCategory = (typeof categories)[number];
export type Difficulty = "Beginner" | "Intermediate" | "Advanced";
export type ComponentSlug = keyof typeof componentCode;

export type ComponentItem = {
  slug: ComponentSlug;
  name: string;
  description: string;
  category: ComponentCategory;
  tags: string[];
  difficulty: Difficulty;
  code: string;
  usage: string;
  accessibility?: string;
  featured?: boolean;
};

export const components: ComponentItem[] = [
  {
    slug: "neon-gradient-button",
    name: "Neon Gradient Button",
    description: "A compact call-to-action with a glowing gradient edge and dark inner surface.",
    category: "Buttons",
    tags: ["cta", "gradient", "glow"],
    difficulty: "Beginner",
    code: componentCode["neon-gradient-button"],
    usage: `<NeonGradientButton>Launch interface</NeonGradientButton>`,
    accessibility: "Use clear button text and keep it inside a form or action region where the intent is obvious.",
    featured: true,
  },
  {
    slug: "glass-command-card",
    name: "Glass Command Card",
    description: "A glassmorphism command card for product shortcuts, palettes, and agent actions.",
    category: "Cards",
    tags: ["glass", "command", "shortcut"],
    difficulty: "Beginner",
    code: componentCode["glass-command-card"],
    usage: `<GlassCommandCard />`,
    accessibility: "Keyboard hints should match the supported platform shortcut in your app.",
    featured: true,
  },
  {
    slug: "ai-chat-input",
    name: "AI Chat Input",
    description: "A responsive prompt composer with textarea, label, and high-contrast send button.",
    category: "Inputs",
    tags: ["ai", "chat", "form"],
    difficulty: "Intermediate",
    code: componentCode["ai-chat-input"],
    usage: `<AiChatInput />`,
    accessibility: "The textarea includes a label for screen readers; connect submit behavior to your own handler.",
    featured: true,
  },
  {
    slug: "streaming-response-bubble",
    name: "Streaming Response Bubble",
    description: "A conversational response card with subtle animated streaming indicators.",
    category: "AI Interfaces",
    tags: ["streaming", "chat", "response"],
    difficulty: "Beginner",
    code: componentCode["streaming-response-bubble"],
    usage: `<StreamingResponseBubble />`,
    accessibility: "Use aria-live in your app shell when the message content updates dynamically.",
  },
  {
    slug: "prompt-badge",
    name: "Prompt Badge",
    description: "A small status badge for prompt state, tuning, review, or evaluation labels.",
    category: "Badges",
    tags: ["prompt", "status", "badge"],
    difficulty: "Beginner",
    code: componentCode["prompt-badge"],
    usage: `<PromptBadge />`,
    accessibility: "Do not rely on the color dot alone; keep the text label visible.",
  },
  {
    slug: "agent-step-timeline",
    name: "Agent Step Timeline",
    description: "A simple ordered timeline for AI agents, build systems, and workflow progress.",
    category: "AI Interfaces",
    tags: ["agent", "timeline", "steps"],
    difficulty: "Intermediate",
    code: componentCode["agent-step-timeline"],
    usage: `<AgentStepTimeline />`,
    accessibility: "The ordered list preserves step order for assistive technologies.",
  },
  {
    slug: "floating-nav-dock",
    name: "Floating Nav Dock",
    description: "A pill-shaped navigation dock with translucent depth and compact labels.",
    category: "Navigation",
    tags: ["nav", "dock", "glass"],
    difficulty: "Intermediate",
    code: componentCode["floating-nav-dock"],
    usage: `<FloatingNavDock />`,
    accessibility: "Keep an aria-label on the nav and use real links for each destination.",
  },
  {
    slug: "glow-loader",
    name: "Glow Loader",
    description: "A three-dot animated loader with turquoise, violet, and warm orange glow accents.",
    category: "Loaders",
    tags: ["loader", "animation", "status"],
    difficulty: "Beginner",
    code: componentCode["glow-loader"],
    usage: `<GlowLoader />`,
    accessibility: "The preview uses role status and an aria-label so loading state is announced.",
  },
  {
    slug: "copy-code-card",
    name: "Copy Code Card",
    description: "A compact code surface for snippets, component recipes, and copy actions.",
    category: "Cards",
    tags: ["code", "copy", "snippet"],
    difficulty: "Beginner",
    code: componentCode["copy-code-card"],
    usage: `<CopyCodeCard />`,
    accessibility: "Wire the copy action to visible feedback after copying.",
  },
  {
    slug: "source-citation-card",
    name: "Source Citation Card",
    description: "A citation card for grounded AI responses and research-backed interfaces.",
    category: "AI Interfaces",
    tags: ["source", "citation", "ai"],
    difficulty: "Beginner",
    code: componentCode["source-citation-card"],
    usage: `<SourceCitationCard />`,
    accessibility: "Figure and figcaption create a useful relationship between quote and source.",
  },
  {
    slug: "model-switcher",
    name: "Model Switcher",
    description: "A segmented control for fast, smart, and deep model modes.",
    category: "AI Interfaces",
    tags: ["model", "switcher", "control"],
    difficulty: "Intermediate",
    code: componentCode["model-switcher"],
    usage: `<ModelSwitcher />`,
    accessibility: "For production, manage selected state and expose it with aria-pressed or radio semantics.",
  },
  {
    slug: "token-usage-pill",
    name: "Token Usage Pill",
    description: "A compact usage indicator for token budgets, metering, and AI billing surfaces.",
    category: "Badges",
    tags: ["tokens", "meter", "usage"],
    difficulty: "Beginner",
    code: componentCode["token-usage-pill"],
    usage: `<TokenUsagePill />`,
    accessibility: "Pair the visual meter with text so the value is understandable without color.",
  },
  {
    slug: "gradient-split-button",
    name: "Gradient Split Button",
    description: "A primary action with a separate options trigger for deploys, exports, and publish flows.",
    category: "Buttons",
    tags: ["split", "deploy", "action"],
    difficulty: "Intermediate",
    code: componentCode["gradient-split-button"],
    usage: `<GradientSplitButton />`,
    accessibility: "Give the secondary trigger an aria-label that describes the menu it opens.",
  },
  {
    slug: "glass-metric-card",
    name: "Glass Metric Card",
    description: "A compact KPI card with a progress rail for evals, usage, and model quality signals.",
    category: "Cards",
    tags: ["metric", "dashboard", "glass"],
    difficulty: "Beginner",
    code: componentCode["glass-metric-card"],
    usage: `<GlassMetricCard />`,
    accessibility: "Keep the numeric value as visible text and do not rely only on the progress bar.",
    featured: true,
  },
  {
    slug: "neural-search-input",
    name: "Neural Search Input",
    description: "A rounded search field for command palettes, component galleries, and prompt libraries.",
    category: "Inputs",
    tags: ["search", "command", "input"],
    difficulty: "Beginner",
    code: componentCode["neural-search-input"],
    usage: `<NeuralSearchInput />`,
    accessibility: "The input includes a screen-reader label; wire slash-key focus behavior in your app shell.",
  },
  {
    slug: "voice-wave-loader",
    name: "Voice Wave Loader",
    description: "An audio-style loader for transcription, generation, and voice agent interfaces.",
    category: "Loaders",
    tags: ["audio", "voice", "loader"],
    difficulty: "Beginner",
    code: componentCode["voice-wave-loader"],
    usage: `<VoiceWaveLoader />`,
    accessibility: "The loader uses role status with an audio processing label.",
  },
  {
    slug: "context-menu-panel",
    name: "Context Menu Panel",
    description: "A floating action menu for editor surfaces, AI workspaces, and command-rich tools.",
    category: "Navigation",
    tags: ["menu", "actions", "floating"],
    difficulty: "Intermediate",
    code: componentCode["context-menu-panel"],
    usage: `<ContextMenuPanel />`,
    accessibility: "For production, connect this panel to menu button semantics and keyboard navigation.",
  },
  {
    slug: "shortcut-key",
    name: "Shortcut Key",
    description: "A clean keyboard shortcut badge for command hints, docs, and toolbars.",
    category: "Badges",
    tags: ["shortcut", "keyboard", "docs"],
    difficulty: "Beginner",
    code: componentCode["shortcut-key"],
    usage: `<ShortcutKey />`,
    accessibility: "Pair shortcuts with text actions so users do not need to memorize key combinations.",
  },
  {
    slug: "modal-shell",
    name: "Modal Shell",
    description: "A focused confirmation dialog shell with clear hierarchy and paired actions.",
    category: "Modals",
    tags: ["modal", "dialog", "confirm"],
    difficulty: "Intermediate",
    code: componentCode["modal-shell"],
    usage: `<ModalShell />`,
    accessibility: "Use a real dialog primitive in production to trap focus and restore focus on close.",
  },
  {
    slug: "status-toast-stack",
    name: "Status Toast Stack",
    description: "A stacked notification pattern for build, deploy, and sync events.",
    category: "Effects",
    tags: ["toast", "status", "feedback"],
    difficulty: "Beginner",
    code: componentCode["status-toast-stack"],
    usage: `<StatusToastStack />`,
    accessibility: "Announce new toast messages with an aria-live region in the app shell.",
  },
];

export function getComponent(slug: string) {
  return components.find((component) => component.slug === slug);
}

export function getRelatedComponents(component: ComponentItem) {
  return components
    .filter((item) => item.slug !== component.slug && (item.category === component.category || item.tags.some((tag) => component.tags.includes(tag))))
    .slice(0, 3);
}
