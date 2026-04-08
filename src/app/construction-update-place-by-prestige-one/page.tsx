import PlaceConstructionUpdatePage from "@/components/construction-updates/PlaceConstructionUpdatePage";
import Wrapper from "@/layouts/Wrapper";
import { createPageMetadata } from "@/lib/site-meta";

export const metadata = createPageMetadata({
  title: "Construction Update: Place by Prestige One",
  description:
    "Monthly construction updates for Place by Prestige One with grouped gallery progress snapshots.",
});

export default function ConstructionUpdatePlaceByPrestigeOneRoute() {
  return (
    <Wrapper>
      <PlaceConstructionUpdatePage />
    </Wrapper>
  );
}
