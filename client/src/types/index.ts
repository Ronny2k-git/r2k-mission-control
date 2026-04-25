import type { MissionInfoCardProps } from "../components/missions";

export type Mission = {
  id: number;
  date: string;
  name: string;
  rocket: string;
  target: string;
  status?: "success" | "aborted" | "upcoming";
};

export type CardConfig<T> = {
  title: string;
  key: keyof T;
  textColor: MissionInfoCardProps["textColor"];
};

export type FilterType = "all" | "success" | "aborted";
