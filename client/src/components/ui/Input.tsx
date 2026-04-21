import type { ComponentPropsWithRef } from "react";
import { twMerge } from "tailwind-merge";

export type InputProps = ComponentPropsWithRef<"input"> & {
  wrapperClassName?: string;
  inputClassName?: string;
  label?: string;
  required?: boolean;
};

export function Input({
  inputClassName,
  wrapperClassName,
  label,
  required,
  ...props
}: InputProps) {
  return (
    <div className={twMerge("flex flex-col", wrapperClassName)}>
      <div className="flex items-center gap-2">
        <span className="text-[13px] text-cyan-text-light uppercase font-mono tracking-widest">
          {label}
        </span>

        {required && (
          <strong className="text-[11px] text-orange-300 font-mono tracking-tighter">
            REQ
          </strong>
        )}
      </div>

      <input
        className={twMerge(
          `bg-input-color text-white text-[15px] pl-2 focus:outline-none focus:border-cyber-cyan-text 
          border border-bg-border placeholder:text-cyan-muted`,
          inputClassName,
        )}
        {...props}
      />
    </div>
  );
}
