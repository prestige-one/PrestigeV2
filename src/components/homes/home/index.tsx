 
import HeroArea from "./HeroArea";
import HeaderOne from "@/layouts/headers/HeaderOne";
import FooterOne from "@/layouts/footers/FooterOne";
import LogoSliderArea from "./LogoSliderArea";
import MissionVisionTabsArea from "./MissionVisionTabsArea";
import CoreValuesArea from "./CoreValuesArea";
import ProjectsShowcaseSliderArea from "./ProjectsShowcaseSliderArea";
import OurDestinationsArea from "./OurDestinationsArea";
import FinalContactSection from "./FinalContactSection";

const HomeOne = () => {
	return (
		<>
			<HeaderOne />
			<HeroArea />
			<LogoSliderArea />
			<MissionVisionTabsArea />
			<CoreValuesArea />
			<ProjectsShowcaseSliderArea />
			<OurDestinationsArea />
			<FinalContactSection />
			<FooterOne />
		</>
	);
};

export default HomeOne;


