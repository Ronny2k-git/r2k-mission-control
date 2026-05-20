import type { Mission } from "@common/types";

export function useFilterMissions(missions: Mission[], filter: string) {
  const filteredMissions = missions.filter((mission) => {
    if (filter === "all") return true;
    return mission.status === filter;
  });
  return { filteredMissions };
}
