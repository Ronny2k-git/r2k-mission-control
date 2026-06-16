import type { Request, Response } from "express";
import { prisma } from "../../lib/prisma";
import {
  abortMissionById,
  addNewMission,
  getMissionStatus,
  toMissionDB,
} from "../../utils";
import { createMissionSchema } from "./missions.schema";

// Get all missions - (READ)
export async function getAllMissions(req: Request, res: Response) {
  const missions = await prisma.mission.findMany();

  const missionWithStatus = missions.map((mission) => {
    const parsedMission = toMissionDB(mission);

    return {
      ...mission,
      status: getMissionStatus(parsedMission),
    };
  });

  return res.status(200).json(missionWithStatus);
}

// Create a new mission - (CREATE)
export async function createMission(req: Request, res: Response) {
  const result = createMissionSchema.safeParse(req.body);

  if (!result.success) {
    return res
      .status(400)
      .json({ error: "Invalid mission data", details: result.error });
  }

  const mission = await addNewMission(result.data);

  return res.status(201).json(mission);
}

// Abort a mission based on the provided ID - (UPDATE)
export async function abortMission(req: Request, res: Response) {
  const missionId = Number(req.params.id);

  const result = await abortMissionById(missionId);

  if (result.error) {
    return res.status(400).json({
      error: result.error,
    });
  }

  return res.status(200).json(result.mission);
}
