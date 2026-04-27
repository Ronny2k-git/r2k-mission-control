import type { ComponentPropsWithRef } from "react";
import { twMerge } from "tailwind-merge";

type TextAreaVariant = "basic" | "warn";
type TextAreaSize = "sm" | "md" | "lg";

export type TextAreaProps = Omit<ComponentPropsWithRef<"textarea">, "size"> & {
  wrapperClassName?: string;
  textAreaClassName?: string;
  label?: string;
  isRequired?: boolean;
  variant?: TextAreaVariant;
  size?: TextAreaSize;
};

const variantStyles: Record<TextAreaVariant, string> = {
  basic: `bg-input-color border-bg-border focus:border-cyber-cyan-text`,
  warn: `bg-red-500/5 border-red-500/70 focus:border-red-500 text-white placeholder:text-red-500/30 `,
};

const sizeStyles: Record<TextAreaSize, string> = {
  sm: "h-20 text-sm p-2",
  md: "h-28 text-[15px] p-3",
  lg: "h-32 text-base p-3",
};

export function TextArea({
  textAreaClassName,
  wrapperClassName,
  label,
  isRequired,
  variant = "basic",
  size = "md",
  ...props
}: TextAreaProps) {
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

      {/* TextArea */}
      <textarea
        className={twMerge(
          `text-white text-[15px] border placeholder:text-cyan-muted focus:outline-none resize-none `,
          variantStyles[variant],
          sizeStyles[size],
          textAreaClassName,
        )}
        {...props}
      />
    </div>
  );
}
