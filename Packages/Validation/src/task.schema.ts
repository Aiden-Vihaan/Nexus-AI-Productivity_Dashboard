import { z } from "zod";

export const createTaskSchema = z.object({
  title: z
    .string()
    .trim()
    .min(1, "Task title is required")
    .max(200),

  description: z
    .string()
    .trim()
    .max(5000)
    .optional(),

  projectId: z
    .string()
    .optional(),

  goalId: z
    .string()
    .optional(),

  parentTaskId: z
    .string()
    .optional(),

  priority: z
    .enum(["LOW", "MEDIUM", "HIGH", "CRITICAL"])
    .default("MEDIUM"),

  type: z
    .enum([
      "ACTION",
      "DEEP_WORK",
      "QUICK_WIN",
      "MEETING",
      "REVIEW",
    ])
    .default("ACTION"),

  estimatedMinutes: z
    .number()
    .int()
    .positive()
    .max(1440)
    .optional(),

  deadline: z
    .coerce
    .date()
    .optional(),
});
