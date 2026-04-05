import type { ReactNode } from "react";
import Link from "next/link";

/** “Explore more” CTA: external `<a>` or internal `next/link`, shared list-page styling. */
export default function ListItemExploreLink({ href, children }: { href: string; children: ReactNode }) {
  const external = href.startsWith("http");
  if (external) {
    return (
      <a className="po-list-item-btn" href={href} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }
  return <Link className="po-list-item-btn" href={href}>{children}</Link>;
}
