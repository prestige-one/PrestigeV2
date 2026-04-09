import ResidenceConstructionUpdatePage from "@/components/construction-updates/ResidenceConstructionUpdatePage";
import Wrapper from "@/layouts/Wrapper";
import { createPageMetadata } from "@/lib/site-meta";

export const metadata = createPageMetadata({
  title: "Construction Update: The Residence by Prestige One",
  description:
    "Monthly construction updates for The Residence by Prestige One with grouped gallery progress snapshots.",
});

export default function ConstructionUpdateTheResidenceByPrestigeOneRoute() {
  return (
    <Wrapper>
      <ResidenceConstructionUpdatePage />
    </Wrapper>
  );
}

