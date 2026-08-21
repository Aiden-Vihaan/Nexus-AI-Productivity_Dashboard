## Overview

The NEXUS Constraint Engine defines the conditions that must be satisfied before a task can be considered a valid scheduling candidate.

A task may have high priority but still be unsuitable for immediate execution.

For example:

```text
Task:
Deploy production API

Priority:
CRITICAL

Dependency:
Security testing incomplete

Result:
BLOCKED
