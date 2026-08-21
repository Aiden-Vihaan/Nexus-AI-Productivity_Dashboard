## Purpose

The Recommendation Contract defines the structured output produced by the scheduling engine.

The contract separates recommendation logic from presentation and AI-generated communication.

---

## Recommendation Object

```json
{
  "taskId": "task_123",
  "rank": 1,
  "score": 0.87,
  "status": "RECOMMENDED",
  "signals": {
    "priority": 0.80,
    "goalAlignment": 0.90,
    "deadlinePressure": 0.85,
    "effortFit": 0.70,
    "readiness": 1.00
  },
  "reasons": [
    "High strategic relevance",
    "Deadline approaching",
    "Task is currently unblocked",
    "Estimated effort fits the available window"
  ]
}
