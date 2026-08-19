NEXUS — Screen Specifications

Version: 0.1
Status: UX Architecture
Design Phase: Pre-Visual Design

---

1. Screen Specification Framework

Every major NEXUS screen is defined through:

- Purpose
- Primary user goal
- Information hierarchy
- Primary action
- Secondary actions
- AI behavior
- System states
- Interaction requirements
- Accessibility requirements
- Responsive behavior

The goal is to establish functional requirements before visual styling.

---

2. ONBOARDING

Screen ID

"ONB-01 → ONB-06"

Purpose

Introduce NEXUS and establish enough contextual information for the system to provide useful recommendations.

Primary User Goal

Configure the initial productivity context without creating unnecessary setup friction.

---

Step 1 — Welcome

Primary Content

NEXUS

«Work with intelligence.»

Supporting statement:

«An adaptive productivity system that helps you understand what matters, plan realistically, and focus on meaningful work.»

Primary Action

"Get Started"

Secondary Action

"Sign In"

---

Step 2 — Work Style

The system asks how the user generally approaches work.

Possible choices:

- Structured planner
- Flexible planner
- Reactive
- Deep-work oriented
- Mixed

This should not permanently classify the user.

It establishes an initial preference model.

---

Step 3 — Goals

The user identifies current objectives.

Example:

What are you working toward?

+ Add goal

Launch product
Complete certification
Build portfolio
Research project
Personal project

Users can create custom goals.

---

Step 4 — Availability

The user defines general working availability.

Example:

Typical availability

Mon   09:00 — 18:00
Tue   09:00 — 18:00
Wed   09:00 — 18:00
...

The system should allow exceptions later.

---

Step 5 — AI Preferences

Users choose an initial assistance level.

Minimal

NEXUS provides suggestions but rarely interrupts.

Balanced

NEXUS proactively recommends actions and highlights risks.

Proactive

NEXUS actively identifies planning problems and suggests interventions.

The user can change this later.

---

Step 6 — Ready

The system summarizes the configuration.

Example:

«Your workspace is ready.»

«NEXUS understands your current goals, availability, and preferred level of assistance.»

Primary action:

"Enter Command Center"

---

3. COMMAND CENTER

Screen ID

"CC-01"

Purpose

The Command Center is the primary decision interface of NEXUS.

It should answer three questions immediately:

1. What is happening?
2. What matters?
3. What should I do next?

---

Information Hierarchy

Level 1 — System State

Example:

«Your work system is stable.»

Supporting indicators:

6h 20m available
5h 10m planned
1 deadline at risk

---

Level 2 — Next Best Action

This is the visual focal point.

Example:

«Finalize API architecture»

75 min
High impact
Project: Authentication

Explanation

«Recommended because this task blocks three downstream tasks and fits your current focus window.»

Primary Action

"Start Focus"

Secondary Actions

- Reschedule
- View task
- Dismiss
- Ask why

---

Level 3 — Work System

Show compact summaries of:

- project health,
- upcoming deadlines,
- workload,
- unfinished work.

This section should not overwhelm the user.

---

Level 4 — Intelligence

Surface only meaningful insights.

Example:

«Planning drift detected»

«Complex tasks have taken approximately 20% longer than estimated this week.»

Action:

"View Insight"

---

Command Center Primary Principle

The page should feel like:

«an intelligent briefing»

rather than:

«a database dashboard.»

---

4. MY DAY

Screen ID

"DAY-01"

Purpose

Represent today's working plan.

---

Header

Example:

«Wednesday, August 19»

«5h 10m planned · 6h 20m available»

---

Main Sections

Now

What the user should currently be working on.

Next

The upcoming planned action.

Later

Remaining scheduled work.

Unscheduled

Important tasks that have not yet been allocated.

---

Replanning

A prominent action:

"Replan Day"

When activated, NEXUS analyzes:

- remaining capacity,
- unfinished work,
- deadlines,
- task priorities,
- dependencies.

It proposes changes rather than silently changing the schedule.

---

5. TASK DETAIL

Screen ID

"TASK-02"

Purpose

Allow the user to understand and modify a task while exposing relevant context.

---

Information Hierarchy

Primary

Task title

Secondary

- status
- priority
- estimated duration
- deadline
- project

Context

- goal
- dependencies
- related tasks
- scheduled sessions

Intelligence

AI-generated recommendations.

---

Example

Finalize authentication architecture

HIGH PRIORITY
75 min estimated

Due Friday
Project: Authentication

────────────────

AI CONTEXT

This task currently blocks:

• API implementation
• Security review
• Integration testing

Recommendation:
Complete before Thursday.

---

Actions

Primary:

"Start Focus"

Secondary:

- Edit
- Schedule
- Change priority
- Add dependency
- Ask NEXUS

---

6. PROJECT OVERVIEW

Screen ID

"PROJ-02"

Purpose

Provide a contextual overview of project health.

---

Header

Authentication Platform

