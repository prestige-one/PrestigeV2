import BarshaHeightsDestinationPage from "@/components/destinations/BarshaHeightsDestinationPage";
import Wrapper from "@/layouts/Wrapper";
import { createPageMetadata } from "@/lib/site-meta";

export const metadata = createPageMetadata({
  title: "Barsha Heights",
  description:
    "Discover Barsha Heights — a connected Dubai community with strong access to business corridors, amenities, schools, healthcare, and Prestige One developments.",
});

export default function BarshaHeightsDestinationRoute() {
  return (
    <Wrapper>
      <BarshaHeightsDestinationPage />
    </Wrapper>
  );
}
