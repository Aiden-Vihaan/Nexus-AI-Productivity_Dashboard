# NEXUS Decision Observability Loop

```text
                         USER CONTEXT
                              │
                              ▼
                     ┌─────────────────┐
                     │ Decision Engine │
                     └────────┬────────┘
                              │
                              ▼
                       Decision Trace
                              │
             ┌────────────────┼────────────────┐
             ▼                ▼                ▼
        Explanation       Telemetry          Audit
             │                │                │
             └────────────────┼────────────────┘
                              ▼
                        Recommendation
                              │
                              ▼
                             USER
                              │
                              ▼
                           OUTCOME
                              │
                              ▼
                         EVALUATION
                              │
                              ▼
                      Intelligence Metrics
                              │
                              ▼
                       System Improvement
