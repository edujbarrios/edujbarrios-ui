export function NotificationBell() {
  return (
    <button
      aria-label="Open notifications"
      className="relative rounded-full border border-white/12 bg-white/[0.06] p-4 text-white shadow-xl transition hover:border-[#40E0D0]/35 hover:bg-[#40E0D0]/10"
      type="button"
    >
      <span className="block h-6 w-6 rounded-full border-2 border-current border-b-transparent" />
      <span className="absolute right-3 top-3 h-3 w-3 rounded-full border-2 border-[#0b0f14] bg-[#fb923c]" />
      <span className="absolute inset-x-0 bottom-2 mx-auto h-1 w-3 rounded-full bg-current" />
    </button>
  );
}
