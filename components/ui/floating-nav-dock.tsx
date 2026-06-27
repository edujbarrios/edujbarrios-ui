const items = ["Home", "UI", "AI", "Docs"];

export function FloatingNavDock() {
  return (
    <nav aria-label="Preview navigation" className="rounded-full border border-white/12 bg-[#0b0f14]/78 p-1 shadow-2xl backdrop-blur">
      <ul className="flex gap-1">
        {items.map((item) => (
          <li key={item}>
            <a className="block rounded-full px-3 py-2 text-xs font-medium text-slate-300 transition hover:bg-white/10 hover:text-white" href="#">
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
