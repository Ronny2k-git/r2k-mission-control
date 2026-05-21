import { MissionBase } from "@common/types";

// Function used to calculate the mission status
export function getMissionStatus(mission: MissionBase) {
  if (mission.isAborted) return "aborted";

  const now = new Date();
  const start = new Date(mission.startDate);
  const end = new Date(mission.endDate);

  if (now < start) return "upcoming";
  if (now >= start && now <= end) return "running";

  return "success";
}
