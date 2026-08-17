'Key concepts: Navbar with hand-drawn styling and smooth navigation'
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Compass, Calculator, Sparkles } from 'lucide-react';

interface NavbarProps {
  onOpenCalculator: () => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function Navbar({ onOpenCalculator, activeTab, setActiveTab }: NavbarProps) {
  return (
    <header className="sticky top-0 z-40 bg-[#FDFBF7]/90 backdrop-blur-md border-b-3 border-[#263D5B] px-4 py-3">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        
        {/* Logo */}
        <motion.div 
          className="flex items-center gap-3 cursor-pointer"
          whileHover={{ scale: 1.02, rotate: -1 }}
          onClick={() => setActiveTab('directory')}
        >
          <div className="w-12 h-12 bg-[#49B6E5] hand-border flex items-center justify-center text-[#263D5B] shadow-sketch">
            <GraduationCap size={28} strokeWidth={2.5} />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-2xl font-black font-comic tracking-tight text-[#263D5B]">Study<span className="text-[#49B6E5] underline decoration-wavy">Souk</span></h1>
              <span className="text-xs bg-[#263D5B] text-white px-2 py-0.5 rounded-full font-mono">v2.0 Ultra</span>
            </div>
            <p className="text-xs font-arabic font-bold text-[#263D5B]/80">دليلك للتوجيه الجامعي بالمغرب</p>
          </div>
        </motion.div>

        {/* Navigation Tabs / Actions */}
        <div className="flex items-center gap-3 flex-wrap justify-center">
          <button
            onClick={() => setActiveTab('directory')}
            className={`hand-btn px-4 py-2 text-sm font-bold flex items-center gap-2 ${
              activeTab === 'directory' ? 'bg-[#49B6E5] text-[#263D5B]' : 'bg-white text-[#263D5B]'
            }`}
          >
            <Compass size={18} />
            <span>Catalogue / الدليل</span>
          </button>

          <button
            onClick={onOpenCalculator}
            className="hand-btn px-4 py-2 text-sm font-bold bg-[#263D5B] text-white flex items-center gap-2 hover:bg-[#1e3048]"
          >
            <Calculator size={18} className="text-[#49B6E5]" />
            <span>Simulateur / حاسبة النقطة</span>
          </button>

          <div className="hidden md:flex items-center gap-1 bg-[#49B6E5]/20 border-2 border-[#263D5B] rounded-full px-3 py-1 text-xs font-mono font-bold text-[#263D5B]">
            <Sparkles size={14} className="text-[#D97706]" />
            <span>Bilingual FR/AR</span>
          </div>
        </div>

      </div>
    </header>
  );
}
