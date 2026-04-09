import type { Metadata } from "next";
import WaterwayProjectPage from "@/components/projects/waterway/WaterwayProjectPage";

export const metadata: Metadata = {
  title: "The Waterway by Prestige One",
  description:
    "Explore The Waterway by Prestige One in Meydan Horizon, with premium amenities, two-column gallery layout, neighborhood highlights, and construction updates.",
};

export default function Page() {
  return <WaterwayProjectPage />;
}

