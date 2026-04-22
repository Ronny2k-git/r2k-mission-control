import { ShieldCheck, ShieldX } from "lucide-react";
import type { CardConfig, FilterType } from "../types";

export type HistoryData = {
  totalLaunches: number;
  successfull: number;
  firstLaunch: string;
  status: string;
};

export const historyInfoCards: CardConfig<HistoryData>[] = [
  {
    title: "Total Launches",
    key: "totalLaunches",
    textColor: "text-cyber-cyan-text",
  },
  {
    title: "Successful Launches",
    key: "successfull",
    textColor: "text-green-400",
  },
  {
    title: "First Launch",
    key: "firstLaunch",
    textColor: "text-white/85",
  },
  { title: "Archive Status", key: "status", textColor: "text-green-400" },
];

type filterProps = {
  value: FilterType;
  label: string;
  icon?: React.ElementType;
  iconColor?: string;
}[];

export const filters: filterProps = [
  { value: "all", label: "All" },
  {
    value: "success",
    icon: ShieldCheck,
    iconColor: "text-green-500",
    label: "Success",
  },
  {
    value: "aborted",
    icon: ShieldX,
    iconColor: "text-red-400",
    label: "Aborted",
  },
];
