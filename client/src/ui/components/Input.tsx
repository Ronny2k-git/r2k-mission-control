import type { ComponentPropsWithRef } from "react";
import { twMerge } from "tailwind-merge";

export type InputProps = ComponentPropsWithRef<"input"> & {
  className?: string;
  label?: string;
  required?: boolean;
};

export function Input({ className, label, required, ...props }: InputProps) {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex items-center gap-2">
        <span className="text-[13px] text-cyan-text-light uppercase font-mono tracking-widest">
          {label}
        </span>

        {required && (
          <span className="text-[11px] text-orange-300 font-mono tracking-tighter">
            REQ
          </span>
        )}
      </div>

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
