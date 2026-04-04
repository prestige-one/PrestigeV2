import Breacrumb from "@/common/Breacrumb";
import SiteHeader from "@/layouts/SiteHeader";
import React from "react";
import Cta2Area from "../homes/home/Cta2Area";
import SiteFooterBlock from "@/layouts/SiteFooterBlock";
import PortfolioArea from "./PortfolioArea";

const Portfolio = () => {
	return (
		<>
			<SiteHeader />
			<Breacrumb title="Portfolio" subtitle="Portfolio" />
			<PortfolioArea />
			<Cta2Area />
			<SiteFooterBlock />
		</>
	);
};

export default Portfolio;
