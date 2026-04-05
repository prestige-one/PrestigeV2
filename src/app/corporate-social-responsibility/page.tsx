import CorporateSocialResponsibilityPage from "@/components/legal/CorporateSocialResponsibilityPage";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
  title: "Corporate Social Responsibility | Prestige One Developments",
  description:
    "Prestige One corporate social responsibility: sustainability, community programs, equal opportunity, and giving back.",
};

export default function CorporateSocialResponsibilityRoute() {
  return (
    <Wrapper>
      <CorporateSocialResponsibilityPage />
    </Wrapper>
  );
}
