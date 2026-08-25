export interface ParsedAIResponse {
  summary: string;

  recommendations: string[];

  risks: string[];

  observations: string[];

  confidence?: number;
}

export function parseAIResponse(
  content: string
): ParsedAIResponse {
  const normalized =
    content.trim();

  return {
    summary:
      normalized,

    recommendations: [],

    risks: [],

    observations: []
  };
}

export function parseJSONResponse(
  content: string
): Record<string, unknown> {
  try {
    const parsed =
      JSON.parse(content);

    if (
      typeof parsed !==
      "object" ||
      parsed === null
    ) {
      return {};
    }

    return parsed as Record<
      string,
      unknown
    >;
  } catch {
    return {};
  }
}
