import ProjectsPage from "@/components/projects";
import Wrapper from "@/layouts/Wrapper";
import { createPageMetadata } from "@/lib/site-meta";

export const metadata = createPageMetadata({
  title: "Projects",
  description: "Explore Prestige One Developments — luxury residences and mixed-use projects across Dubai.",
});

const Projects = () => {
  return (
    <Wrapper>
      <ProjectsPage />
    </Wrapper>
  );
};

export default Projects;
