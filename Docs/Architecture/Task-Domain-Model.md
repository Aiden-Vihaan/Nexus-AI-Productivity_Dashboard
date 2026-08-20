# NEXUS — Task Domain Model

## Task

A Task represents a discrete unit of work that contributes to a Project, Goal, or Area.

---

## Core Attributes

```text
Task
├── id
├── title
├── description
├── status
├── type
├── projectId
├── goalId
├── priority
├── impact
├── urgency
├── estimatedMinutes
├── actualMinutes
├── deadline
├── preferredStart
├── cognitiveLoad
├── energyRequirement
├── dependencies
├── tags
├── createdAt
├── updatedAt
└── completedAt
