import React from 'react';
import { ArrowDown, Github, Linkedin, Twitter } from 'lucide-react';
import { Reveal } from './Reveal';
import GlitchText from './GlitchText'

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Minimal Grid Background */}
      <div className="absolute inset-0 bg-grid-pattern bg-white opacity-[0.1] pointer-events-none"></div>
      
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-black/50 to-black pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 text-center z-10 relative">

        <Reveal delay={200}>
          <h1 className="text-5xl md:text-8xl lg:text-9xl font-bold tracking-tighter mb-8 text-white  ">
            <GlitchText text="Washi" />
            <span>.</span>
            <GlitchText text="Dev" />
          </h1>
        </Reveal>

        <Reveal delay={400}>
          <p className="text-lg md:text-xl text-neutral-500 max-w-2xl mx-auto mb-12 leading-relaxed font-light">
            Software Engineer focusing on high performance, data driven design.
            <br/>
            Working in finance.
          </p>
        </Reveal>

        <Reveal delay={600}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="group relative px-8 py-4 bg-white text-black font-medium rounded-full overflow-hidden transition-all hover:scale-105 w-full sm:w-auto"
            >
              <span className="relative z-10">Contact</span>
              <div className="absolute inset-0 bg-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out -z-0"></div>
              <span className="absolute inset-0 z-10 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">Contact</span>
            </button>
            <button 
              onClick={() => document.getElementById('career')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-transparent border border-neutral-800 text-neutral-400 font-medium rounded-full hover:bg-neutral-900 hover:text-white transition-all w-full sm:w-auto"
            >
              View Projects
            </button>
          </div>
        </Reveal>

        <Reveal delay={800}>
          <div className="mt-20 flex justify-center gap-10 text-neutral-600">
            <a href="#" className="hover:text-purple-500 transition-colors hover:scale-125 transform duration-300"><Github className="w-5 h-5" /></a>
            <a href="#" className="hover:text-purple-500 transition-colors hover:scale-125 transform duration-300"><Linkedin className="w-5 h-5" /></a>
            <a href="#" className="hover:text-purple-500 transition-colors hover:scale-125 transform duration-300"><Twitter className="w-5 h-5" /></a>
          </div>
        </Reveal>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-neutral-700 animate-bounce">
        <ArrowDown className="w-5 h-5" />
      </div>
    </section>
  );
};