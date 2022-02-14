export function formatMoney(
  amount: number,
  locale = 'en-US',
  style = 'currency',
  currency = 'USD',
): string {
  const formatter = new Intl.NumberFormat(locale, {
    style,
    currency,
  });
  return formatter.format(amount);
}
