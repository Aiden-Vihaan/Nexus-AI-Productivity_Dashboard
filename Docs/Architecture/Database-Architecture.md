# NEXUS — Database Architecture

## 1. Core Entities

```text
User
Project
Goal
Task
TaskDependency
Subtask
CalendarEvent
ScheduleBlock
FocusSession
Recommendation
AIConversation
AIMessage
AIToolCall
ActivityEvent

                   USER
                     │
        ┌────────────┼──────────────┐
        │            │              │
        ▼            ▼              ▼
     PROJECT       GOAL           TASK
        │            │              │
        │            └──────┐       │
        │                   │       │
        └───────────────────┴───────┤
                                    │
                    ┌───────────────┼──────────────┐
                    ▼               ▼              ▼
              DEPENDENCY        SUBTASK       FOCUS SESSION
                                   
                                   
TASK ──────────────── SCHEDULE BLOCK
                          │
                          │
                    RECOMMENDATION

USER ─────────────── CALENDAR EVENT

USER ─────────────── AI CONVERSATION
                           │
                           ▼
                       AI MESSAGE
                           │
                           ▼
                       AI TOOL CALL

USER ─────────────── ACTIVITY EVENT
