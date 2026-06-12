import type { Request, Response } from "express";
import { prisma } from "../../lib/prisma";
import { abortMissionById, addNewMission, getMissionStatus } from "../../utils";
import { createMissionSchema } from "./missions.schema";

// Get all missions - (READ)
export async function getAllMissions(req: Request, res: Response) {
  const missions = await prisma.mission.findMany();

  const missionWithStatus = missions.map((mission) => ({
    ...mission,
    status: getMissionStatus(mission),
  }));

  return res.status(200).json(missionWithStatus);
}

// Create a new mission - (CREATE)
export function createMission(req: Request, res: Response) {
  const result = createMissionSchema.safeParse(req.body);

  if (!result.success) {
    return res
      .status(400)
      .json({ error: "Invalid mission data", details: result.error });
  }

  const mission = addNewMission(result.data);

  return res.status(201).json(mission);
}

// Abort a mission based on the provided ID - (UPDATE)
export function abortMission(req: Request, res: Response) {
  const missionId = Number(req.params.id);

  const result = abortMissionById(missionId);

  if (result.error) {
    return res.status(400).json({
      error: result.error,
    });
  }

  return res.status(200).json(result.mission);
}
