import { badgeConfig } from "../../consts/ui";

export type BadgeStatus =
  | "aborted"
  | "success"
  | "live"
  | "scheduled"
  | "pending";

interface StatusBadgeProps {
  status: BadgeStatus;
}

export function StatusBadge({ status }: StatusBadgeProps) {
  const { label, dot, text, border, bg } = badgeConfig[status];

  return (
    <span
      className={`flex w-[4.3rem] items-center justify-center gap-1.5 py-0.5 border font-mono text-[10px] ${text} ${border} ${bg}`}
    >
      <span className={`size-1.5 rounded-full flex-shrink-0 ${dot}`} />
      {label}
    </span>
  );
}
