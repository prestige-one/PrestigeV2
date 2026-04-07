import LuxuryCanalResidencesProjectPage from "@/components/projects/luxury-canal-residences/LuxuryCanalResidencesProjectPage";
import Wrapper from "@/layouts/Wrapper";
import { createPageMetadata } from "@/lib/site-meta";

export const metadata = createPageMetadata({
  title: "Luxury Canal Residences",
  description:
    "Explore Luxury Canal Residences by Prestige Harbour - amenities, interiors, nearby attractions, and register your interest.",
});

export default function LuxuryCanalResidencesProjectRoute() {
  return (
    <Wrapper>
      <LuxuryCanalResidencesProjectPage />
    </Wrapper>
  );
}
