const bars = ["h-5", "h-8", "h-12", "h-7", "h-10", "h-6"];

export function VoiceWaveLoader() {
  return (
    <div className="flex items-center gap-1.5" role="status" aria-label="Audio processing">
      {bars.map((height, index) => (
        <span
          key={`${height}-${index}`}
          className={`${height} w-2 animate-pulse rounded-full bg-[#40E0D0] shadow-[0_0_16px_rgba(64,224,208,0.45)]`}
          style={{ animationDelay: `${index * 90}ms` }}
        />
      ))}
    </div>
  );
}
