import express from "express";
import {
  abortMission,
  createMission,
  getAllMissions,
} from "./missions.controller";

export const missionsRouter = express.Router();

missionsRouter.get("/missions", getAllMissions);
missionsRouter.post("/missions", createMission);
missionsRouter.patch("/missions/:id/abort", abortMission);
