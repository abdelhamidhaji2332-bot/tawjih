'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calculator, X, Award, CheckCircle2, AlertCircle, Sparkles } from 'lucide-react';

interface ScoreCalculatorProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ScoreCalculator({ isOpen, onClose }: ScoreCalculatorProps) {
  const [national, setNational] = useState<string>('15.50');
  const [regional, setRegional] = useState<string>('14.75');
  const [branch, setBranch] = useState<string>('SMA');

  const natNum = parseFloat(national) || 0;
  const regNum = parseFloat(regional) || 0;

  // Standard formula: 75% National + 25% Regional
  // For some branches like SM coefficients can be tested, but standard 75/25 is universal for pre-selection (ENSA, ENCG, FMP, FST, etc.)
  const calculatedScore = (natNum * 0.75 + regNum * 0.25).toFixed(3);
  const scoreFloat = parseFloat(calculatedScore);

  // Evaluation guidance
  const getEvaluation = (score: number) => {
    if (score >= 16) return { level: 'Excellent (التميز)', color: 'text-green-600 bg-green-50 border-green-300', msg: 'Excellentes chances de présélection dans toutes les grandes écoles (Médecine, ENSA, ENCG, CPGE).' };
    if (score >= 14) return { level: 'Très Bon (جيد جداً)', color: 'text-blue-600 bg-blue-50 border-blue-300', msg: 'Très bonnes chances pour ENSA, FST, EST, ENCG et facultés d\'accès sélectif.' };
    if (score >= 12) return { level: 'Bon (جيد)', color: 'text-amber-600 bg-amber-50 border-amber-300', msg: 'Bon profil pour FST, EST, BTS, Facultés des Sciences et filières universitaires.' };
    return { level: 'Passable / À consolider', color: 'text-red-600 bg-red-50 border-red-300', msg: 'Accès ouvert garanti (FS, FSJES, FLSH, FP) et opportunités via concours directs.' };
  };

  const evalResult = getEvaluation(scoreFloat);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 bg-[#263D5B]/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="bg-white hand-border max-w-2xl w-full p-6 sm:p-8 relative shadow-sketchLg max-h-[90vh] overflow-y-auto"
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
              <h2 className="text-2xl font-black font-comic text-[#263D5B]">Calculateur de Score d'Intégration</h2>
              <p className="text-sm font-arabic font-bold text-[#263D5B]/70">حساب نقطة الانتقاء القبلي للمؤسسات العليا (75% وطني + 25% جهوي)</p>
            </div>
          </div>

          <div className="space-y-6">
            {/* Inputs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-bold text-[#263D5B] mb-1">
                  Examen National (75%) / الامتحان الوطني
                </label>
                <input
                  type="number"
                  step="0.01"
                  min="0"
                  max="20"
                  value={national}
                  onChange={(e) => setNational(e.target.value)}
                  className="w-full p-3 hand-border bg-gray-50 text-[#111827] font-mono font-bold text-lg focus:outline-none focus:bg-white"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-[#263D5B] mb-1">
                  Examen Régional (25%) / الامتحان الجهوي
                </label>
                <input
                  type="number"
                  step="0.01"
                  min="0"
                  max="20"
                  value={regional}
                  onChange={(e) => setRegional(e.target.value)}
                  className="w-full p-3 hand-border bg-gray-50 text-[#111827] font-mono font-bold text-lg focus:outline-none focus:bg-white"
                />
              </div>
            </div>

            {/* Branch selector for formula nuance */}
            <div>
              <label className="block text-sm font-bold text-[#263D5B] mb-1">
                Branche de Bac / مسلك البكالوريا
              </label>
              <select
                value={branch}
                onChange={(e) => setBranch(e.target.value)}
                className="w-full p-3 hand-border bg-white text-[#263D5B] font-bold text-base focus:outline-none"
              >
                <option value="SMA">Sciences Mathématiques A (علوم رياضية أ)</option>
                <option value="SMB">Sciences Mathématiques B (علوم رياضية ب)</option>
                <option value="SPC">Sciences Physiques et Chimiques (علوم فيزيائية)</option>
                <option value="SVT">Sciences de la Vie et de la Terre (علوم الحياة والأرض)</option>
                <option value="STE/STM">Sciences et Technologies (علوم وتكنولوجيات)</option>
                <option value="SE">Sciences Économiques (علوم اقتصادية)</option>
                <option value="LSH">Lettres et Sciences Humaines (آداب وعلوم إنسانية)</option>
              </select>
            </div>

            {/* Result Box */}
            <div className="bg-[#49B6E5]/15 hand-border p-6 text-center">
              <div className="text-xs font-mono font-bold text-[#263D5B] uppercase tracking-wider mb-1">
                Score Global Calculé / النقطة المحصل عليها للاانتقاء
              </div>
              <div className="text-5xl font-black font-mono text-[#263D5B] mb-2">
                {calculatedScore} <span className="text-xl font-normal">/ 20</span>
              </div>
              <div className="text-xs font-arabic text-[#263D5B]/80 font-bold mb-4">
                المعادلة المعتمدة: (الوطني × 0.75) + (الجهوي × 0.25)
              </div>

              <div className={`p-3 rounded-xl border-2 font-medium text-sm ${evalResult.color}`}>
                <div className="font-bold flex items-center justify-center gap-1.5 mb-1">
                  <Award size={18} />
                  <span>{evalResult.level}</span>
                </div>
                <p className="text-xs">{evalResult.msg}</p>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex justify-end gap-3 pt-2">
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
