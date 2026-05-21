import express from "express";
import { getAllMissions } from "./missions.controller";

export const missionsRouter = express.Router();

missionsRouter.get("/missions", getAllMissions);
