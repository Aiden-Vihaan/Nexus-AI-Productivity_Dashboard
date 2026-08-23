# NEXUS Event Infrastructure Decisions

## Decision

NEXUS will initially expose the event system through provider-independent interfaces.

---

## Why Not Immediately Use Kafka?

Kafka is a powerful event streaming platform, but introducing a distributed broker before the application contracts are stable would add infrastructure complexity prematurely.

The current objective is to validate:

- Event contracts
- Event routing
- Consumer behavior
- Idempotency
- Processing semantics
- Testing strategy

---

## Current Architecture

```text
NEXUS Intelligence
        │
        ▼
   EventBus Interface
        │
        ▼
In-Memory Implementation
```

---

## Future Architecture

The infrastructure can evolve toward:

```text
NEXUS Intelligence
        │
        ▼
   EventBus Interface
        │
        ▼
Production Adapter
        │
        ▼
Kafka / Redpanda / NATS / Redis Streams
```

---

## Evaluation Criteria

A production event infrastructure should eventually be evaluated using:

### Throughput

How many events can the system process per second?

### Latency

How quickly can an event reach its consumer?

### Durability

Can accepted events survive infrastructure failures?

### Ordering

Can ordering guarantees be maintained where required?

### Replay

Can historical events be replayed safely?

### Scaling

Can consumers scale horizontally?

### Operational Complexity

How much infrastructure does the solution require?

### Cost

What is the infrastructure cost at the expected workload?

---

## Current Position

No production broker is being selected solely because it is popular.

The final infrastructure decision should be based on measured NEXUS requirements.

---

## Engineering Principle

Choose infrastructure after defining and measuring the workload rather than allowing infrastructure technology to dictate the architecture.
