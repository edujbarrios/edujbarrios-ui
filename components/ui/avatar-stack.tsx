const people = ["EB", "AI", "QA"];

export function AvatarStack() {
  return (
    <div className="inline-flex items-center rounded-full border border-white/12 bg-[#0b0f14]/82 px-3 py-2 shadow-xl">
      <div className="flex -space-x-2">
        {people.map((person, index) => (
          <span
            key={person}
            className="grid h-9 w-9 place-items-center rounded-full border-2 border-[#0b0f14] bg-[#40E0D0]/14 text-xs font-black text-[#d8fffb]"
            style={{ zIndex: people.length - index }}
          >
            {person}
          </span>
        ))}
      </div>
      <span className="ml-3 text-xs font-semibold text-slate-300">3 reviewers</span>
    </div>
  );
}
