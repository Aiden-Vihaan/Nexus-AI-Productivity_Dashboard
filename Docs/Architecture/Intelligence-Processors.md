# NEXUS Intelligence Processors

## Purpose

The NEXUS processor layer transforms raw system events into intelligence-relevant state changes and derived events.

The processor layer sits between the event infrastructure and higher-level intelligence systems.

---

## Architecture

```text
Event
  ↓
Processor Registry
  ↓
Matching Processor
  ↓
Processing
  ↓
Derived Events
