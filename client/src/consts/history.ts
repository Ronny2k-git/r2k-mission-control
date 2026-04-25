import { ShieldCheck, ShieldX } from "lucide-react";
import type { ButtonVariant } from "../components/ui";
import type { FilterType, MissionCardInfoProps } from "../types";

export type HistoryData = {
  totalLaunches: number;
  successfull: number;
  firstLaunch: string;
  status: string;
};

export const historyInfoCards: MissionCardInfoProps<HistoryData>[] = [
  {
    title: "Total Launches",
    key: "totalLaunches",
    textColor: "text-cyber-cyan-text",
    variant: "secondary",
  },
  {
    title: "Successful Launches",
    key: "successfull",
    textColor: "text-green-400",
    variant: "secondary",
  },
  {
    title: "First Launch",
    key: "firstLaunch",
    textColor: "text-white",
    variant: "secondary",
  },
  {
    title: "Archive Status",
    key: "status",
    textColor: "text-green-400",
    variant: "secondary",
  },
];

type filterProps = {
  value: FilterType;
  label: string;
  icon?: React.ElementType;
  iconColor?: string;
  variant: ButtonVariant;
}[];

export const filters: filterProps = [
  { value: "all", label: "All", variant: "basic" },
  {
    value: "success",
    icon: ShieldCheck,
    iconColor: "text-green-500",
    label: "Success",
    variant: "success",
  },
  {
    value: "aborted",
    icon: ShieldX,
    iconColor: "text-red-500",
    label: "Aborted",
    variant: "abort",
  },
] as const;
