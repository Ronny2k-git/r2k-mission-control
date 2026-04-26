import type { ComponentPropsWithRef, ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import { Card, type CardVariants } from "../ui";

export type textColor =
  | "text-cyber-cyan-text"
  | "text-white"
  | "text-green-400"
  | "text-orange-300";

export type MissionInfoCardProps = ComponentPropsWithRef<"div"> & {
  title: string;
  text: ReactNode;
  textColor: textColor;
  variant: CardVariants;
};

export function MissionInfoCard({
  title,
  text,
  textColor,
  variant,
  className,
  ...props
}: MissionInfoCardProps) {
  return (
    <Card
      className={twMerge("w-full p-4 font-body", className)}
      variant={variant}
      cornerBorders={false}
      {...props}
    >
      <span className="text-xs text-cyan-muted uppercase whitespace-nowrap">
        {title}
      </span>

      <span
        className={`font-heading font-semibold text-sm sm:text-lg ${textColor}`}
      >
        {text}
      </span>
    </Card>
  );
}
