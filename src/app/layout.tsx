import type { Metadata } from "next";
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { PERSONAL_INFO } from "@/data/portfolioData";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: `${PERSONAL_INFO.name} — Full-Stack Software Developer Portfolio`,
  description:
    "Full-stack software developer specializing in high-performance web applications with React, Next.js, Node.js, Express, MongoDB, and PostgreSQL.",
  keywords: [
    "Mohamed Salih CK",
    "Mohamed Salih",
    "Full-Stack Developer",
    "Frontend Engineer",
    "React Developer",
    "Next.js Developer",
    "MERN Stack Developer",
    "Kerala Software Developer",
    "TypeScript Portfolio"
  ],
  authors: [{ name: PERSONAL_INFO.name, url: PERSONAL_INFO.canonicalUrl }],
  creator: PERSONAL_INFO.name,
  metadataBase: new URL(PERSONAL_INFO.canonicalUrl),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: PERSONAL_INFO.canonicalUrl,
    title: `${PERSONAL_INFO.name} — Full-Stack Software Developer`,
    description:
      "Full-stack developer portfolio featuring enterprise MERN SaaS apps, React streaming platforms, and responsive Next.js architectures.",
    siteName: `${PERSONAL_INFO.name} Portfolio`,
    images: [
      {
        url: "https://images.unsplash.com/photo-1642543492481-44e81e3914a7?w=1200&h=630&q=85",
        width: 1200,
        height: 630,
        alt: `${PERSONAL_INFO.name} — Full-Stack Software Developer`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${PERSONAL_INFO.name} — Full-Stack Software Developer`,
    description:
      "Full-stack software developer portfolio featuring React, Next.js, Node.js, and database engineering.",
    images: ["https://images.unsplash.com/photo-1642543492481-44e81e3914a7?w=1200&h=630&q=85"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  themeColor: "#07080b",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${PERSONAL_INFO.canonicalUrl}/#person`,
        name: PERSONAL_INFO.name,
        jobTitle: PERSONAL_INFO.title,
        url: PERSONAL_INFO.canonicalUrl,
        email: `mailto:${PERSONAL_INFO.email}`,
        telephone: PERSONAL_INFO.phone,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Malappuram",
          addressRegion: "Kerala",
          addressCountry: "IN",
        },
        sameAs: [
          PERSONAL_INFO.github,
          PERSONAL_INFO.linkedin,
          PERSONAL_INFO.livePortfolioUrl,
        ],
        knowsAbout: [
          "React.js",
          "Next.js",
          "TypeScript",
          "JavaScript",
          "Node.js",
          "Express.js",
          "MongoDB",
          "PostgreSQL",
          "Tailwind CSS",
          "RESTful APIs",
          "Full-Stack Development",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${PERSONAL_INFO.canonicalUrl}/#website`,
        name: `${PERSONAL_INFO.name} Portfolio`,
        url: PERSONAL_INFO.canonicalUrl,
        inLanguage: "en-US",
        publisher: { "@id": `${PERSONAL_INFO.canonicalUrl}/#person` },
      },
    ],
  };

  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@600;700;800;900&family=Plus+Jakarta+Sans:wght@700;800;900&family=Space+Grotesk:wght@600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} font-sans bg-[#07080b] text-[#f8fafc] min-h-screen selection:bg-[#00f59b] selection:text-[#07080b]`}
      >
        {children}
      </body>
    </html>
  );
}
