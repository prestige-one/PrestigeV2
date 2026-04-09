import ParkwayProjectPage from "@/components/projects/parkway/ParkwayProjectPage";
import Wrapper from "@/layouts/Wrapper";
import { createPageMetadata } from "@/lib/site-meta";

export const metadata = createPageMetadata({
  title: "The Parkway",
  description:
    "Explore The Parkway by Prestige One - amenities, interiors, neighborhood highlights, and register your interest.",
});

export default function ParkwayProjectRoute() {
  return (
    <Wrapper>
      <ParkwayProjectPage />
    </Wrapper>
  );
}

