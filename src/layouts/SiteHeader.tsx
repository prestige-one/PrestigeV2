"use client";

import { usePathname } from "next/navigation";
import HeaderOne from "@/layouts/headers/HeaderOne";

/** Entire subtree: light hero below header (dark nav + dark logo at scroll top). */
const LIGHT_HERO_ROUTE_PREFIXES = ["/construction-updates", "/broker-registration"] as const;
/** Listing pages only — sub-routes (e.g. project detail, DMC destination) often use a dark hero; keep default light nav there. */
const LIGHT_HERO_ROUTE_EXACT = ["/projects", "/our-destinations"] as const;

function routeNeedsLightTopNav(pathname: string | null): boolean {
  if (!pathname) return false;
  if ((LIGHT_HERO_ROUTE_EXACT as readonly string[]).includes(pathname)) return true;
  return LIGHT_HERO_ROUTE_PREFIXES.some(
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
