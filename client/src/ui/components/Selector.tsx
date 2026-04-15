import type { ComponentPropsWithRef, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

export type SelectorProps = ComponentPropsWithRef<"select"> & {
  className?: string;
  label?: string;
  children: ReactNode;
};

export function Selector({
  className,
  label,
  children,
  ...props
}: SelectorProps) {
  return (
    <div className="flex flex-col gap-1">
      <span className="text-[13px] text-cyan-text-light uppercase font-mono tracking-widest">
        {label}
      </span>

      <select
        className={twMerge(
          `bg-cyan-900/70 text-white text-base pl-2 focus:outline-none focus:border-cyber-cyan-text/80
          border border-cyan-900`,
          className,
        )}
        {...props}
      >
        {children}
      </select>
    </div>
  );
}
