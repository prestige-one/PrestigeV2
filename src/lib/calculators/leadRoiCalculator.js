export const leadRoiDefaults = {
  broker: { spend: 50000, leads: 200, conv: 5, price: 2000000, comm: 2.0 },
  developer: { spend: 200000, leads: 500, conv: 3, price: 5000000, comm: 1.5 },
};

export function formatAed(value) {
  return `AED ${Math.round(value).toLocaleString("en-AE")}`;
}

export function calcLeadRoi(state) {
  const cpl = state.leads > 0 ? state.spend / state.leads : 0;
  const deals = state.leads * (state.conv / 100);
  const revenue = deals * state.price * (state.comm / 100);
  const profit = revenue - state.spend;
  const roi = state.spend > 0 ? (profit / state.spend) * 100 : 0;
  const cpd = deals > 0 ? state.spend / deals : 0;
  return { cpl, deals, revenue, profit, roi, cpd };
}
