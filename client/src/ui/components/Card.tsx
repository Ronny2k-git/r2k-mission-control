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
        "flex flex-col relative border border-cyan-900 p-4 bg-light-background",
        className,
      )}
      {...props}
    >
      {/* Card Corner Edges */}
      {cornerBorders && <CornerBorders color="border-cyan-400" size="md" />}

      {/* Children */}
      {children}
    </div>
  );
}
