# NEXUS Prediction Model

## Purpose

The Prediction Model defines a common structure for predictive outputs.

---

# Prediction Object

Conceptually:

```json
{
  "id": "prediction_123",
  "type": "COMPLETION_PROBABILITY",
  "entityId": "task_456",
  "value": 0.81,
  "confidence": 0.74,
  "horizon": "7d",
  "evidence": [],
  "modelVersion": "baseline-1.0",
  "generatedAt": "..."
}
