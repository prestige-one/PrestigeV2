import TermsAndConditionsPage from "@/components/legal/TermsAndConditionsPage";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
  title: "Terms & Conditions | Prestige One Developments",
  description:
    "General terms and conditions governing access and use of the Prestige One website, account security, intellectual property, and related policies.",
};

export default function TermsConditionsRoute() {
  return (
    <Wrapper>
      <TermsAndConditionsPage />
    </Wrapper>
  );
}
