export interface ProcessorContext {
  processorName: string;
  traceId: string;
  startedAt: string;
  metadata: Record<string, unknown>;
}

export function createProcessorContext(
  processorName: string,
  traceId: string
): ProcessorContext {
  return {
    processorName,
    traceId,
    startedAt: new Date().toISOString(),
    metadata: {}
  };
}
