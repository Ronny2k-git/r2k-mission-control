import { useGetMissions } from "./useGetMissions";

export function useGetMissionGroups() {
  const { data: missions = [], ...rest } = useGetMissions();

  const liveMissions = missions.filter((m) => m.status === "running");

  const scheduledMissions = missions.filter((m) => m.status === "upcoming");

  const completedMissions = missions.filter(
    (m) => m.status === "success" || m.status === "aborted",
  );

  return {
    missions,
    liveMissions,
    scheduledMissions,
    completedMissions,
    ...rest,
  };
}
