/** @param {number} amount */
export function formatCurrency(amount) {
  return `₹ ${Number(amount).toLocaleString("en-IN")}`;
}
