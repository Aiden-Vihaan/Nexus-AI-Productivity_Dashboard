import {
  Prediction
} from "./prediction-types";

const priorityWeight: Record<
  Prediction["priority"],
  number
> = {
  low: 1,
  medium: 2,
  high: 3,
  critical: 4
};

export function rankPredictions(
  predictions: Prediction[]
): Prediction[] {
  return [...predictions].sort(
    (a, b) => {
      const scoreA =
        a.probability *
          0.5 +
        a.confidence *
          0.3 +
        priorityWeight[
          a.priority
        ] *
          0.05;

      const scoreB =
        b.probability *
          0.5 +
        b.confidence *
          0.3 +
        priorityWeight[
          b.priority
        ] *
          0.05;

      return scoreB - scoreA;
    }
  );
}
