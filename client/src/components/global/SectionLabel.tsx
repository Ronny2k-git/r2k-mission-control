type SectionLabelProps = {
  children: React.ReactNode;
};

export function SectionLabel({ children }: SectionLabelProps) {
  return (
    <h2 className="text-[11px] text-cyber-cyan-text font-heading uppercase font-semibold tracking-widest whitespace-nowrap">
      ◊ {children}
    </h2>
  );
}
