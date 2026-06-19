import type { ReactNode } from "react";
import type { MissionCardInfoProps } from "../types/mission.js";

export type LaunchData = {
  planets: number;
  nextMission: ReactNode;
  activeMissions: number;
  status: string;
};

export const customerValues = [
  { label: "NASA", value: "NASA" },
  { label: "ESA", value: "ESA" },
  { label: "JAXA", value: "JAXA" },
  { label: "CSA", value: "CSA" },
  { label: "SpaceX", value: "SpaceX" },
  { label: "Blue Origin", value: "Blue Origin" },
  { label: "DARPA", value: "DARPA" },
  { label: "Axiom", value: "Axiom" },
];

export const rocketValues = [
  { value: "falcon-9", name: "Falcon 9" },
  { value: "falcon-heavy", name: "Falcon Heavy" },
  { value: "starship", name: "Starship" },
  { value: "sls", name: "SLS" },
];

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
