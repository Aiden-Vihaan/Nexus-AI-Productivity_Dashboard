# NEXUS — Event Architecture

## Purpose

Events capture meaningful changes in the system and provide historical context for analytics and intelligence.

---

## Event Flow

```text
User Action
    ↓
Domain Service
    ↓
State Change
    ↓
Activity Event
    ↓
Analytics / Intelligence
