import MarketingTermsPage from "@/components/legal/MarketingTermsPage";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
  title: "Marketing Terms & Conditions | Prestige One Developments",
  description:
    "Terms governing use of Prestige One marketing materials, renderings, and disclaimers in relation to the Sale and Purchase Agreement.",
};

export default function MarketingTermsConditionsRoute() {
  return (
    <Wrapper>
      <MarketingTermsPage />
    </Wrapper>
  );
}
