import { Metadata } from "next";
import { ArticlePage } from "../../components/ArticlePage";

export const metadata: Metadata = {
  title: "How to Find the Best Content Creators in London? | Complete Guide 2024",
  description: "Discover how to find the best content creators in London. Learn to identify mobile-first vs professional creators, evaluate reach, and find the perfect match for your brand in 2024.",
  keywords: [
    "content creators London",
    "top influencers London",
    "hire content creators UK",
    "best TikTok creators London",
    "UGC creators UK",
    "London video content creators",
    "influencer marketing London"
  ],
  openGraph: {
    title: "How to Find the Best Content Creators in London? Complete Guide 2024",
    description: "Your complete guide to finding and hiring the best content creators in London. From mobile-first creators to professional videographers - discover what works for your brand.",
    type: "article",
    url: "https://matmora.com/how-to-find-the-best-content-creators-in-london",
    images: [
      {
        url: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "How to Find the Best Content Creators in London"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Find the Best Content Creators in London? Complete Guide 2024",
    description: "Your complete guide to finding and hiring the best content creators in London for maximum brand impact.",
    images: [
      "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=1200&h=630&fit=crop"
    ]
  }
};

export default function Page() {
  return <ArticlePage />;
} 