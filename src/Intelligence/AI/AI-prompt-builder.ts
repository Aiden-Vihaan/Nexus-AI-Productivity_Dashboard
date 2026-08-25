import {
  AIContext
} from "./ai-context-builder";

import {
  AIMessage,
  AIRequestType
} from "./ai-types";

export function buildSystemPrompt(
  type: AIRequestType
): string {
  return `
You are the semantic intelligence layer of NEXUS,
an AI-powered productivity system.

Your role is to provide structured, concise,
context-aware intelligence.

You must:

1. Respect the supplied context.
2. Never invent unavailable facts.
3. Clearly distinguish observations from inferences.
4. Avoid overriding explicit user constraints.
5. Return actionable and explainable outputs.
6. Avoid unnecessary recommendations.
7. Prefer evidence-supported reasoning.
8. Return uncertainty when confidence is low.

Requested intelligence type:
${type}
`.trim();
}

export function buildUserPrompt(
  context: AIContext
): string {
  return `
NEXUS CURRENT INTELLIGENCE CONTEXT

Current Context:
${JSON.stringify(
  context.currentContext,
  null,
  2
)}

Relevant Memories:
${JSON.stringify(
  context.memories,
  null,
  2
)}

Predictions:
${JSON.stringify(
  context.predictions,
  null,
  2
)}

Existing Decisions:
${JSON.stringify(
  context.decisions,
  null,
  2
)}

Constraints:
${JSON.stringify(
  context.constraints,
  null,
  2
)}

Analyze the information and provide a concise
structured intelligence response.
`.trim();
}

export function buildAIMessages(
  type: AIRequestType,
  context: AIContext
): AIMessage[] {
  return [
    {
      role: "system",

      content:
        buildSystemPrompt(type)
    },

    {
      role: "user",

      content:
        buildUserPrompt(context)
    }
  ];
}
