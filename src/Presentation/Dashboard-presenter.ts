import {
  DashboardState
} from "../dashboard/dashboard-types";

import {
  createCommandCenterModel
} from "../ui/command-center";

import {
  createIntelligencePanelModel
} from "../ui/intelligence-panel";

export interface DashboardPresentation {
  commandCenter: ReturnType<
    typeof createCommandCenterModel
  >;

  intelligence: ReturnType<
    typeof createIntelligencePanelModel
  >;
}

export function presentDashboard(
  state: DashboardState
): DashboardPresentation {
  return {
    commandCenter:
      createCommandCenterModel(
        state
      ),

    intelligence:
      createIntelligencePanelModel(
        state
      )
  };
}
