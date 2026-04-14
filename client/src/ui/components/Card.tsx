import type { ReactNode } from "react";
import { CornerBorders } from "./CornerBorders";

export function Card({ children }: { children?: ReactNode }) {
  return (
    <div
      className="flex flex-col relative border p-4 gap-4 bg-light-background text-cyber-cyan-text
       "
    >
      {/* Card Corner Edges */}
      <CornerBorders color="border-cyan-400" />

      {/* Children */}
      {children}
    </div>
  );
}
