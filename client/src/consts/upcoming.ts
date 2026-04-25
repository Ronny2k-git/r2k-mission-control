import type { ReactNode } from "react";
import type { MissionCardInfoProps } from "../types";

export type UpcomingData = {
  launchedMissions: number;
  nextMission: ReactNode;
  rocketsReady: number;
  status: string;
};

export const upcomingInfoCards: MissionCardInfoProps<UpcomingData>[] = [
  {
    title: "Launched Missions",
    key: "launchedMissions",
    textColor: "text-cyber-cyan-text",
    variant: "secondary",
  },
  {
    title: "Rockets Ready",
    key: "rocketsReady",
    textColor: "text-orange-300",
    variant: "secondary",
  },
  {
    title: "Next Mission in",
    key: "nextMission",
    textColor: "text-white",
    variant: "glow",
  },
  {
    title: "Status",
    key: "status",
    textColor: "text-orange-300",
    variant: "secondary",
  },
];
