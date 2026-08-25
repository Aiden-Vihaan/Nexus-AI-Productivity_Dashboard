export function sanitizeText(
  value: string
): string {
  return value
    .replace(
      /<script[\s\S]*?>[\s\S]*?<\/script>/gi,
      ""
    )
    .replace(
      /<[^>]*>/g,
      ""
    )
    .trim();
}
