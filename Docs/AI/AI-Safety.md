# NEXUS — AI Safety and Control Model

## 1. Principle

The AI layer should assist the user without silently taking control of their productivity environment.

---

## 2. Read Operations

Read-only operations may execute automatically when appropriately authorized.

Examples:

- retrieve tasks,
- retrieve schedule,
- analyze workload.

---

## 3. Write Operations

Operations that modify user state require explicit confirmation by default.

Examples:

- creating tasks,
- changing deadlines,
- rescheduling work,
- deleting tasks.

---

## 4. Destructive Operations

Destructive actions require explicit confirmation.

Examples:

- deleting tasks,
- deleting projects,
- bulk modifications.

---

## 5. Uncertainty

The AI must distinguish between:

- known facts,
- derived metrics,
- recommendations,
- assumptions,
- unavailable information.

---

## 6. Validation

Tool requests must pass application-level validation before execution.

The AI model must never be treated as the authority for database integrity.

---

## 7. Privacy

Only relevant context should be passed to the AI model.

---

## 8. Failure

If the AI service is unavailable, core productivity functionality must remain operational.

---

## 9. Human Override

The user can reject AI recommendations and manually control their schedule.

---

## 10. Principle

> AI should increase user agency, not replace it.
