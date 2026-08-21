import { z } from "zod";

export const createProjectSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1)
    .max(150),

  description: z
    .string()
    .max(5000)
    .optional(),

  targetDate: z
    .coerce
    .date()
    .optional(),
});
