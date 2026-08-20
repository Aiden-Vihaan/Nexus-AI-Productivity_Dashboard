# NEXUS — Task System Design Specification

**Screen Family:** TASK  
**Version:** 0.1  
**Status:** High-Fidelity Design Specification

---

# 1. Purpose

The NEXUS Task System is the primary interface for creating, understanding, planning, executing, and reviewing units of work.

Unlike conventional task managers, NEXUS treats a task as a contextual work object.

A task can contain:

- objective,
- project relationship,
- goal relationship,
- time requirements,
- deadline,
- priority,
- cognitive demand,
- energy requirement,
- dependencies,
- historical performance,
- and system-generated intelligence.

---

# 2. Design Objective

The Task System should answer five questions:

1. What needs to be done?
2. Why does it matter?
3. When should it happen?
4. What could prevent it from being completed?
5. What does NEXUS recommend?

---

# 3. Task Lifecycle

The primary lifecycle is:

```text
BACKLOG
   ↓
PLANNED
   ↓
IN_PROGRESS
   ↓
COMPLETED