68% progress
12 tasks remaining
2 milestones
1 risk

---

Primary Sections

Project Status

Overall health.

Milestones

Progress toward intermediate outcomes.

Active Work

Current tasks.

Risks

Potential problems detected by NEXUS.

Timeline

High-level schedule.

---

AI Layer

Example:

«Project risk detected»

«Two critical tasks depend on an incomplete architecture decision.»

Action:

"Review Risk"

---

7. CALENDAR

Screen ID

"CAL-01"

Purpose

Represent time as a resource rather than merely a list of appointments.

---

Primary Visual Layers

Fixed commitments

Meetings and external events.

Planned work

Tasks allocated to time.

Focus sessions

Actual or scheduled deep-work periods.

Capacity

Available working time.

---

Important Interaction

The user should be able to manipulate planned work directly.

For example:

Drag task
     ↓
New time
     ↓
Capacity recalculated
     ↓
Conflicts highlighted

---

AI Action

"Optimize Day"

The system proposes a revised schedule.

It should not silently overwrite the user's calendar.

---

8. FOCUS MODE

Screen ID

"FOC-02"

This screen is intentionally very different from the Command Center.

The Command Center is information-rich.

Focus Mode is information-light.

---

Primary Content

FINALIZE AUTHENTICATION ARCHITECTURE

Authentication Platform

01:14:32

---

Controls

- Pause
- Finish
- Add note
- Exit

---

Optional Context

A very subtle progress indicator may show:

1 of 3 planned focus sessions

---

Principle

When the user is executing work, NEXUS should disappear into the background.

The product should transition:

High information
       ↓
Medium information
       ↓
Minimal information

This is a deliberate cognitive design decision.

---

9. INTELLIGENCE

Screen ID

"INT-01"

Purpose

Help users understand how their work behavior is evolving.

This is not a vanity metrics page.

---

Primary Sections

Current State

Example:

Focus consistency     Strong
Planning accuracy     Improving
Task switching        Elevated
Workload               Moderate

---

Meaningful Insights

Example:

«Your strongest focus sessions occur between 9:00–11:30 AM.»

Supporting evidence:

23 sessions
Average completion rate: 87%

---

Behavioral Trends

Possible dimensions:

- planning accuracy
- task duration accuracy
- task switching
- focus duration
- rescheduling frequency
- deadline reliability

---

Principle

Every metric should answer:

«Why does this matter?»

If a metric doesn't support a meaningful decision, it should not dominate the interface.

---

10. AI COPILOT

Screen ID

"AI-01"

Purpose

Provide natural-language interaction with the NEXUS intelligence layer.

---

Example

User:

«What should I work on this afternoon?»

NEXUS:

«You have 3h 20m available.»

«I recommend finishing the authentication architecture first because it blocks two downstream tasks and has a Friday dependency deadline.»

Actions:

"Start"

"Schedule"

"Show reasoning"

---

AI Response Structure

AI responses should generally follow:

Answer
 ↓
Reasoning
 ↓
Evidence
 ↓
Action

Not every response needs all four layers, but consequential recommendations should expose enough context to establish trust.

---

11. COMMAND PALETTE

Screen ID

"GLOBAL-01"

Keyboard:

⌘K

or

Ctrl + K

---

Default State

Search or run a command...

Recent

Create task
Open today's plan
Start focus
Ask NEXUS
View deadline risks

---

Natural Language

The user can type:

«Plan my afternoon.»

NEXUS interprets the intent and generates an action preview.

---

12. AI ACTION PREVIEW

AI should not directly perform consequential multi-step changes without appropriate validation.

Example:

REPLAN AFTERNOON

NEXUS proposes:

Move:
Design review → 15:30

Move:
Documentation → Tomorrow

Keep:
Authentication architecture → 13:00

Reason:
Current workload exceeds remaining capacity by 55 minutes.

[Review Changes]

[Apply Plan]

This establishes a critical principle:

«AI proposes. The user remains in control.»

---

13. SCREEN STATES

Every major screen must support:

Loading

The interface communicates that information is being retrieved or calculated.

Empty

The interface explains what the user can do next.

Success

Actions receive immediate confirmation.

Error

The interface explains what failed and provides recovery.

Offline

The system communicates unavailable functionality without destroying local context.

Partial Data

The interface remains useful when integrations are incomplete.

---

14. Accessibility

NEXUS must not rely solely on visual effects.

Requirements include:

- keyboard navigation
- visible focus states
- semantic hierarchy
- adequate contrast
- reduced-motion support
- accessible labels
- screen-reader compatibility
- non-color indicators for status
- predictable interaction patterns

---

15. Responsive Strategy

Desktop is the primary design environment for the initial experience.

However, the architecture must support:

- desktop,
- tablet,
- mobile.

The mobile experience should prioritize:

1. My Day
2. Current task
3. Focus
4. AI
5. Quick actions

Dense analytics should progressively collapse rather than simply shrink.
