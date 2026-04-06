import HomeOne from "@/components/homes/home";
import Wrapper from "@/layouts/Wrapper";
import { createPageMetadata } from "@/lib/site-meta";

export const metadata = createPageMetadata({
  title: "Home",
  description:
    "Featured projects and premium residences from Prestige One Developments across Dubai.",
});

const index = () => {
	return (
		<Wrapper>
			<HomeOne />
		</Wrapper>
	);
};

export default index;
