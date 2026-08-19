NEXUS — Information Architecture

Version: 0.1
Status: Product Architecture

---

1. Architecture Philosophy

NEXUS is organized around the user's cognitive workflow rather than conventional application categories.

The primary workflow is:

Understand → Decide → Plan → Execute → Learn

The information architecture therefore prioritizes:

1. current context,
2. decisions,
3. work execution,
4. productivity intelligence.

The architecture should minimize unnecessary navigation while maintaining access to deeper information.

---

2. Top-Level Architecture

NEXUS
│
├── Command Center
│
├── My Day
│
├── Work
│   ├── Tasks
│   ├── Projects
│   ├── Goals
│   └── Milestones
│
├── Time
│   ├── Calendar
│   └── Focus
│
├── Intelligence
│   ├── Overview
│   ├── Insights
│   ├── Patterns
│   └── Reviews
│
├── AI Copilot
│
└── Settings
    ├── Profile
    ├── Preferences
    ├── AI Controls
    ├── Privacy
    └── Accessibility

---

3. Command Center

The Command Center is the primary NEXUS environment.

Its purpose is not to display every available piece of information.

Its purpose is to answer:

«What is happening, what matters, and what should I do next?»

It contains:

- current work state,
- workload,
- capacity,
- important deadlines,
- project health,
- AI recommendation,
- active focus,
- emerging risks.

---

4. My Day

My Day represents the user's current working context.

It contains:

- today's plan,
- scheduled work,
- unscheduled tasks,
- deadlines,
- focus sessions,
- workload status,
- AI recommendations.

The page should support rapid replanning.

---

5. Work

The Work domain contains the structural representation of what the user is trying to accomplish.

Tasks

Atomic units of work.

Projects

Collections of related work.

Goals

Desired outcomes.

Milestones

Intermediate outcomes connecting projects and goals.

---

6. Time

The Time domain represents when work happens.

Calendar

External and internal time commitments.

Focus

Actual execution periods.

The separation between planned time and actual execution is important for behavioral analysis.

---

7. Intelligence

The Intelligence domain represents what NEXUS has learned.

Overview

High-level productivity state.

Insights

Specific actionable observations.

Patterns

Longer-term behavioral trends.

Reviews

Periodic reflections on productivity.

---

8. AI Copilot

AI Copilot provides natural-language interaction with the NEXUS system.

It should not be treated as the only AI interface.

AI capabilities should also appear contextually throughout the product.

Examples:

Task

"Break this down."

Project

"What's blocking this project?"

Calendar

"Find time for this."

Command Center

"What should I work on?"

Intelligence

"Why did my productivity drop?"

---

9. Settings

Settings should contain configuration rather than productivity information.

Profile

Account information.

Preferences

Planning and interface preferences.

AI Controls

AI assistance level and behavior.

Privacy

Data controls and information usage.

Accessibility

Display, motion, keyboard, and accessibility preferences.

---

10. Information Hierarchy

NEXUS follows three levels of information density.

Level 1 — Decision Layer

Visible immediately.

Examples:

- next action,
- deadline risk,
- workload status,
- current focus.

Level 2 — Context Layer

Available when the user needs more information.

Examples:

- task dependencies,
- project details,
- recommendation factors,
- schedule conflicts.

Level 3 — Analytical Layer

Available for deeper investigation.

Examples:

- behavioral trends,
- historical metrics,
- detailed activity,
- productivity patterns.

This hierarchy is designed to prevent information overload.

---

11. Core Entity Relationships

Goal
  │
  └── Project
       │
       └── Milestone
            │
            └── Task
                 │
                 ├── Subtask
                 ├── Dependency
                 └── Focus Session

Contextual relationships:

Task
 │
 ├── Deadline
 ├── Calendar availability
 ├── Project context
 ├── User preferences
 └── Historical behavior

These relationships will later inform the database architecture.

---

12. Architectural Principle

The information architecture should support a transition from:

What exists?

to:

What matters?

to:

What should I do?

to:

What did I learn?

This transition represents the core NEXUS experience.
