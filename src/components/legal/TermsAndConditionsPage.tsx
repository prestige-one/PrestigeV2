import LegalDocumentLayout from "@/components/legal/LegalDocumentLayout";
import TermsAndConditionsBody from "@/components/legal/TermsAndConditionsBody";

export default function TermsAndConditionsPage() {
  return (
    <LegalDocumentLayout
      title="Terms & Conditions"
      description="General terms governing your access and use of the Prestige One website and related services."
      ariaLabel="Terms and conditions content"
    >
      <TermsAndConditionsBody />
    </LegalDocumentLayout>
  );
}
