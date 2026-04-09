import BoluevardConstructionUpdatePage from "@/components/construction-updates/BoluevardConstructionUpdatePage";
import Wrapper from "@/layouts/Wrapper";
import { createPageMetadata } from "@/lib/site-meta";

export const metadata = createPageMetadata({
  title: "Construction Update: The Boluevard by Prestige One",
  description:
    "Monthly construction updates for The Boluevard by Prestige One with grouped gallery progress snapshots.",
});

export default function ConstructionUpdateTheBoluevardByPrestigeOneRoute() {
  return (
    <Wrapper>
      <BoluevardConstructionUpdatePage />
    </Wrapper>
  );
}

