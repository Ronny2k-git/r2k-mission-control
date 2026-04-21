import type { ComponentPropsWithRef, ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import { CornerBorders, type BorderColor } from "./CornerBorders";

export type ButtonProps = ComponentPropsWithRef<"button"> & {
  className?: string;
  variant?: "primary" | "ghost" | "all" | "success" | "aborted";
  borderColor?: BorderColor;
  children: ReactNode;
};

const variantStyles = {
  primary: "text-green-400 bg-green-400/5 text-base",
  ghost: "border-cyber-cyan-text/50 text-cyan-muted",

  all: "bg-cyan-500/20 border-cyber-cyan-text",
  success: "bg-green-500/5 border-green-500/80 text-green-400/85",
  aborted: "bg-red-500/5 border-red-500/80 text-red-400/85",
};

export function Button({
  className,
  variant = "primary",
  borderColor,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={twMerge(
        `flex relative px-4 items-center justify-center border font-semibold`,
        variantStyles[variant],
        className,
      )}
      {...props}
    >
      {borderColor && <CornerBorders color={borderColor} size="xs" />}

      {children}
    </button>
  );
}
