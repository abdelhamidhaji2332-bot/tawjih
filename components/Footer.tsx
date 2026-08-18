'use client';

import React from 'react';
import { GraduationCap, Heart, Sparkles } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="mt-20 border-t-3 border-[#263D5B] dark:border-[#38bdf8] bg-white dark:bg-slate-900 py-8 px-4 text-center text-[#111827] dark:text-white transition-colors">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#49B6E5] hand-border flex items-center justify-center text-[#263D5B]">
            <GraduationCap size={22} strokeWidth={2.5} />
          </div>
          <div className="text-left">
            <h2 className="text-xl font-black font-comic text-[#263D5B] dark:text-white">TAWJIH<span className="text-[#49B6E5]">.ma</span></h2>
            <p className="text-xs font-arabic font-bold text-[#263D5B]/70 dark:text-gray-400">منصة التوجيه الجامعي بالمغرب • Ultra Max Edition</p>
          </div>
        </div>

        <div className="text-xs font-mono font-bold text-[#263D5B] dark:text-gray-200 flex items-center gap-1.5 bg-[#49B6E5]/15 dark:bg-slate-800 px-4 py-2 hand-border">
          <Sparkles size={16} className="text-[#D97706]" />
          <span>Fait avec passion pour les bacheliers marocains 🇲🇦</span>
        </div>

        <div className="text-xs text-gray-500 dark:text-gray-400 font-medium">
          © {new Date().getFullYear()} TAWJIH.ma. Tous droits réservés.
        </div>

      </div>
    </footer>
  );
}
