import { z } from "zod";

export const createGoalSchema = z.object({
  title: z
    .string()
    .trim()
    .min(1)
    .max(200),

  description: z
    .string()
    .max(5000)
    .optional(),

  targetDate: z
    .coerce
    .date()
    .optional(),
});
