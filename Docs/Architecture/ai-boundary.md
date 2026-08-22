# NEXUS AI Boundary

## Principle

The AI model is isolated from the core application state.

The model does not directly access:

- Database
- ORM
- Authentication system
- Internal repositories
- Authorization logic
- Scheduling state

---

# Architecture

```text
                 CORE SYSTEM
                      │
          ┌───────────┴───────────┐
          │                       │
     Application State       Domain Services
          │                       │
          └───────────┬───────────┘
                      ▼
                Context Engine
                      │
                      ▼
              AI Context Adapter
                      │
                      ▼
                 AI Provider
                      │
                      ▼
             Structured Response
                      │
                      ▼
              Recommendation
                      │
                      ▼
                Validator
                      │
                      ▼
                 Core System
