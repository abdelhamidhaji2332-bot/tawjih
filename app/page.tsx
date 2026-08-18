'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { INSTITUTIONS_DATA, Institution } from '@/data/institutions';
import { APP_METADATA, PREINSCRIPTION_STEPS, DOSSIER_ITEMS } from '@/data/tawjihSimpleData';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import BranchFilter from '@/components/BranchFilter';
import ScoreCalculator from '@/components/ScoreCalculator';
import InstitutionCard from '@/components/InstitutionCard';
import InstitutionModal from '@/components/InstitutionModal';
import AiAdvisor from '@/components/AiAdvisor';
import Footer from '@/components/Footer';
import { Search, Filter, BookOpen, Globe, CheckCircle2, Calendar, FileText } from 'lucide-react';

export default function Home() {
  const [activeBranch, setActiveBranch] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [isCalculatorOpen, setIsCalculatorOpen] = useState<boolean>(false);
  const [selectedInstitution, setSelectedInstitution] = useState<Institution | null>(null);
  const [activeTab, setActiveTab] = useState<'directory' | 'portails' | 'calendrier'>('directory');

  // Categories list extracted from data
  const categories = useMemo(() => {
    const cats = Array.from(new Set(INSTITUTIONS_DATA.map(i => i.category)));
    return ['ALL', ...cats];
  }, []);

  // Filter institutions based on branch, search query, and category
  const filteredInstitutions = useMemo(() => {
    return INSTITUTIONS_DATA.filter(inst => {
      const matchesBranch = activeBranch === 'ALL' || inst.eligibleBranches.includes(activeBranch);
      const matchesCategory = selectedCategory === 'ALL' || inst.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch = !q || 
        inst.acronym.toLowerCase().includes(q) ||
        inst.nameFr.toLowerCase().includes(q) ||
        inst.nameAr.includes(q) ||
        inst.descriptionFr.toLowerCase().includes(q);

      return matchesBranch && matchesCategory && matchesSearch;
    });
  }, [activeBranch, selectedCategory, searchQuery]);

  return (
    <div className="min-h-screen flex flex-col bg-[#FDFBF7] dark:bg-[#0b0f19] relative transition-colors">
      {/* Navbar */}
      <Navbar 
        onOpenCalculator={() => setIsCalculatorOpen(true)} 
        activeTab={activeTab}
        setActiveTab={(tab) => setActiveTab(tab as any)}
      />

      {/* Hero Section */}
      <Hero 
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        totalCount={INSTITUTIONS_DATA.length}
      />

      {/* Navigation Sub-Tabs: Directory vs Official Portals & Calendar */}
      <div className="max-w-7xl mx-auto px-4 mb-6 flex items-center justify-center gap-3 flex-wrap">
        <button
          onClick={() => setActiveTab('directory')}
          className={`hand-btn px-5 py-2.5 text-sm font-bold flex items-center gap-2 ${
            activeTab === 'directory' ? 'bg-[#263D5B] dark:bg-slate-800 text-white' : 'bg-white dark:bg-slate-900 text-[#263D5B] dark:text-gray-200'
          }`}
        >
          <BookOpen size={18} />
          <span>Annuaire & Seuils / الدليل وعتبات القبول</span>
        </button>

        <button
          onClick={() => setActiveTab('portails')}
          className={`hand-btn px-5 py-2.5 text-sm font-bold flex items-center gap-2 ${
            activeTab === 'portails' ? 'bg-[#263D5B] dark:bg-slate-800 text-white' : 'bg-white dark:bg-slate-900 text-[#263D5B] dark:text-gray-200'
          }`}
        >
          <Globe size={18} className="text-[#49B6E5]" />
          <span>Portails Officiels & Liens / البوابات الرسمية</span>
        </button>

        <button
          onClick={() => setActiveTab('calendrier')}
          className={`hand-btn px-5 py-2.5 text-sm font-bold flex items-center gap-2 ${
            activeTab === 'calendrier' ? 'bg-[#263D5B] dark:bg-slate-800 text-white' : 'bg-white dark:bg-slate-900 text-[#263D5B] dark:text-gray-200'
          }`}
        >
          <Calendar size={18} className="text-[#D97706]" />
          <span>Calendrier & Dossier / خطوات الترشيح وملف التسجيل</span>
        </button>
      </div>

      {activeTab === 'directory' && (
        <>
          <BranchFilter 
            activeBranch={activeBranch}
            setActiveBranch={setActiveBranch}
          />

          <main className="flex-1 max-w-7xl mx-auto px-4 w-full mb-16">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6 pb-4 border-b-2 border-[#263D5B] dark:border-slate-700">
              <div className="flex items-center gap-2">
                <h2 className="text-2xl font-black font-comic text-[#263D5B] dark:text-white">
                  Institutions TAWJIH ({filteredInstitutions.length})
                </h2>
                <span className="text-xs bg-[#49B6E5] text-[#263D5B] font-mono px-2.5 py-1 rounded-full border border-[#263D5B] font-bold">
                  {activeBranch === 'ALL' ? 'Toutes branches' : `Branche: ${activeBranch}`}
                </span>
              </div>

              <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
                <span className="text-xs font-bold text-[#263D5B] dark:text-gray-300 whitespace-nowrap">Catégorie:</span>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="p-2 hand-border bg-white dark:bg-slate-900 text-[#263D5B] dark:text-white text-xs font-bold focus:outline-none"
                >
                  <option value="ALL">Toutes les catégories / كل التخصصات</option>
                  {categories.filter(c => c !== 'ALL').map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Directory Grid */}
            {filteredInstitutions.length > 0 ? (
              <motion.div 
                layout
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                <AnimatePresence>
                  {filteredInstitutions.map((inst) => (
                    <InstitutionCard 
                      key={inst.id}
                      institution={inst}
                      onSelect={(institution) => setSelectedInstitution(institution)}
                    />
                  ))}
                </AnimatePresence>
              </motion.div>
            ) : (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="bg-white dark:bg-slate-900 hand-card p-12 text-center max-w-xl mx-auto my-12"
              >
                <div className="text-4xl mb-3">🔍</div>
                <h3 className="text-xl font-black font-comic text-[#263D5B] dark:text-white mb-2">Aucune institution trouvée</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-6 font-arabic font-bold">
                  لم يتم العثور على أي مؤسسة مطابقة للبحث أو المسلك المختار. جرب تغيير معايير البحث.
                </p>
                <button
                  onClick={() => {
                    setActiveBranch('ALL');
                    setSearchQuery('');
                    setSelectedCategory('ALL');
                  }}
                  className="hand-btn px-6 py-2 bg-[#49B6E5] text-[#263D5B] font-bold text-sm"
                >
                  Réinitialiser les filtres / إعادة ضبط الفلاتر
                </button>
              </motion.div>
            )}
          </main>
        </>
      )}

      {activeTab === 'portails' && (
        <div className="max-w-5xl mx-auto px-4 py-8 w-full">
          <div className="bg-white dark:bg-slate-900 hand-card p-6 sm:p-8">
            <h2 className="text-2xl font-black font-comic text-[#263D5B] dark:text-white mb-2 flex items-center gap-2">
              <Globe className="text-[#49B6E5]" />
              <span>Portails Officiels Nationaux d'Orientation & Inscription</span>
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-6 font-arabic font-bold">
              البوابات الرسمية المعتمدة من طرف وزارة التربية الوطنية والتعليم العالي لتقديم الترشيحات واجتياز المباريات:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {APP_METADATA.officialPortals.map((portal, idx) => (
                <div key={idx} className="bg-[#FDFBF7] dark:bg-slate-800 hand-border p-5 flex flex-col justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-bold font-comic text-[#263D5B] dark:text-white mb-1">{portal.name}</h3>
                    <p className="text-xs text-gray-600 dark:text-gray-300 mb-3">{portal.purpose}</p>
                    <span className="text-xs font-mono font-bold text-[#49B6E5]">{portal.url}</span>
                  </div>
                  <a
                    href={portal.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hand-btn px-4 py-2 bg-[#263D5B] dark:bg-slate-900 text-white font-bold text-xs flex items-center justify-center gap-2 hover:bg-[#1a2c42]"
                  >
                    <span>Visiter le portail / زيارة الموقع</span>
                    <Globe size={14} className="text-[#49B6E5]" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {activeTab === 'calendrier' && (
        <div className="max-w-5xl mx-auto px-4 py-8 w-full space-y-8">
          {/* Preinscription Steps */}
          <div className="bg-white dark:bg-slate-900 hand-card p-6 sm:p-8">
            <h2 className="text-2xl font-black font-comic text-[#263D5B] dark:text-white mb-2 flex items-center gap-2">
              <Calendar className="text-[#D97706]" />
              <span>Calendrier & Étapes de Préinscription (مراحل وخطوات الترشيح)</span>
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-6 font-arabic font-bold">
              الخطوات الزمنية الأساسية التي يجب على كل بشالوري اتباعها للظفر بمقعد في المؤسسات العليا:
            </p>

            <div className="space-y-4">
              {PREINSCRIPTION_STEPS.map((step, idx) => (
                <div key={idx} className="bg-[#FDFBF7] dark:bg-slate-800 hand-border p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-[#49B6E5] rounded-full border-2 border-[#263D5B] flex items-center justify-center font-bold text-[#263D5B] shrink-0">
                      {step.step}
                    </div>
                    <div>
                      <h3 className="font-bold font-comic text-base text-[#263D5B] dark:text-white">{step.titleFr}</h3>
                      <p className="text-xs font-arabic font-bold text-[#49B6E5]">{step.titleAr}</p>
                      <p className="text-xs text-gray-600 dark:text-gray-300 mt-1">{step.desc}</p>
                    </div>
                  </div>
                  <span className="text-xs font-mono font-bold bg-[#263D5B] dark:bg-slate-900 text-white px-3 py-1 rounded-full shrink-0">
                    {step.date}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Dossier Requis */}
          <div className="bg-white dark:bg-slate-900 hand-card p-6 sm:p-8">
            <h2 className="text-2xl font-black font-comic text-[#263D5B] dark:text-white mb-2 flex items-center gap-2">
              <FileText className="text-[#49B6E5]" />
              <span>Dossier d'Inscription Définitive (ملف التسجيل النهائي)</span>
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-6 font-arabic font-bold">
              الوثائق الضرورية التي يجب تجهيزها فور القبول النهائي في المؤسسة:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {DOSSIER_ITEMS.map((item, idx) => (
                <div key={idx} className="bg-[#FDFBF7] dark:bg-slate-800 hand-border p-4 flex items-start gap-3">
                  <CheckCircle2 className="text-green-600 shrink-0 mt-0.5" size={20} />
                  <div>
                    <h3 className="font-bold text-sm text-[#263D5B] dark:text-white">{item.titleFr}</h3>
                    <p className="text-xs font-arabic font-bold text-[#49B6E5]">{item.titleAr}</p>
                    <p className="text-xs text-gray-600 dark:text-gray-300 mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Score Calculator & CPGE Modal */}
      <ScoreCalculator 
        isOpen={isCalculatorOpen}
        onClose={() => setIsCalculatorOpen(false)}
      />

      {/* Institution Detail Modal */}
      <InstitutionModal 
        institution={selectedInstitution}
        onClose={() => setSelectedInstitution(null)}
      />

      {/* AI Advisor Chat Widget */}
      <AiAdvisor />

      {/* Footer */}
      <Footer />
    </div>
  );
}
