import type { ComponentPropsWithRef, ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import { CornerBorders, type BorderColor } from "./CornerBorders";

export type ButtonProps = ComponentPropsWithRef<"button"> & {
  className?: string;
  variant?: "primary" | "ghost";
  borderColor?: BorderColor;
  children: ReactNode;
};

const variantStyles = {
  primary: "text-green-400 bg-green-400/5 text-base",
  ghost: "border-cyber-cyan-text/50 text-cyan-muted",
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
