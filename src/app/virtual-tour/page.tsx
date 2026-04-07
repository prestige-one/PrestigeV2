import VirtualTourPage from "@/components/virtual-tour";
import Wrapper from "@/layouts/Wrapper";
import { createPageMetadata } from "@/lib/site-meta";

export const metadata = createPageMetadata({
  title: "Virtual Tour",
  description:
    "Explore Prestige One's interactive virtual tour map across Dubai developments.",
});

export default function VirtualTourRoute() {
  return (
    <Wrapper>
      <VirtualTourPage />
    </Wrapper>
  );
}
