export function kilometresToMiles(value: string): string | null {
  if (value.trim() === "") return null;
  const kilometres = Number(value);
  if (!Number.isFinite(kilometres)) return null;
  return (kilometres / 1.609344).toFixed(2);
}