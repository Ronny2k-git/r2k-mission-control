import { History, Rocket, Timer } from "lucide-react";
import type { ElementType } from "react";

export type HeaderNavItem = {
  nav: string;
  label: string;
  icon?: ElementType;
};

export const headerNavigation = [
  { nav: "/", icon: Rocket, label: "Launch" },
  { nav: "/upcoming", icon: Timer, label: "Upcoming" },
  { nav: "/history", icon: History, label: "History" },
] as const;
