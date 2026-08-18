'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Institution } from '@/data/institutions';
import { Clock, CheckCircle, ArrowRight, BookOpen } from 'lucide-react';

interface InstitutionCardProps {
  institution: Institution;
  onSelect: (inst: Institution) => void;
}

export default function InstitutionCard({ institution, onSelect }: InstitutionCardProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      whileHover={{ y: -4, rotate: 0.5 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      onClick={() => onSelect(institution)}
      className="bg-white dark:bg-slate-900 hand-card p-5 cursor-pointer flex flex-col justify-between relative group text-[#111827] dark:text-gray-100"
    >
      <div>
        {/* Top Badges */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="text-xs bg-[#49B6E5]/30 text-[#263D5B] dark:text-[#38bdf8] font-mono px-2.5 py-1 rounded-full border border-[#263D5B] dark:border-[#38bdf8] font-bold">
            {institution.category}
          </span>
          <span className="text-xs font-arabic font-bold text-[#263D5B]/70 dark:text-gray-400 bg-[#263D5B]/5 dark:bg-slate-800 px-2.5 py-1 rounded-full">
            {institution.categoryAr}
          </span>
        </div>

        {/* Acronym & Title */}
        <div className="flex items-start gap-3 mb-3">
          <div className="w-12 h-12 bg-[#49B6E5] hand-border flex items-center justify-center text-[#263D5B] font-black font-mono text-lg shrink-0 shadow-sketch">
            {institution.acronym}
          </div>
          <div>
            <h3 className="text-xl font-black font-comic text-[#263D5B] dark:text-white group-hover:text-[#49B6E5] transition-colors leading-snug">
              {institution.nameFr}
            </h3>
            <p className="text-sm font-arabic font-bold text-[#263D5B]/80 dark:text-gray-300 mt-0.5">
              {institution.nameAr}
            </p>
          </div>
        </div>

        {/* Description snippet */}
        <p className="text-xs text-gray-600 dark:text-gray-300 line-clamp-2 mb-4 font-medium">
          {institution.descriptionFr}
        </p>

        {/* Specs: Duration & Access */}
        <div className="space-y-1.5 text-xs font-medium text-[#263D5B] dark:text-gray-300 border-t border-dashed border-[#263D5B]/20 dark:border-slate-700 pt-3 mb-4">
          <div className="flex items-center gap-2">
            <Clock size={14} className="text-[#49B6E5]" />
            <span>{institution.duration}</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle size={14} className="text-green-600" />
            <span className="truncate">{institution.accessType}</span>
          </div>
        </div>

        {/* Eligible Branches Tags */}
        <div className="flex flex-wrap gap-1 mb-4">
          {institution.eligibleBranches.map((b, idx) => (
            <span key={idx} className="text-[10px] font-mono font-bold bg-[#263D5B] dark:bg-slate-800 text-white px-2 py-0.5 rounded">
              {b.toUpperCase()}
            </span>
          ))}
        </div>
      </div>

      {/* Card Footer Action */}
      <div className="pt-2 border-t border-[#263D5B]/20 dark:border-slate-700 flex items-center justify-between text-xs font-bold text-[#263D5B] dark:text-gray-200">
        <span className="group-hover:underline text-[#49B6E5]">Voir les détails / التفاصيل</span>
        <div className="w-8 h-8 rounded-full bg-[#49B6E5]/20 border border-[#263D5B] dark:border-[#38bdf8] flex items-center justify-center group-hover:bg-[#49B6E5] transition-colors">
          <ArrowRight size={14} />
        </div>
      </div>
    </motion.div>
  );
}
