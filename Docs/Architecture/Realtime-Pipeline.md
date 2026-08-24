# NEXUS Real-Time Processing Pipeline

## Overview

The real-time pipeline coordinates event processing across NEXUS intelligence processors.

```text
Incoming Event
      ↓
Processor Registry
      ↓
Processor Selection
      ↓
Processor Execution
      ↓
Derived Events
      ↓
Event Bus
      ↓
Next Processor
