import { Card } from "../ui/components";

type textColor = "text-cyber-cyan-text" | "text-green-600";

export type LaunchInfoCardProps = {
  title: string;
  text: string | number;
  textColor: textColor;
};

export function LaunchInfoCard({
  title,
  text,
  textColor,
}: LaunchInfoCardProps) {
  return (
    <Card className="w-full" cornerBorders={false}>
      <span className="text-xs text-cyan-text-light/40 font-mono uppercase whitespace-nowrap">
        {title}
      </span>
      <span className={`text-sm font-semibold ${textColor}`}>{text}</span>
    </Card>
  );
}
