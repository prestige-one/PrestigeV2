import LegalDocumentLayout from "@/components/legal/LegalDocumentLayout";

export default function CorporateSocialResponsibilityPage() {
  return (
    <LegalDocumentLayout
      title="Corporate Social Responsibility"
      description="How Prestige One builds responsibility to people and the planet into every decision we make."
      ariaLabel="Corporate social responsibility content"
    >
      <h2>Building homes, building future</h2>
      <p>
        We build homes, and we build lives. At Prestige One, our responsibility to people and the planet is woven into
        every decision we make.
      </p>

      <h2>Our mission</h2>

      <h3>Sustainability</h3>
      <p>
        We develop with intent. Our focus is on creating long-term value through responsible design and mindful building
        practices.
      </p>

      <h3>Fundamental rights</h3>
      <p>
        We respect the dignity of everyone touched by our work. That means fair, safe conditions across our sites and
        offices, respect for privacy, and a commitment to non-discrimination in how we partner, hire, and serve
        communities.
      </p>

      <figure className="po-legal-doc-quote">
        <blockquote>
          <p>When you&rsquo;re in a position to change lives, giving isn&rsquo;t generosity&mdash;it&rsquo;s duty.</p>
        </blockquote>
        <figcaption>Mr. Ajmal Saifi, CEO, Prestige One</figcaption>
      </figure>

      <h2>Our programs</h2>

      <h3>Food drive</h3>
      <p>
        Our team organizes food drives across the outskirts of the UAE, reaching communities where support is often out
        of reach. It&rsquo;s our way of ensuring no table stays empty.
      </p>

      <h3>Equal at work</h3>
      <p>
        Our Equal at Work program ensures fairness in every hire. Our recruitment team is trained to evaluate potential
        through a deep understanding of skill and merit, free from bias.
      </p>

      <h3>Giving to nonprofits</h3>
      <p>
        A portion of every dirham we earn goes to nonprofits and charities doing critical work in healthcare, education,
        and emergency relief. Giving back is not a campaign&mdash;it&rsquo;s part of our revenue model.
      </p>

      <h3>Sustainable developments</h3>
      <p>
        Every Prestige One development is built with sustainability at its core&mdash;from eco-conscious construction
        materials to energy-efficient systems. We&rsquo;re designing for the generations ahead.
      </p>
    </LegalDocumentLayout>
  );
}
