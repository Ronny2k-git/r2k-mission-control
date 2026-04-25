import type { ComponentPropsWithRef, ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import { CornerBorders, type BorderColors } from "./CornerBorders";

const cardVariants = {
  primary: "bg-card-background border border-bg-border",
  secondary: "border border-bg-border",
  success: "bg-green-muted border border-green-500/40 ",
  warning: "bg-red-dark border border-red-500/25 ",
};

const borderColorMap: Record<CardVariants, BorderColors> = {
  primary: "border-cyber-cyan-text",
  secondary: "border-cyber-cyan-text",
  success: "border-green-500",
  warning: "border-red-500",
};

export type CardVariants = keyof typeof cardVariants;

export type CardProps = ComponentPropsWithRef<"div"> & {
  children?: ReactNode;
  className?: string;
  variant?: CardVariants;
  cornerBorders?: boolean;
  borderColor?: BorderColors;
};

export function Card({
  className,
  variant = "primary",
  cornerBorders = true,
  borderColor,
  children,
  ...props
}: CardProps) {
  const resolvedBorderColor = borderColor ?? borderColorMap[variant];

  return (
    <div
      className={twMerge(
        "w-full flex flex-col relative",
        cardVariants[variant],
        className,
      )}
      {...props}
    >
      {/* Card Corner Edges */}
      {cornerBorders && <CornerBorders color={resolvedBorderColor} size="sm" />}

      {/* Children */}
      {children}
    </div>
  );
}
