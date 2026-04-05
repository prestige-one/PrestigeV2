import Breacrumb from "@/common/Breacrumb";
import SiteHeader from "@/layouts/SiteHeader";
import React from "react";
import SiteFooterBlock from "@/layouts/SiteFooterBlock";
import ContactArea from "./ContactArea";

const Contact = () => {
	return (
		<>
			<SiteHeader />
			<Breacrumb title="Contact us" subtitle="Contact" />
			<ContactArea />
			<SiteFooterBlock />
		</>
	);
};

export default Contact;
