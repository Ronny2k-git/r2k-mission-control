import { useMemo, useState } from "react";
import { missions } from "../consts";

export function useSearchMissions() {
  const [search, setSearch] = useState("");

  const searchedMissions = useMemo(() => {
    if (!search.trim()) return missions;

    return missions.filter((mission) => {
      return (
        mission.mission.toLowerCase().includes(search.toLowerCase()) ||
        mission.rocket.toLowerCase().includes(search.toLowerCase()) ||
        mission.target.toLowerCase().includes(search.toLowerCase())
      );
    });
  }, [search]);

  return { searchedMissions, search, setSearch };
}
