import type { ComponentPropsWithRef } from "react";
import { Card } from "../ui";

export type textColor =
  | "text-cyber-cyan-text"
  | "text-white"
  | "text-green-400"
  | "text-orange-300";

export type MissionInfoCardProps = ComponentPropsWithRef<"div"> & {
  title: string;
  text: string | number;
  textColor: textColor;
};

export function MissionInfoCard({
  title,
  text,
  textColor,
  ...props
}: MissionInfoCardProps) {
  return (
    <Card
      className="w-full p-4 font-body"
      variant="secondary"
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
