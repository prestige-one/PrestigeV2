import LuxuryCanalConstructionUpdatePage from "@/components/construction-updates/LuxuryCanalConstructionUpdatePage";
import Wrapper from "@/layouts/Wrapper";
import { createPageMetadata } from "@/lib/site-meta";

export const metadata = createPageMetadata({
  title: "Construction Update: Luxury Canal Residences by Prestige Harbour",
  description:
    "Monthly construction updates for Luxury Canal Residences by Prestige Harbour with grouped gallery progress snapshots.",
});

export default function ConstructionUpdateLuxuryCanalResidencesByPrestigeHarbourRoute() {
  return (
    <Wrapper>
      <LuxuryCanalConstructionUpdatePage />
    </Wrapper>
  );
}

