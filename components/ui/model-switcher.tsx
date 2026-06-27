const models = ["fast", "smart", "deep"];

export function ModelSwitcher() {
  return (
    <div className="inline-flex rounded-full border border-white/12 bg-slate-950/80 p-1">
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
    active ? "bg-cyan-300 text-slate-950" : "text-slate-400 hover:text-white"
  }`;
}
