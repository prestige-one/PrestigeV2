import React from "react";
import Breacrumb from "@/common/Breacrumb";
import SiteHeader from "@/layouts/SiteHeader";
import Cta2Area from "../homes/home/Cta2Area";
import SiteFooterBlock from "@/layouts/SiteFooterBlock";
import PortfolioDetailsArea from "./PortfolioDetailsArea";

const PortfolioDetails = () => {
	return (
		<>
			<SiteHeader />
			<Breacrumb title="Portfolio Details" subtitle="Portfolio" />
			<PortfolioDetailsArea />
			<Cta2Area />
			<SiteFooterBlock />
		</>
	);
};

export default PortfolioDetails;
