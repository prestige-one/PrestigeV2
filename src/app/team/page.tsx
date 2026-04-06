import Team from "@/components/team";
import Wrapper from "@/layouts/Wrapper";
import { createPageMetadata } from "@/lib/site-meta";

export const metadata = createPageMetadata({
  title: "Team",
  description: "Meet the team behind Prestige One Developments.",
});

const index = () => {
	return (
		<Wrapper>
			<Team />
		</Wrapper>
	);
};

export default index;
