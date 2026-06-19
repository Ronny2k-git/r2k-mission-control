import type { MissionCardInfoProps as BaseMissionCardInfoProps } from "@common/types";
import type { MissionInfoCardProps } from "../components/missions";
import type { CardVariants } from "../components/ui";

export type MissionCardInfoProps<T> = Omit<
  BaseMissionCardInfoProps<T>,
  "textColor" | "variant"
> & {
  textColor: MissionInfoCardProps["textColor"];
  variant: CardVariants;
};

export type FilterType = "all" | "success" | "aborted";
