'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Compass, Calculator, Sparkles, Moon, Sun } from 'lucide-react';

interface NavbarProps {
  onOpenCalculator: () => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function Navbar({ onOpenCalculator, activeTab, setActiveTab }: NavbarProps) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  return (
    <header className="sticky top-0 z-40 bg-[#FDFBF7]/90 dark:bg-[#0b0f19]/90 backdrop-blur-md border-b-3 border-[#263D5B] dark:border-[#38bdf8] px-4 py-3 transition-colors">
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
              <h1 className="text-2xl font-black font-comic tracking-tight text-[#263D5B] dark:text-white">TAWJIH<span className="text-[#49B6E5] underline decoration-wavy">.ma</span></h1>
              <span className="text-xs bg-[#263D5B] dark:bg-[#38bdf8] text-white dark:text-[#0b0f19] px-2 py-0.5 rounded-full font-mono">Ultra Max</span>
            </div>
            <p className="text-xs font-arabic font-bold text-[#263D5B]/80 dark:text-gray-300">منصة التوجيه الجامعي بالمغرب</p>
          </div>
        </motion.div>

        {/* Navigation Tabs / Actions */}
        <div className="flex items-center gap-3 flex-wrap justify-center">
          <button
            onClick={() => setActiveTab('directory')}
            className={`hand-btn px-4 py-2 text-sm font-bold flex items-center gap-2 ${
              activeTab === 'directory' ? 'bg-[#49B6E5] text-[#263D5B]' : 'bg-white dark:bg-slate-800 text-[#263D5B] dark:text-white'
            }`}
          >
            <Compass size={18} />
            <span>Catalogue / الدليل</span>
          </button>

          <button
            onClick={onOpenCalculator}
            className="hand-btn px-4 py-2 text-sm font-bold bg-[#263D5B] dark:bg-slate-700 text-white flex items-center gap-2 hover:bg-[#1e3048]"
          >
            <Calculator size={18} className="text-[#49B6E5]" />
            <span>Simulateur & CPGE / حاسبة النقط</span>
          </button>

          {/* Dark Mode Toggle */}
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="hand-btn p-2.5 bg-white dark:bg-slate-800 text-[#263D5B] dark:text-yellow-400 flex items-center justify-center"
            title="Basculer le thème / تغيير المظهر"
          >
            {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

      </div>
    </header>
  );
}
