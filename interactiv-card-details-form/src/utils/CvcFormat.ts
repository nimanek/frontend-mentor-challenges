
export const CvcFormat = (value: string): string => {
 // 1. Remove everything except numbers
  const digitsOnly = value.replace(/\D/g, "");

  // 2. Allows only up to 3 number
  const truncated = digitsOnly.slice(0, 3);

  return truncated;
};