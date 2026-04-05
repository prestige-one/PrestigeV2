import PrivacyPolicyPage from "@/components/legal/PrivacyPolicyPage";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
  title: "Privacy Policy | Prestige One Developments",
  description:
    "Prestige One Developments privacy policy: how we collect, use, share, and retain personal information when you use our website and services.",
};

export default function PrivacyPolicyRoute() {
  return (
    <Wrapper>
      <PrivacyPolicyPage />
    </Wrapper>
  );
}
