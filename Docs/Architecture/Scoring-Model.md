---

# 2. `docs/architecture/scoring-model.md`

```markdown
# NEXUS Scheduling Scoring Model

## Purpose

The scoring model determines the relative usefulness of eligible tasks.

The model is intentionally deterministic in the first version.

---

## Signals

The initial model contains five signals.

| Signal | Purpose |
|---|---|
| Priority | Measures task importance |
| Goal Alignment | Measures strategic relevance |
| Deadline Pressure | Measures temporal urgency |
| Effort Fit | Measures suitability for available time |
| Readiness | Measures execution readiness |

All signals are normalized to:

```text
0.0 → 1.0
