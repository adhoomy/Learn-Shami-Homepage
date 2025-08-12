/**
 * Validation utility functions
 */

export const isEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const isStrongPassword = (password: string): boolean => {
  // At least 8 characters, 1 uppercase, 1 lowercase, 1 number
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]{8,}$/;
  return passwordRegex.test(password);
};

export const isPhoneNumber = (phone: string): boolean => {
  // Basic phone number validation (adjust regex as needed)
  const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
  return phoneRegex.test(phone.replace(/\s/g, ''));
};

export const isURL = (url: string): boolean => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

export const validateRequired = (value: any): boolean => {
  if (typeof value === 'string') {
    return value.trim().length > 0;
  }
  return value !== null && value !== undefined;
};

export const validateMinLength = (value: string, minLength: number): boolean => {
  return value.length >= minLength;
};

export const validateMaxLength = (value: string, maxLength: number): boolean => {
  return value.length <= maxLength;
};

export const validateRange = (value: number, min: number, max: number): boolean => {
  return value >= min && value <= max;
};

export interface ValidationResult {
  isValid: boolean;
  errors: string[];
}

export const validateForm = (
  data: Record<string, any>,
  rules: Record<string, any>
): ValidationResult => {
  const errors: string[] = [];

  for (const [field, rule] of Object.entries(rules)) {
    const value = data[field];

    if (rule.required && !validateRequired(value)) {
      errors.push(`${field} is required`);
    }

    if (value && rule.minLength && !validateMinLength(value, rule.minLength)) {
      errors.push(`${field} must be at least ${rule.minLength} characters`);
    }

    if (value && rule.maxLength && !validateMaxLength(value, rule.maxLength)) {
      errors.push(`${field} must be no more than ${rule.maxLength} characters`);
    }

    if (value && rule.email && !isEmail(value)) {
      errors.push(`${field} must be a valid email address`);
    }

    if (value && rule.url && !isURL(value)) {
      errors.push(`${field} must be a valid URL`);
    }

    if (value && rule.range && !validateRange(value, rule.range.min, rule.range.max)) {
      errors.push(`${field} must be between ${rule.range.min} and ${rule.range.max}`);
    }
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
};
