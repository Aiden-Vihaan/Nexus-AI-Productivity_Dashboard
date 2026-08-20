export interface AIProvider {
  generateResponse(input: {
    system: string;
    messages: unknown[];
  }): Promise<unknown>;
}
