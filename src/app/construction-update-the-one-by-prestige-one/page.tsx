import TheOneConstructionUpdatePage from "@/components/construction-updates/TheOneConstructionUpdatePage";
import Wrapper from "@/layouts/Wrapper";
import { createPageMetadata } from "@/lib/site-meta";

export const metadata = createPageMetadata({
  title: "Construction Update: The One by Prestige One",
  description:
    "Monthly construction updates for The One by Prestige One with grouped gallery progress snapshots.",
});

export default function ConstructionUpdateTheOneByPrestigeOneRoute() {
  return (
    <Wrapper>
      <TheOneConstructionUpdatePage />
    </Wrapper>
  );
}

