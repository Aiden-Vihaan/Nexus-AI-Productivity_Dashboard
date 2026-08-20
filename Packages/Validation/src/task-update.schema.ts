import { z } from "zod";

export const updateTaskSchema = z.object({
  title: z.string().trim().min(1).max(200).optional(),

  description: z.string().max(5000).optional(),

  priority: z
    .enum(["LOW", "MEDIUM", "HIGH", "CRITICAL"])
    .optional(),

  type: z
    .enum([
      "ACTION",
      "DEEP_WORK",
      "QUICK_WIN",
      "MEETING",
      "REVIEW",
    ])
    .optional(),

  estimatedMinutes: z
    .number()
    .int()
    .positive()
    .max(1440)
    .optional(),

  deadline: z.coerce.date().optional(),

  status: z
    .enum([
      "TODO",
      "IN_PROGRESS",
      "COMPLETED",
      "CANCELLED",
    ])
    .optional(),
});
