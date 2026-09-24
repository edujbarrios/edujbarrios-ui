import { components as baseComponents, type ComponentItem } from "@/lib/components";

const newComponents: ComponentItem[] = [
  {
    slug: "agent-sla-scorecard" as ComponentItem["slug"],
    name: "Agent SLA Scorecard",
    description: "A compact production scorecard for tracking agent success, latency, escalations, and remaining breach budget.",
    category: "Cards",
    tags: ["agents", "sla", "observability"],
    difficulty: "Intermediate",
    code: `const metrics = [{ label: "Task success", value: "98.4%", target: "> 97%" }, { label: "P95 latency", value: "1.8s", target: "< 2.5s" }, { label: "Escalations", value: "3.2%", target: "< 5%" }];\n\nexport function AgentSlaScorecard() {\n  return <section><h3>Production quality</h3><dl>{metrics.map((metric) => <div key={metric.label}><dt>{metric.label}</dt><dd>{metric.value}</dd><dd>Target {metric.target}</dd></div>)}</dl></section>;\n}`,
    usage: `<AgentSlaScorecard />`,
    accessibility: "Every SLA metric includes its exact value and target in text, while health status is labeled explicitly.",
    featured: true,
  },
  {
    slug: "reasoning-checkpoint-rail" as ComponentItem["slug"],
    name: "Reasoning Checkpoint Rail",
    description: "An ordered run rail that makes intent, evidence, tool planning, and answer readiness visible at a glance.",
    category: "AI Interfaces",
    tags: ["reasoning", "workflow", "status"],
    difficulty: "Intermediate",
    code: `const checkpoints = [{ label: "Intent", status: "done" }, { label: "Evidence", status: "done" }, { label: "Tool plan", status: "active" }, { label: "Final answer", status: "queued" }];\n\nexport function ReasoningCheckpointRail() {\n  return <ol>{checkpoints.map((checkpoint, index) => <li key={checkpoint.label}>{index + 1}. {checkpoint.label} · {checkpoint.status}</li>)}</ol>;\n}`,
    usage: `<ReasoningCheckpointRail />`,
    accessibility: "The checkpoint sequence is an ordered list and each stage exposes its status as text rather than color alone.",
    featured: true,
  },
  {
    slug: "tool-health-matrix" as ComponentItem["slug"],
    name: "Tool Health Matrix",
    description: "A runtime dependency matrix showing tool success rate, P95 latency, and degraded states for agent operations.",
    category: "AI Interfaces",
    tags: ["tools", "health", "observability"],
    difficulty: "Intermediate",
    code: `const tools = [{ name: "Search", success: "99.8%", latency: "410ms", state: "Healthy" }, { name: "CRM", success: "98.7%", latency: "620ms", state: "Healthy" }, { name: "Billing", success: "94.1%", latency: "1.4s", state: "Watch" }];\n\nexport function ToolHealthMatrix() {\n  return <ul>{tools.map((tool) => <li key={tool.name}>{tool.name}: {tool.success} · {tool.latency} · {tool.state}</li>)}</ul>;\n}`,
    usage: `<ToolHealthMatrix />`,
    accessibility: "Tool state, success rate, and latency are all readable text values, so status does not depend on the indicator color.",
    featured: true,
  },
  {
    slug: "release-confidence-card" as ComponentItem["slug"],
    name: "Release Confidence Card",
    description: "A ship-readiness card that combines evaluation, grounding, reliability, regressions, and an overall release confidence score.",
    category: "Cards",
    tags: ["release", "evaluation", "confidence"],
    difficulty: "Intermediate",
    code: `const signals = [{ label: "Eval pass rate", value: 96 }, { label: "Grounding", value: 92 }, { label: "Tool reliability", value: 98 }];\n\nexport function ReleaseConfidenceCard() {\n  return <section><h3>Prompt v24 · Candidate</h3><p>Ship · 94 / 100 confidence</p><ul>{signals.map((signal) => <li key={signal.label}>{signal.label}: {signal.value}%</li>)}</ul></section>;\n}`,
    usage: `<ReleaseConfidenceCard />`,
    accessibility: "Release recommendation, confidence score, and every supporting metric are explicitly available as text.",
    featured: true,
  },
];

export const galleryComponents: ComponentItem[] = [...baseComponents, ...newComponents];

export function getGalleryComponent(slug: string) {
  return galleryComponents.find((component) => component.slug === slug);
}

export function getGalleryRelatedComponents(component: ComponentItem) {
  return galleryComponents
    .filter((candidate) => candidate.slug !== component.slug)
    .map((candidate) => ({
      candidate,
      score:
        Number(candidate.category === component.category) * 3 +
        candidate.tags.filter((tag) => component.tags.includes(tag)).length,
    }))
    .sort((first, second) => second.score - first.score || first.candidate.name.localeCompare(second.candidate.name))
    .slice(0, 3)
    .map(({ candidate }) => candidate);
}
