import CoastalHavenProjectPage from "@/components/projects/coastal-haven/CoastalHavenProjectPage";
import Wrapper from "@/layouts/Wrapper";
import { createPageMetadata } from "@/lib/site-meta";

export const metadata = createPageMetadata({
  title: "Coastal Haven",
  description:
    "Explore Coastal Haven by Prestige Harbour - amenities, interiors, nearby attractions, and register your interest.",
});

export default function CoastalHavenProjectRoute() {
  return (
    <Wrapper>
      <CoastalHavenProjectPage />
    </Wrapper>
  );
}

