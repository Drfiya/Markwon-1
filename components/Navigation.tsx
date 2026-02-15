import React, { useState } from 'react';
import { Logo } from './Logo';
import { ViewState } from '../types';
import { Menu, X } from 'lucide-react';

interface NavigationProps {
  currentView: ViewState;
  setView: (view: ViewState) => void;
}

export const Navigation: React.FC<NavigationProps> = ({ currentView, setView }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNav = (view: ViewState) => {
    setView(view);
    setIsOpen(false);
    window.scrollTo(0, 0);
  };

  const NavLink = ({ view, label }: { view: ViewState; label: string }) => (
    <button
      onClick={() => handleNav(view)}
      className={`text-sm tracking-widest uppercase transition-colors duration-300 ${
        currentView === view ? 'text-brand-accent' : 'text-brand-white hover:text-brand-accent'
      }`}
    >
      {label}
    </button>
  );

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-brand-black/90 backdrop-blur-md border-b border-brand-gray/30">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <button onClick={() => handleNav('landing')} className="flex items-center gap-2 group">
          <Logo variant="icon" className="h-8 w-8 text-brand-white group-hover:text-brand-accent transition-colors" />
          <span className="font-display font-bold text-xl tracking-tighter hidden md:block group-hover:text-brand-accent transition-colors">MARKWON</span>
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8 items-center">
          <NavLink view="landing" label="Home" />
          <NavLink view="branding" label="Brand Kit" />
          <NavLink view="domains" label="Strategy" />
          <a href="mailto:booking@markwon.dj" className="px-5 py-2 border border-brand-accent text-brand-accent hover:bg-brand-accent hover:text-brand-black transition-all font-display font-bold text-xs uppercase tracking-wider">
            Book Now
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-brand-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-brand-black border-b border-brand-gray/30 p-8 flex flex-col gap-6 items-center animate-fade-in">
          <NavLink view="landing" label="Home" />
          <NavLink view="branding" label="Brand Kit" />
          <NavLink view="domains" label="Strategy" />
          <a href="mailto:booking@markwon.dj" className="text-brand-accent font-bold uppercase tracking-wider">
            Book Now
          </a>
        </div>
      )}
    </nav>
  );
};