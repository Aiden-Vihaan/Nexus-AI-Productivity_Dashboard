import {
  DashboardState
} from "./dashboard-types";

import {
  assembleDashboard,
  DashboardSignals
} from "./dashboard-assembler";

export class DashboardService {
  build(
    userId: string,
    signals: DashboardSignals
  ): DashboardState {
    return assembleDashboard(
      userId,
      signals
    );
  }

  refresh(
    current: DashboardState,
    signals: DashboardSignals
  ): DashboardState {
    return this.build(
      current.userId,
      signals
    );
  }
}
