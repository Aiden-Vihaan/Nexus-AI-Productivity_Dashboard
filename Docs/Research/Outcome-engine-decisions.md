# Outcome Engine Architecture Decisions

## Decision 1 — Separate Prediction Accuracy From Intervention Effectiveness

A correct prediction does not guarantee a useful intervention.

Therefore NEXUS tracks them independently.

```text
Prediction quality
        ≠
Intervention quality
