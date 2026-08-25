export type ActivityType =
  | "task"
  | "prediction"
  | "intervention"
  | "memory"
  | "achievement"
  | "system";

export interface ActivityItem {
  id: string;

  type: ActivityType;

  title: string;

  description: string;

  timestamp: string;

  importance:
    | "low"
    | "medium"
    | "high";
}

export function sortActivity(
  items: ActivityItem[]
): ActivityItem[] {
  return [...items].sort(
    (a, b) =>
      new Date(
        b.timestamp
      ).getTime() -
      new Date(
        a.timestamp
      ).getTime()
  );
}
