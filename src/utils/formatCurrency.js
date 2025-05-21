export const formatCurrency = (value, locale = 'en-US', currency = 'USD') => {
  const number = parseFloat(value);
  if (isNaN(number)) return '$0.00';
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(number);
};