import HiltonConstructionUpdatePage from "@/components/construction-updates/HiltonConstructionUpdatePage";
import Wrapper from "@/layouts/Wrapper";
import { createPageMetadata } from "@/lib/site-meta";

export const metadata = createPageMetadata({
  title: "Construction Update: Hilton Residences by Prestige One",
  description:
    "Monthly construction updates for Hilton Residences by Prestige One with grouped gallery progress snapshots.",
});

export default function ConstructionUpdateHiltonResidencesByPrestigeOneRoute() {
  return (
    <Wrapper>
      <HiltonConstructionUpdatePage />
    </Wrapper>
  );
}
