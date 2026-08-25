export interface ValidationResult {
  valid: boolean;

  errors: string[];
}

export function validateRequiredString(
  value: unknown,
  fieldName: string
): ValidationResult {
  if (
    typeof value !==
      "string" ||
    value.trim().length ===
      0
  ) {
    return {
      valid: false,

      errors: [
        `${fieldName} is required.`
      ]
    };
  }

  return {
    valid: true,

    errors: []
  };
}

export function validateStringLength(
  value: string,
  fieldName: string,
  min: number,
  max: number
): ValidationResult {
  if (
    value.length < min ||
    value.length > max
  ) {
    return {
      valid: false,

      errors: [
        `${fieldName} must be between ${min} and ${max} characters.`
      ]
    };
  }

  return {
    valid: true,

    errors: []
  };
}
