# NEXUS Dependency System

## Overview

NEXUS models dependencies between tasks to represent the order in which work must be completed.

A productivity system that only understands individual tasks cannot reliably determine what should happen next.

NEXUS therefore represents task relationships explicitly.

```text
Task A
   │
   │ BLOCKS
   ▼
Task B
   │
   │ BLOCKS
   ▼
Task C
