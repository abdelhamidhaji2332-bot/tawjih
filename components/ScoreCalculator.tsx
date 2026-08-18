'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calculator, X, Award, CheckCircle2, AlertCircle, Sparkles } from 'lucide-react';

interface ScoreCalculatorProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ScoreCalculator({ isOpen, onClose }: ScoreCalculatorProps) {
  const [activeTab, setActiveTab] = useState<'standard' | 'cpge'>('standard');

  const [national, setNational] = useState<string>('15.50');
  const [regional, setRegional] = useState<string>('14.75');

  const [mathGrade, setMathGrade] = useState<string>('16.00');
  const [physGrade, setPhysGrade] = useState<string>('15.50');
  const [frenchGrade, setFrenchGrade] = useState<string>('14.00');
  const [cpgeRegional, setCpgeRegional] = useState<string>('14.50');

  const natNum = parseFloat(national) || 0;
  const regNum = parseFloat(regional) || 0;
  const standardScore = (natNum * 0.75 + regNum * 0.25).toFixed(3);
  const standardFloat = parseFloat(standardScore);

  const mathNum = parseFloat(mathGrade) || 0;
  const physNum = parseFloat(physGrade) || 0;
  const frenchNum = parseFloat(frenchGrade) || 0;
  const cpgeRegNum = parseFloat(cpgeRegional) || 0;
  
  const cpgeScore = ((mathNum * 3 + physNum * 3 + frenchNum * 2 + cpgeRegNum * 2) / 10).toFixed(3);
  const cpgeFloat = parseFloat(cpgeScore);

  const getStandardEvaluation = (score: number) => {
    if (score >= 16) return { level: 'Excellent (التميز)', color: 'text-green-600 bg-green-50 border-green-300', msg: 'Excellentes chances de présélection dans toutes les grandes écoles.' };
    if (score >= 14) return { level: 'Très Bon (جيد جداً)', color: 'text-blue-600 bg-blue-50 border-blue-300', msg: 'Très bonnes chances pour ENSA, FST, EST, ENCG.' };
    if (score >= 12) return { level: 'Bon (جيد)', color: 'text-amber-600 bg-amber-50 border-amber-300', msg: 'Bon profil pour FST, EST, BTS.' };
    return { level: 'Passable / Accès Ouvert', color: 'text-red-600 bg-red-50 border-red-300', msg: 'Accès ouvert garanti (FS, FSJES, FLSH).' };
  };

  const getCpgeEvaluation = (score: number) => {
    if (score >= 15.5) return { level: 'Trés Fort (فرصة كبرى للولوج)', color: 'text-green-600 bg-green-50 border-green-300', msg: 'Excellentes probabilités d\'admission en CPGE (MPSI / PCSI / TSI).' };
    if (score >= 13.5) return { level: 'Bon (مقبول جداً)', color: 'text-blue-600 bg-blue-50 border-blue-300', msg: 'Bonnes chances sur liste principale ou d\'attente.' };
    return { level: 'À la limite / Liste d\'attente', color: 'text-amber-600 bg-amber-50 border-amber-300', msg: 'Profil éligible avec attention sur les listes d\'attente.' };
  };

