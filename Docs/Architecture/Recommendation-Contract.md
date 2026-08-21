## Purpose

The Recommendation Contract defines the structured output produced by the scheduling engine.

The scheduler must return structured data rather than directly generating natural-language recommendations.

This separation allows the same recommendation data to be consumed by:

- Web dashboard
- Mobile application
- Notification system
- AI Context Engine
- Analytics
- Future integrations

---

## Recommendation Object

Conceptual structure:

```json
{
  "taskId": "task_123",
  "rank": 1,
  "score": 0.87,
  "status": "RECOMMENDED",
  "signals": {
    "priority": 0.8,
    "goalAlignment": 0.9,
    "deadlinePressure": 0.85,
    "effortFit": 0.7
  },
  "reasons": [
    "Deadline approaching",
    "Contributes to an active goal",
    "Task is unblocked",
    "Fits the current work window"
  ]
}
