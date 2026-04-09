import type { Metadata } from "next";
import SeasideProjectPage from "@/components/projects/seaside/SeasideProjectPage";

export const metadata: Metadata = {
  title: "The Seaside by Prestige One",
  description:
    "Explore The Seaside by Prestige One at Dubai Islands, featuring waterfront amenities, elegant interiors, neighborhood highlights, and construction updates.",
};

export default function Page() {
  return <SeasideProjectPage />;
}

