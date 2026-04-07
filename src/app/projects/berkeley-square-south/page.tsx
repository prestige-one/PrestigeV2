import BerkeleySquareSouthProjectPage from "@/components/projects/berkeley-square-south/BerkeleySquareSouthProjectPage";
import Wrapper from "@/layouts/Wrapper";
import { createPageMetadata } from "@/lib/site-meta";

export const metadata = createPageMetadata({
  title: "Berkeley Square South",
  description:
    "Explore Berkeley Square South by Prestige One - amenities, residences, nearby landmarks, and register your interest.",
});

export default function BerkeleySquareSouthProjectRoute() {
  return (
    <Wrapper>
      <BerkeleySquareSouthProjectPage />
    </Wrapper>
  );
}
