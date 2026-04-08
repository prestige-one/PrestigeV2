/**
 * Removes WordPress-style spacer paragraphs: empty <p></p>, whitespace-only,
 * &nbsp; / &#160; / &#xA0;, optional <br>, etc.
 */
const EMPTY_PARAGRAPH =
  /<p\b[^>]*>(?:\s|&nbsp;|&#160;|&#x0*[Aa]0;|&#8199;|<br\s*\/?>|\u00a0|\u200b|\ufeff)*<\/p>/gi;

export function stripEmptyParagraphsFromHtml(html: string): string {
  let out = html;
  let prev: string;
  do {
    prev = out;
    out = out.replace(EMPTY_PARAGRAPH, "");
  } while (out !== prev);
  return out;
}
