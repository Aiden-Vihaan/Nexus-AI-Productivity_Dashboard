# NEXUS Idempotency Architecture

## Problem

Distributed event systems may deliver the same event more than once.

Example:

```text
TASK_COMPLETED
      ↓
Consumer
      ↓
Processing
      ↓
Network Failure
      ↓
Event Delivered Again
```

Without idempotency, the same business action could be executed multiple times.

---

## NEXUS Strategy

Every event receives a unique:

```text
eventId
```

The event-processing layer records successfully processed event IDs.

Before processing:

```text
Has eventId already been processed?
```

If yes:

```text
Ignore duplicate
```

If no:

```text
Process
 ↓
Mark as processed
```

---

## Current Implementation

Day 30 introduces:

```text
IdempotencyStore
```

with:

```text
hasProcessed()
markProcessed()
```

The initial implementation is in-memory.

---

## Future Production Implementation

A production implementation may use a persistent store such as:

```text
PostgreSQL
Redis
DynamoDB
```

The final choice will depend on:

- Durability
- Latency
- Scale
- Operational complexity
- Existing NEXUS infrastructure

---

## Important Limitation

An in-memory idempotency store does not survive process restarts.

Therefore:

> The Day 30 implementation validates the architecture but is not yet the final production-grade persistence layer.

---

## Principle

At-least-once delivery requires idempotent business effects.

NEXUS therefore treats idempotency as a first-class infrastructure concern rather than an implementation detail hidden inside individual processors.
