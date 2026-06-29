const crumbs = ["Workspace", "Agents", "Release"];

export function WorkflowBreadcrumb() {
  return (
    <nav aria-label="Workflow breadcrumb" className="rounded-full border border-white/12 bg-[#0b0f14]/82 px-3 py-2 shadow-xl backdrop-blur">
      <ol className="flex items-center gap-2 text-xs font-semibold">
        {crumbs.map((crumb, index) => (
          <li key={crumb} className="flex items-center gap-2">
            <button className={index === crumbs.length - 1 ? "text-[#d8fffb]" : "text-slate-400 transition hover:text-white"} type="button">
              {crumb}
            </button>
            {index < crumbs.length - 1 ? <span className="text-slate-600">/</span> : null}
          </li>
        ))}
      </ol>
    </nav>
  );
}
