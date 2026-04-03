import ProjectsPage from "@/components/projects";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
  title: "Projects | Prestige One Developments",
  description: "Explore all Prestige One Developments projects by location.",
};

const Projects = () => {
  return (
    <Wrapper>
      <ProjectsPage />
    </Wrapper>
  );
};

export default Projects;
