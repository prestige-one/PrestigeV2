import ProjectDocumentsPage from "@/components/project-documents";
import Wrapper from "@/layouts/Wrapper";
import { createPageMetadata } from "@/lib/site-meta";

export const metadata = createPageMetadata({
  title: "Project Documents",
  description:
    "Access project documents for Vista, The Residence, Seaside, Place, The Waterway, and more Prestige One developments.",
});

const ProjectDocuments = () => {
  return (
    <Wrapper>
      <ProjectDocumentsPage />
    </Wrapper>
  );
};

export default ProjectDocuments;
