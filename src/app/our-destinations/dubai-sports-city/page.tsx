import DubaiSportsCityDestinationPage from "@/components/destinations/DubaiSportsCityDestinationPage";
import Wrapper from "@/layouts/Wrapper";
import { createPageMetadata } from "@/lib/site-meta";

export const metadata = createPageMetadata({
  title: "Dubai Sports City",
  description:
    "Discover Dubai Sports City — an active lifestyle district with sports venues, nearby attractions, connectivity, and Prestige One developments.",
});

export default function DubaiSportsCityDestinationRoute() {
  return (
    <Wrapper>
      <DubaiSportsCityDestinationPage />
    </Wrapper>
  );
}
