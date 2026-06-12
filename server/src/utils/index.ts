import { CreateMissionDTO, MissionDB } from "@common/types";
import { prisma } from "../lib/prisma";
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

// Used to add a new mission
export async function addNewMission(data: CreateMissionDTO) {
  const mission = await prisma.mission.create({
    data: {
      ...data,
    },
  });
  // const newMission: MissionDB = {
  //   ...mission,
  //   id: missions.length + 1,
  // };

  // missions.push(newMission);

  // return newMission;
}

// Used to abort a mission by provided ID
export function abortMissionById(id: number) {
  const mission = missions.find((m) => m.id === id);

  if (!mission) {
    return {
      error: "Mission not found",
    };
  }

  if (mission.isAborted) {
    return {
      error: "Mission already aborted",
    };
  }

  mission.isAborted = true;

  return { mission };
}
