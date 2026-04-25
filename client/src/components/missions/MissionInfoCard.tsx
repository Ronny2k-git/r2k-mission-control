import type { ComponentPropsWithRef, ReactNode } from "react";
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
  ...props
}: MissionInfoCardProps) {
  return (
    <Card
      className="w-full p-4 font-body"
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
