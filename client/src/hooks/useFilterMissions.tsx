import { useState } from "react";
import type { FilterType, Mission } from "../types";

export function useFilterMissions(missions: Mission[]) {
  const [filter, setFilter] = useState<FilterType>("all");

  const filteredMissions = missions.filter((mission) => {
    if (filter === "all") return true;
    return mission.status === filter;
  });
  return { filteredMissions, filter, setFilter };
}
