"use client";

import { usePathname } from "next/navigation";
import HeaderOne from "@/layouts/headers/HeaderOne";

const ROUTES_WITH_LIGHT_HERO_TOP = ["/construction-updates"] as const;

function routeNeedsLightTopNav(pathname: string | null): boolean {
  if (!pathname) return false;
  return ROUTES_WITH_LIGHT_HERO_TOP.some(
    (prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`),
  );
}

export type SiteHeaderProps = {
  style_2?: boolean;
};

/**
 * Single entry for the site header. Applies route-aware options (e.g. dark nav on a light hero at scroll top)
 * while keeping scroll behavior and OffCanvas identical everywhere.
 */
export default function SiteHeader({ style_2 }: SiteHeaderProps) {
  const pathname = usePathname();
  const onLightSurface = routeNeedsLightTopNav(pathname);

  return <HeaderOne style_2={style_2} onLightSurface={onLightSurface} />;
}
