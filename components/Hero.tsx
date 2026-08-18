'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Search, BookOpen, Award, Compass } from 'lucide-react';

interface HeroProps {
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  totalCount: number;
}

export default function Hero({ searchQuery, setSearchQuery, totalCount }: HeroProps) {
  return (
    <section className="relative pt-10 pb-12 px-4 max-w-7xl mx-auto text-center text-[#111827] dark:text-white">
      {/* Decorative doodle elements */}
      <div className="absolute top-4 left-10 hidden lg:block animate-bounce duration-1000">
        <span className="text-3xl">🎓✨</span>
      </div>
      <div className="absolute top-12 right-12 hidden lg:block">
        <span className="text-3xl">🇲🇦🚀</span>
      </div>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="inline-block bg-[#49B6E5]/30 border-2 border-dashed border-[#263D5B] dark:border-[#38bdf8] px-4 py-1.5 rounded-full text-xs font-mono font-bold text-[#263D5B] dark:text-[#38bdf8] mb-4 shadow-sm">
          ✨ TAWJIH.ma • المنصة الشاملة للتوجيه وأقسام التحضير والجامعات بالمغرب
        </div>

        <h1 className="text-4xl sm:text-6xl font-black font-comic text-[#263D5B] dark:text-white mb-3 tracking-tight">
          Préparez Votre Avenir avec <span className="text-[#49B6E5]">TAWJIH</span> <br />
          <span className="text-[#263D5B] dark:text-gray-300 font-arabic text-3xl sm:text-5xl">بوابتك الرسمية للاختيار الأمثل بعد البكالوريا</span>
        </h1>

        <p className="max-w-3xl mx-auto text-base sm:text-lg text-[#263D5B]/80 dark:text-gray-300 font-medium mb-8">
          Explorez plus de <span className="font-mono font-bold text-[#263D5B] dark:text-white underline">{totalCount}+ institutions, CPGE, classes préparatoires, universités et écoles</span>, avec simulateurs de score et liens officiels d'inscription.
        </p>
      </motion.div>

      {/* Search Bar */}
      <motion.div 
        className="max-w-2xl mx-auto relative"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
      >
        <div className="relative flex items-center">
          <Search className="absolute left-4 text-[#263D5B] dark:text-gray-300" size={22} />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Rechercher une école, CPGE, ENSA, FST... / بحث عن مدرسة، كلية..."
            className="w-full pl-12 pr-4 py-4 hand-border bg-white dark:bg-slate-900 text-[#111827] dark:text-white placeholder-[#263D5B]/50 dark:placeholder-gray-400 font-medium text-base focus:outline-none shadow-sketch"
          />
          {searchQuery && (
            <button 
              onClick={() => setSearchQuery('')}
              className="absolute right-4 text-xs bg-[#263D5B] dark:bg-slate-800 text-white px-2.5 py-1 rounded-full font-mono hover:bg-red-600"
            >
              Effacer
            </button>
          )}
        </div>
      </motion.div>

      {/* Quick Stats bar */}
      <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
        <div className="bg-white dark:bg-slate-900 hand-card p-3 flex items-center gap-3">
          <div className="w-10 h-10 bg-[#49B6E5]/30 rounded-full flex items-center justify-center font-bold text-[#263D5B]">🏫</div>
          <div className="text-left">
            <div className="text-lg font-mono font-bold text-[#263D5B] dark:text-white">{totalCount}+</div>
            <div className="text-xs text-gray-600 dark:text-gray-400 font-arabic">مؤسسة معتمدة</div>
          </div>
        </div>
        <div className="bg-white dark:bg-slate-900 hand-card p-3 flex items-center gap-3">
          <div className="w-10 h-10 bg-[#263D5B]/10 rounded-full flex items-center justify-center font-bold text-[#263D5B]">📐</div>
          <div className="text-left">
            <div className="text-lg font-mono font-bold text-[#263D5B] dark:text-white">CPGE</div>
            <div className="text-xs text-gray-600 dark:text-gray-400 font-arabic">محاكي الأقسام التحضيرية</div>
          </div>
        </div>
        <div className="bg-white dark:bg-slate-900 hand-card p-3 flex items-center gap-3">
          <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center font-bold text-[#16A34A]">🎯</div>
          <div className="text-left">
            <div className="text-lg font-mono font-bold text-[#263D5B] dark:text-white">75/25</div>
            <div className="text-xs text-gray-600 dark:text-gray-400 font-arabic">حساب نقطة الانتقاء</div>
          </div>
        </div>
        <div className="bg-white dark:bg-slate-900 hand-card p-3 flex items-center gap-3">
          <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center font-bold text-[#D97706]">🇲🇦</div>
          <div className="text-left">
            <div className="text-lg font-mono font-bold text-[#263D5B] dark:text-white">Bilingue</div>
            <div className="text-xs text-gray-600 dark:text-gray-400 font-arabic">عربي / فرنسي</div>
          </div>
        </div>
      </div>
    </section>
  );
}
