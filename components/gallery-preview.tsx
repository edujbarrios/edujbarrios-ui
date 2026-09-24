import type { CSSProperties, ComponentType } from "react";
import { ComponentPreview } from "@/components/component-preview";
import { AgentSlaScorecard } from "@/components/ui/agent-sla-scorecard";
import { ReasoningCheckpointRail } from "@/components/ui/reasoning-checkpoint-rail";
import { ReleaseConfidenceCard } from "@/components/ui/release-confidence-card";
import { ToolHealthMatrix } from "@/components/ui/tool-health-matrix";
import type { ComponentSlug } from "@/lib/components";

const newPreviews: Record<string, ComponentType> = {
  "agent-sla-scorecard": AgentSlaScorecard,
  "reasoning-checkpoint-rail": ReasoningCheckpointRail,
  "tool-health-matrix": ToolHealthMatrix,
  "release-confidence-card": ReleaseConfidenceCard,
};

type GalleryPreviewProps = {
  slug: string;
  large?: boolean;
  accentColor?: string;
};

export function GalleryPreview({ slug, large = false, accentColor = "#40E0D0" }: GalleryPreviewProps) {
  const Preview = newPreviews[slug];

  if (!Preview) {
    return <ComponentPreview slug={slug as ComponentSlug} large={large} accentColor={accentColor} />;
  }

  const style = { "--preview-accent": accentColor } as CSSProperties;

  return (
    <div className="relative shrink-0 overflow-hidden rounded-lg border border-white/10 bg-[#0b0f14]/82">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(64,224,208,0.14),transparent_34%),radial-gradient(circle_at_70%_80%,rgba(167,139,250,0.12),transparent_32%)]" />
      <div className={large ? "relative flex min-h-80 items-center justify-center p-4 sm:p-8" : "relative flex h-52 items-center justify-center p-3 sm:p-5"} style={style}>
        <Preview />
      </div>
    </div>
  );
}
