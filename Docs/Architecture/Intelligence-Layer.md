# NEXUS Intelligence Layer

## Overview

The Intelligence Layer is responsible for transforming structured productivity context into explainable recommendations.

It sits above the deterministic productivity systems.

The Intelligence Layer does not replace:

- Task management
- Scheduling
- Dependency management
- Constraint management
- Context generation

Instead, it reasons over the outputs of those systems.

---

# Architectural Position

```text
Application State
       ↓
Domain Services
       ↓
Context Engine
       ↓
Behavioral Intelligence
       ↓
Predictive Intelligence
       ↓
Intelligence Context
       ↓
Intelligence Layer
       ↓
Recommendation
       ↓
Validation
       ↓
Application
