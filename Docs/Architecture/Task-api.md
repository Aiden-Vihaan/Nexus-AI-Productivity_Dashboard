# NEXUS Task API

## GET /api/tasks

Returns tasks belonging to the authenticated user.

---

## POST /api/tasks

Creates a task.

### Request

```json
{
  "title": "Example task",
  "priority": "HIGH",
  "type": "DEEP_WORK"
}
