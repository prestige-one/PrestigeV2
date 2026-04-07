"use client";

import { useMemo, useState } from "react";
import SiteHeader from "@/layouts/SiteHeader";
import SiteFooterBlock from "@/layouts/SiteFooterBlock";
import PageHero from "@/common/PageHero";
import { calcMonthly, calcMortgageFees, formatAed, mortgageDefaults } from "@/lib/calculators/mortgageCalculator";
import styles from "./styles.module.css";

export default function MortgageCalculatorPage() {
  const [state, setState] = useState(mortgageDefaults);
  const [isFeesOpen, setIsFeesOpen] = useState(false);
  const result = useMemo(() => {
    const monthly = calcMonthly(state.price, state.down, state.period, state.rate);
    const downAmt = (state.price * state.down) / 100;
    const loanAmt = state.price - downAmt;
    const fees = calcMortgageFees(state.price, state.down);
    return { monthly, downAmt, loanAmt, fees };
  }, [state]);

  return (
    <>
      <SiteHeader />
      <PageHero
        kicker="Prestige One Developments"
        title="Mortgage Calculator"
        description="Estimate monthly payments, loan totals, and key purchase fees."
      />
      <main className={`container py-5 ${styles.wrap}`}>
        <div className={styles.card}>
          <div className={styles.sliders}>
            <div className={styles.col}>
              <div className={styles.field}>
                <div className={styles.fieldHead}>
                  <span className={styles.label}>Property Price</span>
                  <span className={styles.value}>{`${Math.round(state.price).toLocaleString("en-AE")} AED`}</span>
                </div>
                <input className={styles.range} type="range" min={300000} max={30000000} step={100000} value={state.price} onChange={(e) => setState({ ...state, price: Number(e.target.value) })} />
              </div>
              <div className={styles.field}>
                <div className={styles.fieldHead}>
                  <span className={styles.label}>Down Payment</span>
                  <span className={styles.value}>{`${state.down} %`}</span>
                </div>
                <input className={styles.range} type="range" min={15} max={80} step={1} value={state.down} onChange={(e) => setState({ ...state, down: Number(e.target.value) })} />
              </div>
            </div>
            <div className={styles.col}>
              <div className={styles.field}>
                <div className={styles.fieldHead}>
                  <span className={styles.label}>Loan Period</span>
                  <span className={styles.value}>{`${state.period} Years`}</span>
                </div>
                <input className={styles.range} type="range" min={1} max={25} step={1} value={state.period} onChange={(e) => setState({ ...state, period: Number(e.target.value) })} />
              </div>
              <div className={styles.field}>
                <div className={styles.fieldHead}>
                  <span className={styles.label}>Interest Rate *</span>
                  <span className={styles.value}>{`${state.rate.toFixed(1)} %`}</span>
                </div>
                <input className={styles.range} type="range" min={1} max={12} step={0.1} value={state.rate} onChange={(e) => setState({ ...state, rate: Number(e.target.value) })} />
              </div>
            </div>
          </div>

          <div className={styles.resetRow}>
            <button
              className={styles.resetBtn}
              onClick={() => setState(mortgageDefaults)}
              type="button"
            >
              Reset to Default
            </button>
          </div>

          <div className={styles.resultBar}>
            <div className={styles.resultBlock}>
              <div className={styles.resultLabel}>
                Loan Amount
                <button type="button" className={styles.feesBtn} onClick={() => setIsFeesOpen(true)}>
                  View Fees
                </button>
              </div>
              <div className={styles.resultValue}>{formatAed(result.monthly)}</div>
              <div className={styles.resultSub}>{`per month for ${state.period * 12} months`}</div>
            </div>
            <div className={styles.resultBlock}>
              <div className={styles.resultLabel}>Down Payment</div>
              <div className={styles.resultValue}>{formatAed(result.downAmt)}</div>
              <div className={styles.resultSub}>{`${state.down}% of property price`}</div>
            </div>
            <div className={styles.resultBlock}>
              <div className={styles.resultLabel}>Total Loan Amount</div>
              <div className={styles.resultValue}>{formatAed(result.loanAmt)}</div>
              <div className={styles.resultSub}>{`over ${state.period} years`}</div>
            </div>
            <button className={styles.enquireBtn} type="button">
              Enquire Now
            </button>
          </div>
        </div>
      </main>

      {isFeesOpen ? (
        <div className={styles.modalOverlay} onClick={() => setIsFeesOpen(false)}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <div className={styles.modalHead}>
              <h3>Fee Breakdown</h3>
              <button type="button" className={styles.closeBtn} onClick={() => setIsFeesOpen(false)}>
                x
              </button>
            </div>
            <div className={styles.feeRow}><span>Land Department Fees</span><strong>{formatAed(result.fees.dld)}</strong></div>
            <div className={styles.feeHint}>4% of property price + AED 580 admin fee</div>
            <div className={styles.feeRow}><span>Registration Fees</span><strong>{formatAed(result.fees.reg)}</strong></div>
            <div className={styles.feeHint}>AED 2,000 or AED 4,000 + 5% VAT</div>
            <div className={styles.feeRow}><span>Mortgage Registration Fees</span><strong>{formatAed(result.fees.mortgageReg)}</strong></div>
            <div className={styles.feeHint}>0.25% of loan amount + AED 290</div>
            <div className={styles.feeRow}><span>Property Valuation Fees</span><strong>{formatAed(result.fees.evolution)}</strong></div>
            <div className={styles.feeHint}>AED 3,500 + 5% VAT</div>
          </div>
        </div>
      ) : null}
      <SiteFooterBlock />
    </>
  );
}
