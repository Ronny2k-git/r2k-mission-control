import type { BadgeStatus } from "../components/ui";

export const badgeConfig: Record<
  BadgeStatus,
  { label: string; dot: string; text: string; border: string; bg: string }
> = {
  live: {
    label: "LIVE",
    dot: "bg-green-400 animate-ping",
    text: "text-green-400",
    border: "border-green-500/30",
    bg: "bg-green-500/10",
  },
  success: {
    label: "SUCCESS",
    dot: "bg-green-400",
    text: "text-green-400",
    border: "border-green-500/30",
    bg: "bg-green-500/10",
  },
  aborted: {
    label: "ABORTED",
    dot: "bg-red-400",
    text: "text-red-400",
    border: "border-red-500/30",
    bg: "bg-red-500/10",
  },
  scheduled: {
    label: "SCHEDULED",
    dot: "bg-orange-300",
    text: "text-orange-300",
    border: "border-orange-400/30",
    bg: "bg-orange-400/10",
  },
  pending: {
    label: "PENDING",
    dot: "bg-cyan-400",
    text: "text-cyan-400",
    border: "border-cyan-500/30",
    bg: "bg-cyan-500/10",
  },
};
