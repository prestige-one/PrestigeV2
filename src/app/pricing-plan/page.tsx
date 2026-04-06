import PricingPlan from "@/components/pricing-plan";
import Wrapper from "@/layouts/Wrapper";
import { createPageMetadata } from "@/lib/site-meta";

export const metadata = createPageMetadata({
  title: "Pricing",
  description: "Pricing and plan information — Prestige One Developments.",
});

const index = () => {
	return (
		<Wrapper>
			<PricingPlan />
		</Wrapper>
	);
};

export default index;
