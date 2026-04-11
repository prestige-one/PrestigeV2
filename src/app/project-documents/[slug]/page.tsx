import { notFound } from "next/navigation";
import Wrapper from "@/layouts/Wrapper";
import ProjectDocumentHubPage from "@/components/project-documents/ProjectDocumentHubPage";
import {
  getProjectDocumentHub,
  projectDocumentHubSlugs,
} from "@/lib/project-document-hubs";
import { createPageMetadata } from "@/lib/site-meta";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projectDocumentHubSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const hub = getProjectDocumentHub(slug);
  if (!hub) {
    return { title: "Not found" };
  }
  return createPageMetadata({
    title: hub.pageTitle,
    description:
      hub.metaDescription ??
      `${hub.pageTitle} — disclosure statement and project documentation for Prestige One Developments.`,
  });
}

const ProjectDocumentHubRoute = async ({ params }: Props) => {
  const { slug } = await params;
  const hub = getProjectDocumentHub(slug);
  if (!hub) {
    notFound();
  }

  return (
    <Wrapper>
      <ProjectDocumentHubPage hub={hub} />
    </Wrapper>
  );
};

export default ProjectDocumentHubRoute;
