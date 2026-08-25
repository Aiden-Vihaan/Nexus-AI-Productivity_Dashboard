import {
  DashboardInsight
} from "../dashboard/dashboard-types";

import {
  createInsightCard
} from "../intelligence/insight-card";

export function presentInsight(
  insight: DashboardInsight
) {
  return createInsightCard(
    insight
  );
}
