import z from "zod";

export const missionSchema = z.object({
  abortDescription: z
    .string()
    .min(5, "Description must be at least 5 characters"),
});

export type MissionFormData = z.infer<typeof missionSchema>;
