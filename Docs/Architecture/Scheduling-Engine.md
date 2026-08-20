# NEXUS — Scheduling Engine

## 1. Overview

The Scheduling Engine transforms tasks and calendar constraints into candidate schedules.

It operates as a recommendation system rather than an autonomous decision-maker.

---

## 2. Pipeline

```text
Task Data
    ↓
Calendar Data
    ↓
Availability Detection
    ↓
Constraint Evaluation
    ↓
Candidate Time Windows
    ↓
Schedule Scoring
    ↓
Recommendation
    ↓
Confidence
    ↓
User Review
