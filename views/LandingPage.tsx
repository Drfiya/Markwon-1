import React, { useEffect, useRef } from 'react';
import { Logo } from '../components/Logo';
import { EventItem, MixItem } from '../types';
import { Play, ArrowRight, Instagram, Music, Twitter, Mail } from 'lucide-react';

const EVENTS: EventItem[] = [
  { id: 1, date: 'OCT 14', venue: 'Fabric', city: 'London, UK', link: '#' },
  { id: 2, date: 'NOV 02', venue: 'Watergate', city: 'Berlin, DE', link: '#' },
  { id: 3, date: 'NOV 18', venue: 'Warehouse Project', city: 'Manchester, UK', link: '#' },
];

const MIXES: MixItem[] = [
  { id: 1, title: 'Deep Sessions 042', date: 'SEP 2023', genres: ['Deep House', 'Minimal'], duration: '64:20' },
  { id: 2, title: 'Live at Printworks', date: 'AUG 2023', genres: ['Tech House', 'Peak Time'], duration: '88:15' },
  { id: 3, title: 'Sunrise Transition', date: 'JUL 2023', genres: ['House', 'Dub'], duration: '59:00' },
];

export const LandingPage: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  // Parallax effect
  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrolled = window.scrollY;
        heroRef.current.style.transform = `translateY(${scrolled * 0.3}px)`;
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="relative overflow-hidden">
      
      {/* SECTION 1: HERO */}
      <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-brand-black z-0">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-accent/5 rounded-full blur-[120px] animate-pulse-slow"></div>
            <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-brand-white/5 rounded-full blur-[80px]"></div>
        </div>

        <div ref={heroRef} className="relative z-10 text-center px-4 flex flex-col items-center gap-6">
          <Logo variant="full" className="w-[80vw] max-w-4xl text-brand-white drop-shadow-2xl animate-fade-in" />
          <h2 className="font-display text-lg md:text-2xl tracking-[0.5em] text-brand-accent uppercase mt-4 opacity-0 animate-[fadeIn_1s_ease-out_0.5s_forwards]">
            Groove. Pulse. Victory.
          </h2>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
           <span className="text-[10px] uppercase tracking-widest text-brand-white">Scroll</span>
        </div>
      </section>

      {/* SECTION 2: ABOUT */}
      <section className="py-24 md:py-40 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div className="order-2 md:order-1 space-y-8">
          <h3 className="font-display text-4xl md:text-5xl font-bold leading-tight">
            THE SOUND OF <br/>
            <span className="text-brand-accent">MOMENTUM</span>.
          </h3>
          <div className="space-y-6 text-brand-white/80 font-light leading-relaxed text-lg">
            <p>
              Markwon isn't just a name; it's a statement of intent. A play on "Mark Won," the moniker represents the undeniable victory of the groove over the static.
            </p>
            <p>
              Born in the basements of London and refined in the warehouses of Berlin, Markwon constructs sets that function like architecture: solid foundations, hypnotic rhythmic structures, and moments of release that feel earned, not cheap. Bridging the gap between deep, rolling underground house and peak-time tech energy, he is the DJ who moves you before you realize you're dancing.
            </p>
          </div>
        </div>
        <div className="order-1 md:order-2 relative aspect-[3/4] md:aspect-square bg-brand-dark border border-brand-gray group overflow-hidden">
          {/* Stylized Placeholder for Press Photo */}
          <div className="absolute inset-0 flex items-center justify-center">
             <div className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-gray/40 to-brand-black flex flex-col items-center justify-center gap-4">
                <Logo variant="icon" className="w-24 h-24 text-brand-white/10" />
                <span className="font-mono text-xs text-brand-white/20 uppercase tracking-widest">Press Shot Placeholder</span>
             </div>
          </div>
          {/* Overlay Effect */}
          <div className="absolute inset-0 bg-brand-accent/0 group-hover:bg-brand-accent/10 transition-colors duration-500"></div>
        </div>
      </section>

      {/* SECTION 3: MUSIC */}
      <section className="py-24 bg-brand-dark border-y border-brand-gray/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
            <h3 className="font-display text-4xl md:text-6xl font-bold">LATEST MIXES</h3>
            <div className="flex gap-4">
                {['Spotify', 'SoundCloud', 'Beatport', 'Apple Music'].map(platform => (
                    <a key={platform} href="#" className="text-xs uppercase tracking-widest border border-brand-white/20 px-4 py-2 hover:border-brand-accent hover:text-brand-accent transition-colors">{platform}</a>
                ))}
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {MIXES.map((mix) => (
              <div key={mix.id} className="group relative bg-brand-black border border-brand-gray hover:border-brand-accent/50 transition-colors p-6 aspect-square flex flex-col justify-between">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10"></div>
                <div className="relative z-10 flex justify-between items-start">
                   <span className="font-mono text-xs text-brand-accent">{mix.date}</span>
                   <span className="font-mono text-xs text-brand-white/40">{mix.duration}</span>
                </div>
                
                <div className="relative z-10 flex-grow flex items-center justify-center">
                    <button className="w-16 h-16 rounded-full border border-brand-white/20 flex items-center justify-center group-hover:scale-110 group-hover:border-brand-accent group-hover:bg-brand-accent group-hover:text-brand-black transition-all duration-300">
                        <Play className="fill-current ml-1" size={24} />
                    </button>
                </div>

                <div className="relative z-10">
                  <h4 className="font-display text-2xl font-bold mb-2 group-hover:text-brand-accent transition-colors">{mix.title}</h4>
                  <div className="flex gap-2">
                    {mix.genres.map(g => (
                        <span key={g} className="text-[10px] uppercase tracking-wider text-brand-white/50 border border-brand-white/10 px-2 py-1">{g}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: EVENTS */}
      <section className="py-24 max-w-5xl mx-auto px-6">
        <h3 className="font-display text-4xl md:text-6xl font-bold mb-12 text-center">UPCOMING DATES</h3>
        <div className="border-t border-brand-white/10">
          {EVENTS.map((event) => (
            <div key={event.id} className="group border-b border-brand-white/10 py-8 flex flex-col md:flex-row items-center justify-between hover:bg-brand-white/5 transition-colors px-4">
              <div className="text-center md:text-left mb-4 md:mb-0 w-32">
                <span className="font-mono text-brand-accent block text-sm">{event.date.split(' ')[0]}</span>
                <span className="font-display text-3xl font-bold">{event.date.split(' ')[1]}</span>
              </div>
              <div className="text-center md:text-left flex-grow md:pl-12">
                <h4 className="font-display text-2xl group-hover:text-brand-accent transition-colors">{event.venue}</h4>
                <p className="font-mono text-sm text-brand-white/50 uppercase tracking-widest">{event.city}</p>
              </div>
              <a href={event.link} className="mt-4 md:mt-0 px-8 py-3 bg-brand-white text-brand-black font-bold font-display uppercase hover:bg-brand-accent transition-colors flex items-center gap-2 text-sm">
                Tickets <ArrowRight size={14} />
              </a>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
            <button className="text-xs uppercase tracking-[0.2em] text-brand-white/40 hover:text-brand-white transition-colors border-b border-transparent hover:border-brand-white pb-1">View Past Events</button>
        </div>
      </section>

      {/* SECTION 5: CONTACT */}
      <section className="py-24 bg-brand-white text-brand-black">
        <div className="max-w-4xl mx-auto px-6 grid md:grid-cols-2 gap-16">
          <div>
            <h3 className="font-display text-4xl font-bold mb-6">BOOKING &<br/>INQUIRIES</h3>
            <p className="font-body text-brand-black/70 mb-8">
              For club nights, festivals, and private events. Please include date, location, and venue capacity.
            </p>
            <div className="flex flex-col gap-4 mb-8">
                <a href="mailto:booking@markwon.dj" className="flex items-center gap-3 font-display font-bold text-lg hover:text-brand-accent transition-colors">
                    <Mail size={20} /> booking@markwon.dj
                </a>
            </div>
            <div className="flex gap-6">
                <Instagram className="cursor-pointer hover:text-brand-accent transition-colors" />
                <Music className="cursor-pointer hover:text-brand-accent transition-colors" />
                <Twitter className="cursor-pointer hover:text-brand-accent transition-colors" />
            </div>
          </div>

          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div>
                <label className="block text-xs uppercase font-bold tracking-widest mb-2">Name</label>
                <input type="text" className="w-full bg-transparent border-b border-brand-black/20 py-2 focus:border-brand-accent outline-none transition-colors rounded-none placeholder-brand-black/30" placeholder="Promoter or Agency Name" />
            </div>
            <div>
                <label className="block text-xs uppercase font-bold tracking-widest mb-2">Email</label>
                <input type="email" className="w-full bg-transparent border-b border-brand-black/20 py-2 focus:border-brand-accent outline-none transition-colors rounded-none placeholder-brand-black/30" placeholder="contact@example.com" />
            </div>
            <div>
                <label className="block text-xs uppercase font-bold tracking-widest mb-2">Type</label>
                <select className="w-full bg-transparent border-b border-brand-black/20 py-2 focus:border-brand-accent outline-none transition-colors rounded-none text-brand-black/80">
                    <option>Club Night</option>
                    <option>Festival</option>
                    <option>Private Event</option>
                    <option>Other</option>
                </select>
            </div>
            <div>
                <label className="block text-xs uppercase font-bold tracking-widest mb-2">Message</label>
                <textarea rows={4} className="w-full bg-transparent border-b border-brand-black/20 py-2 focus:border-brand-accent outline-none transition-colors rounded-none placeholder-brand-black/30" placeholder="Tell us about the event..." />
            </div>
            <button className="bg-brand-black text-brand-white px-8 py-4 w-full font-display font-bold uppercase tracking-widest hover:bg-brand-accent hover:text-brand-black transition-colors mt-4">
                Send Request
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 px-6 border-t border-brand-gray/30 text-center">
        <Logo variant="icon" className="w-8 h-8 mx-auto mb-6 text-brand-white/30" />
        <p className="text-xs text-brand-white/30 uppercase tracking-widest">
            &copy; {new Date().getFullYear()} MARKWON. All rights reserved. <br/>
            Website by <span className="text-brand-accent">AI Studio</span>.
        </p>
      </footer>
    </main>
  );
};