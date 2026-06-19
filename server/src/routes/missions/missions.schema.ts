import { customers, missionTypes, rockets } from "@common/consts/mission";
import { z } from "zod";

export const createMissionSchema = z
  .object({
    name: z.string().min(3),

    rocket: z.enum(rockets),

    target: z.string().min(1),

    type: z.enum(missionTypes),

    startDate: z.coerce.date(),

    endDate: z.coerce.date(),

    description: z.string().min(10).optional(),

    customers: z.array(z.enum(customers)).min(1).max(3),

    isAborted: z.boolean(),
  })
  .refine((data) => data.endDate >= data.startDate, {
    path: ["endDate"],
    message: "End date must be after start date",
  });
