import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { GoogleTagManager } from "@next/third-parties/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const productionHost = process.env.VERCEL_PROJECT_PRODUCTION_URL;

const metadataBase = new URL(
  process.env.NEXT_PUBLIC_SITE_URL ??
  (productionHost
    ? `https://${productionHost}`
    : "http://localhost:3000")
);

export const metadata: Metadata = {
  metadataBase,
  title: {
    default: "Dra. Laís Namen | Saúde mental da infância e adolescência",
    template: "%s | Dra. Laís Namen",
  },
  description:
    "Cuidado médico humanizado para crianças, adolescentes e suas famílias, com escuta atenta, vínculo e decisões baseadas em evidências.",
  applicationName: "Dra. Laís Namen",
  keywords: [
    "saúde mental infantil",
    "saúde mental adolescente",
    "pediatria",
    "Belo Horizonte",
    "Dra. Laís Namen",
  ],
  authors: [{ name: "Dra. Laís Namen" }],
  creator: "Dra. Laís Namen",
  category: "Saúde",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: "Dra. Laís Namen",
    title: "Dra. Laís Namen | Cuidado que acolhe toda a família",
    description:
      "Saúde mental da infância e adolescência com escuta, vínculo e cuidado baseado em evidências.",
    images: [
      {
        url: "/Foto-Home.jpg",
        width: 1365,
        height: 2048,
        alt: "Retrato da Dra. Laís Namen",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dra. Laís Namen",
    description:
      "Cuidado médico humanizado em saúde mental da infância e adolescência.",
    images: ["/Foto-Home.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#fcfaf7",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} ${playfair.variable}`}>
        {children}
      </body>

      <GoogleTagManager gtmId="GTM-W7NDQQNS" />
    </html>
  );
}