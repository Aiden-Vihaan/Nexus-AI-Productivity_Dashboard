# NEXUS Event Streaming Architecture

## Purpose

Event streaming provides the communication layer between real-time NEXUS components.

Instead of tightly coupling every intelligence component directly to every other component, NEXUS communicates through structured events.

---

# Event Flow

```text
Producer
   │
   ▼
Event Bus / Topic
   │
   ├───────────────┐
   ▼               ▼
Consumer A      Consumer B
   │               │
   ▼               ▼
Processor       Processor
```

---

# Event Properties

NEXUS events should be:

- Immutable
- Identifiable
- Timestamped
- Versioned
- Ordered where required
- Traceable
- Idempotently processable

---

# Event Structure

A NEXUS event should contain:

```text
eventId
eventType
eventVersion
timestamp
source
traceId
entityId
payload
metadata
```

---

# Example

```json
{
  "eventId": "evt_123",
  "eventType": "TASK_COMPLETED",
  "eventVersion": 1,
  "timestamp": "2026-08-23T10:30:00Z",
  "source": "task-service",
  "traceId": "trace_456",
  "entityId": "task_789",
  "payload": {
    "taskId": "task_789"
  },
  "metadata": {}
}
```

---

# Event Categories

## Context Events

```text
CONTEXT_UPDATED
SESSION_STARTED
SESSION_ENDED
FOCUS_CHANGED
```

## Task Events

```text
TASK_CREATED
TASK_UPDATED
TASK_STARTED
TASK_COMPLETED
TASK_DEFERRED
TASK_ABANDONED
```

## User Events

```text
USER_STATE_CHANGED
PREFERENCE_CHANGED
PREFERENCE_RESET
```

## Intelligence Events

```text
PREDICTION_REQUESTED
PREDICTION_UPDATED
RECOMMENDATION_GENERATED
DECISION_CREATED
DECISION_UPDATED
```

---

# Topic Design

Events should be logically separated into topics or streams.

Example:

```text
nexus.context
nexus.tasks
nexus.user
nexus.predictions
nexus.decisions
nexus.evaluations
```

The final production infrastructure may use Kafka, Redpanda, NATS, Redis Streams, or another appropriate event platform.

The architecture should remain provider-independent.

---

# Ordering

Ordering should be preserved when event order affects correctness.

Example:

```text
TASK_CREATED
      ↓
TASK_STARTED
      ↓
TASK_COMPLETED
```

A completion event arriving before creation should be handled as an invalid or out-of-order event rather than silently corrupting state.

---

# Idempotency

Consumers must safely process duplicate events.

Example:

```text
TASK_COMPLETED
TASK_COMPLETED
```

should not cause the task to be completed twice or produce duplicate downstream actions.

---

# Dead Letter Handling

Events that repeatedly fail processing should be moved to a Dead Letter Queue.

```text
Event
  ↓
Processor
  ↓
Failure
  ↓
Retry
  ↓
Failure
  ↓
Dead Letter Queue
```

---

# Principle

The event layer provides reliable communication between NEXUS intelligence components without forcing them into direct dependencies.
