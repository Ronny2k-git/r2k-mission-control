import type { ComponentPropsWithRef } from "react";
import { Card } from "./ui";

export type textColor =
  | "text-cyber-cyan-text"
  | "text-white/85"
  | "text-green-400"
  | "text-orange-300";

export type InfoCardProps = ComponentPropsWithRef<"div"> & {
  title: string;
  text: string | number;
  textColor: textColor;
};

export function InfoCard({ title, text, textColor, ...props }: InfoCardProps) {
  return (
    <Card
      className="w-full p-4 bg-transparent"
      cornerBorders={false}
      {...props}
    >
      <span className="text-xs text-cyan-muted font-mono uppercase whitespace-nowrap">
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
