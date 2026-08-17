'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { INSTITUTIONS_DATA, Institution } from '@/data/institutions';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import BranchFilter from '@/components/BranchFilter';
import ScoreCalculator from '@/components/ScoreCalculator';
import InstitutionCard from '@/components/InstitutionCard';
import InstitutionModal from '@/components/InstitutionModal';
import Footer from '@/components/Footer';
import { Search, Filter, BookOpen } from 'lucide-react';

export default function Home() {
  const [activeBranch, setActiveBranch] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [isCalculatorOpen, setIsCalculatorOpen] = useState<boolean>(false);
  const [selectedInstitution, setSelectedInstitution] = useState<Institution | null>(null);
  const [activeTab, setActiveTab] = useState<string>('directory');

  // Categories list extracted from data
  const categories = useMemo(() => {
    const cats = Array.from(new Set(INSTITUTIONS_DATA.map(i => i.category)));
    return ['ALL', ...cats];
  }, []);

  // Filter institutions based on branch, search query, and category
  const filteredInstitutions = useMemo(() => {
    return INSTITUTIONS_DATA.filter(inst => {
      // Branch filter
      const matchesBranch = activeBranch === 'ALL' || inst.eligibleBranches.includes(activeBranch);

      // Category filter
      const matchesCategory = selectedCategory === 'ALL' || inst.category === selectedCategory;

      // Search query filter (matches acronym, nameFr, nameAr, descriptionFr)
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
    <div className="min-h-screen flex flex-col bg-[#FDFBF7]">
      {/* Navbar */}
      <Navbar 
        onOpenCalculator={() => setIsCalculatorOpen(true)} 
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      {/* Hero Section */}
      <Hero 
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        totalCount={INSTITUTIONS_DATA.length}
      />

      {/* Branch Filter Component */}
      <BranchFilter 
        activeBranch={activeBranch}
        setActiveBranch={setActiveBranch}
      />

      {/* Category sub-filter & Results header */}
      <main className="flex-1 max-w-7xl mx-auto px-4 w-full mb-16">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6 pb-4 border-b-2 border-[#263D5B]">
          <div className="flex items-center gap-2">
            <h2 className="text-2xl font-black font-comic text-[#263D5B]">
              Institutions & Formations TAWJIH ({filteredInstitutions.length})
            </h2>
            <span className="text-xs bg-[#49B6E5] text-[#263D5B] font-mono px-2.5 py-1 rounded-full border border-[#263D5B] font-bold">
              {activeBranch === 'ALL' ? 'Toutes branches' : `Branche: ${activeBranch}`}
            </span>
          </div>

          {/* Category Dropdown / Filter pills */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
            <span className="text-xs font-bold text-[#263D5B] whitespace-nowrap">Catégorie:</span>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="p-2 hand-border bg-white text-[#263D5B] text-xs font-bold focus:outline-none"
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
            className="bg-white hand-card p-12 text-center max-w-xl mx-auto my-12"
          >
            <div className="text-4xl mb-3">🔍</div>
            <h3 className="text-xl font-black font-comic text-[#263D5B] mb-2">Aucune institution trouvée</h3>
            <p className="text-sm text-gray-600 mb-6 font-arabic font-bold">
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

      {/* Footer */}
      <Footer />
    </div>
  );
}
