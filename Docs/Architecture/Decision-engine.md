# NEXUS Decision Engine

## Overview

The Decision Engine is responsible for transforming predictions into appropriate system decisions.

The Prediction Engine answers:

> What is likely to happen?

The Decision Engine answers:

> What should NEXUS do about it?

These responsibilities are intentionally separated.

---

## Decision Pipeline

```text
Context
   ↓
Prediction
   ↓
Eligibility
   ↓
Impact Assessment
   ↓
Urgency
   ↓
Intervention Cost
   ↓
Decision Score
   ↓
Policy Evaluation
   ↓
Decision Ranking
   ↓
Intervention
