import TheBoulevardProjectPage from "@/components/projects/the-boulevard/TheBoulevardProjectPage";
import Wrapper from "@/layouts/Wrapper";
import { createPageMetadata } from "@/lib/site-meta";

export const metadata = createPageMetadata({
  title: "The Boulevard",
  description:
    "Explore The Boulevard by Prestige One - amenities, interiors, neighborhood highlights, and register your interest.",
});

export default function TheBoulevardProjectRoute() {
  return (
    <Wrapper>
      <TheBoulevardProjectPage />
    </Wrapper>
  );
}

