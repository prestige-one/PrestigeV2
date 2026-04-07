import BlogListingsPage from "@/components/blogs/BlogListingsPage";
import Wrapper from "@/layouts/Wrapper";
import { createPageMetadata } from "@/lib/site-meta";

export const metadata = createPageMetadata({
  title: "Blogs",
  description:
    "Read the latest blog posts and real-estate insights from Prestige One Developments.",
});

type BlogsRouteProps = {
  searchParams?: Promise<{
    page?: string | string[];
  }>;
};

export default async function BlogsRoute({ searchParams }: BlogsRouteProps) {
  const resolvedSearchParams = searchParams ? await searchParams : undefined;
  const rawPage = Array.isArray(resolvedSearchParams?.page) ? resolvedSearchParams?.page[0] : resolvedSearchParams?.page;
  const requestedPage = Number(rawPage ?? "1");
  const currentPage = Number.isFinite(requestedPage) && requestedPage >= 1 ? Math.floor(requestedPage) : 1;

  return (
    <Wrapper>
      <BlogListingsPage currentPage={currentPage} />
    </Wrapper>
  );
}
