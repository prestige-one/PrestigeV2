"use client";

import { useMemo, useState } from "react";
import SiteHeader from "@/layouts/SiteHeader";
import SiteFooterBlock from "@/layouts/SiteFooterBlock";
import PageHero from "@/common/PageHero";
import { calcBuy, calcRent, formatAed, rentVsBuyDefaults } from "@/lib/calculators/rentVsBuyCalculator";

export default function RentVsBuyPage() {
  const [state, setState] = useState(rentVsBuyDefaults);
  const buy = useMemo(() => calcBuy(state), [state]);
  const rent = useMemo(() => calcRent(state), [state]);
  const buyWins = buy.netCost < rent.netCost;
  const savings = Math.abs(buy.netCost - rent.netCost);

  return (
    <>
      <SiteHeader />
      <PageHero
        kicker="Prestige One Developments"
        title="Rent vs Buy Calculator"
        description="Compare buying and renting costs over your selected time horizon."
      />
      <main className="container py-5">
        <div className="row g-3">
          <div className="col-md-6"><label>Property Price</label><input className="form-control" type="range" min={300000} max={10000000} step={50000} value={state.price} onChange={(e) => setState({ ...state, price: Number(e.target.value) })} /><div>{formatAed(state.price)}</div></div>
          <div className="col-md-6"><label>Down Payment %</label><input className="form-control" type="range" min={10} max={50} step={1} value={state.down} onChange={(e) => setState({ ...state, down: Number(e.target.value) })} /><div>{state.down}%</div></div>
          <div className="col-md-6"><label>Mortgage Rate %</label><input className="form-control" type="range" min={1} max={12} step={0.1} value={state.rate} onChange={(e) => setState({ ...state, rate: Number(e.target.value) })} /><div>{state.rate.toFixed(1)}%</div></div>
          <div className="col-md-6"><label>Annual Appreciation %</label><input className="form-control" type="range" min={0} max={15} step={0.5} value={state.appr} onChange={(e) => setState({ ...state, appr: Number(e.target.value) })} /><div>{state.appr}%</div></div>
          <div className="col-md-6"><label>Monthly Rent</label><input className="form-control" type="range" min={2000} max={50000} step={500} value={state.rent} onChange={(e) => setState({ ...state, rent: Number(e.target.value) })} /><div>{formatAed(state.rent)}</div></div>
          <div className="col-md-6"><label>Annual Rent Increase %</label><input className="form-control" type="range" min={0} max={15} step={0.5} value={state.rentinc} onChange={(e) => setState({ ...state, rentinc: Number(e.target.value) })} /><div>{state.rentinc}%</div></div>
          <div className="col-md-6"><label>Investment Return %</label><input className="form-control" type="range" min={0} max={15} step={0.5} value={state.invest} onChange={(e) => setState({ ...state, invest: Number(e.target.value) })} /><div>{state.invest}%</div></div>
          <div className="col-md-6"><label>Time Horizon (Years)</label><input className="form-control" type="range" min={1} max={20} step={1} value={state.years} onChange={(e) => setState({ ...state, years: Number(e.target.value) })} /><div>{state.years} years</div></div>
        </div>
        <hr />
        <p><strong>Total Cost of Buying:</strong> {formatAed(buy.totalSpent)}</p>
        <p><strong>Total Cost of Renting:</strong> {formatAed(rent.totalSpent)}</p>
        <p><strong>Net Buy Cost:</strong> {formatAed(buy.netCost)} | <strong>Net Rent Cost:</strong> {formatAed(rent.netCost)}</p>
        <p><strong>Best Option:</strong> {buyWins ? "BUY" : "RENT"} (save {formatAed(savings)})</p>
      </main>
      <SiteFooterBlock />
    </>
  );
}
