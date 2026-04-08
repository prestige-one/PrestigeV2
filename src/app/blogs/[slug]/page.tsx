import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { BLOG_POSTS } from "@/data/blogs";
import SiteFooterBlock from "@/layouts/SiteFooterBlock";
import SiteHeader from "@/layouts/SiteHeader";
import Wrapper from "@/layouts/Wrapper";
import { stripEmptyParagraphsFromHtml } from "@/lib/blog-html";
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

  const postIndex = BLOG_POSTS.findIndex((item) => item.slug === post.slug);
  const prevPost = postIndex > 0 ? BLOG_POSTS[postIndex - 1] : null;
  const nextPost = postIndex >= 0 && postIndex < BLOG_POSTS.length - 1 ? BLOG_POSTS[postIndex + 1] : null;
  const contentHtml = stripEmptyParagraphsFromHtml(post.contentHtml);

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
            <div className="po-blog-post-content-inner" dangerouslySetInnerHTML={{ __html: contentHtml }} />
          </div>
        </section>

        <section className="po-blog-post-related" aria-label="Post navigation">
          <div className="container">
            <div className="po-blog-post-inline-nav">
              {prevPost ? (
                <article className="po-blog-post-inline-item">
                  <p className="po-blog-post-inline-label">Previous post</p>
                  <Link className="po-blog-post-inline-link" href={`/blogs/${prevPost.slug}`}>
                    <span className="po-blog-post-inline-thumb">
                      {prevPost.featuredImage ? (
                        <img src={prevPost.featuredImage} alt={prevPost.title} loading="lazy" />
                      ) : (
                        <span className="po-list-item-media-fallback" aria-hidden="true" />
                      )}
                    </span>
                    <span className="po-blog-post-inline-title">{prevPost.title}</span>
                  </Link>
                </article>
              ) : null}
              {nextPost ? (
                <article className="po-blog-post-inline-item">
                  <p className="po-blog-post-inline-label">Next post</p>
                  <Link className="po-blog-post-inline-link" href={`/blogs/${nextPost.slug}`}>
                    <span className="po-blog-post-inline-thumb">
                      {nextPost.featuredImage ? (
                        <img src={nextPost.featuredImage} alt={nextPost.title} loading="lazy" />
                      ) : (
                        <span className="po-list-item-media-fallback" aria-hidden="true" />
                      )}
                    </span>
                    <span className="po-blog-post-inline-title">{nextPost.title}</span>
                  </Link>
                </article>
              ) : null}
            </div>
          </div>
        </section>
      </main>

      <SiteFooterBlock />
    </Wrapper>
  );
}
