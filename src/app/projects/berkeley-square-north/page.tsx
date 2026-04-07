import BerkeleySquareNorthProjectPage from "@/components/projects/berkeley-square-north/BerkeleySquareNorthProjectPage";
import Wrapper from "@/layouts/Wrapper";
import { createPageMetadata } from "@/lib/site-meta";

export const metadata = createPageMetadata({
  title: "Berkeley Square North",
  description:
    "Explore Berkeley Square North by Prestige One - amenities, residences, nearby landmarks, and register your interest.",
});

export default function BerkeleySquareNorthProjectRoute() {
  return (
    <Wrapper>
      <BerkeleySquareNorthProjectPage />
    </Wrapper>
  );
}
