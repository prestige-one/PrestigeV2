import PortfolioDetails from "@/components/portfolio-details";
import Wrapper from "@/layouts/Wrapper";
import { createPageMetadata } from "@/lib/site-meta";

export const metadata = createPageMetadata({
  title: "Portfolio details",
  description: "Project details from the Prestige One Developments portfolio.",
});

const index = () => {
	return (
		<Wrapper>
			<PortfolioDetails />
		</Wrapper>
	);
};

export default index;
