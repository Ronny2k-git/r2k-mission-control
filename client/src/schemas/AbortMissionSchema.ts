import z from "zod";

export const abortMissionSchema = z.object({
  abortDescription: z
    .string()
    .min(5, "Description must be at least 5 characters"),
});

export type AbortMissionFormData = z.infer<typeof abortMissionSchema>;
