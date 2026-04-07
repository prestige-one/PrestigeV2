import { redirect } from "next/navigation";

/** Legacy / marketing URL → canonical destination page */
export default function PalmJumeirahShortUrlPage() {
  redirect("/our-destinations/palm-jumeirah");
}
