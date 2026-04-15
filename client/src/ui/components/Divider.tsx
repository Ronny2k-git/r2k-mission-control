export function Divider({ label }: { label?: string }) {
  return (
    <div className={`flex items-center w-full ${label ? "gap-4" : ""}`}>
      {label ? (
        <span className="text-xs text-cyan-text-light uppercase font-semibold tracking-widest">
          ◊ {label}
        </span>
      ) : (
        <div className="w-20 bg-cyan-600 h-[3px]" />
      )}
      <div className="flex-1 h-px bg-linear-to-r bg-cyan-900" />
    </div>
  );
}
