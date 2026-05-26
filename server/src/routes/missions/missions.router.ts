import express from "express";
import { createMission, getAllMissions } from "./missions.controller";

export const missionsRouter = express.Router();

missionsRouter.get("/missions", getAllMissions);
missionsRouter.post("/missions", createMission);
