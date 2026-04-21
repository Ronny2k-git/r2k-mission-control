type DividerProps = {
  label?: string;
  variant?: "label" | "thick" | "line";
};

export function Divider({ label, variant = "line" }: DividerProps) {
  return (
    <div
      className={`flex items-center w-full ${variant === "label" && "gap-4"}`}
    >
      {variant === "label" && label && (
        <span className="text-[11px] text-cyber-cyan-text font-heading uppercase font-semibold tracking-widest whitespace-nowrap">
          ◊ {label}
        </span>
      )}

      {variant === "thick" && <div className="w-20 bg-cyan-600 h-[3px]" />}

      <div className="flex-1 h-px bg-cyan-900/70" />
    </div>
  );
}
