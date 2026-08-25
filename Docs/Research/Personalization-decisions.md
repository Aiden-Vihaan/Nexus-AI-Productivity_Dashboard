# Personalization Architecture Decisions

## Decision 1 — Separate Learning From Memory

Learning determines what evidence suggests.

Memory determines what should persist.

This separation prevents the learning engine from becoming the storage layer.

---

## Decision 2 — Use Memory Categories

Different information has different lifetimes.

For example:

```text
Goal
≈ weeks

Preference
≈ months

Routine
≈ months

Context
≈ days
