import Service from "@/components/service";
import Wrapper from "@/layouts/Wrapper";
import { createPageMetadata } from "@/lib/site-meta";

export const metadata = createPageMetadata({
  title: "Services",
  description: "Services offered by Prestige One Developments.",
});

const index = () => {
	return (
		<Wrapper>
			<Service />
		</Wrapper>
	);
};

export default index;
