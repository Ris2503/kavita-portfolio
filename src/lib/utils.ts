export function cn(...classes: (string | boolean | undefined | null)[]) {
  return classes.filter(Boolean).join(" ");
}

export function formatNumber(num: number): string {
  if (num >= 10000000) return `${(num / 10000000).toFixed(0)}Cr+`;
  if (num >= 100000) return `${(num / 100000).toFixed(0)}L+`;
  return num.toLocaleString();
}
