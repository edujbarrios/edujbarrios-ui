const actions = ["Duplicate", "Copy link", "Open in agent", "Archive"];

export function ContextMenuPanel() {
  return (
    <div className="w-56 rounded-lg border border-white/12 bg-[#0b0f14]/92 p-2 shadow-2xl backdrop-blur">
      {actions.map((action, index) => (
        <button
          key={action}
          className="flex w-full items-center justify-between rounded-md px-3 py-2 text-left text-sm text-slate-200 transition hover:bg-[#40E0D0]/10 hover:text-white"
          type="button"
        >
          <span>{action}</span>
          {index === 2 ? <span className="text-xs text-[#40E0D0]">new</span> : null}
        </button>
      ))}
    </div>
  );
}
