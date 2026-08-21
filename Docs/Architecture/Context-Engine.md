# NEXUS Context Engine

## Overview

The Context Engine is the layer responsible for assembling structured productivity context from multiple domain systems.

NEXUS does not treat tasks as isolated objects.

A meaningful productivity decision may depend on:

- The task itself
- Its project
- Its associated goal
- Dependencies
- Constraints
- Deadline
- Available time
- Current workload
- Recent activity
- Project health

The Context Engine combines these signals into a unified representation.

---

# Architectural Position

```text
                         NEXUS
                           │
             ┌─────────────┼─────────────┐
             ▼             ▼             ▼
           Tasks        Projects        Goals
             │             │             │
             └─────────────┼─────────────┘
                           ▼
                    Dependencies
                           │
                           ▼
                      Constraints
                           │
                           ▼
                   Temporal Context
                           │
                           ▼
                    Activity History
                           │
                           ▼
                  ┌─────────────────┐
                  │ Context Engine  │
                  └─────────────────┘
                           │
                           ▼
                   Context Snapshot
                           │
              ┌────────────┴────────────┐
              ▼                         ▼
        Scheduling Engine          Future AI Layer
