import SeasideConstructionUpdatePage from "@/components/construction-updates/SeasideConstructionUpdatePage";
import Wrapper from "@/layouts/Wrapper";
import { createPageMetadata } from "@/lib/site-meta";

export const metadata = createPageMetadata({
  title: "Construction Update: Seaside by Prestige One",
  description:
    "Monthly construction updates for Seaside by Prestige One with grouped gallery progress snapshots.",
});

export default function ConstructionUpdateSeasideByPrestigeOneRoute() {
  return (
    <Wrapper>
      <SeasideConstructionUpdatePage />
    </Wrapper>
  );
}
