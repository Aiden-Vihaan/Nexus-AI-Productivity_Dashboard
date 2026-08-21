# NEXUS Availability Engine

## Purpose

The Availability Engine determines when a user can reasonably perform work.

It provides temporal information to the scheduling engine without deciding which task should be performed.

---

# Responsibility

The Availability Engine answers:

> "When can work happen?"

The Scheduling Engine answers:

> "What work should happen?"

This separation is intentional.

---

# Input

The Availability Engine may consume:

```text
Current Time
User Availability
Calendar Events
Focus Sessions
Blocked Periods
Time Zone
