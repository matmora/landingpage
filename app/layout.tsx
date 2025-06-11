import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Mat Mora | AI Entrepreneur, Creator & Founder at Mismi",
  description: "Mat Mora is a London-based entrepreneur, founder of Mismi AI, and content creator focused on AI, media, and innovation. Build your AI clone and automate your personal brand.",
  icons: {
    icon: [
      {
        url: "/images/favicon.png",
        type: "image/png",
        sizes: "32x32"
      },
      {
        url: "/images/favicon.png",
        type: "image/png",
        sizes: "16x16"
      }
    ],
    apple: [
      {
        url: "/images/favicon.png",
        type: "image/png",
        sizes: "180x180"
      }
    ],
    shortcut: [{ url: "/images/favicon.png" }],
    other: [
      {
        rel: "icon",
        url: "/images/favicon.png",
      },
    ],
  },
  manifest: "/manifest.json",
  viewport: {
    width: 'device-width',
    initialScale: 1
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <title>Mat Mora | AI Entrepreneur, Creator & Founder at Mismi</title>
        <meta name="description" content="Mat Mora is a London-based entrepreneur, founder of Mismi AI, and content creator focused on AI, media, and innovation. Build your AI clone and automate your personal brand." />
        <meta property="og:title" content="Mat Mora | AI Entrepreneur, Creator & Founder at Mismi" />
        <meta property="og:description" content="Mat Mora is a London-based entrepreneur, founder of Mismi AI, and content creator focused on AI, media, and innovation. Build your AI clone and automate your personal brand." />
        <meta property="og:image" content="/images/AI cam.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://matmora.com/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Mat Mora | AI Entrepreneur, Creator & Founder at Mismi" />
        <meta name="twitter:description" content="Mat Mora is a London-based entrepreneur, founder of Mismi AI, and content creator focused on AI, media, and innovation. Build your AI clone and automate your personal brand." />
        <meta name="twitter:image" content="/images/AI cam.png" />
        <link rel="canonical" href="https://matmora.com/" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Mat Mora",
              "url": "https://matmora.com/",
              "image": "https://matmora.com/images/AI%20cam.png",
              "jobTitle": "Founder at Mismi, Entrepreneur, Content Creator",
              "worksFor": {
                "@type": "Organization",
                "name": "Mismi AI",
                "url": "https://mismi.ai/"
              },
              "sameAs": [
                "https://www.instagram.com/matmora_/",
                "https://www.tiktok.com/@matmora_",
                "https://www.linkedin.com/in/mat-mora/"
              ],
              "description": "Mat Mora is a London-based entrepreneur, founder of Mismi — a platform that creates AI clones of professionals and creators to scale their influence and impact. With 100M+ organic views across platforms, Mat merges innovation and storytelling to redefine how we interact with content and automation.",
              "knowsAbout": ["AI", "media", "innovation", "automation", "content creation", "entrepreneurship"]
            })
          }}
        />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/favicon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={`${inter.className} bg-black bg-dotted-grid`}>{children}</body>
    </html>
  );
}
