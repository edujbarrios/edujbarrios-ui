export function InlineAlertBanner() {
  return (
    <div className="flex w-full max-w-md items-start gap-3 rounded-lg border border-[#fb923c]/25 bg-[#fb923c]/10 p-4 shadow-xl">
      <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[#fb923c]/16 text-xs font-black text-[#fdba74]">!</span>
      <div>
        <p className="text-sm font-semibold text-orange-50">Usage spike detected</p>
        <p className="mt-1 text-xs leading-5 text-slate-400">Token volume is 28% higher than the last release window.</p>
      </div>
    </div>
  );
}
