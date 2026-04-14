import type { ReactNode } from "react";

export function Card({ children }: { children?: ReactNode }) {
  return (
    <div
      className="flex flex-col relative border p-4 gap-4 bg-light-background text-cyber-cyan-text
       "
    >
      {/* Corner Edges */}
      <span className="absolute -top-[2.8px] h-6 w-6 -left-[2.8px] border-t-2 border-l-2 border-cyan-400" />
      <span className="absolute -top-[2.8px] h-6 w-6 -right-[2.8px] border-r-2 border-t-2 border-cyan-400" />
      <span className="absolute -bottom-[2.8px] h-6 w-6 -left-[2.8px] border-b-2 border-l-2 border-cyan-400" />
      <span className="absolute -bottom-[2.8px] h-6 w-6 -right-[2.8px] border-b-2 border-r-2 border-cyan-400" />

      {/* Children */}
      {children}
    </div>
  );
}
