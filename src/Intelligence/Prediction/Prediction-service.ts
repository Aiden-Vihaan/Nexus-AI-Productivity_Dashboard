import {
  Prediction,
  PredictionRequest
} from "./prediction-types";

import {
  PredictionEngine
} from "./prediction-engine";

export class PredictionService {
  constructor(
    private readonly engine:
      PredictionEngine =
        new PredictionEngine()
  ) {}

  generatePredictions(
    request: PredictionRequest
  ): Prediction[] {
    return this.engine.predict(
      request.context
    );
  }
}
