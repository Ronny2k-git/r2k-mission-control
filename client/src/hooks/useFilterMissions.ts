import type { MissionResponse } from "@common/types";

export function useFilterMissions(missions: MissionResponse[], filter: string) {
  const filteredMissions = missions.filter((mission) => {
    if (filter === "all") return true;
    return mission.status === filter;
  });
  return { filteredMissions };
}
