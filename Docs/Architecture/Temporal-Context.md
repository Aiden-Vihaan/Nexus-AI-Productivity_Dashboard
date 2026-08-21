# NEXUS Temporal Context

## Overview

Temporal Context represents the relationship between tasks and time.

Traditional task managers primarily associate tasks with static timestamps such as:

- Created at
- Due at
- Completed at

NEXUS extends this concept by representing the user's available time as an active scheduling context.

The system should understand not only when a task is due, but whether the task can realistically be performed within the user's current or upcoming time windows.

---

# Temporal Context Model

```text
Current Time
     +
Available Windows
     +
Task Duration
     +
Deadline
     +
Calendar Events
     ↓
Temporal Context
     ↓
Scheduling Engine
