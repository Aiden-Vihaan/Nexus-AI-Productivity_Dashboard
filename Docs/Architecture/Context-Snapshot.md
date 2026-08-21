---

# 4. `docs/architecture/context-snapshot.md`

This becomes one of the most important documents for your future AI architecture.

```markdown
# NEXUS Context Snapshot

## Overview

A Context Snapshot is a structured representation of the user's relevant productivity state at a specific point in time.

It represents:

> What NEXUS currently knows that is relevant to making a productivity decision.

---

# Snapshot Structure

Conceptually:

```json
{
  "timestamp": "...",
  "user": {},
  "temporal": {},
  "goals": [],
  "projects": [],
  "tasks": [],
  "dependencies": [],
  "constraints": [],
  "activity": [],
  "derived": {}
}
