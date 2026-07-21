/**
 * Formats a raw string of numbers into 4-digit blocks separated by spaces.
 * Example: "1234567812345678" -> "1234 5678 1234 5678"
 *
 * @param value - The raw input string from the user
 * @returns The formatted card number string
 */
export const CardNumberFormat = (value: string): string => {
 // 1. Remove everything except numbers
  const digitsOnly = value.replace(/\D/g, "");

  // 2. Add a space every 4 digits (up to 16 digits)
  const truncated = digitsOnly.slice(0, 16);
  const formatted = truncated.match(/.{1,4}/g)?.join(" ") || "";

  return formatted;
};