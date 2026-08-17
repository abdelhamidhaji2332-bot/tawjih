'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Institution } from '@/data/institutions';
import { X, Clock, CheckCircle, ExternalLink, Briefcase, BookOpen, GraduationCap } from 'lucide-react';

interface InstitutionModalProps {
  institution: Institution | null;
  onClose: () => void;
}

export default function InstitutionModal({ institution, onClose }: InstitutionModalProps) {
  if (!institution) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 bg-[#263D5B]/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="bg-white hand-border max-w-3xl w-full p-6 sm:p-8 relative shadow-sketchLg max-h-[90vh] overflow-y-auto"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 bg-red-100 border-2 border-[#263D5B] rounded-full flex items-center justify-center text-[#263D5B] hover:bg-red-200 font-bold"
          >
            <X size={20} />
          </button>

          {/* Header */}
          <div className="flex items-start gap-4 mb-6 pb-4 border-b-2 border-dashed border-[#263D5B]/30">
            <div className="w-16 h-16 bg-[#49B6E5] hand-border flex items-center justify-center text-[#263D5B] text-2xl font-black font-mono shrink-0 shadow-sketch">
              {institution.acronym}
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap mb-1">
                <span className="text-xs bg-[#263D5B] text-white px-2.5 py-0.5 rounded-full font-mono">
                  {institution.category}
                </span>
                <span className="text-xs bg-[#49B6E5]/30 text-[#263D5B] px-2.5 py-0.5 rounded-full font-arabic font-bold">
                  {institution.categoryAr}
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black font-comic text-[#263D5B] leading-tight">
                {institution.nameFr}
              </h2>
              <p className="text-lg font-arabic font-bold text-[#49B6E5] mt-1">
                {institution.nameAr}
              </p>
            </div>
          </div>

          <div className="space-y-6">
            {/* Quick Specs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-[#FDFBF7] hand-border p-4 flex items-center gap-3">
                <Clock className="text-[#49B6E5] shrink-0" size={24} />
                <div>
                  <div className="text-xs font-bold text-gray-500 uppercase">Durée des Études / مدة الدراسة</div>
                  <div className="text-sm font-bold font-mono text-[#263D5B]">{institution.duration}</div>
                </div>
              </div>

              <div className="bg-[#FDFBF7] hand-border p-4 flex items-center gap-3">
                <CheckCircle className="text-green-600 shrink-0" size={24} />
                <div>
                  <div className="text-xs font-bold text-gray-500 uppercase">Type d'Accès / طريقة الولوج</div>
                  <div className="text-sm font-bold text-[#263D5B]">{institution.accessType}</div>
                  <div className="text-xs font-arabic text-[#263D5B]/70">{institution.accessTypeAr}</div>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="bg-white hand-border p-4">
              <h3 className="text-base font-bold font-comic text-[#263D5B] mb-2 flex items-center gap-2">
                <BookOpen size={18} className="text-[#49B6E5]" />
                <span>Description de la Formation / نبذة عن التكوين</span>
              </h3>
              <p className="text-sm text-[#111827] mb-3 leading-relaxed">{institution.descriptionFr}</p>
              <p className="text-sm font-arabic font-bold text-[#263D5B] text-right bg-[#49B6E5]/10 p-2 rounded-lg">{institution.descriptionAr}</p>
            </div>

            {/* Eligible Branches */}
            <div>
              <h3 className="text-base font-bold font-comic text-[#263D5B] mb-2">
                Branches de Bac Acceptées / مسالك البكالوريا المقبولة
              </h3>
              <div className="flex flex-wrap gap-2">
                {institution.eligibleBranches.map((branch, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-[#263D5B] text-white text-xs font-mono font-bold rounded-lg shadow-sm"
                  >
                    ✓ {branch}
                  </span>
                ))}
              </div>
            </div>

            {/* Career Prospects */}
            <div className="bg-amber-550/10 border-2 border-dashed border-[#263D5B]/40 p-4 rounded-xl">
              <h3 className="text-base font-bold font-comic text-[#263D5B] mb-3 flex items-center gap-2">
                <Briefcase size={18} className="text-[#D97706]" />
                <span>Débouchés & Perspectives / الآفاق المهنية</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {institution.careerProspects.map((prospect, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm font-medium text-[#263D5B] bg-white p-2 rounded-lg border border-[#263D5B]/20">
                    <span className="w-2 h-2 rounded-full bg-[#49B6E5]"></span>
                    <span>{prospect}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer action */}
            <div className="flex justify-end pt-2">
              <button
                onClick={onClose}
                className="hand-btn px-6 py-2.5 bg-[#263D5B] text-white font-bold text-sm hover:bg-[#1a2c42]"
              >
                Fermer / إغلاق
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
