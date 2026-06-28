export function FileDropzone() {
  return (
    <label className="grid w-full max-w-sm cursor-pointer place-items-center rounded-lg border border-dashed border-[#40E0D0]/35 bg-[#40E0D0]/8 px-6 py-8 text-center transition hover:bg-[#40E0D0]/12">
      <span className="grid h-10 w-10 place-items-center rounded-full bg-[#40E0D0]/14 text-sm font-black text-[#d8fffb]">UP</span>
      <span className="mt-3 text-sm font-semibold text-white">Drop UI references here</span>
      <span className="mt-1 text-xs text-slate-400">PNG, JPG, or SVG up to 5MB</span>
      <input className="sr-only" type="file" />
    </label>
  );
}
