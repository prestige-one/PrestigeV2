import ErrorArea from "@/components/error";
import Wrapper from "@/layouts/Wrapper";
import { createPageMetadata } from "@/lib/site-meta";

export const metadata = createPageMetadata({
  title: "Page not found",
  description: "The page you requested could not be found. Return to the Prestige One Developments homepage.",
});

export default function NotFound() {
  return (
    <Wrapper>
      <ErrorArea />
    </Wrapper>
  );
}
