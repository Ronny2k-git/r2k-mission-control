import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentPropsWithRef, ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import { CornerBorders, type BorderColor } from "./CornerBorders";

const buttonVariants = cva(
  "flex relative items-center justify-center font-semibold disabled:opacity-30 disabled:cursor-not-allowed disabled:pointer-events-none",
  {
    variants: {
      variant: {
        primary:
          "border border-cyber-cyan-text/70 text-white hover:bg-cyan-500/15 ",
        ghost:
          "border border-cyber-cyan-text/30 text-cyber-cyan-text/90 hover:text-cyber-cyan hover:bg-cyan-500/10",
        basic:
          "border bg-cyan-500/10 border-cyber-cyan-text hover:bg-cyan-500/15",
        success:
          "border bg-green-500/5 border-green-500/80 text-base text-green-400/85 hover:bg-green-500/10",
        aborted:
          "border bg-red-500/5 border-red-500/80 text-red-400/85 hover:bg-red-500/10",
        waiting:
          "border bg-orange-300/10 border-orange-300 text-orange-300 hover:bg-red-300/15",
        glow: "glow bg-cyan-500/10 border border-cyber-cyan-text/70 text-white hover:bg-cyan-500/15 ",
      },
      size: {
        sm: "px-2 py-1 text-sm rounded-lg",
        md: "px-4 text-base",
        lg: "px-4 ",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

export type ButtonVariant = VariantProps<typeof buttonVariants>["variant"];

export interface ButtonProps
  extends ComponentPropsWithRef<"button">, VariantProps<typeof buttonVariants> {
  className?: string;
  borderColor?: BorderColor;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  children: ReactNode;
}

export function Button({
  variant,
  size,
  borderColor,
  iconLeft,
  iconRight,
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={twMerge(
        buttonVariants({ variant, size }),
        iconLeft && "sm:gap-2",
        iconRight && "sm:gap-2",
        className,
      )}
      type="button"
      {...props}
    >
      {borderColor && <CornerBorders color={borderColor} size="xs" />}

      {iconLeft}

      {children}

      {iconRight}
    </button>
  );
}
