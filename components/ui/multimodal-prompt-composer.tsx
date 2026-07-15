const attachments = [
  { name: "dashboard.png", meta: "1.8 MB", icon: "▧" },
  { name: "requirements.pdf", meta: "6 pages", icon: "≡" },
];

export function MultimodalPromptComposer() {
  return (
    <form className="w-full max-w-md rounded-xl border border-white/12 bg-[#0b0f14]/92 p-3 shadow-2xl">
      <label htmlFor="multimodal-prompt" className="sr-only">Prompt with attachments</label>
      <textarea
        id="multimodal-prompt"
        rows={3}
        defaultValue="Turn these references into an accessible analytics dashboard."
        className="w-full resize-none bg-transparent px-2 py-1 text-sm leading-6 text-slate-100 outline-none placeholder:text-slate-600"
      />
      <ul className="mt-2 flex flex-wrap gap-2" aria-label="Attached context">
        {attachments.map((file) => (
          <li key={file.name} className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.045] px-2.5 py-2">
            <span className="grid h-7 w-7 place-items-center rounded-md bg-[#a78bfa]/14 text-sm text-[#c4b5fd]" aria-hidden="true">{file.icon}</span>
            <span><span className="block text-xs font-semibold text-slate-200">{file.name}</span><span className="block text-[0.65rem] text-slate-500">{file.meta}</span></span>
            <button type="button" className="ml-1 text-xs text-slate-500 transition hover:text-white" aria-label={`Remove ${file.name}`}>×</button>
          </li>
        ))}
      </ul>
      <div className="mt-3 flex items-center justify-between border-t border-white/8 pt-3">
        <div className="flex items-center gap-2">
          <button type="button" className="grid h-8 w-8 place-items-center rounded-full border border-white/10 text-slate-300 transition hover:border-[#40E0D0]/40 hover:text-white" aria-label="Attach file">+</button>
          <span className="text-[0.65rem] text-slate-500">Images, PDFs, or audio</span>
        </div>
        <button type="submit" className="rounded-full bg-[#40E0D0] px-4 py-2 text-xs font-bold text-[#0b0f14] transition hover:bg-[#72eadf]">Generate</button>
      </div>
    </form>
  );
}
