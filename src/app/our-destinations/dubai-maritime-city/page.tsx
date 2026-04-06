import DubaiMaritimeCityDestinationPage from "@/components/destinations/DubaiMaritimeCityDestinationPage";
import Wrapper from "@/layouts/Wrapper";
import { createPageMetadata } from "@/lib/site-meta";

export const metadata = createPageMetadata({
  title: "Dubai Maritime City",
  description:
    "Discover Dubai Maritime City — waterfront living between Port Rashid and the Dubai skyline, attractions, connectivity, and Prestige One developments.",
});

export default function DubaiMaritimeCityDestinationRoute() {
  return (
    <Wrapper>
      <DubaiMaritimeCityDestinationPage />
    </Wrapper>
  );
}
