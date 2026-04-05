import OurDestinationsIndexPage from "@/components/destinations/OurDestinationsIndexPage";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
  title: "Our Destinations | Prestige One Developments",
  description:
    "Explore Dubai destinations where Prestige One Developments builds — maritime districts, islands, JVC, Sports City, and more.",
};

export default function OurDestinationsRoute() {
  return (
    <Wrapper>
      <OurDestinationsIndexPage />
    </Wrapper>
  );
}
