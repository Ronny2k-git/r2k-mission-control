import type { ComponentPropsWithRef, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type SelectorVariant = "basic" | "warn" | "error";
type SelectorSize = "sm" | "md" | "lg";

export type SelectorProps = Omit<ComponentPropsWithRef<"select">, "size"> & {
  className?: string;
  label?: string;
  children: ReactNode;
  isRequired?: boolean;
  variant?: SelectorVariant;
  size?: SelectorSize;
  error?: string;
};

const variantStyles: Record<SelectorVariant, string> = {
  basic: ` bg-input-color border-bg-border focus:border-cyber-cyan-text `,
  warn: `border-red-500/50 focus:border-red-500 text-red-400 `,
  error: `shadow-error-glow border-0`,
};

const sizeStyles: Record<SelectorSize, string> = {
  sm: "h-8 text-sm px-2 rounded-sm",
  md: "h-10 text-[15px] px-2.5 rounded-sm",
  lg: "h-12 text-base px-3 rounded-sm",
};

export function Selector({
  className,
  label,
  isRequired,
  children,
  variant = "basic",
  size = "md",
  error,
  ...props
}: SelectorProps) {
  const effectiveVariant = error ? "error" : variant;

  return (
    <div className="flex flex-col gap-2">
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

      {/* Select */}
      <select
        className={twMerge(
          ` bg-input-color text-white text-[15px] pl-2 border focus:outline-none     `,
          variantStyles[effectiveVariant],
          sizeStyles[size],
          className,
        )}
        {...props}
      >
        {children}
      </select>

      {/* Error message */}
      {error && (
        <span className="mt-1 pl-2 text-sm text-red-400/90">{error}</span>
      )}
    </div>
  );
}
