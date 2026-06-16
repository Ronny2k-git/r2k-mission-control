import { CreateMissionDTO, MissionDB } from "@common/types";
import { Customer, Prisma } from "../../generated/prisma/client";
import { prisma } from "../lib/prisma";

export function toMissionDB(mission: Prisma.MissionGetPayload<{}>): MissionDB {
  return {
    ...mission,
    customers: mission.customers as Customer[],
  };
}

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
  return await prisma.mission.create({
    data: {
      ...data,
    },
  });
}

// Used to abort a mission by provided ID
export async function abortMissionById(id: number) {
  const mission = await prisma.mission.findUnique({
    where: {
      id,
    },
  });

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

  const updatedMission = await prisma.mission.update({
    where: {
      id,
    },
    data: {
      isAborted: true,
    },
  });

  return { mission: updatedMission };
}
