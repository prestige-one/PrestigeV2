import Register from "@/components/register";
import Wrapper from "@/layouts/Wrapper";
import { createPageMetadata } from "@/lib/site-meta";

export const metadata = createPageMetadata({
  title: "Register",
  description: "Create an account with Prestige One Developments.",
});

const index = () => {
	return (
		<Wrapper>
			<Register />
		</Wrapper>
	);
};

export default index;
