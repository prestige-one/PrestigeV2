import WaterwayConstructionUpdatePage from "@/components/construction-updates/WaterwayConstructionUpdatePage";
import Wrapper from "@/layouts/Wrapper";
import { createPageMetadata } from "@/lib/site-meta";

export const metadata = createPageMetadata({
  title: "Construction Update: The Waterway by Prestige One",
  description:
    "Monthly construction updates for The Waterway by Prestige One with grouped gallery progress snapshots.",
});

export default function ConstructionUpdateTheWaterwayByPrestigeOneRoute() {
  return (
    <Wrapper>
      <WaterwayConstructionUpdatePage />
    </Wrapper>
  );
}

