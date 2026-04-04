 
import HeroArea from "./HeroArea";
import SiteHeader from "@/layouts/SiteHeader";
import SiteFooterBlock from "@/layouts/SiteFooterBlock";
import LogoSliderArea from "./LogoSliderArea";
import MissionVisionTabsArea from "./MissionVisionTabsArea";
import CoreValuesArea from "./CoreValuesArea";
import ProjectsShowcaseSliderArea from "./ProjectsShowcaseSliderArea";
import OurDestinationsArea from "./OurDestinationsArea";

const HomeOne = () => {
	return (
		<>
			<SiteHeader />
			<HeroArea />
			<LogoSliderArea />
			<MissionVisionTabsArea />
			<CoreValuesArea />
			<ProjectsShowcaseSliderArea />
			<OurDestinationsArea />
			<SiteFooterBlock />
		</>
	);
};

export default HomeOne;


