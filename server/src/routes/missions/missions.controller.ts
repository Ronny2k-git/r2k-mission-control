import type { Request, Response } from "express";
import { missions } from "../../models/missions.model";
import { getMissionStatus } from "../../utils";

export function getAllMissions(req: Request, res: Response) {
  const missionWithStatus = missions.map((mission) => ({
    ...mission,
    status: getMissionStatus(mission),
  }));

  return res.status(200).json(missionWithStatus);
}
