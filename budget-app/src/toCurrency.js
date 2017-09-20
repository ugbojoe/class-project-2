export default function toCurrency(amt) {
  return `$${Number(amt).toFixed(2)}`;
};
