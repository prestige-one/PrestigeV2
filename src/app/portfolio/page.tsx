import Portfolio from "@/components/portfolio";
import Wrapper from "@/layouts/Wrapper";
import { createPageMetadata } from "@/lib/site-meta";

export const metadata = createPageMetadata({
  title: "Portfolio",
  description: "Portfolio highlights from Prestige One Developments.",
});

const index = () => {
	return (
		<Wrapper>
			<Portfolio />
		</Wrapper>
	);
};

export default index;
