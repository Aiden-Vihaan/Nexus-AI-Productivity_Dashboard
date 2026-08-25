import {
  DashboardState
} from "./dashboard-types";

export const NEXUS_DEMO_STATE:
  DashboardState = {
    userId:
      "demo-user",

    generatedAt:
      new Date().toISOString(),

    productivityScore:
      87,

    focusScore:
      92,

    energyScore:
      76,

    cognitiveLoad:
      34,

    tasks: [
      {
        id:
          "task-001",

        title:
          "Complete system architecture",

        status:
          "in-progress",

        priority:
          "high",

        estimatedMinutes:
          90,

        energyRequired:
          "high"
      },

      {
        id:
          "task-002",

        title:
          "Review research notes",

        status:
          "todo",

        priority:
          "medium",

        estimatedMinutes:
          30,

        energyRequired:
          "medium"
      },

      {
        id:
          "task-003",

        title:
          "Update project documentation",

        status:
          "completed",

        priority:
          "medium",

        estimatedMinutes:
          45,

        energyRequired:
          "low"
      }
    ],

    predictions: [
      {
        id:
          "prediction-001",

        title:
          "High-focus window approaching",

        probability:
          0.88,

        confidence:
          0.91,

        horizon:
          "short",

        explanation:
          "Recent activity indicates a strong concentration pattern.",

        recommendedAction:
          "Reserve the next 45 minutes for deep work."
      },

      {
        id:
          "prediction-002",

        title:
          "Cognitive load may increase",

        probability:
          0.63,

        confidence:
          0.76,

        horizon:
          "medium",

        explanation:
          "Multiple high-effort tasks remain unresolved.",

        recommendedAction:
          "Consider completing one task before starting another."
      }
    ],

    interventions: [
      {
        id:
          "intervention-001",

        title:
          "Enter focus mode",

        type:
          "focus",

        priority:
          "high",

        confidence:
          0.89,

        reason:
          "Your current focus state is unusually strong."
      }
    ],

    memories: [
      {
        id:
          "memory-001",

        category:
          "pattern",

        summary:
          "Long uninterrupted sessions tend to produce your strongest work.",

        confidence:
          0.87
      },

      {
        id:
          "memory-002",

        category:
          "preference",

        summary:
          "You prefer completing complex tasks before administrative work.",

        confidence:
          0.82
      }
    ],

    insights: [
      {
        id:
          "insight-001",

        title:
          "Your focus window is unusually strong",

        description:
          "Current focus signals are above your recent baseline. This may be a good moment for deep work.",

        type:
          "pattern",

        confidence:
          0.91,

        createdAt:
          new Date().toISOString()
      },

      {
        id:
          "insight-002",

        title:
          "Task switching may increase cognitive load",

        description:
          "Two high-effort tasks remain active. Completing the current task may reduce context switching.",

        type:
          "recommendation",

        confidence:
          0.84,

        createdAt:
          new Date().toISOString()
      }
    ]
  };
