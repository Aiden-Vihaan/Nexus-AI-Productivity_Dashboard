# NEXUS Behavioral Event Schema

## Purpose

Behavioral events provide the raw data layer for personalization.

---

# Event Structure

```json
{
  "eventId": "event_123",
  "userId": "user_123",
  "sessionId": "session_456",
  "type": "TASK_COMPLETED",
  "timestamp": "2026-08-22T10:30:00Z",
  "entityId": "task_789",
  "metadata": {},
  "schemaVersion": "1.0"
}
