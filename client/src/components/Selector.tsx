import type { ComponentPropsWithRef, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

export type SelectorProps = ComponentPropsWithRef<"select"> & {
  className?: string;
  children: ReactNode;
};

export function Selector({ className, children, ...props }: SelectorProps) {
  return (
    <select
      className={twMerge("bg-cyan-900/70 text-white text-base pl-2", className)}
      {...props}
    >
      {children}
    </select>
  );
}
