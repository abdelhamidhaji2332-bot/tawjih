'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Institution } from '@/data/institutions';
import { X, Clock, CheckCircle, ExternalLink, Briefcase, BookOpen, Globe, MapPin, TrendingUp } from 'lucide-react';

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
          className="bg-white dark:bg-slate-900 hand-border max-w-3xl w-full p-6 sm:p-8 relative shadow-sketchLg max-h-[90vh] overflow-y-auto text-[#111827] dark:text-gray-100"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 bg-red-100 border-2 border-[#263D5B] rounded-full flex items-center justify-center text-[#263D5B] hover:bg-red-200 font-bold"
          >
            <X size={20} />
          </button>

          {/* Header */}
          <div className="flex items-start gap-4 mb-6 pb-4 border-b-2 border-dashed border-[#263D5B]/30 dark:border-slate-700">
            <div className="w-16 h-16 bg-[#49B6E5] hand-border flex items-center justify-center text-[#263D5B] text-xl font-black font-mono shrink-0 shadow-sketch">
              {institution.acronym}
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap mb-1">
                <span className="text-xs bg-[#263D5B] dark:bg-slate-800 text-white px-2.5 py-0.5 rounded-full font-mono">
                  {institution.category}
                </span>
                <span className="text-xs bg-[#49B6E5]/30 text-[#263D5B] dark:text-[#38bdf8] px-2.5 py-0.5 rounded-full font-arabic font-bold">
                  {institution.categoryAr}
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black font-comic text-[#263D5B] dark:text-white leading-tight">
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
              <div className="bg-[#FDFBF7] dark:bg-slate-800 hand-border p-4 flex items-center gap-3">
                <Clock className="text-[#49B6E5] shrink-0" size={24} />
                <div>
                  <div className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase">Durée & Diplôme / مدة التكوين</div>
                  <div className="text-sm font-bold font-mono text-[#263D5B] dark:text-gray-200">{institution.duration}</div>
                </div>
              </div>

              <div className="bg-[#FDFBF7] dark:bg-slate-800 hand-border p-4 flex items-center gap-3">
                <CheckCircle className="text-green-600 shrink-0" size={24} />
                <div>
                  <div className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase">Mode d'Admission / طريقة الولوج</div>
                  <div className="text-sm font-bold text-[#263D5B] dark:text-gray-200">{institution.accessType}</div>
                </div>
              </div>
            </div>

            {/* Cities List if available */}
            {institution.cities && institution.cities.length > 0 && (
              <div className="bg-white dark:bg-slate-800 hand-border p-4">
                <h3 className="text-base font-bold font-comic text-[#263D5B] dark:text-white mb-2 flex items-center gap-2">
                  <MapPin size={18} className="text-[#49B6E5]" />
                  <span>Villes / Réseau national (المدن المتواجدة بها)</span>
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {institution.cities.map((city, idx) => (
                    <span key={idx} className="px-2.5 py-1 bg-[#49B6E5]/20 text-[#263D5B] dark:text-[#38bdf8] font-mono text-xs font-bold rounded-lg border border-[#263D5B] dark:border-[#38bdf8]">
                      {city}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Historical Thresholds if available */}
            {institution.historicalSeuils && (
              <div className="bg-amber-50 dark:bg-slate-800 hand-border p-4">
                <h3 className="text-base font-bold font-comic text-[#263D5B] dark:text-white mb-2 flex items-center gap-2">
                  <TrendingUp size={18} className="text-[#D97706]" />
                  <span>Seuils Historiques Estimés de Présélection (عتبات الانتقاء التاريخية)</span>
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs font-mono">
                  {Object.entries(institution.historicalSeuils).map(([filiere, years]: [string, any], idx) => (
                    <div key={idx} className="bg-white dark:bg-slate-900 p-2 rounded-lg border border-[#263D5B]/30 dark:border-slate-700">
                      <div className="font-bold text-[#49B6E5] uppercase">{filiere}</div>
                      <div className="text-gray-700 dark:text-gray-300">2025: {years.y2025} / 20</div>
                      <div className="text-gray-700 dark:text-gray-300">2024: {years.y2024} / 20</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Description */}
            <div className="bg-white dark:bg-slate-800 hand-border p-4">
              <h3 className="text-base font-bold font-comic text-[#263D5B] dark:text-white mb-2 flex items-center gap-2">
                <BookOpen size={18} className="text-[#49B6E5]" />
                <span>Description de la Formation / نبذة عن التكوين</span>
              </h3>
              <p className="text-sm text-[#111827] dark:text-gray-200 leading-relaxed">{institution.descriptionFr}</p>
            </div>

            {/* Eligible Branches */}
            <div>
              <h3 className="text-base font-bold font-comic text-[#263D5B] dark:text-gray-200 mb-2">
                Branches de Bac Acceptées / مسالك البكالوريا المقبولة
              </h3>
              <div className="flex flex-wrap gap-2">
                {institution.eligibleBranches.map((branch, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-[#263D5B] dark:bg-slate-800 text-white text-xs font-mono font-bold rounded-lg shadow-sm"
                  >
                    ✓ {branch.toUpperCase()}
                  </span>
                ))}
              </div>
            </div>

            {/* Official Website / Signup Portal CTA */}
            {institution.signupPortal && (
              <div className="bg-[#49B6E5]/20 dark:bg-slate-800 hand-border p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <div className="text-xs font-mono font-bold text-[#263D5B] dark:text-[#38bdf8]">PLATEFORME OFFICIELLE D'ACCÈS</div>
                  <div className="text-sm font-bold text-[#263D5B] dark:text-white">{institution.signupPortal}</div>
                </div>
                <a
                  href={institution.signupPortal}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hand-btn px-5 py-2.5 bg-[#263D5B] dark:bg-slate-900 text-white font-bold text-sm flex items-center gap-2 hover:bg-[#1a2c42]"
                >
                  <Globe size={16} className="text-[#49B6E5]" />
                  <span>Accéder au site / البوابة الرسمية</span>
                </a>
              </div>
            )}

            {/* Footer action */}
            <div className="flex justify-end pt-2">
              <button
                onClick={onClose}
                className="hand-btn px-6 py-2.5 bg-[#263D5B] dark:bg-slate-800 text-white font-bold text-sm hover:bg-[#1a2c42]"
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
