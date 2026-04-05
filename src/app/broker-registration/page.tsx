import BrokerRegistrationIndexPage from "@/components/broker-registration/BrokerRegistrationIndexPage";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
  title: "Broker registration | Prestige One Developments",
  description:
    "Join Prestige One's broker network — register as a UAE or international company or individual and access premium Dubai projects.",
};

export default function BrokerRegistrationRoute() {
  return (
    <Wrapper>
      <BrokerRegistrationIndexPage />
    </Wrapper>
  );
}
