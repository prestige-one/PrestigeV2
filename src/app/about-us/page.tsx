 
import Aboutus from "@/components/about-us"; 
import Wrapper from "@/layouts/Wrapper";
import AboutPageBodyTheme from "./AboutPageBodyTheme";

export const metadata = {
	title: "About us Vorix - Creative Digital Agency Next js Template",
	description: "Vorix - Creative Digital Agency HTML Template", 
};

const index = () => {
	return (
		<Wrapper>
			<Aboutus />
			<AboutPageBodyTheme />
		</Wrapper>
	);
};

export default index;
