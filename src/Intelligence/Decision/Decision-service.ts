import {
  DecisionRequest,
  DecisionResult
} from "./decision-types";

import {
  DecisionEngine
} from "./decision-engine";

export class DecisionService {
  constructor(
    private readonly engine:
      DecisionEngine =
        new DecisionEngine()
  ) {}

  generateDecisions(
    request: DecisionRequest
  ): DecisionResult {
    return this.engine.decide(
      request
    );
  }
}
