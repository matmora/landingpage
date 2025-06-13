'use client';
import { TableOfContents } from "./TableOfContents";
import { AuthorBio } from "./AuthorBio";
import { PullQuote } from "./PullQuote";
import { TipBox } from "./TipBox";
import { NewsletterCTA } from "./NewsletterCTA";
import { Clock, Calendar, Tag } from "lucide-react";
import React from "react";

export const ArticlePage = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };
  return (
    <article className="min-h-screen bg-background">
      {/* Hero Section */}
      <header className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=1600&h=900&fit=crop')"
        }}>
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
          <div className="flex items-center justify-center gap-4 mb-6 text-sm opacity-90">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>June 12, 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>12 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <Tag className="w-4 h-4" />
              <span>Content Creator Guide</span>
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            How to Find the Best Content Creators in London?
          </h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto leading-relaxed">
            Your complete guide to discovering, evaluating, and hiring top content creators in London for maximum brand impact and authentic engagement.
          </p>
          <div className="flex items-center justify-center gap-3 mt-8">
            <img src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=64&h=64&fit=crop&crop=face" alt="Sarah Johnson, Content Marketing Expert" className="w-12 h-12 rounded-full border-2 border-white/30" />
            <div className="text-left">
              <div className="font-semibold">Mat Mora</div>
              <div className="text-sm opacity-75">Content Marketing Expert</div>
            </div>
          </div>
        </div>
      </header>
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Table of Contents - Sticky Sidebar */}
          <aside className="lg:col-span-1">
            <TableOfContents onSectionClick={scrollToSection} />
          </aside>
          {/* Article Content */}
          <main className="lg:col-span-3 prose prose-lg max-w-none">
            {/* Introduction */}
            <section id="introduction" className="mb-16">
              <h2 className="text-3xl font-bold mb-6 text-foreground">Why Finding the Right Content Creator Matters</h2>
              <p className="text-lg leading-relaxed mb-6 text-muted-foreground">
                London's creator economy is booming, with thousands of talented content creators across every niche imaginable. But here's the challenge: not every creator is the right fit for your brand. The difference between a successful campaign and a missed opportunity often comes down to understanding the nuances of creator selection.
              </p>
              <TipBox title="Success Metric" content="Brands that carefully match creator styles to their campaign goals see 3x higher engagement rates compared to those who focus solely on follower count." />
              <p className="text-lg leading-relaxed mt-6 text-muted-foreground">
                Whether you're a startup looking for authentic user-generated content or an established brand seeking premium visual storytelling, this guide will help you navigate London's diverse creator landscape and find your perfect match.
              </p>
            </section>
            {/* Two Types of Content Creators */}
            <section id="creator-types" className="mb-16">
              <h2 className="text-3xl font-bold mb-6 text-foreground">Understanding the Two Main Types of Content Creators</h2>
              <div className="mb-8">
                <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=400&fit=crop" alt="Content creator using mobile phone to create authentic social media content in London" className="w-full rounded-xl shadow-lg" />
                <caption className="text-sm text-muted-foreground mt-2 block text-center italic">
                  The creator landscape spans from mobile-first authenticity to professional production values.
                </caption>
              </div>
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 p-6 rounded-xl border border-blue-200 dark:border-blue-800">
                  <h3 className="text-2xl font-semibold mb-4 text-blue-800 dark:text-blue-200">Mobile-First Creators</h3>
                  <p className="text-blue-700 dark:text-blue-300 mb-4">
                    These creators use smartphones (primarily iPhones) and excel at creating authentic, relatable content that feels genuine and unfiltered.
                  </p>
                  <h4 className="font-semibold mb-2 text-blue-800 dark:text-blue-200">Best For:</h4>
                  <ul className="space-y-1 text-blue-700 dark:text-blue-300 text-sm">
                    <li>• User-generated content (UGC) campaigns</li>
                    <li>• Authentic product demonstrations</li>
                    <li>• Behind-the-scenes content</li>
                    <li>• Relatable lifestyle content</li>
                    <li>• Quick social media posts</li>
                  </ul>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 p-6 rounded-xl border border-purple-200 dark:border-purple-800">
                  <h3 className="text-2xl font-semibold mb-4 text-purple-800 dark:text-purple-200">Professional Creators</h3>
                  <p className="text-purple-700 dark:text-purple-300 mb-4">
                    These creators use high-end cameras, prime lenses, and professional equipment to produce premium visual content with exceptional production value.
                  </p>
                  <h4 className="font-semibold mb-2 text-purple-800 dark:text-purple-200">Best For:</h4>
                  <ul className="space-y-1 text-purple-700 dark:text-purple-300 text-sm">
                    <li>• Premium brand campaigns</li>
                    <li>• Product photography and videography</li>
                    <li>• Cinematic brand storytelling</li>
                    <li>• High-end fashion and lifestyle</li>
                    <li>• Commercial-grade content</li>
                  </ul>
                </div>
              </div>
              <PullQuote quote="The key is matching creator style to campaign intent. Authentic moments require mobile-first creators, while brand prestige calls for professional production." author="Marketing Director at London Creative Agency" />
            </section>
            {/* Video Content Power */}
            <section id="video-content" className="mb-16">
              <h2 className="text-3xl font-bold mb-6 text-foreground">The Undeniable Power of Video Content</h2>
              <p className="text-lg leading-relaxed mb-6 text-muted-foreground">In 2025, video isn't just king—it's the entire kingdom. TikTok, Instagram Reels, and YouTube Shorts have fundamentally shifted how audiences consume content, making video skills non-negotiable for successful creators.</p>
              <div className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-950/20 dark:to-orange-950/20 p-8 rounded-xl border border-red-200 dark:border-red-800 my-8">
                <h3 className="text-xl font-semibold mb-4 text-red-800 dark:text-red-200">Video Performance Statistics</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-red-600 dark:text-red-400 mb-2">85%</div>
                    <div className="text-sm text-red-700 dark:text-red-300">Higher engagement on video posts</div>
                  </div>
                  <div className="text-center">
                    {/* ... more stats ... */}
                  </div>
                </div>
              </div>
            </section>
            {/* ... more sections ... */}
          </main>
        </div>
      </div>
    </article>
  );
}; 