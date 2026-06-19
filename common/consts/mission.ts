import type { Customer, MissionType } from "../types/mission.js";
import { customerValues, missionTypeValues, rocketValues } from "./launch.js";

export const customers = customerValues.map((c) => c.value as Customer);

export const rockets = rocketValues.map((r) => r.value);

export const missionTypes = missionTypeValues.map(
  (r) => r.value,
) as MissionType[];
