/**
 * Format a number as Colombian Peso currency string.
 */
export function formatPrice(value: number): string {
  return "$" + value.toLocaleString("es-CO");
}
