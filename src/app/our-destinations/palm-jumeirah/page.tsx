import PalmJumeirahDestinationPage from "@/components/destinations/PalmJumeirahDestinationPage";
import Wrapper from "@/layouts/Wrapper";
import { createPageMetadata } from "@/lib/site-meta";

export const metadata = createPageMetadata({
  title: "Palm Jumeirah",
  description:
    "Discover Palm Jumeirah — iconic island living, nearby attractions, connectivity, and Prestige One villas including Seascape Villa and Luxe Villa.",
});

export default function PalmJumeirahDestinationRoute() {
  return (
    <Wrapper>
      <PalmJumeirahDestinationPage />
    </Wrapper>
  );
}
