export const rentVsBuyDefaults = {
  price: 1500000,
  down: 20,
  rate: 4.0,
  appr: 5,
  rent: 7000,
  rentinc: 5,
  invest: 6,
  years: 5,
};

export function formatAed(value) {
  return `AED ${Math.round(Math.abs(value)).toLocaleString("en-AE")}`;
}

export function calcBuy(s) {
  const loanAmt = s.price * (1 - s.down / 100);
  const downAmt = s.price * (s.down / 100);
  const n = s.years * 12;
  const r = s.rate / 100 / 12;
  const monthly = r === 0 ? loanAmt / n : (loanAmt * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
  const totalMortgage = monthly * n;
  const dld = s.price * 0.04 + 580;
  const regFee = (s.price < 500000 ? 2000 : 4000) * 1.05;
  const upfront = downAmt + dld + regFee;
  const maintenance = s.price * 0.01 * s.years;
  const futureVal = s.price * Math.pow(1 + s.appr / 100, s.years);
  const equityGain = futureVal - s.price;
  const totalSpent = totalMortgage + upfront + maintenance;
  const netCost = totalSpent - equityGain;
  return { totalMortgage, upfront, maintenance, equityGain, totalSpent, netCost };
}

export function calcRent(s) {
  let totalRent = 0;
  let monthlyRent = s.rent;
  for (let y = 0; y < s.years; y++) {
    totalRent += monthlyRent * 12;
    monthlyRent *= 1 + s.rentinc / 100;
  }
  const downAmt = s.price * (s.down / 100);
  const investGain = downAmt * (Math.pow(1 + s.invest / 100, s.years) - 1);
  const deposit = s.rent * 2;
  const totalSpent = totalRent + deposit;
  const netCost = totalSpent - investGain;
  return { totalRent, deposit, investGain, totalSpent, netCost };
}
