import { Hero } from './components/Hero';

import React, { useEffect } from 'react';

function App() {
  // Smooth scrolling for anchor links
  useEffect(() => {
    document.documentElement.classList.add('scroll-smooth');
    return () => {
      document.documentElement.classList.remove('scroll-smooth');
    };
  }, []);

  return (
    <main className="bg-black text-white selection:bg-purple-500/30 selection:text-purple-200 min-h-screen relative">
      <Hero />
      {/* Footer */}
      <footer className="py-8 text-center text-neutral-800 text-xs font-mono border-t border-neutral-900 bg-black relative z-10">
        <p>Washi // {new Date().getFullYear()}</p>
      </footer>
    </main>
  );
}

export default App;