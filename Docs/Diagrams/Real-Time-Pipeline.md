# NEXUS Real-Time Pipeline

```text
┌───────────────────────┐
│     EVENT SOURCES     │
├───────────────────────┤
│ User Actions          │
│ Task Changes          │
│ System Events         │
│ External Signals      │
└───────────┬───────────┘
            │
            ▼
┌───────────────────────┐
│       EVENT BUS       │
├───────────────────────┤
│ Context Topic         │
│ Task Topic            │
│ User Topic            │
│ Intelligence Topics  │
└───────────┬───────────┘
            │
            ▼
┌───────────────────────┐
│   STREAM PROCESSORS   │
├───────────────────────┤
│ Context Processor     │
│ Behavior Processor    │
│ Prediction Processor  │
│ Personalization       │
│ Decision Processor    │
└───────────┬───────────┘
            │
            ▼
┌───────────────────────┐
│      STATE STORES     │
├───────────────────────┤
│ Context State         │
│ Prediction State      │
│ Personalization State │
│ Decision State        │
└───────────┬───────────┘
            │
            ▼
┌───────────────────────┐
│        OUTPUT         │
├───────────────────────┤
│ UI Updates            │
│ Recommendations       │
│ Notifications         │
│ Intelligence Events   │
└───────────┬───────────┘
            │
            ▼
       USER ACTION
            │
            └──────────────► EVENT BUS
```

This creates a continuous feedback loop between user behavior and NEXUS intelligence.
