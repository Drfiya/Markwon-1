import React from 'react';
import { Logo } from '../components/Logo';

export const BrandingKit: React.FC = () => {
  return (
    <div className="pt-24 pb-20 px-6 max-w-5xl mx-auto space-y-24">
      <header className="border-b border-brand-gray/50 pb-8">
        <h1 className="font-display text-5xl md:text-7xl font-bold mb-4">BRAND IDENTITY</h1>
        <p className="text-brand-white/60 text-lg max-w-2xl font-body">
          Visual system and guidelines for Markwon. <br/>
          Keywords: Minimalist, Architectural, Kinetic, Underground.
        </p>
      </header>

      {/* 1. Logos */}
      <section className="grid md:grid-cols-12 gap-8">
        <div className="md:col-span-4">
          <h2 className="font-display text-2xl mb-4 text-brand-accent">01 LOGO SYSTEM</h2>
          <p className="text-sm text-brand-white/50">Primary wordmark and responsive variations. The "M" monogram serves as the social token.</p>
        </div>
        <div className="md:col-span-8 grid gap-8">
          <div className="bg-brand-dark border border-brand-gray p-12 flex flex-col items-center justify-center gap-8">
            <span className="text-xs text-brand-white/30 uppercase tracking-widest mb-4 w-full text-center">On Dark</span>
            <Logo variant="full" className="w-64 text-brand-white" />
            <div className="flex gap-12 items-end">
              <Logo variant="stacked" className="w-16 h-16 text-brand-white" />
              <Logo variant="icon" className="w-12 h-12 text-brand-white" />
            </div>
          </div>
          <div className="bg-brand-white p-12 flex flex-col items-center justify-center gap-8">
            <span className="text-xs text-brand-black/30 uppercase tracking-widest mb-4 w-full text-center">On Light</span>
            <Logo variant="full" className="w-64 text-brand-black" />
            <div className="flex gap-12 items-end">
              <Logo variant="stacked" className="w-16 h-16 text-brand-black" />
              <Logo variant="icon" className="w-12 h-12 text-brand-black" />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Colors */}
      <section className="grid md:grid-cols-12 gap-8">
        <div className="md:col-span-4">
          <h2 className="font-display text-2xl mb-4 text-brand-accent">02 COLOR PALETTE</h2>
          <p className="text-sm text-brand-white/50">Restrained monochrome base with a single metallic gold accent. No neon.</p>
        </div>
        <div className="md:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="space-y-2">
            <div className="h-32 bg-brand-black border border-brand-gray"></div>
            <p className="font-mono text-xs">Black<br/><span className="text-brand-white/50">#080808</span></p>
          </div>
          <div className="space-y-2">
            <div className="h-32 bg-brand-dark border border-brand-gray"></div>
            <p className="font-mono text-xs">Dark Gray<br/><span className="text-brand-white/50">#121212</span></p>
          </div>
          <div className="space-y-2">
            <div className="h-32 bg-brand-white border border-brand-gray"></div>
            <p className="font-mono text-xs text-brand-black">Off White<br/><span className="text-brand-white/50">#F2F2F2</span></p>
          </div>
          <div className="space-y-2">
            <div className="h-32 bg-brand-accent"></div>
            <p className="font-mono text-xs text-brand-accent">Muted Gold<br/><span className="text-brand-white/50">#CC9933</span></p>
          </div>
        </div>
      </section>

      {/* 3. Typography */}
      <section className="grid md:grid-cols-12 gap-8">
        <div className="md:col-span-4">
          <h2 className="font-display text-2xl mb-4 text-brand-accent">03 TYPOGRAPHY</h2>
          <p className="text-sm text-brand-white/50">Syne (Display) for distinctive, rhythmic headers. Manrope (Body) for high readability.</p>
        </div>
        <div className="md:col-span-8 space-y-12">
          <div className="space-y-4">
            <span className="text-xs text-brand-accent uppercase tracking-widest">Display</span>
            <p className="font-display text-6xl font-extrabold leading-none">Aa Bb Cc</p>
            <p className="font-display text-4xl font-bold">THE QUICK BROWN FOX JUMPS.</p>
            <p className="font-display text-4xl">GROOVE. PULSE. VICTORY.</p>
          </div>
          <div className="space-y-4 border-t border-brand-gray/30 pt-8">
            <span className="text-xs text-brand-accent uppercase tracking-widest">Body</span>
            <p className="font-body text-2xl">Aa Bb Cc</p>
            <p className="font-body text-base max-w-md text-brand-white/70">
              Markwon’s sound is defined by rolling basslines and hypnotic percussion. It is the sound of the warehouse at 4 AM.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Brand Voice */}
      <section className="grid md:grid-cols-12 gap-8">
        <div className="md:col-span-4">
          <h2 className="font-display text-2xl mb-4 text-brand-accent">04 VOICE & TONE</h2>
          <p className="text-sm text-brand-white/50">Confident, brief, and music-focused. Avoid hype-beast language.</p>
        </div>
        <div className="md:col-span-8 grid md:grid-cols-2 gap-8">
          <div className="bg-brand-dark p-6 border border-brand-gray/50">
            <h3 className="font-display text-lg mb-2">The Vibe</h3>
            <ul className="list-disc list-inside text-sm text-brand-white/60 space-y-2">
              <li>Less is more.</li>
              <li>Focus on the "feeling" of the room.</li>
              <li>Professional but underground.</li>
            </ul>
          </div>
          <div className="bg-brand-dark p-6 border border-brand-gray/50">
            <h3 className="font-display text-lg mb-2">Sample Post</h3>
            <p className="text-sm text-brand-white/80 italic">
              "Tunnel vision. 3 hours of deep cuts tonight at @Fabric. See you on the floor. 11PM-Close."
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};