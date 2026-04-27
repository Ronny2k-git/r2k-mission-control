import type { ComponentPropsWithRef } from "react";
import { twMerge } from "tailwind-merge";

type InputVariant = "basic" | "warn";
type InputSize = "sm" | "md" | "lg";

export type InputProps = Omit<ComponentPropsWithRef<"input">, "size"> & {
  wrapperClassName?: string;
  inputClassName?: string;
  label?: string;
  isRequired?: boolean;
  variant?: InputVariant;
  size?: InputSize;
};

const variantStyles: Record<InputVariant, string> = {
  basic: `bg-input-color border-bg-border focus:border-cyber-cyan-text `,
  warn: ` bg-red-500/5 border-red-500/70 focus:border-red-500 text-white placeholder:text-red-500/30 `,
};

const sizeStyles: Record<InputSize, string> = {
  sm: "h-8 text-sm px-2",
  md: "h-10 text-[15px] px-2.5",
  lg: "h-12 text-base px-3",
};

export function Input({
  inputClassName,
  wrapperClassName,
  label,
  isRequired,
  variant = "basic",
  size = "md",
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
          sizeStyles[size],
          inputClassName,
        )}
        {...props}
      />
    </div>
  );
}
