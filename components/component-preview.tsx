import type { ComponentSlug } from "@/lib/components";
import { AgentStepTimeline } from "@/components/ui/agent-step-timeline";
import { AiChatInput } from "@/components/ui/ai-chat-input";
import { CodeTabSwitcher } from "@/components/ui/code-tab-switcher";
import { ContextMenuPanel } from "@/components/ui/context-menu-panel";
import { CopyCodeCard } from "@/components/ui/copy-code-card";
import { FileDropzone } from "@/components/ui/file-dropzone";
import { FloatingNavDock } from "@/components/ui/floating-nav-dock";
import { GlassCommandCard } from "@/components/ui/glass-command-card";
import { GlassMetricCard } from "@/components/ui/glass-metric-card";
import { GlowLoader } from "@/components/ui/glow-loader";
import { GradientSplitButton } from "@/components/ui/gradient-split-button";
import { IconPulseButton } from "@/components/ui/icon-pulse-button";
import { ModalShell } from "@/components/ui/modal-shell";
import { ModelSwitcher } from "@/components/ui/model-switcher";
import { NeuralSearchInput } from "@/components/ui/neural-search-input";
import { NeonGradientButton } from "@/components/ui/neon-gradient-button";
import { NotificationBell } from "@/components/ui/notification-bell";
import { PricingTierCard } from "@/components/ui/pricing-tier-card";
import { ProgressStepper } from "@/components/ui/progress-stepper";
import { PromptBadge } from "@/components/ui/prompt-badge";
import { ShortcutKey } from "@/components/ui/shortcut-key";
import { SourceCitationCard } from "@/components/ui/source-citation-card";
import { StatusToastStack } from "@/components/ui/status-toast-stack";
import { StreamingResponseBubble } from "@/components/ui/streaming-response-bubble";
import { TokenUsagePill } from "@/components/ui/token-usage-pill";
import { VoiceWaveLoader } from "@/components/ui/voice-wave-loader";

const previews: Record<ComponentSlug, React.ComponentType> = {
  "neon-gradient-button": NeonGradientButton,
  "glass-command-card": GlassCommandCard,
  "ai-chat-input": AiChatInput,
  "streaming-response-bubble": StreamingResponseBubble,
  "prompt-badge": PromptBadge,
  "agent-step-timeline": AgentStepTimeline,
  "floating-nav-dock": FloatingNavDock,
  "glow-loader": GlowLoader,
  "copy-code-card": CopyCodeCard,
  "source-citation-card": SourceCitationCard,
  "model-switcher": ModelSwitcher,
  "token-usage-pill": TokenUsagePill,
  "gradient-split-button": GradientSplitButton,
  "glass-metric-card": GlassMetricCard,
  "neural-search-input": NeuralSearchInput,
  "voice-wave-loader": VoiceWaveLoader,
  "context-menu-panel": ContextMenuPanel,
  "shortcut-key": ShortcutKey,
  "modal-shell": ModalShell,
  "status-toast-stack": StatusToastStack,
  "icon-pulse-button": IconPulseButton,
  "pricing-tier-card": PricingTierCard,
  "file-dropzone": FileDropzone,
  "progress-stepper": ProgressStepper,
  "notification-bell": NotificationBell,
  "code-tab-switcher": CodeTabSwitcher,
};

type ComponentPreviewProps = {
  slug: ComponentSlug;
  large?: boolean;
};

export function ComponentPreview({ slug, large = false }: ComponentPreviewProps) {
  const Preview = previews[slug];

  return (
    <div className="relative shrink-0 overflow-hidden rounded-lg border border-white/10 bg-[#0b0f14]/82">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(64,224,208,0.14),transparent_34%),radial-gradient(circle_at_70%_80%,rgba(167,139,250,0.12),transparent_32%)]" />
      <div className={large ? "relative flex min-h-80 items-center justify-center p-8" : "relative flex h-52 items-center justify-center p-4 sm:p-5"}>
        <Preview />
      </div>
    </div>
  );
}
