# Intervention Engine Architecture Decisions

## Decision 1 — Separate Decision From Execution

A decision should not directly manipulate the user interface.

### Reason

This separation allows:

- Platform independence
- Easier testing
- Better observability
- Safer experimentation
- Multiple client implementations

---

## Decision 2 — Introduce Intervention Cost

Every intervention receives an estimated interruption cost.

### Reason

User attention is a scarce resource.

A system that optimizes only for predicted productivity gains can become excessively intrusive.

---

## Decision 3 — Introduce Intervention Budgets

NEXUS limits intervention frequency.

### Reason

Repeated interventions can create:

- Notification fatigue
- Cognitive overload
- Reduced trust
- Alert blindness

---

## Decision 4 — Prefer Silent Actions

When possible, the system should improve the environment without requiring user attention.

### Reason

The ideal AI assistant does not need to announce every intelligent action.

---

## Decision 5 — Use an Executor Interface

The Intervention Executor is represented by an interface.

### Reason

The intelligence layer should remain independent of:

- React
- Browser APIs
- Desktop APIs
- Mobile APIs
- Notification providers

---

## Decision 6 — Preserve User Agency

Interventions should be dismissible and eventually configurable.

### Reason

The AI operates with incomplete information.

The user remains the final authority over their workflow.

---

## Decision 7 — Prepare for Outcome Learning

Every intervention receives a lifecycle.

```text
Created
 ↓
Approved
 ↓
Executed
 ↓
Delivered
 ↓
Outcome
