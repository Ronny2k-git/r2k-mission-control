import z from "zod";

export const upcomingSchema = z.object({
  abortDescription: z
    .string()
    .min(5, "Description must be at least 5 characters"),
});

export type UpcomingFormData = z.infer<typeof upcomingSchema>;
