import DubaiIslandsDestinationPage from "@/components/destinations/DubaiIslandsDestinationPage";
import Wrapper from "@/layouts/Wrapper";
import { createPageMetadata } from "@/lib/site-meta";

export const metadata = createPageMetadata({
  title: "Dubai Islands",
  description:
    "Discover Dubai Islands — a premium waterfront destination with nearby attractions, future-ready connectivity, and Prestige One projects.",
});

export default function DubaiIslandsDestinationRoute() {
  return (
    <Wrapper>
      <DubaiIslandsDestinationPage />
    </Wrapper>
  );
}

