# NEXUS — System Architecture

## 1. Overview

NEXUS is a modular full-stack productivity platform composed of:

- presentation layer,
- application layer,
- domain layer,
- intelligence layer,
- persistence layer.

---

## 2. High-Level Architecture

```text
User
 ↓
NEXUS Web Application
 ↓
Application/API Layer
 ↓
Domain Services
 ├── Task Service
 ├── Project Service
 ├── Goal Service
 ├── Schedule Service
 └── Focus Service
 ↓
Intelligence Services
 ├── Scheduling Engine
 ├── Recommendation Engine
 ├── Context Engine
 └── AI Copilot
 ↓
Persistence
 └── PostgreSQL

                         ┌───────────────┐
                         │     USER      │
                         └───────┬───────┘
                                 │
                                 ▼
                    ┌─────────────────────┐
                    │   NEXT.JS WEB APP   │
                    └──────────┬──────────┘
                               │
                               ▼
                    ┌─────────────────────┐
                    │   API / APP LAYER   │
                    └──────────┬──────────┘
                               │
          ┌────────────────────┼─────────────────────┐
          ▼                    ▼                     ▼
   ┌────────────┐      ┌──────────────┐      ┌─────────────┐
   │   DOMAIN   │      │ INTELLIGENCE │      │    AI       │
   │  SERVICES  │      │   SERVICES   │      │   LAYER     │
   └──────┬─────┘      └──────┬───────┘      └──────┬──────┘
          │                   │                     │
          └───────────────────┼─────────────────────┘
                              ▼
                     ┌──────────────────┐
                     │   DATA ACCESS    │
                     └────────┬─────────┘
                              ▼
                     ┌──────────────────┐
                     │   POSTGRESQL     │
                     └──────────────────┘
