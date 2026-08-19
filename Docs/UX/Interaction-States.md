NEXUS — Interaction States

1. State Philosophy

A production-ready interface must define not only its ideal state but also what happens before, during, and after every meaningful action.

---

2. Task States

Draft
 ↓
Planned
 ↓
In Progress
 ↓
Completed

Alternative states:

Blocked
Deferred
Cancelled
Archived

---

3. AI Recommendation States

Generated
 ↓
Presented
 ↓
Viewed
 ↓
Accepted / Modified / Rejected
 ↓
Executed
 ↓
Observed

---

4. Schedule States

Available
 ↓
Planned
 ↓
Active
 ↓
Completed

Potential exception:

Planned
 ↓
Conflict
 ↓
Replanned

---

5. Project Health States

Healthy
Attention
At Risk
Critical
Completed
Archived

Status should never depend solely on color.

---

6. AI Processing

When the AI is processing:

The interface should communicate:

«NEXUS is analyzing your current work context…»

Avoid fake human-like typing animations when they don't communicate useful progress.

---

7. Failure States

Example:

«NEXUS couldn't generate a schedule.»

Possible reasons:

- insufficient availability,
- conflicting commitments,
- missing task duration,
- unavailable calendar integration.

Action:

"Review Planning Constraints"

---

8. Empty States

Empty states should provide direction.

Example:

«No active projects yet.»

«Create a project to start building your work context.»

Action:

"Create Project"

---

9. Destructive Actions

Actions such as deleting a project should require appropriate confirmation.

The confirmation should communicate the consequence clearly.

---

10. Undo

Where possible, reversible actions should support immediate undo.

Example:

«Task moved to tomorrow.»

"Undo"

This is preferable to unnecessary confirmation dialogs for low-risk actions.
