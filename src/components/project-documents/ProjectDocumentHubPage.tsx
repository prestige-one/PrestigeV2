import Link from "next/link";
import SiteHeader from "@/layouts/SiteHeader";
import SiteFooterBlock from "@/layouts/SiteFooterBlock";
import type { ProjectDocumentHub } from "@/lib/project-document-hubs";

type Props = {
  hub: ProjectDocumentHub;
};

const ProjectDocumentHubPage = ({ hub }: Props) => {
  return (
    <>
      <SiteHeader />

      <section className="po-project-docs-hero">
        <div className="container">
          <div className="po-project-docs-hero-inner text-center">
            <p className="po-project-docs-kicker">Prestige One Developments</p>
            <h1>{hub.pageTitle}</h1>
            <p>
              Project disclosure and related documentation. Please read the information below before
              downloading.
            </p>
            
          </div>
        </div>
      </section>

      <section className="po-project-docs-hub-body">
        <div className="container">
          <div className="po-project-docs-hub-prose">
            <h2>Disclaimer</h2>
            <p>
              We have in preparing this information used our best endeavors to ensure that the
              information contained therein is true and accurate, but accept no responsibility and
              disclaim all liability in respect of any errors, inaccuracies or misstatements
              contained herein.
            </p>
            <p>
              Prospective purchasers should make their own inquiries to verify the information
              contained herein.
            </p>
            <p>
              All information contained in the Prestige One website is provided as a convenience to
              clients. All property prices displayed on the Website are current at the time of
              issue, but may change at any time and are subject to availability.
            </p>

            <h2>Warning</h2>
            <p>
              Information on the Website must not be used for any commercial purpose without the
              consent of Prestige One.
            </p>
            <p>
              Prestige One reserves the right to take whatever legal action it deems necessary to
              protect the security of this site and the intellectual property rights of the
              information provided by Prestige One and its franchised agencies.
            </p>
            <p>
              In particular any unauthorized use of this information has the potential to
              misrepresent in a misleading fashion the involvement of Prestige One and its authorized
              agencies in the reproduction. Any such misuse will be prosecuted.
            </p>

            <h2>Copyright policy</h2>
            <p>
              All content, including but not limited to text, material, graphics, software and
              advertisements on the Prestige One Website are copyright by Prestige One, its
              suppliers and/or licensors unless expressly indicated otherwise on the Website. Content
              on the Website is published in real-time, and you must not modify, copy, reproduce,
              republish, frame, upload to a third party, post, transmit or distribute this Content
              in any way except as expressly provided for on the Website or expressly authorized in
              writing by Prestige One or its affiliates. Strictly on the condition that you keep
              all content intact in the same form as presented on the Website (including without
              limitation all copyright, trade mark and other proprietary notices) you may download
              and view the Content for your personal, non-commercial use only. The Content is
              protected by UAE and international copyright and trade mark laws.
            </p>

            <h2>Privacy policy</h2>
            <p>
              Prestige One adheres to a strict{" "}
              <Link href="/privacy-policy" className="po-bo-bg">
                privacy policy
              </Link>
              .
            </p>

            <div className="po-project-docs-hub-cta-row">
              {hub.pdfHref ? (
                <a
                  href={hub.pdfHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="po-project-docs-hub-pdf-btn"
                >
                  View project document
                </a>
              ) : (
                <span className="po-project-docs-hub-pending">PDF coming soon — check back shortly.</span>
              )}
              <Link href="/project-documents" className="po-project-docs-hub-back-link">
                View All Project Documents
              </Link>
            </div>
          </div>
        </div>
      </section>

      <SiteFooterBlock />
    </>
  );
};

export default ProjectDocumentHubPage;
