import { AgentDeadlockDetector } from "@/components/ui/agent-deadlock-detector";

export default function AgentDeadlockDetectorPage() {
  return (
    <main className="mx-auto flex min-h-[70vh] max-w-5xl items-center justify-center px-4 py-16 sm:px-6 lg:px-8">
      <AgentDeadlockDetector />
    </main>
  );
}
