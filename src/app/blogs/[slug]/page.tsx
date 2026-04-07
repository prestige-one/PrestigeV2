import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import ListPageExploreArrow from "@/common/ListPageExploreArrow";
import { BLOG_POSTS } from "@/data/blogs";
import SiteFooterBlock from "@/layouts/SiteFooterBlock";
import SiteHeader from "@/layouts/SiteHeader";
import Wrapper from "@/layouts/Wrapper";
import { createPageMetadata } from "@/lib/site-meta";

type BlogDetailsPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogDetailsPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((item) => item.slug === slug);
  if (!post) {
    return createPageMetadata({
      title: "Blog",
      description: "Read the latest updates from Prestige One Developments.",
    });
  }

  return createPageMetadata({
    title: post.seoTitle || post.title,
    description: post.seoDescription || post.excerpt || "Read the latest updates from Prestige One Developments.",
  });
}

export default async function BlogDetailsPage({ params }: BlogDetailsPageProps) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((item) => item.slug === slug);
  if (!post) notFound();

  const relatedPosts = BLOG_POSTS.filter((item) => item.slug !== post.slug).slice(0, 3);

  return (
    <Wrapper>
      <SiteHeader />

      <main className="po-blog-post-page">
        <section className="po-blog-post-hero" aria-labelledby="blog-post-title">
          <div className="container po-blog-post-hero-inner">
            <h1 id="blog-post-title" className="po-blog-post-hero-title">
              {post.title}
            </h1>
          </div>
        </section>

        <section className="po-blog-post-content-shell" aria-label="Blog content">
          <div className="container">
            {post.featuredImage ? (
              <div className="po-blog-post-featured-media">
                <img src={post.featuredImage} alt={post.title} loading="eager" />
              </div>
            ) : null}
            <div className="po-blog-post-content-inner" dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
          </div>
        </section>

        <section className="po-blog-post-related" aria-labelledby="related-posts-heading">
          <div className="container">
            <h2 id="related-posts-heading" className="po-blog-post-related-title">
              Related posts
            </h2>
            <div className="po-list-page-grid list-page-grid">
              {relatedPosts.map((item) => (
                <article key={item.id} className="po-list-item-card item-card">
                  <div className="po-list-item-media item-card-image">
                    {item.featuredImage ? (
                      <img src={item.featuredImage} alt={item.title} loading="lazy" />
                    ) : (
                      <div className="po-list-item-media-fallback" aria-hidden="true" />
                    )}
                  </div>
                  <div className="po-list-item-body item-card-content">
                    <h3 className="po-list-item-title">{item.title}</h3>
                    <Link className="po-list-item-btn" href={`/blogs/${item.slug}`}>
                      <span>Read more</span>
                      <ListPageExploreArrow />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <SiteFooterBlock />
    </Wrapper>
  );
}
