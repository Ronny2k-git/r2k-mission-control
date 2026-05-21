import type { MissionResponse } from "@common/types";
import { useMemo } from "react";
import { useDebounce } from "./useDebounce";

export function useSearchMissions(missions: MissionResponse[], search: string) {
  const debouncedValue = useDebounce(search, 500);
  const searchLower = debouncedValue.toLowerCase();

  const searchedMissions = useMemo(() => {
    if (!searchLower.trim()) return missions;

    return missions.filter((mission) => {
      return (
        mission.name.toLowerCase().includes(searchLower) ||
        mission.rocket.toLowerCase().includes(searchLower) ||
        mission.target.toLowerCase().includes(searchLower)
      );
    });
  }, [searchLower, missions]);

  return { searchedMissions };
}
