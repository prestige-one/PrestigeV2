import Breacrumb from "@/common/Breacrumb";
import SiteHeader from "@/layouts/SiteHeader";
import React from "react";
import Cta2Area from "../homes/home/Cta2Area";
import SiteFooterBlock from "@/layouts/SiteFooterBlock";
import ContactArea from "./ContactArea";

const Contact = () => {
	return (
		<>
			<SiteHeader />
			<Breacrumb title="Contact us" subtitle="Contact" />
			<ContactArea />
			<Cta2Area />
			<SiteFooterBlock />
		</>
	);
};

export default Contact;
