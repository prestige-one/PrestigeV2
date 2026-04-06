import Contact from "@/components/contact";
import Wrapper from "@/layouts/Wrapper";
import { createPageMetadata } from "@/lib/site-meta";

export const metadata = createPageMetadata({
  title: "Contact",
  description: "Get in touch with Prestige One Developments — sales, partnerships, and general enquiries.",
});

const index = () => {
	return (
		<Wrapper>
			<Contact />
		</Wrapper>
	);
};

export default index;
