# NEXUS AI Provider Abstraction

## Purpose

NEXUS should not tightly couple its intelligence layer to a single AI provider.

---

# Provider Interface

Conceptually:

```text
AIProvider

generateRecommendation(context)
generateExplanation(context)
