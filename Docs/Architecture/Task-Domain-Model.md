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

TimeWindow
├── start
├── end
├── duration
├── availability
├── context
└── suitability

ScheduledTask
├── taskId
├── start
├── end
├── status
├── locked
└── recommendationId

Recommendation
├── taskId
├── proposedStart
├── proposedEnd
├── confidence
├── factors
├── alternatives
└── generatedAt
