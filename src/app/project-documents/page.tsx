import ProjectDocumentsPage from "@/components/project-documents";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
  title: "Project Documents | Prestige One Developments",
  description:
    "Access project documents for Vista, The Residence, Seaside, Place, The Waterway, and more Prestige One developments.",
};

const ProjectDocuments = () => {
  return (
    <Wrapper>
      <ProjectDocumentsPage />
    </Wrapper>
  );
};

export default ProjectDocuments;
