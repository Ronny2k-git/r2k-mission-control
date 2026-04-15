import type { ComponentPropsWithRef } from "react";
import { twMerge } from "tailwind-merge";

export type InputProps = ComponentPropsWithRef<"input"> & {
  className?: string;
  label?: string;
};

export function Input({ className, label, ...props }: InputProps) {
  return (
    <div className="flex flex-col gap-1">
      <span className="text-[13px] text-cyan-text-light uppercase font-mono tracking-widest">
        {label}
      </span>

      <input
        className={twMerge(
          `bg-cyan-900/40 text-white text-base pl-2 focus:outline-none focus:border-cyber-cyan-text/80 
          border border-cyan-900`,
          className,
        )}
        {...props}
      />
    </div>
  );
}
