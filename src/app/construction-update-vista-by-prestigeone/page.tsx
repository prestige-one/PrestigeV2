import VistaConstructionUpdatePage from "@/components/construction-updates/VistaConstructionUpdatePage";
import Wrapper from "@/layouts/Wrapper";
import { createPageMetadata } from "@/lib/site-meta";

export const metadata = createPageMetadata({
  title: "Construction Update: Vista by Prestige One",
  description:
    "Monthly construction updates for Vista by Prestige One with grouped gallery progress snapshots.",
});

export default function ConstructionUpdateVistaByPrestigeOneRoute() {
  return (
    <Wrapper>
      <VistaConstructionUpdatePage />
    </Wrapper>
  );
}
