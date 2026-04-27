import type { ReactNode } from "react";
import type { MissionCardInfoProps } from "../types";

export type LaunchData = {
  planets: number;
  nextMission: ReactNode;
  activeMissions: number;
  status: string;
};

export const missionTypes = [
  "exploration",
  "cargo",
  "research",
  "crewed",
] as const;

export const missionTypeValues = [
  { value: "exploration", label: "Exploration" },
  { value: "cargo", label: "Cargo" },
  { value: "research", label: "Research" },
  { value: "crewed", label: "Crewed" },
];

export const launchInfoCards: MissionCardInfoProps<LaunchData>[] = [
  {
    title: "Eligible Planets",
    key: "planets",
    textColor: "text-cyber-cyan-text",
    variant: "secondary",
  },
  {
    title: "Active Missions",
    key: "activeMissions",
    textColor: "text-orange-300",
    variant: "secondary",
  },
  {
    title: "Next Mission In",
    key: "nextMission",
    textColor: "text-white",
    variant: "glow",
  },
  {
    title: "Fleet Status",
    key: "status",
    textColor: "text-green-400",
    variant: "secondary",
  },
];

export const eligibilityPlanets = [
  {
    id: 1,
    description:
      "Planetary radius < 1.6× Earth's radius — ensures terrestrial-class surface conditions.",
  },
  {
    id: 2,
    description:
      "Effective stellar flux in range 0.36 – 1.11× Earth's value — conservative habitable zone boundary.",
  },
];
