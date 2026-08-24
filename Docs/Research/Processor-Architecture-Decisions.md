# NEXUS Processor Architecture Decisions

## Decision 1 — Use Processor Contracts

Processors implement a common interface.

### Reason

A standard contract allows new intelligence capabilities to be added without changing the pipeline architecture.

---

## Decision 2 — Use Event-Based Communication

Processors communicate through events rather than direct dependencies.

### Reason

This reduces coupling and improves extensibility.

---

## Decision 3 — Use a Registry

A processor registry determines which processor supports an event.

### Reason

The pipeline should not contain hard-coded knowledge of every processor.

---

## Decision 4 — Emit Events Instead of Direct Calls

A task processor emits:

```text
PREDICTION_REQUESTED
