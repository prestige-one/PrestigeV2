import ServiceDetails from "@/components/service-details";
import Wrapper from "@/layouts/Wrapper";
import { createPageMetadata } from "@/lib/site-meta";

export const metadata = createPageMetadata({
  title: "Service details",
  description: "Learn more about this Prestige One Developments service.",
});

const index = () => {
	return (
		<Wrapper>
			<ServiceDetails />
		</Wrapper>
	);
};

export default index;
