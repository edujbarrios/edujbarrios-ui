import type { ComponentSlug } from "@/lib/components";
import { AgentMemoryCard } from "@/components/ui/agent-memory-card";
import { AgentStepTimeline } from "@/components/ui/agent-step-timeline";
import { AiChatInput } from "@/components/ui/ai-chat-input";
import { ApiKeyField } from "@/components/ui/api-key-field";
import { AvatarStack } from "@/components/ui/avatar-stack";
import { CodeTabSwitcher } from "@/components/ui/code-tab-switcher";
import { ColorTokenSwatch } from "@/components/ui/color-token-swatch";
import { CommandHintBar } from "@/components/ui/command-hint-bar";
import { ConfidenceMeter } from "@/components/ui/confidence-meter";
import { ContextMenuPanel } from "@/components/ui/context-menu-panel";
import { CopyCodeCard } from "@/components/ui/copy-code-card";
import { DataPipelineCard } from "@/components/ui/data-pipeline-card";
import { EmptyStatePanel } from "@/components/ui/empty-state-panel";
import { EvalRadarCard } from "@/components/ui/eval-radar-card";
import { FileDropzone } from "@/components/ui/file-dropzone";
import { FloatingNavDock } from "@/components/ui/floating-nav-dock";
import { GlassCommandCard } from "@/components/ui/glass-command-card";
import { GlassMetricCard } from "@/components/ui/glass-metric-card";
import { GlowLoader } from "@/components/ui/glow-loader";
import { GradientSplitButton } from "@/components/ui/gradient-split-button";
import { IconPulseButton } from "@/components/ui/icon-pulse-button";
import { InlineAlertBanner } from "@/components/ui/inline-alert-banner";
import { IntegrationStatusGrid } from "@/components/ui/integration-status-grid";
import { ModalShell } from "@/components/ui/modal-shell";
import { ModelSwitcher } from "@/components/ui/model-switcher";
import { NeuralSearchInput } from "@/components/ui/neural-search-input";
import { NeonGradientButton } from "@/components/ui/neon-gradient-button";
import { NotificationBell } from "@/components/ui/notification-bell";
import { PricingTierCard } from "@/components/ui/pricing-tier-card";
import { ProgressStepper } from "@/components/ui/progress-stepper";
import { PromptDiffViewer } from "@/components/ui/prompt-diff-viewer";
import { PromptVersionSelect } from "@/components/ui/prompt-version-select";
import { PromptBadge } from "@/components/ui/prompt-badge";
import { ReleaseChecklist } from "@/components/ui/release-checklist";
import { ShortcutKey } from "@/components/ui/shortcut-key";
import { SourceCitationCard } from "@/components/ui/source-citation-card";
import { SkeletonCard } from "@/components/ui/skeleton-card";
import { StatusToastStack } from "@/components/ui/status-toast-stack";
import { StatStrip } from "@/components/ui/stat-strip";
import { StreamingResponseBubble } from "@/components/ui/streaming-response-bubble";
import { TokenUsagePill } from "@/components/ui/token-usage-pill";
import { VoiceWaveLoader } from "@/components/ui/voice-wave-loader";
import { WorkflowBreadcrumb } from "@/components/ui/workflow-breadcrumb";
import { SchemaFieldRow } from "@/components/ui/schema-field-row";
import { ToggleSettingRow } from "@/components/ui/toggle-setting-row";
import { UsageSparklineCard } from "@/components/ui/usage-sparkline-card";

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
  "agent-memory-card": AgentMemoryCard,
  "eval-radar-card": EvalRadarCard,
  "prompt-version-select": PromptVersionSelect,
  "api-key-field": ApiKeyField,
  "inline-alert-banner": InlineAlertBanner,
  "confidence-meter": ConfidenceMeter,
  "workflow-breadcrumb": WorkflowBreadcrumb,
  "schema-field-row": SchemaFieldRow,
  "skeleton-card": SkeletonCard,
  "stat-strip": StatStrip,
  "command-hint-bar": CommandHintBar,
  "toggle-setting-row": ToggleSettingRow,
  "avatar-stack": AvatarStack,
  "empty-state-panel": EmptyStatePanel,
  "release-checklist": ReleaseChecklist,
  "prompt-diff-viewer": PromptDiffViewer,
  "color-token-swatch": ColorTokenSwatch,
  "integration-status-grid": IntegrationStatusGrid,
  "usage-sparkline-card": UsageSparklineCard,
  "data-pipeline-card": DataPipelineCard,
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
