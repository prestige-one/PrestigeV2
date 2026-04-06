import ConstructionUpdatesPage from "@/components/construction-updates/ConstructionUpdatesPage";
import Wrapper from "@/layouts/Wrapper";
import { createPageMetadata } from "@/lib/site-meta";

export const metadata = createPageMetadata({
  title: "Construction Updates",
  description:
    "Construction progress and milestones for Prestige One projects across Dubai — Seaside, Hilton Residences, Coastal Haven, and more.",
});

export default function ConstructionUpdatesRoute() {
  return (
    <Wrapper>
      <ConstructionUpdatesPage />
    </Wrapper>
  );
}
