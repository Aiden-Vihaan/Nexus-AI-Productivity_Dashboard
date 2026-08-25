# Learning Engine Architecture Decisions

## Decision 1 — Do Not Learn From Single Events

A single observation may be noisy.

Therefore learning requires accumulated evidence.

---

## Decision 2 — Separate Evidence From Adaptation

Evidence describes what happened.

Adaptation describes what the system proposes to change.

These must remain separate.

```text
Evidence
   ≠
Adaptation
