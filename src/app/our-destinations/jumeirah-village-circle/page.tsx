import JumeirahVillageCircleDestinationPage from "@/components/destinations/JumeirahVillageCircleDestinationPage";
import Wrapper from "@/layouts/Wrapper";
import { createPageMetadata } from "@/lib/site-meta";

export const metadata = createPageMetadata({
  title: "Jumeirah Village Circle (JVC)",
  description:
    "Discover Jumeirah Village Circle — nearby attractions, connectivity, facilities, and Prestige One developments including The Residence and Berkeley Square.",
});

export default function JumeirahVillageCircleDestinationRoute() {
  return (
    <Wrapper>
      <JumeirahVillageCircleDestinationPage />
    </Wrapper>
  );
}
