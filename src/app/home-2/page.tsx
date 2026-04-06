import HomeTwo from "@/components/homes/home-2";
import Wrapper from "@/layouts/Wrapper";
import { createPageMetadata } from "@/lib/site-meta";

export const metadata = createPageMetadata({
  title: "Home (alt)",
  description: "Alternate homepage layout for Prestige One Developments.",
});

const index = () => {
	return (
		<Wrapper>
			<HomeTwo />
		</Wrapper>
	);
};

export default index;
