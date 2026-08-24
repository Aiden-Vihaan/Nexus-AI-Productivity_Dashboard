import {
  Prediction,
  UserContextSnapshot
} from "./prediction-types";

import {
  predictTaskCompletion,
  predictFocusLoss,
  predictBreakNeeded
} from "./prediction-rules";

import {
  rankPredictions
} from "./prediction-ranking";

export class PredictionEngine {
  predict(
    context: UserContextSnapshot
  ): Prediction[] {
    const predictions: Prediction[] = [];

    const taskCompletion =
      predictTaskCompletion(
        context
      );

    if (taskCompletion) {
      predictions.push(
        taskCompletion
      );
    }

    const focusLoss =
      predictFocusLoss(
        context
      );

    if (focusLoss) {
      predictions.push(
        focusLoss
      );
    }

    const breakNeeded =
      predictBreakNeeded(
        context
      );

    if (breakNeeded) {
      predictions.push(
        breakNeeded
      );
    }

    return rankPredictions(
      predictions
    );
  }
}
