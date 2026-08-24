# Prediction Engine Architecture Decisions

## Decision 1 — Predictions Are Probabilistic

Predictions should not be represented as facts.

Every prediction contains:

- Probability
- Confidence
- Evidence
- Time horizon

---

## Decision 2 — Start With Deterministic Rules

The initial prediction engine uses deterministic rules.

### Reason

A deterministic baseline provides:

- Explainability
- Reproducibility
- Testability
- Debuggability

Machine-learning models can be evaluated against this baseline later.

---

## Decision 3 — Context Is the Input

The prediction engine should consume context snapshots instead of raw events.

### Reason

The Context Engine is responsible for transforming events into current state.

This keeps the prediction layer independent from event-processing implementation details.

---

## Decision 4 — Evidence Is First-Class Data

Predictions contain evidence rather than only a score.

### Reason

This enables explainable intelligence.

---

## Decision 5 — Prediction and Intervention Are Separate

A prediction should not directly trigger a user interruption.

### Reason

A prediction may be statistically interesting without requiring an action.

A future Decision Engine will determine whether intervention is appropriate.

---

## Decision 6 — Predictions Have Expiration

Predictions have an expiration timestamp.

### Reason

A prediction about the user's state becomes less useful as context changes.

---

## Decision 7 — Future Models Should Be Pluggable

The PredictionEngine should eventually support multiple prediction strategies.

Potential implementations:

- Rule-based predictor
- Statistical predictor
- Time-series predictor
- Behavioral model
- ML model
- Ensemble predictor

---

## Long-Term Architecture

```text
Context
   ↓
Multiple Predictors
   ↓
Prediction Ensemble
   ↓
Confidence Calibration
   ↓
Ranked Predictions
