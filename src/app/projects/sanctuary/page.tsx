import SanctuaryProjectPage from "@/components/projects/sanctuary/SanctuaryProjectPage";
import Wrapper from "@/layouts/Wrapper";
import { createPageMetadata } from "@/lib/site-meta";

export const metadata = createPageMetadata({
  title: "Sanctuary by Prestige One",
  description:
    "Explore Sanctuary by Prestige One in Meydan - amenities, residences, nearby landmarks, schools, hospitals, and register your interest.",
});

export default function SanctuaryProjectRoute() {
  return (
    <Wrapper>
      <SanctuaryProjectPage />
    </Wrapper>
  );
}
