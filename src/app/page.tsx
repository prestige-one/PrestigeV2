 
import HomeOne from "@/components/homes/home";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
	title: "Prestige One Developments | Luxury Real Estate",
	description: "Prestige One Developments homepage featuring recent projects and premium residences.",
};

const index = () => {
	return (
		<Wrapper>
			<HomeOne />
		</Wrapper>
	);
};

export default index;
