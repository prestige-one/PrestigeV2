import CoastalHavenConstructionUpdatePage from "@/components/construction-updates/CoastalHavenConstructionUpdatePage";
import Wrapper from "@/layouts/Wrapper";
import { createPageMetadata } from "@/lib/site-meta";

export const metadata = createPageMetadata({
  title: "Construction Update: Coastal Haven by Prestige Harbour",
  description:
    "Monthly construction updates for Coastal Haven by Prestige Harbour with grouped gallery progress snapshots.",
});

export default function ConstructionUpdateCoastalHavenByPrestigeHarbourRoute() {
  return (
    <Wrapper>
      <CoastalHavenConstructionUpdatePage />
    </Wrapper>
  );
}

