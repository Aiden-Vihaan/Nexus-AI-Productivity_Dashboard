import {
  Intervention
} from "./intervention-types";

export interface InterventionExecutionResult {
  success: boolean;

  status:
    | "delivered"
    | "failed";

  deliveredAt?: string;

  error?: string;
}

export interface InterventionExecutor {
  execute(
    intervention: Intervention
  ): Promise<InterventionExecutionResult>;
}

export class DefaultInterventionExecutor
  implements InterventionExecutor {
  async execute(
    intervention: Intervention
  ): Promise<InterventionExecutionResult> {
    if (
      intervention.type ===
      "none"
    ) {
      return {
        success: false,

        status:
          "failed",

        error:
          "Cannot execute a null intervention."
      };
    }

    return {
      success: true,

      status:
        "delivered",

      deliveredAt:
        new Date().toISOString()
    };
  }
}
