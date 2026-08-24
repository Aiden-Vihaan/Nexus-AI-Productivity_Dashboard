# Decision Engine Architecture Decisions

## Decision 1 — Separate Prediction From Decision

A prediction should never directly trigger an intervention.

### Reason

Predictions describe probability.

Decisions describe recommended system behavior.

Keeping them separate allows:

- Independent testing
- Better explainability
- Policy control
- Safer experimentation
- Future model replacement

---

## Decision 2 — Introduce Intervention Cost

Every intervention has a cost.

### Reason

User attention is a limited resource.

A high-confidence prediction does not automatically justify a high-friction intervention.

---

## Decision 3 — Use Decision Policies

Decision thresholds are represented as policies rather than scattered conditional logic.

### Reason

This makes the system easier to:

- Tune
- Test
- Personalize
- Experiment with
- Replace

---

## Decision 4 — Add Cooldowns

Repeated decisions should not repeatedly interrupt the user.

### Reason

Without cooldowns, a prediction engine could generate notification fatigue.

---

## Decision 5 — Support Silent Decisions

Some decisions should modify system behavior without displaying anything.

### Reason

An intelligent assistant should sometimes improve the user's environment invisibly.

---

## Decision 6 — Rank Decisions

Multiple predictions may produce multiple candidate decisions.

The Decision Engine ranks them according to:

- Decision score
- Urgency
- User impact
- Priority

---

## Decision 7 — Preserve User Agency

NEXUS should communicate predictions probabilistically.

The system should not present uncertain predictions as facts.

---

## Future Evolution

The baseline decision engine can eventually evolve toward:

```text
Static Policy
      ↓
Personalized Policy
      ↓
Learned Policy
      ↓
Contextual Decision Model
