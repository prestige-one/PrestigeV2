export const commissionDefaults = {
  secondary: { deal: 2000000, comm: 2.0, agentSplit: 60, ref: 10, vat: true, referral: false },
  primary: { deal: 3000000, comm: 3.5, agentSplit: 50, ref: 10, vat: true, referral: false },
  rental: { deal: 120000, comm: 5.0, agentSplit: 70, ref: 10, vat: true, referral: false },
};

export function formatAed(value) {
  return `AED ${Math.round(value).toLocaleString("en-AE")}`;
}

export function calcCommission(state) {
  const gross = state.deal * (state.comm / 100);
  const vat = state.vat ? gross * 0.05 : 0;
  const clientPays = gross + vat;
  const refAmt = state.referral ? gross * (state.ref / 100) : 0;
  const netAfterRef = gross - refAmt;
  const agentAmt = netAfterRef * (state.agentSplit / 100);
  const agencyAmt = netAfterRef - agentAmt;
  return { gross, vat, clientPays, refAmt, agentAmt, agencyAmt };
}
