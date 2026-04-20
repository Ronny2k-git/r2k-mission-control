import type { ComponentPropsWithRef, ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import { CornerBorders } from "./CornerBorders";

export type CardProps = ComponentPropsWithRef<"div"> & {
  children?: ReactNode;
  className?: string;
  cornerBorders?: boolean;
};

export function Card({
  className,
  cornerBorders = true,
  children,
  ...props
}: CardProps) {
  return (
    <div
      className={twMerge(
        "flex flex-col relative border border-cyber-cyan-text/20 bg-card-background",
        className,
      )}
      {...props}
    >
      {/* Card Corner Edges */}
      {cornerBorders && (
        <CornerBorders color="border-cyber-cyan-text" size="sm" />
      )}

      {/* Children */}
      {children}
    </div>
  );
}
