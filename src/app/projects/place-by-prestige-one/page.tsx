import type { Metadata } from "next";
import PlaceProjectPage from "@/components/projects/place/PlaceProjectPage";

export const metadata: Metadata = {
  title: "The Place by Prestige One",
  description:
    "Discover The Place by Prestige One in Dubai Sports City, featuring curated amenities, refined interiors, neighborhood highlights, and project updates.",
};

export default function Page() {
  return <PlaceProjectPage />;
}

