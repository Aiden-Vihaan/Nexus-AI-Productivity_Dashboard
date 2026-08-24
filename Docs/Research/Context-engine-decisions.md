# NEXUS Context Engine Decisions

## Decision 1 — Maintain Explicit Context State

NEXUS will maintain an explicit context object rather than reconstructing the user's state from raw events every time.

### Reason

Frequent intelligence queries require low-latency access to current state.

---

## Decision 2 — Update Context Through Events

Context mutations are driven by events.

### Reason

This maintains consistency with the real-time architecture introduced earlier.

---

## Decision 3 — Keep Long-Term History Separate

The current Context Engine stores only a bounded recent activity window.

### Reason

Current context and historical memory are different concepts.

---

## Decision 4 — Introduce Context Confidence

Every context state includes a confidence score.

### Reason

AI systems should not treat inferred state as absolute truth.

---

## Decision 5 — Version Context State

Every mutation increments the context version.

### Reason

Versioning creates a foundation for:

- State debugging
- Event replay
- Concurrency control
- Temporal reasoning

---

## Decision 6 — Separate Context From Prediction

The Context Engine answers:

```text
What is happening now?
