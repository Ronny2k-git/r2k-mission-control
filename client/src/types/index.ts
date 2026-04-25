import type { MissionInfoCardProps } from "../components/missions";
import type { CardVariants } from "../components/ui";

export type Mission = {
  id: number;
  date: string;
  name: string;
  rocket: string;
  target: string;
  status?: "success" | "aborted" | "upcoming";
};

export type MissionCardInfoProps<T> = {
  title: string;
  key: keyof T;
  textColor: MissionInfoCardProps["textColor"];
  variant: CardVariants;
};

export type FilterType = "all" | "success" | "aborted";
