import BlogListingsPage from "@/components/blogs/BlogListingsPage";
import Wrapper from "@/layouts/Wrapper";
import { createPageMetadata } from "@/lib/site-meta";

export const metadata = createPageMetadata({
  title: "Blogs",
  description:
    "Read the latest blog posts and real-estate insights from Prestige One Developments.",
});

export default function BlogsRoute() {
  return (
    <Wrapper>
      <BlogListingsPage />
    </Wrapper>
  );
}
