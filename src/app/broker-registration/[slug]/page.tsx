import { notFound } from "next/navigation";
import BrokerRegistrationDetailPage from "@/components/broker-registration/BrokerRegistrationDetailPage";
import {
  BROKER_REGISTRATION_PAGE_CONTENT,
  BROKER_REGISTRATION_SLUGS,
  isBrokerRegistrationSlug,
} from "@/data/broker-registration";
import Wrapper from "@/layouts/Wrapper";

export function generateStaticParams() {
  return BROKER_REGISTRATION_SLUGS.map((slug) => ({ slug }));
}

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  if (!isBrokerRegistrationSlug(slug)) {
    return { title: "Broker registration | Prestige One Developments" };
  }
  const { heroTitle } = BROKER_REGISTRATION_PAGE_CONTENT[slug];
  return {
    title: `${heroTitle} | Prestige One Developments`,
    description: `Broker registration — ${heroTitle}. Prestige One Developments.`,
  };
}

export default async function BrokerRegistrationSlugRoute({ params }: PageProps) {
  const { slug } = await params;
  if (!isBrokerRegistrationSlug(slug)) {
    notFound();
  }
  const content = BROKER_REGISTRATION_PAGE_CONTENT[slug];

  return (
    <Wrapper>
      <BrokerRegistrationDetailPage slug={slug} {...content} />
    </Wrapper>
  );
}
