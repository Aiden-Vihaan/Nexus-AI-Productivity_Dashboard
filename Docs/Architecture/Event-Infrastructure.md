# NEXUS Event Infrastructure

## Purpose

Day 30 converts the real-time architecture defined on Day 29 into a functional event infrastructure layer.

The infrastructure provides the foundation required for future real-time intelligence processors.

---

## Architecture

```text
Event Factory
      ↓
Event Validation
      ↓
Event Bus
      ↓
Subscribers
      ↓
Processors
```

Idempotency is applied at the event-processing boundary.

```text
Incoming Event
      ↓
Validation
      ↓
Idempotency Check
      ↓
Processing
      ↓
Mark Processed
```

---

## Event Factory

The event factory provides a consistent mechanism for creating NEXUS events.

It automatically generates:

- Event ID
- Timestamp
- Trace ID

while accepting application-specific values such as:

- Event type
- Source
- Entity ID
- Payload
- Metadata
- Version

---

## Event Validation

Every event must satisfy the NEXUS event contract before entering the event bus.

Required fields include:

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

Invalid events should fail early rather than propagating through the intelligence pipeline.

---

## Event Bus

The initial implementation uses an in-memory event bus.

The implementation supports:

- Publishing
- Subscribing
- Multiple subscribers
- Unsubscription
- Subscriber inspection
- Event validation
- Idempotency integration

---

## Infrastructure Independence

The event bus is defined through an interface.

This allows the core intelligence layer to remain independent from a specific infrastructure provider.

Potential future adapters include:

```text
Kafka
Redpanda
NATS
Redis Streams
```

The in-memory implementation is intended for:

- Local development
- Unit testing
- Architecture validation
- Early integration work

It is not considered the final distributed production infrastructure.

---

## Event Delivery

The current architecture is compatible with the at-least-once delivery model established on Day 29.

Duplicate event delivery is handled through idempotency.

---

## Design Principle

The intelligence layer should depend on stable contracts rather than directly depending on infrastructure technology.

This allows NEXUS to evolve its infrastructure without rewriting the intelligence domain.
