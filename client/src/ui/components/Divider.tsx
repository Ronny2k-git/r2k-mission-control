export function Divider({ label }: { label?: string }) {
  return (
    <div className={`flex items-center w-full ${label ? "gap-4" : ""}`}>
      {label ? (
        <span className="text-[11px] text-cyber-cyan-text font-heading uppercase font-semibold tracking-widest">
          ◊ {label}
        </span>
      ) : (
        <div className="w-20 bg-cyan-600 h-[3px]" />
      )}
      <div className="flex-1 h-px bg-linear-to-r from-cyan-900 via-cyan-900" />
    </div>
  );
}
