export function AiChatInput() {
  return (
    <form className="w-full max-w-md rounded-lg border border-white/12 bg-slate-950/70 p-2 shadow-2xl">
      <label htmlFor="ai-message" className="sr-only">
        Message
      </label>
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
}
