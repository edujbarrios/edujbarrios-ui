const models = ["fast", "smart", "deep"];

export function ModelSwitcher() {
  return (
    <div className="inline-flex rounded-full border border-white/12 bg-[#0b0f14]/80 p-1">
      {models.map((model, index) => (
        <button
          key={model}
          className={cnSwitcher(index === 1)}
          type="button"
        >
          {model}
        </button>
      ))}
    </div>
  );
}

function cnSwitcher(active: boolean) {
  return `rounded-full px-3 py-1.5 text-xs font-semibold transition ${
    active ? "bg-[#40E0D0] text-[#0b0f14]" : "text-slate-400 hover:text-white"
  }`;
}
