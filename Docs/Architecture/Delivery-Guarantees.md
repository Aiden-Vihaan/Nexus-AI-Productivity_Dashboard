# NEXUS Event Delivery Guarantees

## Delivery Model

NEXUS initially targets at-least-once event delivery.

This means an event may be delivered more than once, but the system should avoid losing accepted events.

---

# Why At-Least-Once?

At-least-once delivery provides a practical reliability model for event-driven systems.

Duplicate delivery is handled through idempotent consumers.

---

# Guarantees

NEXUS should provide:

- No intentional event loss
- Idempotent processing
- Ordered processing where required
- Retry support
- Dead Letter Queue handling
- Trace correlation

---

# Duplicate Event

Example:

```text
evt_123
evt_123
```

The processor should detect that the event has already been processed.

---

# Idempotency Key

An event may use:

```text
eventId
```

as its idempotency key.

---

# Retry

Transient failures should use bounded retry behavior.

Conceptual strategy:

```text
Attempt 1
   ↓
Failure
   ↓
Backoff
   ↓
Attempt 2
   ↓
Failure
   ↓
Backoff
   ↓
Attempt 3
   ↓
Failure
   ↓
Dead Letter Queue
```

---

# Dead Letter Queue

Events that cannot be processed successfully after configured retries should be isolated for investigation.

---

# Poison Events

An event that repeatedly causes processing failure is considered a poison event.

The system should prevent a poison event from blocking the entire stream.

---

# Important Limitation

At-least-once delivery does not automatically guarantee exactly-once business effects.

Correctness therefore depends on idempotent state transitions.

---

# Principle

NEXUS prioritizes reliable processing while explicitly designing for duplicate delivery.
