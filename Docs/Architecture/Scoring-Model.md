## Purpose

The Scheduling Scoring Model ranks executable tasks according to multiple contextual signals.

The model is deterministic in the initial NEXUS implementation.

---

## Signals

The initial scheduler uses five signals:

```text
P = Priority
G = Goal Alignment
D = Deadline Pressure
E = Effort Fit
R = Readiness
