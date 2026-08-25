# AI Orchestration Architecture Decisions

## Decision 1 — AI Is a Layer, Not the Architecture

NEXUS does not delegate the entire productivity system to an LLM.

The system retains deterministic control over core application state.

---

## Decision 2 — Provider Abstraction

AI providers are hidden behind a common interface.

This prevents vendor lock-in and simplifies future experimentation.

---

## Decision 3 — Context Before Generation

AI should receive structured context rather than raw application state.

Pipeline:

```text
Raw State
 ↓
Context
 ↓
Personalization
 ↓
AI Context
 ↓
Prompt
