export const mortgageDefaults = { price: 6300000, down: 20, period: 25, rate: 3.5 };

export function formatAed(value) {
  return `AED ${Math.round(value).toLocaleString("en-AE")}`;
}

export function calcMonthly(price, downPct, years, annualRate) {
  const loan = price * (1 - downPct / 100);
  const n = years * 12;
  const r = annualRate / 100 / 12;
  if (r === 0) return loan / n;
  return (loan * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
}

export function calcMortgageFees(price, downPct) {
  const loan = price * (1 - downPct / 100);
  return {
    dld: price * 0.04 + 580,
    reg: (price < 500000 ? 2000 : 4000) * 1.05,
    mortgageReg: loan * 0.0025 + 290,
    evolution: 3500 * 1.05,
  };
}
