import type { Request, Response } from "express";
import { missions } from "../../models/missions.model";
import { addNewMission, getMissionStatus } from "../../utils";

export function getAllMissions(req: Request, res: Response) {
  const missionWithStatus = missions.map((mission) => ({
    ...mission,
    status: getMissionStatus(mission),
  }));

  return res.status(200).json(missionWithStatus);
}

export function createMission(req: Request, res: Response) {
  const mission = addNewMission(req.body);

  return res.status(201).json(mission);
}
