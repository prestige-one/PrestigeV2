import Link from "next/link";
import ListItemExploreLink from "@/common/ListItemExploreLink";
import ListPageExploreArrow from "@/common/ListPageExploreArrow";
import { BLOG_POSTS } from "@/data/blogs";
import SiteFooterBlock from "@/layouts/SiteFooterBlock";
import SiteHeader from "@/layouts/SiteHeader";

const INTRO_COPY = "Read the latest insights, updates, and stories from Prestige One Developments.";
const POSTS_PER_PAGE = 9;

type BlogListingsPageProps = {
  currentPage: number;
};

export default function BlogListingsPage({ currentPage }: BlogListingsPageProps) {
  const totalPages = Math.max(1, Math.ceil(BLOG_POSTS.length / POSTS_PER_PAGE));
  const start = (currentPage - 1) * POSTS_PER_PAGE;
  const visiblePosts = BLOG_POSTS.slice(start, start + POSTS_PER_PAGE);
  const pageNumbers = Array.from({ length: totalPages }, (_, idx) => idx + 1);
  const pageHref = (page: number) => (page <= 1 ? "/blogs" : `/blogs?page=${page}`);

  return (
    <>
      <SiteHeader />

      <main>
        <section className="po-list-page" aria-labelledby="blogs-list-heading">
          <div className="po-list-page-hero">
            <div className="container po-list-page-hero-inner">
              <p className="po-list-page-kicker">Prestige One Developments</p>
              <h1 id="blogs-list-heading" className="po-list-page-title">
                Blogs
              </h1>
              <p className="po-list-page-intro">{INTRO_COPY}</p>
            </div>
          </div>

          <div className="po-list-page-cards-shell" aria-label="Blog listings">
            <div className="container">
              <div className="po-list-page-grid list-page-grid">
                {visiblePosts.map((item) => (
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
                      <ListItemExploreLink href={`/blogs/${item.slug}`}>
                        <span>Read more</span>
                        <ListPageExploreArrow />
                      </ListItemExploreLink>
                    </div>
                  </article>
                ))}
              </div>

              {totalPages > 1 && (
                <nav className="po-blogs-pagination" aria-label="Blog pages">
                  <Link
                    href={pageHref(currentPage - 1)}
                    className="po-blogs-pagination-btn"
                    aria-disabled={currentPage === 1}
                    tabIndex={currentPage === 1 ? -1 : undefined}
                  >
                    Previous
                  </Link>
                  {pageNumbers.map((page) => (
                    <Link
                      key={page}
                      href={pageHref(page)}
                      className={`po-blogs-pagination-btn ${page === currentPage ? "is-active" : ""}`}
                      aria-current={page === currentPage ? "page" : undefined}
                    >
                      {page}
                    </Link>
                  ))}
                  <Link
                    href={pageHref(currentPage + 1)}
                    className="po-blogs-pagination-btn"
                    aria-disabled={currentPage === totalPages}
                    tabIndex={currentPage === totalPages ? -1 : undefined}
                  >
                    Next
                  </Link>
                </nav>
              )}
            </div>
          </div>
        </section>
      </main>

      <SiteFooterBlock />
    </>
  );
}
