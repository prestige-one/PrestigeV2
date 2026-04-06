import Aboutus from "@/components/about-us";
import Wrapper from "@/layouts/Wrapper";
import { createPageMetadata } from "@/lib/site-meta";

export const metadata = createPageMetadata({
  title: "About Us",
  description:
    "Discover Prestige One Developments — our story, values, leadership, and communities shaping exceptional living in Dubai.",
});

const index = () => {
	return (
		<Wrapper>
			<Aboutus />
		</Wrapper>
	);
};

export default index;
