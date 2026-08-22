# NEXUS AI Context Adapter

## Overview

The AI Context Adapter is the boundary between the NEXUS intelligence architecture and an external or local AI model.

Its purpose is to transform internal NEXUS context into a controlled representation that an AI model can reason over.

The AI must never receive unrestricted access to application state.

---

# Architectural Position

```text
Application State
       ↓
Domain Services
       ↓
Context Engine
       ↓
Intelligence Context
       ↓
AI Context Adapter
       ↓
AI Model
       ↓
Structured Output
       ↓
Recommendation Validator
