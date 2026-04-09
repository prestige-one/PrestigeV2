import ParkwayConstructionUpdatePage from "@/components/construction-updates/ParkwayConstructionUpdatePage";
import Wrapper from "@/layouts/Wrapper";
import { createPageMetadata } from "@/lib/site-meta";

export const metadata = createPageMetadata({
  title: "Construction Update: Parkway by Prestige One",
  description:
    "Monthly construction updates for Parkway by Prestige One with grouped gallery progress snapshots.",
});

export default function ConstructionUpdateParkwayByPrestigeOneRoute() {
  return (
    <Wrapper>
      <ParkwayConstructionUpdatePage />
    </Wrapper>
  );
}

