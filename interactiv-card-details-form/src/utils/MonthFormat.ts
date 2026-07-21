

export function MonthFormat(month: number):any{
if (!month) return "00";
  
  // Clamps value between 1 and 12, then pads start with "0"
  const validMonth = Math.min(Math.max(month, 1), 12);
  return validMonth.toString().padStart(2, "0");
}