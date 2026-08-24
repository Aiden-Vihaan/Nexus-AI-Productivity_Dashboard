import {
  Decision
} from "./decision-types";

const priorityWeight: Record<
  Decision["priority"],
  number
> = {
  low: 1,
  medium: 2,
  high: 3,
  critical: 4
};

export function rankDecisions(
  decisions: Decision[]
): Decision[] {
  return [...decisions].sort(
    (a, b) => {
      const scoreA =
        a.score * 0.65 +
        a.urgency * 0.2 +
        a.userImpact * 0.1 +
        priorityWeight[
          a.priority
        ] *
          0.05;

      const scoreB =
        b.score * 0.65 +
        b.urgency * 0.2 +
        b.userImpact * 0.1 +
        priorityWeight[
          b.priority
        ] *
          0.05;

      return scoreB - scoreA;
    }
  );
}
