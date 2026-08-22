# NEXUS Recommendation Model

## Purpose

Recommendations are structured outputs produced by the Intelligence Layer.

---

# Recommendation Schema

Conceptually:

```json
{
  "id": "rec_123",
  "type": "TASK_RECOMMENDATION",
  "action": {
    "type": "START_TASK",
    "targetId": "task_456"
  },
  "confidence": 0.84,
  "reason": "Fits the available work window.",
  "evidence": [],
  "alternatives": [],
  "modelVersion": "orchestrator-1.0",
  "createdAt": "..."
}
