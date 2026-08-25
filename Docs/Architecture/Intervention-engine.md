# NEXUS Intervention Engine

## Overview

The Intervention Engine is responsible for converting an approved Decision into an appropriate system response.

The Decision Engine determines:

> What should NEXUS do?

The Intervention Engine determines:

> How should NEXUS execute that decision?

---

## Architecture

```text
Prediction
    ↓
Decision
    ↓
Intervention Policy
    ↓
Eligibility
    ↓
Intervention Budget
    ↓
Priority
    ↓
Execution
    ↓
Outcome
