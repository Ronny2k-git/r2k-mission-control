import { z } from "zod";
import { customers, missionTypes, rockets } from "../consts";

export const launchSchema = z
  .object({
    missionName: z
      .string()
      .min(3, "Mission name must be at least 3 characters"),

    rocket: z.enum(rockets, {
      message: "Select a rocket",
    }),

    target: z.string().min(1, "Select a destination"),

    missionType: z.enum(missionTypes, {
      message: "Select a mission type",
    }),

    startDate: z.date({
      error: "Start date is required",
    }),

    endDate: z.date({
      error: "End date is required",
    }),

    description: z
      .string()
      .min(10, "Description must be at least 10 characters"),

    customers: z
      .array(z.enum(customers))
      .min(1, "Select at least one customer"),
  })
  .refine((data) => new Date(data.endDate) >= new Date(data.startDate), {
    message: "End date must be after start date",
    path: ["endDate"],
  });

export type LaunchFormData = z.infer<typeof launchSchema>;
