import type { ComponentPropsWithRef } from "react";
import { twMerge } from "tailwind-merge";

type InputVariant = "basic" | "warn";

export type InputProps = ComponentPropsWithRef<"input"> & {
  wrapperClassName?: string;
  inputClassName?: string;
  label?: string;
  isRequired?: boolean;
  variant?: InputVariant;
};

const variantStyles: Record<InputVariant, string> = {
  basic: `bg-input-color border-bg-border focus:border-cyber-cyan-text `,
  warn: ` border-red-500/50 focus:border-red-500 text-red-400 placeholder:text-red-500/60`,
};

export function Input({
  inputClassName,
  wrapperClassName,
  label,
  isRequired,
  variant = "basic",
  ...props
}: InputProps) {
  return (
    <div className={twMerge("flex flex-col gap-2", wrapperClassName)}>
      {/* Label */}
      {(label || isRequired) && (
        <div className="flex items-center gap-2">
          {label && (
            <span className="text-[13px] text-cyan-text-light uppercase font-mono tracking-widest">
              {label}
            </span>
          )}

          {isRequired && (
            <strong className="text-[11px] text-orange-300 font-mono tracking-tighter">
              REQ
            </strong>
          )}
        </div>
      )}

      {/* Input */}
      <input
        className={twMerge(
          `
          bg-input-color text-white text-[15px] pl-2
          border placeholder:text-cyan-muted
          focus:outline-none
          `,
          variantStyles[variant],
          inputClassName,
        )}
        {...props}
      />
    </div>
  );
}
