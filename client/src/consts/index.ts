import type { InfoCardProps } from "../components";

export type LaunchData = {
  planets: number;
  nextWindow: string;
  activeMissions: number;
  status: string;
};

export type UpcomingData = {
  launchedMissions: number;
  nextWindow: string;
  rocketsReady: number;
  status: string;
};

export type HistoryData = {
  totalLaunches: number;
  successfull: number;
  firstLaunch: string;
  status: string;
};

export type CardConfig<T> = {
  title: string;
  key: keyof T;
  textColor: InfoCardProps["textColor"];
};

export const launchInfoCards: CardConfig<LaunchData>[] = [
  {
    title: "Eligible Planets",
    key: "planets",
    textColor: "text-cyber-cyan-text",
  },
  {
    title: "Next Launch Window",
    key: "nextWindow",
    textColor: "text-cyber-cyan-text",
  },
  {
    title: "Active Missions",
    key: "activeMissions",
    textColor: "text-cyber-cyan-text",
  },
  { title: "Fleet Status", key: "status", textColor: "text-green-600" },
];

export const upcomingInfoCards: CardConfig<UpcomingData>[] = [
  {
    title: "Launched Missions",
    key: "launchedMissions",
    textColor: "text-cyber-cyan-text",
  },
  {
    title: "Next Launch Window",
    key: "nextWindow",
    textColor: "text-cyber-cyan-text",
  },
  {
    title: "Rockets Ready",
    key: "rocketsReady",
    textColor: "text-cyber-cyan-text",
  },
  { title: "Status", key: "status", textColor: "text-orange-300" },
];

export const historyInfoCards: CardConfig<HistoryData>[] = [
  {
    title: "Total Launches",
    key: "totalLaunches",
    textColor: "text-cyber-cyan-text",
  },
  {
    title: "Successful Launches",
    key: "successfull",
    textColor: "text-green-600",
  },
  {
    title: "First Launch",
    key: "firstLaunch",
    textColor: "text-cyber-cyan-text",
  },
  { title: "Archive Status", key: "status", textColor: "text-green-600" },
];
