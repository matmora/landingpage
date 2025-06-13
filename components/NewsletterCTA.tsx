'use client';

import { useState } from "react";
import { Mail, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

export const NewsletterCTA = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // Simulate subscription
      setIsSubscribed(true);
      setEmail("");
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 border border-blue-200 dark:border-blue-800 rounded-xl p-8 my-12 flex flex-col md:flex-row items-center gap-4">
      <Mail className="w-8 h-8 text-blue-600 dark:text-blue-400 mb-2 md:mb-0" />
      <div className="flex-1">
        <h4 className="font-semibold text-lg mb-1 text-blue-800 dark:text-blue-200">Get the latest creator insights</h4>
        <p className="text-blue-700 dark:text-blue-300 text-sm mb-2">Join our newsletter for exclusive tips on finding and working with the best content creators in London.</p>
        <div className="flex gap-2 items-center">
          <Input
            type="email"
            placeholder="Your email address"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            className="max-w-xs"
            disabled={isSubscribed}
          />
          <Button type="submit" disabled={isSubscribed || !email} className="flex items-center gap-2">
            {isSubscribed ? <CheckCircle className="w-5 h-5" /> : <ArrowRight className="w-5 h-5" />}
            {isSubscribed ? "Subscribed!" : "Subscribe"}
          </Button>
        </div>
      </div>
    </form>
  );
} 