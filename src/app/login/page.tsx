import Login from "@/components/login";
import Wrapper from "@/layouts/Wrapper";
import { createPageMetadata } from "@/lib/site-meta";

export const metadata = createPageMetadata({
  title: "Login",
  description: "Sign in to your Prestige One Developments account.",
});

const index = () => {
	return (
		<Wrapper>
			<Login />
		</Wrapper>
	);
};

export default index;
