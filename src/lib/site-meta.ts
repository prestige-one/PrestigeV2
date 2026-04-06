import type { Metadata } from "next";

export const SITE_NAME = "Prestige One Developments";

export const SITE_DEFAULT_DESCRIPTION =
  "Prestige One Developments — luxury residential and mixed-use communities across Dubai.";

export type PageMetaInput = {
  /** Shown in the tab; combined with the root title template as `{title} | {SITE_NAME}` unless you pass a full title. */
  title: string;
  description: string;
};

/**
 * Use in each `page.tsx`:
 * `export const metadata = createPageMetadata({ title: "…", description: "…" });`
 *
 * The root layout `title.template` turns this into `{title} | Prestige One Developments`.
 * For a fully custom tab title, export `Metadata` yourself with `title: { absolute: "…" }`.
 */
export function createPageMetadata({ title, description }: PageMetaInput): Metadata {
  return {
    title,
    description,
  };
}

/** Optional: set in `.env` as `NEXT_PUBLIC_SITE_URL=https://yoursite.com` for absolute OG URLs later. */
export function getMetadataBase(): URL | undefined {
  const url = process.env.NEXT_PUBLIC_SITE_URL;
  if (!url) return undefined;
  try {
    return new URL(url);
  } catch {
    return undefined;
  }
}
