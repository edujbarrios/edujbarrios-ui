import type { ComponentSlug } from "@/lib/components";
import { AgentStepTimeline } from "@/components/ui/agent-step-timeline";
import { AiChatInput } from "@/components/ui/ai-chat-input";
import { CopyCodeCard } from "@/components/ui/copy-code-card";
import { FloatingNavDock } from "@/components/ui/floating-nav-dock";
import { GlassCommandCard } from "@/components/ui/glass-command-card";
import { GlowLoader } from "@/components/ui/glow-loader";
import { ModelSwitcher } from "@/components/ui/model-switcher";
import { NeonGradientButton } from "@/components/ui/neon-gradient-button";
import { PromptBadge } from "@/components/ui/prompt-badge";
import { SourceCitationCard } from "@/components/ui/source-citation-card";
import { StreamingResponseBubble } from "@/components/ui/streaming-response-bubble";
import { TokenUsagePill } from "@/components/ui/token-usage-pill";

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
};

type ComponentPreviewProps = {
  slug: ComponentSlug;
  large?: boolean;
};

export function ComponentPreview({ slug, large = false }: ComponentPreviewProps) {
  const Preview = previews[slug];

  return (
    <div className="relative overflow-hidden rounded-lg border border-white/10 bg-[#0b0f14]/82">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(64,224,208,0.14),transparent_34%),radial-gradient(circle_at_70%_80%,rgba(167,139,250,0.12),transparent_32%)]" />
      <div className={large ? "relative grid min-h-80 place-items-center p-8" : "relative grid min-h-52 place-items-center p-6"}>
        <Preview />
      </div>
    </div>
  );
}
