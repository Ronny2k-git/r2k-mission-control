import type { ComponentPropsWithRef } from "react";
import { twMerge } from "tailwind-merge";

type InputVariant = "basic" | "warn" | "error";
type InputSize = "sm" | "md" | "lg";

export type InputProps = Omit<ComponentPropsWithRef<"input">, "size"> & {
  label?: string;
  isRequired?: boolean;
  variant?: InputVariant;
  size?: InputSize;
  error?: string;
  wrapperClassName?: string;
  inputClassName?: string;
};

const variantStyles: Record<InputVariant, string> = {
  basic: `bg-input-color border-bg-border focus:border-cyber-cyan-text `,
  warn: ` bg-red-500/5 border-red-500/70 focus:border-red-500 text-white placeholder:text-red-500/30 `,
  error: `shadow-error-glow border-0`,
};

const sizeStyles: Record<InputSize, string> = {
  sm: "h-8 text-sm px-2 rounded-sm",
  md: "h-10 text-[15px] px-2.5 rounded-sm",
  lg: "h-12 text-base px-3 rounded-sm",
};

export function Input({
  label,
  isRequired,
  variant = "basic",
  size = "md",
  error,
  inputClassName,
  wrapperClassName,
  ...props
}: InputProps) {
  const effectiveVariant = error ? "error" : variant;

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
          variantStyles[effectiveVariant],
          sizeStyles[size],
          inputClassName,
        )}
        {...props}
      />

      {/* Error message */}
      {error && (
        <span className="mt-1 pl-2 text-sm text-red-400/90">{error}</span>
      )}
    </div>
  );
}
