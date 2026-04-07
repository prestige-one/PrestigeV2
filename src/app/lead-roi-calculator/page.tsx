"use client";

import { useMemo, useState } from "react";
import SiteHeader from "@/layouts/SiteHeader";
import SiteFooterBlock from "@/layouts/SiteFooterBlock";
import PageHero from "@/common/PageHero";
import { calcLeadRoi, formatAed, leadRoiDefaults } from "@/lib/calculators/leadRoiCalculator";

type RoiType = "broker" | "developer";

export default function LeadRoiCalculatorPage() {
  const [type, setType] = useState<RoiType>("broker");
  const [state, setState] = useState(leadRoiDefaults.broker);
  const [showBreakdown, setShowBreakdown] = useState(false);
  const result = useMemo(() => calcLeadRoi(state), [state]);

  const switchType = (nextType: RoiType) => {
    setType(nextType);
    setState(leadRoiDefaults[nextType]);
  };

  return (
    <>
      <SiteHeader />
      <PageHero
        kicker="Prestige One Developments"
        title="Lead ROI Calculator"
        description="Measure revenue, profit, and ROI from your lead generation spend."
      />
      <main className="container py-5">
        <div className="d-flex gap-2 mb-3">
          <button className={`btn ${type === "broker" ? "btn-dark" : "btn-outline-dark"}`} onClick={() => switchType("broker")}>Broker</button>
          <button className={`btn ${type === "developer" ? "btn-dark" : "btn-outline-dark"}`} onClick={() => switchType("developer")}>Developer</button>
        </div>
        <div className="row g-3">
          <div className="col-md-6"><label>Marketing Spend</label><input className="form-control" type="range" min={5000} max={500000} step={5000} value={state.spend} onChange={(e) => setState({ ...state, spend: Number(e.target.value) })} /><div>{formatAed(state.spend)}</div></div>
          <div className="col-md-6"><label>Leads</label><input className="form-control" type="range" min={10} max={1000} step={10} value={state.leads} onChange={(e) => setState({ ...state, leads: Number(e.target.value) })} /><div>{state.leads}</div></div>
          <div className="col-md-6"><label>Conversion %</label><input className="form-control" type="range" min={1} max={30} step={0.5} value={state.conv} onChange={(e) => setState({ ...state, conv: Number(e.target.value) })} /><div>{state.conv}%</div></div>
          <div className="col-md-6"><label>Avg Property Price</label><input className="form-control" type="range" min={300000} max={20000000} step={100000} value={state.price} onChange={(e) => setState({ ...state, price: Number(e.target.value) })} /><div>{formatAed(state.price)}</div></div>
          <div className="col-md-6"><label>Commission %</label><input className="form-control" type="range" min={0.5} max={5} step={0.5} value={state.comm} onChange={(e) => setState({ ...state, comm: Number(e.target.value) })} /><div>{state.comm.toFixed(1)}%</div></div>
        </div>
        <hr />
        <p><strong>Monthly Revenue:</strong> {formatAed(result.revenue)}</p>
        <p><strong>Net Profit:</strong> {formatAed(result.profit)}</p>
        <p><strong>Cost Per Lead:</strong> {formatAed(result.cpl)}</p>
        <p><strong>ROI:</strong> {result.roi.toFixed(0)}%</p>
        <button className="btn btn-link p-0" onClick={() => setShowBreakdown((v) => !v)}>{showBreakdown ? "Hide" : "View"} breakdown</button>
        {showBreakdown && (
          <div className="mt-2">
            <p>Deals closed: {result.deals.toFixed(1).replace(".0", "")}</p>
            <p>Cost per deal: {formatAed(result.cpd)}</p>
          </div>
        )}
      </main>
      <SiteFooterBlock />
    </>
  );
}
