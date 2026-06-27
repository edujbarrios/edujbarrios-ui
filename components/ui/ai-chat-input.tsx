export function AiChatInput() {
  return (
    <form className="w-full max-w-md rounded-lg border border-white/12 bg-[#0b0f14]/70 p-2 shadow-2xl">
      <label htmlFor="ai-message" className="sr-only">
        Message
      </label>
      <div className="flex items-end gap-2">
        <textarea
          id="ai-message"
          className="min-h-20 flex-1 resize-none rounded-md border border-white/10 bg-white/[0.04] px-3 py-2 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-[#40E0D0]/40"
          placeholder="Ask the agent to design a flow..."
        />
        <button className="rounded-md bg-[#40E0D0] px-4 py-2 text-sm font-bold text-[#0b0f14]">Send</button>
      </div>
    </form>
  );
}
