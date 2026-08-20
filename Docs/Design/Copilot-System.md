# NEXUS — Copilot Interface Specification

## Primary Surfaces

1. Copilot Home
2. Conversation
3. Context Inspector
4. Recommendation Card
5. Action Confirmation
6. Tool Result
7. Uncertainty State
8. Error State

---

## Copilot Home

Purpose:

Provide quick access to common productivity questions and actions.

---

## Conversation

Messages should support:

- text,
- task references,
- schedule references,
- recommendations,
- action cards.

---

## Context Inspector

Displays the major sources used by the Copilot.

---

## Recommendation Card

Contains:

- recommendation,
- reasoning factors,
- confidence,
- primary action,
- alternative action.

---

## Confirmation

Before changing user data:

```text
Action
+
Expected result
+
Confirm
+
Cancel
