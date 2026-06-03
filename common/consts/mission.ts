import type { Customer, MissionType } from "@common/types";
import {
  customerValues,
  missionTypeValues,
  rocketValues,
} from "../../client/src/consts/launch";

export const customers = customerValues.map((c) => c.value as Customer);

export const rockets = rocketValues.map((r) => r.value);

export const missionTypes = missionTypeValues.map(
  (r) => r.value,
) as MissionType[];
