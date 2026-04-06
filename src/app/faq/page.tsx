import Faq from "@/components/faq";
import Wrapper from "@/layouts/Wrapper";
import { createPageMetadata } from "@/lib/site-meta";

export const metadata = createPageMetadata({
  title: "FAQ",
  description: "Frequently asked questions about Prestige One Developments and our projects.",
});

const index = () => {
	return (
		<Wrapper>
			<Faq />
		</Wrapper>
	);
};

export default index;
