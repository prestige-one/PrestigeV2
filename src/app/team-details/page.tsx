import TeamDetails from "@/components/team-details";
import Wrapper from "@/layouts/Wrapper";
import { createPageMetadata } from "@/lib/site-meta";

export const metadata = createPageMetadata({
  title: "Team member",
  description: "Team profile — Prestige One Developments.",
});

const index = () => {
	return (
		<Wrapper>
			<TeamDetails />
		</Wrapper>
	);
};

export default index;
