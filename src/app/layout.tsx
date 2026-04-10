import "../styles/index.css";
import type { Metadata } from "next";
import { Golos_Text, Plus_Jakarta_Sans } from "next/font/google";
import {
  getMetadataBase,
  SITE_DEFAULT_DESCRIPTION,
  SITE_NAME,
} from "@/lib/site-meta";

const metadataBase = getMetadataBase();

export const metadata: Metadata = {
  ...(metadataBase ? { metadataBase } : {}),
  title: {
    default: `${SITE_NAME} | Luxury Real Estate Dubai`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DEFAULT_DESCRIPTION,
  icons: {
    icon: [
      { url: "/assets/images/v2/favicon.ico", type: "image/png", sizes: "any" },
      { url: "/assets/images/v2/favicon.png", type: "image/png", sizes: "any" },
    ],
    apple: "/assets/images/v2/favicon.png",
  },
};

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

const golosText = Golos_Text({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-golos-text",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="/assets/images/v2/favicon.ico"
          sizes="any"
          type="image/png"
        />
        <link rel="apple-touch-icon" href="/assets/images/v2/favicon.png" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css"
        />
      </head>
      <body className={`${plusJakartaSans.variable} ${golosText.variable}`}>
        {children}
      </body>
    </html>
  );
}
