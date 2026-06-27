const toasts = [
  { label: "Build passed", color: "bg-[#40E0D0]" },
  { label: "Preview deployed", color: "bg-[#a78bfa]" },
  { label: "Docs synced", color: "bg-[#fb923c]" },
];

export function StatusToastStack() {
  return (
    <div className="grid w-full max-w-xs gap-2">
      {toasts.map((toast) => (
        <div key={toast.label} className="flex items-center gap-3 rounded-lg border border-white/12 bg-white/[0.06] px-4 py-3 shadow-xl backdrop-blur">
          <span className={`h-2.5 w-2.5 rounded-full ${toast.color}`} />
          <span className="text-sm font-semibold text-white">{toast.label}</span>
        </div>
      ))}
    </div>
  );
}
