import type { Request, Response } from "express";
import { missions } from "../../models/missions.model";
import { addNewMission, getMissionStatus } from "../../utils";
import { createMissionSchema } from "./missions.schema";

export function getAllMissions(req: Request, res: Response) {
  const missionWithStatus = missions.map((mission) => ({
    ...mission,
    status: getMissionStatus(mission),
  }));

  return res.status(200).json(missionWithStatus);
}

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

export function abortMission(req: Request, res: Response) {
  const missionId = Number(req.params.id);

  const mission = missions.find((m) => m.id === missionId);

  if (!mission) {
    return res.status(400).json({
      error: "Mission not found",
    });
  }

  if (mission.isAborted) {
    return res.status(400).json({
      error: "Mission already aborted",
    });
  }

  mission.isAborted = true;

  return res.status(201).json();
}
