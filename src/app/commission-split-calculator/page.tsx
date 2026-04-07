"use client";

import { useMemo, useState } from "react";
import SiteHeader from "@/layouts/SiteHeader";
import SiteFooterBlock from "@/layouts/SiteFooterBlock";
import PageHero from "@/common/PageHero";
import { calcCommission, commissionDefaults, formatAed } from "@/lib/calculators/commissionSplitCalculator";

type DealType = "secondary" | "primary" | "rental";

export default function CommissionSplitCalculatorPage() {
  const [type, setType] = useState<DealType>("secondary");
  const [state, setState] = useState(commissionDefaults.secondary);
  const result = useMemo(() => calcCommission(state), [state]);

  const setDealType = (nextType: DealType) => {
    setType(nextType);
    setState(commissionDefaults[nextType]);
  };

  return (
    <>
      <SiteHeader />
      <PageHero
        kicker="Prestige One Developments"
        title="Commission Split Calculator"
        description="See how commission is distributed between agent, agency, referral, and VAT."
      />
      <main className="container py-5">
        <div className="d-flex gap-2 mb-3">
          <button className={`btn ${type === "secondary" ? "btn-dark" : "btn-outline-dark"}`} onClick={() => setDealType("secondary")}>Secondary</button>
          <button className={`btn ${type === "primary" ? "btn-dark" : "btn-outline-dark"}`} onClick={() => setDealType("primary")}>Primary</button>
          <button className={`btn ${type === "rental" ? "btn-dark" : "btn-outline-dark"}`} onClick={() => setDealType("rental")}>Rental</button>
        </div>
        <div className="row g-3">
          <div className="col-md-6"><label>Deal Value</label><input className="form-control" type="range" min={100000} max={20000000} step={50000} value={state.deal} onChange={(e) => setState({ ...state, deal: Number(e.target.value) })} /><div>{formatAed(state.deal)}</div></div>
          <div className="col-md-6"><label>Commission %</label><input className="form-control" type="range" min={0.5} max={10} step={0.5} value={state.comm} onChange={(e) => setState({ ...state, comm: Number(e.target.value) })} /><div>{state.comm.toFixed(1)}%</div></div>
          <div className="col-md-6"><label>Agent Split %</label><input className="form-control" type="range" min={10} max={90} step={5} value={state.agentSplit} onChange={(e) => setState({ ...state, agentSplit: Number(e.target.value) })} /><div>{state.agentSplit}%</div></div>
          <div className="col-md-6"><label>Referral %</label><input className="form-control" type="range" min={5} max={30} step={1} value={state.ref} onChange={(e) => setState({ ...state, ref: Number(e.target.value) })} /><div>{state.ref}%</div></div>
        </div>
        <div className="form-check mt-3"><input id="referral" className="form-check-input" type="checkbox" checked={state.referral} onChange={(e) => setState({ ...state, referral: e.target.checked })} /><label htmlFor="referral" className="form-check-label">Include Referral Fee</label></div>
        <div className="form-check"><input id="vat" className="form-check-input" type="checkbox" checked={state.vat} onChange={(e) => setState({ ...state, vat: e.target.checked })} /><label htmlFor="vat" className="form-check-label">Apply VAT (5%)</label></div>
        <hr />
        <p><strong>Gross Commission:</strong> {formatAed(result.gross)}</p>
        <p><strong>Agent Earnings:</strong> {formatAed(result.agentAmt)} | <strong>Agency Earnings:</strong> {formatAed(result.agencyAmt)}</p>
        <p><strong>Referral:</strong> {formatAed(result.refAmt)} | <strong>VAT:</strong> {formatAed(result.vat)}</p>
        <p><strong>Client Pays Total:</strong> {formatAed(result.clientPays)}</p>
      </main>
      <SiteFooterBlock />
    </>
  );
}
