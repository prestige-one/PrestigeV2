import InvestmentsPage from "@/components/investments";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
  title: "Investments | Prestige One Developments",
  description:
    "Explore Prestige One's investment portfolio across Dubai real estate, from strategic land acquisitions to landmark residential assets.",
};

export default function InvestmentsRoute() {
  return (
    <Wrapper>
      <InvestmentsPage />
    </Wrapper>
  );
}

