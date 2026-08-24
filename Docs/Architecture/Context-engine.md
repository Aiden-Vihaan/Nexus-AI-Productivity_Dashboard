# NEXUS Context Engine

## Overview

The Context Engine maintains a continuously evolving representation of the user's current working state.

It transforms a stream of events into a structured context model.

```text
Events
  ↓
Context Updater
  ↓
Context State
  ↓
Context Store
  ↓
Context Snapshot
  ↓
Intelligence Systems
