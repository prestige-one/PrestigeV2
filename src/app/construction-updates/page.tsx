import ConstructionUpdatesPage from "@/components/construction-updates/ConstructionUpdatesPage";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
  title: "Construction Updates | Prestige One Developments",
  description:
    "Construction progress and milestones for Prestige One projects across Dubai — Seaside, Hilton Residences, Coastal Haven, and more.",
};

export default function ConstructionUpdatesRoute() {
  return (
    <Wrapper>
      <ConstructionUpdatesPage />
    </Wrapper>
  );
}
