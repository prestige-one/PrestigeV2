import LegalDocumentLayout from "@/components/legal/LegalDocumentLayout";
import Link from "next/link";

export default function MarketingTermsPage() {
  return (
    <LegalDocumentLayout
      title="Marketing Terms & Conditions"
      description="Terms governing use of marketing materials and disclaimers in conjunction with our general terms of use."
      ariaLabel="Marketing terms and conditions content"
    >
      <div className="po-legal-doc-lead">
        <h2>1. Notice to protect your rights, governing use of marketing materials</h2>
        <p>
          Please read these Terms &amp; Conditions carefully. These are the Terms &amp; Conditions governing use and
          disclaimer for marketing materials in conjunction with general{" "}
          <Link href="/terms-conditions">Terms of Use</Link> which apply.
        </p>
      </div>

      <h2>2. Disclaimer for marketing materials</h2>
      <p>
        All images, renderings, floor plans, layouts, and other visuals in this material are indicative artistic
        impressions for conceptual purposes only and do not represent actual photographs of the project or Units and is
        copyright of the Developer which shall not be reproduced or used without consent. Designs, finishes, colors,
        materials, dimensions, landscaping, amenities, and surrounding views may vary during design development or
        construction. Furniture, appliances, and decorative elements shown are illustrative and only included where
        expressly stated in the Sale and Purchase Agreement (SPA). This material does not constitute an offer, warranty,
        or representation beyond the specifications and obligations expressly set out in the SPA.
      </p>
    </LegalDocumentLayout>
  );
}
