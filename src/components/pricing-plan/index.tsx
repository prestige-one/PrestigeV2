import React from "react";
import Breacrumb from "@/common/Breacrumb";
import SiteHeader from "@/layouts/SiteHeader";
import Cta2Area from "../homes/home/Cta2Area";
import SiteFooterBlock from "@/layouts/SiteFooterBlock";
import PricingPlanArea from "./PricingPlanArea";
import FaqArea from "../homes/home-2/FaqArea";

const PricingPlan = () => {
	return (
		<>
			<SiteHeader />
			<Breacrumb title="Pricing Plan" subtitle="Pricing Plan" />
      <PricingPlanArea />
      <FaqArea style_2={true} />
			<Cta2Area />
			<SiteFooterBlock />
		</>
	);
};

export default PricingPlan;
