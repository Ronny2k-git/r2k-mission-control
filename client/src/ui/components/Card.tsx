import type { ComponentPropsWithRef, ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import { CornerBorders } from "./CornerBorders";

export type CardProps = ComponentPropsWithRef<"div"> & {
  children?: ReactNode;
  className?: string;
};

export function Card({ className, children, ...props }: CardProps) {
  return (
    <div
      className={twMerge(
        "flex flex-col relative border border-cyan-900 p-4 bg-light-background",
        className,
      )}
      {...props}
    >
      {/* Card Corner Edges */}
      <CornerBorders color="border-cyan-400" size="md" />

      {/* Children */}
      {children}
    </div>
  );
}
