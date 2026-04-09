import MohammedBinRashidCityDestinationPage from "@/components/destinations/MohammedBinRashidCityDestinationPage";
import Wrapper from "@/layouts/Wrapper";
import { createPageMetadata } from "@/lib/site-meta";

export const metadata = createPageMetadata({
  title: "Mohammed Bin Rashid City",
  description:
    "Discover Mohammed Bin Rashid City - nearby attractions, accessibility, investment highlights, and Prestige One projects including The Waterway and Parkway.",
});

export default function MohammedBinRashidCityDestinationRoute() {
  return (
    <Wrapper>
      <MohammedBinRashidCityDestinationPage />
    </Wrapper>
  );
}

