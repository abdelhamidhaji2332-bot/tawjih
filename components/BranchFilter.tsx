'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { BRANCHES } from '@/data/institutions';

interface BranchFilterProps {
  activeBranch: string;
  setActiveBranch: (branch: string) => void;
}

export default function BranchFilter({ activeBranch, setActiveBranch }: BranchFilterProps) {
  return (
    <div className="max-w-7xl mx-auto px-4 mb-8">
      <div className="bg-white hand-card p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-4 border-b-2 border-dashed border-[#263D5B]/30 pb-3">
          <div>
            <h2 className="text-xl font-black font-comic text-[#263D5B] flex items-center gap-2">
              <span>🎯 Filtrer par Branche de Baccalauréat</span>
            </h2>
            <p className="text-xs font-arabic text-[#263D5B]/70 font-bold">
              اختر مسلك البكالوريا الخاص بك لعرض المؤسسات المقبولة حصرياً
            </p>
          </div>
          <span className="text-xs bg-[#49B6E5]/30 text-[#263D5B] font-mono px-3 py-1 rounded-full border border-[#263D5B]">
            Branche active: <strong className="text-[#263D5B]">{activeBranch}</strong>
          </span>
        </div>

        <div className="flex flex-wrap gap-2.5">
          {BRANCHES.map((branch) => {
            const isActive = activeBranch === branch.id;
            return (
              <motion.button
                key={branch.id}
                onClick={() => setActiveBranch(branch.id)}
                whileHover={{ scale: 1.05, rotate: isActive ? 0 : 1 }}
                whileTap={{ scale: 0.95 }}
                className={`relative px-4 py-2.5 rounded-xl font-bold text-sm flex items-center gap-2 hand-btn ${
                  isActive 
                    ? 'bg-[#263D5B] text-white shadow-sketch' 
                    : 'bg-white text-[#263D5B] hover:bg-[#49B6E5]/20'
                }`}
              >
                <span className="text-lg">{branch.icon}</span>
                <div className="text-left">
                  <div className="leading-tight">{branch.labelFr}</div>
                  <div className={`text-xs font-arabic ${isActive ? 'text-[#49B6E5]' : 'text-[#263D5B]/70'}`}>
                    {branch.labelAr}
                  </div>
                </div>

                {isActive && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute -top-1 -right-1 w-3 h-3 bg-[#49B6E5] rounded-full border-2 border-[#263D5B]"
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  />
                )}
              </motion.button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
