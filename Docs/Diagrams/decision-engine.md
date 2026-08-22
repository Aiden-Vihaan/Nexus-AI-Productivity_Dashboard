# NEXUS Decision Engine Architecture


                         USER CONTEXT
                              │
                              ▼
                    ┌──────────────────┐
                    │ Candidate        │
                    │ Generator        │
                    └────────┬─────────┘
                             │
                             ▼
                     Candidate Actions
                             │
                             ▼
                    ┌──────────────────┐
                    │ Eligibility      │
                    │ Filter           │
                    └────────┬─────────┘
                             │
                             ▼
                    Eligible Candidates
                             │
                             ▼
                    ┌──────────────────┐
                    │ Scoring Engine   │
                    └────────┬─────────┘
                             │
       ┌─────────────────────┼──────────────────────┐
       ▼                     ▼                      ▼
 Goal Alignment        Deadline Risk          Time Fit
       │                     │                      │
       ▼                     ▼                      ▼
 Completion             Cognitive Load         Context Fit
 Probability                 │                      │
       └─────────────────────┼──────────────────────┘
                             ▼
                    ┌──────────────────┐
                    │ Ranking Engine   │
                    └────────┬─────────┘
                             │
                             ▼
                    Ranked Candidates
                             │
                             ▼
                    ┌──────────────────┐
                    │ Confidence       │
                    │ Engine           │
                    └────────┬─────────┘
                             │
                             ▼
                    ┌──────────────────┐
                    │ Decision         │
                    │ Explainer        │
                    └────────┬─────────┘
                             │
                             ▼
                       AI Copilot
                             │
                             ▼
                           USER