  const stdEval = getStandardEvaluation(standardFloat);
  const cpgeEval = getCpgeEvaluation(cpgeFloat);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 bg-[#263D5B]/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="bg-white dark:bg-slate-900 hand-border max-w-2xl w-full p-6 sm:p-8 relative shadow-sketchLg max-h-[90vh] overflow-y-auto text-[#111827] dark:text-gray-100"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 bg-red-100 border-2 border-[#263D5B] rounded-full flex items-center justify-center text-[#263D5B] hover:bg-red-200 font-bold"
          >
            <X size={20} />
          </button>

          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-[#49B6E5] hand-border flex items-center justify-center text-[#263D5B]">
              <Calculator size={26} strokeWidth={2.5} />
            </div>
            <div>
              <h2 className="text-2xl font-black font-comic text-[#263D5B] dark:text-white">Simulateur de Scores TAWJIH</h2>
              <p className="text-sm font-arabic font-bold text-[#263D5B]/70 dark:text-gray-400">حساب نقطة الانتقاء (المسار العادي وأقسام الأقسام التحضيرية CPGE)</p>
            </div>
          </div>

          {/* Calculator Tabs */}
          <div className="flex gap-2 mb-6 border-b-2 border-[#263D5B]/20 dark:border-slate-700 pb-3">
            <button
              onClick={() => setActiveTab('standard')}
              className={`hand-btn px-4 py-2 text-xs font-bold ${activeTab === 'standard' ? 'bg-[#263D5B] dark:bg-slate-800 text-white' : 'bg-white dark:bg-slate-900 text-[#263D5B] dark:text-gray-200'}`}
            >
              📊 Score Standard (ENSA, ENCG, FMP...)
            </button>
            <button
              onClick={() => setActiveTab('cpge')}
              className={`hand-btn px-4 py-2 text-xs font-bold ${activeTab === 'cpge' ? 'bg-[#263D5B] dark:bg-slate-800 text-white' : 'bg-white dark:bg-slate-900 text-[#263D5B] dark:text-gray-200'}`}
            >
              📐 Score CPGE (الأقسام التحضيرية)
            </button>
          </div>

          {activeTab === 'standard' ? (
            <div className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-[#263D5B] dark:text-gray-300 mb-1">
                    Examen National (75%) / الوطني
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    min="0"
                    max="20"
                    value={national}
                    onChange={(e) => setNational(e.target.value)}
                    className="w-full p-3 hand-border bg-gray-50 dark:bg-slate-800 text-[#111827] dark:text-white font-mono font-bold text-lg focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-[#263D5B] dark:text-gray-300 mb-1">
                    Examen Régional (25%) / الجهوي
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    min="0"
                    max="20"
                    value={regional}
                    onChange={(e) => setRegional(e.target.value)}
                    className="w-full p-3 hand-border bg-gray-50 dark:bg-slate-800 text-[#111827] dark:text-white font-mono font-bold text-lg focus:outline-none"
                  />
                </div>
              </div>

              {/* Result */}
              <div className="bg-[#49B6E5]/15 dark:bg-slate-800 hand-border p-6 text-center">
                <div className="text-xs font-mono font-bold text-[#263D5B] dark:text-gray-300 uppercase tracking-wider mb-1">
                  Score Global Pré-sélection
                </div>
                <div className="text-5xl font-black font-mono text-[#263D5B] dark:text-white mb-2">
                  {standardScore} <span className="text-xl font-normal">/ 20</span>
                </div>
                <div className={`p-3 rounded-xl border-2 font-medium text-sm ${stdEval.color}`}>
                  <div className="font-bold mb-1">{stdEval.level}</div>
                  <p className="text-xs">{stdEval.msg}</p>
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <p className="text-xs text-[#263D5B]/80 dark:text-gray-300 font-bold">
                Simulation CPGE basée sur la pondération des matières clés (Maths ×3, Physique ×3, Français ×2, Régional ×2) :
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-[#263D5B] dark:text-gray-300 mb-1">Moyenne Mathématiques / الرياضيات</label>
                  <input
                    type="number"
                    step="0.01"
                    value={mathGrade}
                    onChange={(e) => setMathGrade(e.target.value)}
                    className="w-full p-2.5 hand-border bg-gray-50 dark:bg-slate-800 text-[#111827] dark:text-white font-mono font-bold text-base"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-[#263D5B] dark:text-gray-300 mb-1">Moyenne Physique-Chimie / الفيزياء</label>
                  <input
                    type="number"
                    step="0.01"
                    value={physGrade}
                    onChange={(e) => setPhysGrade(e.target.value)}
                    className="w-full p-2.5 hand-border bg-gray-50 dark:bg-slate-800 text-[#111827] dark:text-white font-mono font-bold text-base"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-[#263D5B] dark:text-gray-300 mb-1">Moyenne Français / الفرنسية</label>
                  <input
                    type="number"
                    step="0.01"
                    value={frenchGrade}
                    onChange={(e) => setFrenchGrade(e.target.value)}
                    className="w-full p-2.5 hand-border bg-gray-50 dark:bg-slate-800 text-[#111827] dark:text-white font-mono font-bold text-base"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-[#263D5B] dark:text-gray-300 mb-1">Moyenne Examen Régional / الجهوي</label>
                  <input
                    type="number"
                    step="0.01"
                    value={cpgeRegional}
                    onChange={(e) => setCpgeRegional(e.target.value)}
                    className="w-full p-2.5 hand-border bg-gray-50 dark:bg-slate-800 text-[#111827] dark:text-white font-mono font-bold text-base"
                  />
                </div>
              </div>

              {/* CPGE Result */}
              <div className="bg-[#49B6E5]/15 dark:bg-slate-800 hand-border p-6 text-center">
                <div className="text-xs font-mono font-bold text-[#263D5B] dark:text-gray-300 uppercase tracking-wider mb-1">
                  Score Estimé CPGE (MPSI / PCSI / TSI)
                </div>
                <div className="text-5xl font-black font-mono text-[#263D5B] dark:text-white mb-2">
                  {cpgeScore} <span className="text-xl font-normal">/ 20</span>
                </div>
                <div className={`p-3 rounded-xl border-2 font-medium text-sm ${cpgeEval.color}`}>
                  <div className="font-bold mb-1">{cpgeEval.level}</div>
                  <p className="text-xs">{cpgeEval.msg}</p>
                </div>
              </div>
            </div>
          )}

          {/* Action buttons */}
          <div className="flex justify-end gap-3 pt-4">
            <button
              onClick={onClose}
              className="hand-btn px-6 py-2.5 bg-[#263D5B] dark:bg-slate-800 text-white font-bold text-sm hover:bg-[#1a2c42]"
            >
              Fermer / إغلاق
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
