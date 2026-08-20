# NEXUS — Motion Design Specification

**Version:** 0.1  
**Status:** Design System  
**Scope:** Interaction, transition, feedback, and system-state motion

---

## 1. Purpose

Motion in NEXUS exists to communicate:

- hierarchy,
- causality,
- system state,
- interaction feedback,
- spatial relationships,
- and changes in work context.

Motion should never exist purely as decoration.

The interface should feel responsive, precise, and intelligent rather than flashy.

---

## 2. Motion Principles

### 2.1 Purposeful

Every animation should communicate a meaningful change.

Examples:

- a task moving from Planned → In Progress,
- an AI recommendation becoming available,
- a panel expanding,
- a focus session beginning.

---

### 2.2 Fast but Perceptible

Most interface interactions should feel immediate.

Target durations:

| Interaction | Duration |
|---|---:|
| Hover feedback | 100–150ms |
| Button feedback | 120–180ms |
| Small state change | 150–220ms |
| Panel expansion | 200–300ms |
| Page transition | 250–350ms |
| Major context transition | 300–450ms |

These values are guidelines rather than rigid requirements.

---

### 2.3 Spatial Continuity

When an element changes position or state, its movement should preserve the user's understanding of where it came from.

For example:

```text
Task List
    ↓
Task Detail
