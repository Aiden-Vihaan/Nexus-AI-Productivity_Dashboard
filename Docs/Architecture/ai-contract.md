# NEXUS AI Context Contract

## Purpose

The AI Context Contract defines the structured interface between NEXUS and an AI reasoning system.

---

# Context Schema

Conceptually:

```json
{
  "schemaVersion": "1.0",
  "request": {
    "intent": {},
    "timestamp": "..."
  },
  "userContext": {},
  "tasks": [],
  "projects": [],
  "goals": [],
  "constraints": [],
  "availability": [],
  "behavior": [],
  "predictions": [],
  "candidateActions": [],
  "availableTools": []
}
