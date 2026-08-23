# NEXUS Real-Time Pipeline Orchestration

## Purpose

The Pipeline Orchestrator coordinates the real-time intelligence pipeline.

---

# Pipeline

```text
1. Event Ingestion
        ↓
2. Context Processing
        ↓
3. Prediction Processing
        ↓
4. Personalization Processing
        ↓
5. Decision Processing
        ↓
6. Output Delivery
```

---

# Responsibilities

The orchestrator is responsible for:

- Starting processors
- Stopping processors
- Monitoring processor health
- Coordinating dependencies
- Handling backpressure
- Managing retries
- Recovering from failures
- Maintaining processing order where required

---

# Event Lifecycle

```text
Incoming Event
      ↓
Validation
      ↓
Routing
      ↓
Processing
      ↓
State Update
      ↓
Derived Event
      ↓
Next Processor
```

---

# Parallel Processing

Independent processing paths may run concurrently.

Example:

```text
TASK_COMPLETED
      │
      ├───────────────┐
      ▼               ▼
Behavior Update   Analytics Event
```

This reduces unnecessary latency.

---

# Sequential Processing

Some intelligence paths require ordering.

Example:

```text
Context Update
      ↓
Prediction Update
      ↓
Decision Update
```

Prediction should not use stale context when the context update is a required dependency.

---

# Recovery

When a processor fails:

```text
Processor Failure
       ↓
Retry
       ↓
Still Failing?
   /        \
 Yes        No
 ↓           ↓
DLQ        Continue
```

---

# Pipeline Health

The orchestrator should monitor:

- Consumer lag
- Processing latency
- Error rate
- Retry rate
- Dead-letter volume
- Throughput
- Processor health

---

# Principle

The orchestrator coordinates real-time intelligence without embedding business logic that belongs inside individual processors.
