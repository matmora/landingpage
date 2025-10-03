'use client'

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export default function Page() {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuAnimate, setMenuAnimate] = useState(false);

  useEffect(() => {
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '50px'
    });

    document.querySelectorAll('.scroll-animation').forEach((element) => {
      observerRef.current?.observe(element);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  useEffect(() => {
    const loadTally = () => {
      const existingScript = document.querySelector('script[src="https://tally.so/widgets/embed.js"]');
      if (!existingScript) {
        const script = document.createElement('script');
        script.src = "https://tally.so/widgets/embed.js";
        script.async = true;
        script.onload = () => {
          // @ts-ignore
          if (window.Tally) {
            // @ts-ignore
            window.Tally.loadEmbeds();
          }
        };
        document.body.appendChild(script);
      }
    };

    loadTally();
  }, []);

  return (
    <div
      style={{ fontFamily: "'Times New Roman', Times, serif" }}
      className="bg-black relative min-h-screen w-full overflow-hidden flex items-center justify-center"
    >
      <img
        src="/images/AI cam.png"
        alt="Retro video camera with AI on the screen, Mat Mora branding"
        className="fixed z-0 bottom-0 right-0 w-[90vw] max-w-[600px] md:w-[40vw] md:max-w-[500px] h-auto object-contain select-none pointer-events-none transition-all duration-500"
        style={{
          position: 'fixed',
          bottom: 0,
          right: 0,
          left: 'auto',
          top: 'auto',
        }}
      />
      <div className="absolute z-10 left-0 right-0 mx-auto top-0 bottom-0 flex items-center justify-center pointer-events-none md:hidden">
        <div className="w-full max-w-2xl px-4 py-12 h-[420px] sm:h-[520px] rounded-3xl mx-auto"
          style={{
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            background: 'rgba(0,0,0,0.25)',
          }}
        />
      </div>
      <div className="absolute top-0 left-0 w-full flex flex-col items-center pt-6 z-30">
        <div className="flex items-center gap-2 fade-in" style={{ animationDelay: '0.1s' }}>
          <h1 className="text-white text-lg md:text-xl font-semibold tracking-tight font-sans" aria-label="Mat GPT">Mat GPT</h1>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9"/></svg>
        </div>
      </div>
      <div className="absolute top-4 left-4 z-40">
        <button
          className="w-10 h-10 flex items-center justify-center rounded-md bg-black/40 backdrop-blur-md cursor-pointer transition-transform hover:scale-110 focus:outline-none"
          aria-label="Open menu"
          onClick={() => setMenuOpen(true)}
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
        </button>
      </div>
      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 flex flex-col items-center justify-center animate-fadeIn">
          <button
            className="absolute top-6 right-6 text-white text-2xl p-2 rounded-full hover:bg-white/10 transition"
            aria-label="Close menu"
            onClick={() => setMenuOpen(false)}
          >
            &times;
          </button>
          <div className="flex flex-col gap-6 w-full max-w-xs mx-auto">
            <a href="https://app.youform.com/forms/bkbeiyp6" className="flex items-center gap-3 px-4 py-3 rounded-lg transition-transform hover:scale-105 focus:scale-105 bg-black/60 focus:outline-none" style={{textDecoration: 'none'}}>
              <img src="/images/person-standing.svg" alt="Humans icon" className="w-5 h-5" />
              <span className="text-white font-medium font-sans">Humans</span>
            </a>
            <a href="https://app.youform.com/forms/qrdlkars" className="flex items-center gap-3 px-4 py-3 rounded-lg transition-transform hover:scale-105 focus:scale-105 bg-black/60 focus:outline-none" style={{textDecoration: 'none'}}>
              <img src="/images/lightbulb.svg" alt="Brands icon" className="w-5 h-5" />
              <span className="text-white font-medium font-sans">Brands</span>
            </a>
            <a href="https://t.me/+itOfNgevMOI0YjE8" className="flex items-center gap-3 px-4 py-3 rounded-lg transition-transform hover:scale-105 focus:scale-105 bg-black/60 focus:outline-none" style={{textDecoration: 'none'}}>
              <img src="/images/rss.svg" alt="Newsletter icon" className="w-5 h-5" />
              <span className="text-white font-medium font-sans">Newsletter</span>
            </a>
            <div className="flex flex-col gap-3 items-start min-w-[120px] mt-2">
              <a href="https://www.instagram.com/matmora_/" className="flex items-center gap-2 text-neutral-400" aria-label="Instagram">
                <img src="/images/Instagram logo icon.svg" alt="Instagram logo icon for Mat Mora" className="w-4 h-4" />
                <span className="text-sm font-sans">Instagram</span>
              </a>
              <a href="https://www.tiktok.com/@matmora_" className="flex items-center gap-2 text-neutral-400" aria-label="TikTok">
                <img src="/images/Tiktok logo icon.ico" alt="TikTok logo icon for Mat Mora" className="w-4 h-4" />
                <span className="text-sm font-sans">TikTok</span>
              </a>
              <a href="https://www.linkedin.com/in/mat-mora/" className="flex items-center gap-2 text-neutral-400" aria-label="LinkedIn">
                <img src="/images/Linkedin logo icon.svg" alt="LinkedIn logo icon for Mat Mora" className="w-4 h-4" />
                <span className="text-sm font-sans">LinkedIn</span>
              </a>
            </div>
            <div className="mt-6 flex justify-between text-xs text-neutral-500 w-full">
              <span>Press ⌘M to enjoy life</span>
              <span>ESC to cancel</span>
            </div>
          </div>
        </div>
      )}
      <div className="relative z-20 flex flex-col items-center justify-center w-full max-w-2xl px-4 py-12">
        <h2 className="text-white text-xl md:text-2xl font-medium mb-12 fade-in font-sans" style={{ animationDelay: '0.2s', marginTop: '2.5rem' }} aria-label="What can I help with?">What can I help with?</h2>
        <div className="w-full max-w-xl mb-8 fade-in" style={{ animationDelay: '0.3s' }}>
          <div className="relative">
            <input
              type="text"
              placeholder="AI, Collab, ...?"
              className={`w-full px-5 py-4 rounded-lg bg-black/60 text-white placeholder-neutral-400 border border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-400/30 text-lg shadow-lg backdrop-blur-md ${inter.className}`}
              onFocus={() => setMenuAnimate(true)}
              readOnly
            />
            <button className="absolute right-3 top-1/2 -translate-y-1/2 p-2 text-white bg-blue-500/80 rounded-lg hover:bg-blue-600/80 transition-colors"
              onClick={() => setMenuAnimate(true)}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
            </button>
          </div>
        </div>
        <div className="w-full max-w-xl bg-black/60 rounded-2xl p-6 mb-6 fade-in flex flex-col items-start ml-0 md:ml-8" style={{ animationDelay: '0.4s', marginTop: '-2rem' }}>
          <div className="flex flex-col gap-2 mb-6 w-full">
            <a href="https://app.youform.com/forms/bkbeiyp6" className={`flex items-center px-3 py-2 rounded-lg transition-transform hover:scale-[1.04] focus:scale-[1.04] group w-full ${menuAnimate ? 'animate-menu-pop' : ''}`} style={{textDecoration: 'none', fontSize: '0.95rem', justifyContent: 'space-between'}} onAnimationEnd={() => setMenuAnimate(false)} tabIndex={0}>
              <div className="flex items-center gap-1 min-w-0">
                <img src="/images/person-standing.svg" alt="Humans icon" className="w-5 h-5 mr-1" />
                <span className="text-white font-medium font-sans whitespace-nowrap" style={{fontSize: '0.98em'}} >Humans</span>
                <span className="text-xs text-neutral-400 ml-1 font-sans whitespace-nowrap">Become Next Gen</span>
              </div>
              <span className="text-xs text-neutral-400 font-sans whitespace-nowrap pl-2" style={{marginLeft: 'auto', letterSpacing: '0.01em'}} >⌘H Creators</span>
            </a>
            <a href="https://app.youform.com/forms/qrdlkars" className={`flex items-center px-3 py-2 rounded-lg transition-transform hover:scale-[1.04] focus:scale-[1.04] group w-full ${menuAnimate ? 'animate-menu-pop' : ''}`} style={{textDecoration: 'none', fontSize: '0.95rem', justifyContent: 'space-between'}} onAnimationEnd={() => setMenuAnimate(false)} tabIndex={0}>
              <div className="flex items-center gap-1 min-w-0">
                <img src="/images/lightbulb.svg" alt="Brands icon" className="w-5 h-5 mr-1" />
                <span className="text-white font-medium font-sans whitespace-nowrap" style={{fontSize: '0.98em'}} >Brands</span>
                <span className="text-xs text-neutral-400 ml-1 font-sans whitespace-nowrap">Collaborations</span>
              </div>
              <span className="text-xs text-neutral-400 font-sans whitespace-nowrap pl-2" style={{marginLeft: 'auto', letterSpacing: '0.01em'}} >⌘B Connect</span>
            </a>
            <a href="https://t.me/+itOfNgevMOI0YjE8" className={`flex items-center px-3 py-2 rounded-lg transition-transform hover:scale-[1.04] focus:scale-[1.04] group w-full ${menuAnimate ? 'animate-menu-pop' : ''}`} style={{textDecoration: 'none', fontSize: '0.95rem', justifyContent: 'space-between'}} onAnimationEnd={() => setMenuAnimate(false)} tabIndex={0}>
              <div className="flex items-center gap-1 min-w-0">
                <img src="/images/rss.svg" alt="Newsletter icon" className="w-5 h-5 mr-1" />
                <span className="text-white font-medium font-sans whitespace-nowrap" style={{fontSize: '0.98em'}} >Newsletter</span>
                <span className="text-xs text-neutral-400 ml-1 font-sans whitespace-nowrap">Telegram</span>
              </div>
              <span className="text-xs text-neutral-400 font-sans whitespace-nowrap pl-2" style={{marginLeft: 'auto', letterSpacing: '0.01em'}} >⌘C Channel</span>
            </a>
          </div>
          <div className="mt-6 text-neutral-400 text-sm font-sans">Follow for more.</div>
          <div className="flex flex-col gap-3 items-start min-w-[120px] mt-2">
            <a href="https://www.instagram.com/matmora_/" className="flex items-center gap-2 text-neutral-400" aria-label="Instagram">
              <img src="/images/Instagram logo icon.svg" alt="Instagram logo icon for Mat Mora" className="w-4 h-4" />
              <span className="text-sm font-sans">Instagram</span>
            </a>
            <a href="https://www.tiktok.com/@matmora_" className="flex items-center gap-2 text-neutral-400" aria-label="TikTok">
              <img src="/images/Tiktok logo icon.ico" alt="TikTok logo icon for Mat Mora" className="w-4 h-4" />
              <span className="text-sm font-sans">TikTok</span>
            </a>
            <a href="https://www.linkedin.com/in/mat-mora/" className="flex items-center gap-2 text-neutral-400" aria-label="LinkedIn">
              <img src="/images/Linkedin logo icon.svg" alt="LinkedIn logo icon for Mat Mora" className="w-4 h-4" />
              <span className="text-sm font-sans">LinkedIn</span>
            </a>
          </div>
          <div className="mt-6 flex justify-between text-xs text-neutral-500 w-full">
            <span>Press ⌘M to enjoy life</span>
            <span>ESC to cancel</span>
          </div>
        </div>
      </div>
      <style jsx>{`
        .fade-in {
          opacity: 0;
          transform: translateY(24px);
          animation: fadeInUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: none;
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        .animate-menu-pop {
          animation: menuPop 0.5s cubic-bezier(0.22, 1, 0.36, 1);
        }
        @keyframes menuPop {
          0% { transform: scale(1); }
          30% { transform: scale(1.08); }
          60% { transform: scale(0.96); }
          100% { transform: scale(1); }
        }
      `}</style>
      <meta name="keywords" content="Mat Mora, Mismi AI, AI content creator, entrepreneur in tech, build your AI clone, personal AI automation, London entrepreneur, AI media innovation" />
    </div>
  );
}