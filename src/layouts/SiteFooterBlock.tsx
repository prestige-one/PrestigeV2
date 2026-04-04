"use client";

import { usePathname } from "next/navigation";
import FinalContactSection from "@/components/common/final-contact/FinalContactSection";
import FooterOne from "@/layouts/footers/FooterOne";

const PATHS_WITHOUT_FINAL_CONTACT = ["/projects/hilton-residences-dubai-maritime-city"];

function normalizePath(pathname: string) {
  if (pathname.length > 1 && pathname.endsWith("/")) {
    return pathname.slice(0, -1);
  }
  return pathname;
}

export default function SiteFooterBlock() {
  const pathname = usePathname();
  const path = pathname ? normalizePath(pathname) : "";
  const showFinalContact = !PATHS_WITHOUT_FINAL_CONTACT.includes(path);

  return (
    <>
      {showFinalContact ? <FinalContactSection /> : null}
      <FooterOne />
    </>
  );
}
