# NEXUS — Task Detail Design Decisions

## Decision 01 — Tasks Are Contextual Work Objects

Tasks contain more than title and deadline information.

They include:

- context,
- effort,
- cognitive load,
- dependencies,
- historical performance,
- and derived intelligence.

---

## Decision 02 — Intelligence Is Separated From User Data

User-entered information and AI-derived information are represented separately.

This improves transparency and makes the system easier to debug.

---

## Decision 03 — Recommendations Are Explainable

AI recommendations expose the major factors influencing the recommendation.

---

## Decision 04 — AI Does Not Silently Override Users

Recommendations require user acceptance where an action materially changes the user's plan.

---

## Decision 05 — Task Creation Remains Lightweight

Advanced intelligence should be progressively introduced after the initial task is created.

Users should not need to complete a complex form to capture a simple task.

---

## Decision 06 — Historical Performance Becomes a First-Class Signal

Actual completion time can eventually improve future estimates and scheduling recommendations.

---

## Decision 07 — Cognitive Load Is Separate From Priority

A high-priority task is not necessarily cognitively demanding.

These dimensions should remain independently represented.
