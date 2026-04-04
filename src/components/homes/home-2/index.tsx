  
import HeroArea from "./HeroArea";
import VideoArea from "./VideoArea";
import MissionArea from "./MissionArea";
import ServiceArea from "./ServiceArea";
import ProjectArea from "./ProjectArea";
import CategoryArea from "./CategoryArea";
import ProcessArea from "./ProcessArea";
import TeamArea from "./TeamArea";
import PriceArea from "./PriceArea";
import FaqArea from "./FaqArea";
import TestimonialArea from "./TestimonialArea";
import BlogArea from "./BlogArea";
import SiteFooterBlock from "@/layouts/SiteFooterBlock";
import SiteHeader from "@/layouts/SiteHeader";

const HomeTwo = () => {
	return (
		<>
			<SiteHeader style_2 />
      <HeroArea />
      <VideoArea />
      <MissionArea />
      <ServiceArea />
      <ProjectArea />
      <CategoryArea />
      <ProcessArea />
      <TeamArea />
      <PriceArea />
      <FaqArea />
      <TestimonialArea />
      <BlogArea />
      <SiteFooterBlock />
		</>
	);
};

export default HomeTwo;
