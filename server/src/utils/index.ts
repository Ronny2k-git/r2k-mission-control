import { MissionDB } from "@common/types";
import { missions } from "../models/missions.model";

// Function used to calculate the mission status
export function getMissionStatus(mission: MissionDB) {
  if (mission.isAborted) return "aborted";

  const now = new Date();
  const start = new Date(mission.startDate);
  const end = new Date(mission.endDate);

  if (now < start) return "upcoming";
  if (now >= start && now <= end) return "running";

  return "success";
}

export function addNewMission(mission: MissionDB) {
  const newMission: MissionDB = {
    ...mission,
    id: missions.length + 1,
  };

  missions.push(newMission);

  return newMission;
}
