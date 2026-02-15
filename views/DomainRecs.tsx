import React from 'react';

export const DomainRecs: React.FC = () => {
  return (
    <div className="pt-24 pb-20 px-6 max-w-5xl mx-auto">
      <header className="mb-16">
        <h1 className="font-display text-4xl md:text-6xl font-bold mb-4">DOMAIN STRATEGY</h1>
        <p className="text-brand-white/60 text-lg">Top 3 recommendations based on the Brand DNA.</p>
      </header>

      <div className="grid gap-8">
        
        {/* Option 1 */}
        <div className="bg-brand-dark border border-brand-accent/30 p-8 relative overflow-hidden group">
          <div className="absolute top-0 right-0 bg-brand-accent text-brand-black text-xs font-bold px-3 py-1 uppercase tracking-widest">Top Choice</div>
          <h2 className="font-display text-3xl text-brand-white mb-2 group-hover:text-brand-accent transition-colors">markwon.dj</h2>
          <div className="flex gap-4 text-xs font-mono text-brand-white/50 mb-6">
            <span>Est. $59–$96/yr</span>
            <span>.dj TLD</span>
          </div>
          <div className="space-y-4 text-brand-white/80 font-light">
            <p><strong className="text-brand-white">Brand Fit:</strong> Perfect semantic alignment. The ".dj" extension immediately contextualizes the name, reinforcing the artist's role without needing to say "DJ Markwon" in the handle.</p>
            <p><strong className="text-brand-white">Visuals:</strong> Short, balanced, and architectural. Look at it: <span className="font-display uppercase tracking-wider ml-2">MARKWON.DJ</span>. It looks premium on a flyer footer.</p>
            <p><strong className="text-brand-white">Reasoning:</strong> For a "refined minimalist" aesthetic, shorter is better. It signals specialized professionalism.</p>
          </div>
        </div>

        {/* Option 2 */}
        <div className="bg-brand-dark border border-brand-gray p-8">
          <h2 className="font-display text-3xl text-brand-white mb-2">markwondj.com</h2>
          <div className="flex gap-4 text-xs font-mono text-brand-white/50 mb-6">
            <span>Est. $9–$13/yr</span>
            <span>.com TLD</span>
          </div>
          <div className="space-y-4 text-brand-white/80 font-light">
            <p><strong className="text-brand-white">Brand Fit:</strong> The safe, pragmatic choice. It leaves zero ambiguity about who the website belongs to and what the profession is.</p>
            <p><strong className="text-brand-white">Scalability:</strong> .com remains the gold standard for global credibility. If the goal is booking festivals globally, a .com often feels slightly more "corporate/established" to older promoters.</p>
          </div>
        </div>

        {/* Option 3 */}
        <div className="bg-brand-dark border border-brand-gray p-8">
          <h2 className="font-display text-3xl text-brand-white mb-2">themarkwon.com</h2>
          <div className="flex gap-4 text-xs font-mono text-brand-white/50 mb-6">
             <span>Est. $9–$13/yr</span>
             <span>.com TLD</span>
          </div>
          <div className="space-y-4 text-brand-white/80 font-light">
            <p><strong className="text-brand-white">Brand Fit:</strong> Adds a definitive article ("The") which creates a sense of unique status and importance, fitting the "Victory" origin story.</p>
            <p><strong className="text-brand-white">Vibe:</strong> Slightly more "artist" and less "service provider" than adding "DJ" to the URL. It suggests Markwon is an entity or a brand, not just a person mixing records.</p>
          </div>
        </div>

      </div>
    </div>
  );
};