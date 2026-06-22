import cors from "cors";
import express from "express";
import morgan from "morgan";
import { missionsRouter } from "./routes/missions/missions.router";
import { planetsRouter } from "./routes/planets/planets.router";

export const app = express();

// The CORS is required for the frontend to access the content.
app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:5173",
  }),
);

app.use(morgan("dev"));

app.use(express.json());

app.use(planetsRouter);
app.use(missionsRouter);
