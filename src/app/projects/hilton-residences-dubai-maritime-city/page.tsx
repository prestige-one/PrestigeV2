import HiltonProjectPage from "@/components/projects/hilton-maritime-city/HiltonProjectPage";
import Wrapper from "@/layouts/Wrapper";
import { createPageMetadata } from "@/lib/site-meta";

export const metadata = createPageMetadata({
  title: "Hilton Residences Dubai Maritime City",
  description:
    "Branded luxury apartments in Dubai Maritime City — amenities, surroundings, schools, hospitals, and register your interest.",
});

const HiltonResidencesPage = () => {
  return (
    <Wrapper>
      <HiltonProjectPage />
    </Wrapper>
  );
};

export default HiltonResidencesPage;
