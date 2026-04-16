import { Card } from "../ui/components";

export type textColor =
  | "text-cyber-cyan-text"
  | "text-green-600"
  | "text-orange-300";

export type InfoCardProps = {
  title: string;
  text: string | number;
  textColor: textColor;
};

export function InfoCard({ title, text, textColor }: InfoCardProps) {
  return (
    <Card className="w-full p-3" cornerBorders={false}>
      <span className="text-xs text-cyan-muted font-mono uppercase whitespace-nowrap">
        {title}
      </span>
      <span className={`text-sm font-semibold ${textColor}`}>{text}</span>
    </Card>
  );
}
