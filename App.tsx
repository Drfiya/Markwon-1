import React, { useState } from 'react';
import { Navigation } from './components/Navigation';
import { LandingPage } from './views/LandingPage';
import { BrandingKit } from './views/BrandingKit';
import { DomainRecs } from './views/DomainRecs';
import { ViewState } from './types';

function App() {
  const [currentView, setCurrentView] = useState<ViewState>('landing');

  return (
    <div className="min-h-screen bg-brand-black text-brand-white relative">
      {/* Noise Texture Overlay */}
      <div className="bg-noise"></div>
      
      <Navigation currentView={currentView} setView={setCurrentView} />

      <div className="relative z-10">
        {currentView === 'landing' && <LandingPage />}
        {currentView === 'branding' && <BrandingKit />}
        {currentView === 'domains' && <DomainRecs />}
      </div>
    </div>
  );
}

export default App;