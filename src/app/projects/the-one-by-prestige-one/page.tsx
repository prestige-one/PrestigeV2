import type { Metadata } from "next";
import TheOneProjectPage from "@/components/projects/the-one/TheOneProjectPage";

export const metadata: Metadata = {
  title: "The One by Prestige One",
  description:
    "Explore The One by Prestige One in Barsha Heights, featuring premium amenities, curated interiors, neighborhood advantages, and construction updates.",
};

export default function Page() {
  return <TheOneProjectPage />;
}

