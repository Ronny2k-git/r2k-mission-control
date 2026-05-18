import type { MissionInfoCardProps } from "../components/missions";
import type { CardVariants } from "../components/ui";

export type MissionStatus = "upcoming" | "running" | "success" | "aborted";

export type MissionType = "exploration" | "research" | "cargo" | "crewed";

export type Mission = {
  id: number;
  name: string;
  rocket: string;
  target: string;
  startDate: Date;
  endDate: Date;
  type: MissionType;
  description?: string;
  status?: MissionStatus;
};

export type MissionCardInfoProps<T> = {
  title: string;
  key: keyof T;
  textColor: MissionInfoCardProps["textColor"];
  variant: CardVariants;
};

export type FilterType = "all" | "success" | "aborted";
