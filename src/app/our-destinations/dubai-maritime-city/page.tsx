import DubaiMaritimeCityDestinationPage from "@/components/destinations/DubaiMaritimeCityDestinationPage";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
  title: "Dubai Maritime City | Our Destinations | Prestige One Developments",
  description:
    "Discover Dubai Maritime City — waterfront living between Port Rashid and the Dubai skyline. Nearby attractions, connectivity, and Prestige One developments.",
};

export default function DubaiMaritimeCityDestinationRoute() {
  return (
    <Wrapper>
      <DubaiMaritimeCityDestinationPage />
    </Wrapper>
  );
}
