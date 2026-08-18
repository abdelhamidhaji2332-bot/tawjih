'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Bot, User, Sparkles } from 'lucide-react';

interface Message {
  sender: 'ai' | 'user';
  text: string;
}

export default function AiAdvisor() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: 'ai',
      text: 'Ahlen! I am your TAWJIH AI Orientation Expert. Ask me about ANY school in Morocco (Public, Private, OFPPT, CPGE, Médecine) or abroad, bourses, or career paths in French, Arabic, English or Darija! 🇲🇦✨'
    }
  ]);

  const quickQuestions = [
    'Quelles écoles pour Sciences Math ?',
    'ما هي شروط الولوج للأقسام التحضيرية CPGE؟',
    'Tell me about private universities (UIR, Al Akhawayn)',
    'كيفاش نحصل على منحة الدراسات العليا Mabourse؟'
  ];

  const handleSend = (query?: string) => {
    const q = query || input;
    if (!q.trim()) return;

    const newMsgs: Message[] = [...messages, { sender: 'user', text: q }];
    setMessages(newMsgs);
    setInput('');

    setTimeout(() => {
      let reply = "";
      const lower = q.toLowerCase();

      if (lower.includes('uir') || lower.includes('akhawayn') || lower.includes('private') || lower.includes('الخاصة') || lower.includes('privée')) {
        reply = "Les universités et écoles privées au Maroc (comme l'Université Internationale de Rabat - UIR, Al Akhawayn à Ifrane, Mundiapolis, UIC...) offrent d'excellentes formations reconnues avec des doubles diplômes internationaux. L'admission se fait généralement sur étude de dossier, concours propre et entretien de motivation.";
      } else if (lower.includes('bourse') || lower.includes('منحة') || lower.includes('mabourse')) {
        reply = "Pour bénéficier de la bourse d'enseignement supérieur au Maroc, la demande s'effectue obligatoirement via la plateforme nationale www.mabourse.enssup.gov.ma dès l'obtention du baccalauréat.";
      } else if (lower.includes('ofppt') || lower.includes('téchnicien') || lower.includes('التكوين المهني')) {
        reply = "L'OFPPT propose des formations professionnelles de haut niveau (Technicien Spécialisé, Technicien) dans des secteurs porteurs : automobile (IFMIA), aéronautique, digital, hôtellerie et gestion. Inscription via www.ofppt.ma.";
      } else if (lower.includes('math') || lower.includes('رياضيات')) {
        reply = "Pour les branches Sciences Mathématiques (SMA/SMB), tu disposes d'un profil très recherché pour les CPGE (الأقسام التحضيرية), l'ENSA, l'ENSAM, les Facultés de Médecine (FMP) et les écoles d'ingénieurs.";
      } else if (lower.includes('75') || lower.includes('انتقاء') || lower.includes('score')) {
        reply = "La formule standard de présélection dans les concours marocains (ENSA, ENCG, FMP, FST, EST) est : Score = (Examen National × 0.75) + (Examen Régional × 0.25).";
      } else if (lower.includes('medecine') || lower.includes('طب') || lower.includes('fmp')) {
        reply = "La Faculté de Médecine et de Pharmacie (FMP) et de Médecine Dentaire (FMD) nécessitent un excellent dossier (présélection stricte) et la réussite au Concours Commun (QCM).";
      } else if (lower.includes('cpge') || lower.includes('أقسام تحضيرية')) {
        reply = "Les CPGE durent 2 ans (MPSI, PCSI, TSI, ECT) et préparent au Concours National Commun (CNC).";
      } else {
        reply = `Excellente question ! Concernant "${q}", retiens ces conseils clés :\n1. Vérifie toujours le site officiel.\n2. Respecte les dates limites de préinscription.\n3. Prépare tes pièces justificatives à l'avance.`;
      }

      setMessages(prev => [...prev, { sender: 'ai', text: reply }]);
    }, 600);
  };

  return (
    <>
      <motion.button
        onClick={() => setIsOpen(true)}
        whileHover={{ scale: 1.08, rotate: 3 }}
        whileTap={{ scale: 0.92 }}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#49B6E5] hand-border flex items-center justify-center text-[#263D5B] shadow-sketchLg hover:bg-[#39a5d4] transition-colors"
        title="Conseiller TAWJIH AI"
      >
        <Bot size={30} strokeWidth={2.5} />
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-[#263D5B] animate-pulse"></span>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 30 }}
            className="fixed bottom-24 right-4 sm:right-6 z-50 w-96 max-w-[92vw] bg-white dark:bg-slate-900 hand-border shadow-sketchLg flex flex-col h-[520px] overflow-hidden text-[#111827] dark:text-gray-100"
          >
            {/* Header */}
            <div className="bg-[#263D5B] dark:bg-slate-800 text-white p-4 flex items-center justify-between border-b-3 border-[#263D5B]">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 bg-[#49B6E5] rounded-full flex items-center justify-center text-[#263D5B] font-bold">
                  🤖
                </div>
                <div>
                  <h3 className="font-bold font-comic text-base flex items-center gap-1.5">
                    <span>TAWJIH AI Expert</span>
                    <Sparkles size={14} className="text-[#49B6E5]" />
                  </h3>
                  <p className="text-[10px] font-arabic text-[#49B6E5]">مستشار التوجيه الذكي</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-red-500 flex items-center justify-center text-white transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-[#FDFBF7] dark:bg-slate-950">
              {messages.map((m, idx) => (
                <div
                  key={idx}
                  className={`flex gap-2 ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {m.sender === 'ai' && (
                    <div className="w-7 h-7 bg-[#49B6E5] rounded-full flex items-center justify-center text-xs shrink-0 border border-[#263D5B]">
                      🤖
                    </div>
                  )}
                  <div
                    className={`max-w-[85%] p-3 rounded-2xl text-xs sm:text-sm font-medium whitespace-pre-line ${
                      m.sender === 'user'
                        ? 'bg-[#263D5B] dark:bg-slate-800 text-white rounded-br-none'
                        : 'bg-white dark:bg-slate-900 text-[#111827] dark:text-gray-100 hand-border rounded-bl-none shadow-sm'
                    }`}
                  >
                    {m.text}
                  </div>
                  {m.sender === 'user' && (
                    <div className="w-7 h-7 bg-[#263D5B] dark:bg-slate-800 rounded-full flex items-center justify-center text-white text-xs shrink-0">
                      <User size={14} />
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Quick Suggestions */}
            <div className="p-2 bg-gray-50 dark:bg-slate-900 border-t border-[#263D5B]/20 dark:border-slate-800 flex gap-1.5 overflow-x-auto">
              {quickQuestions.map((q, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSend(q)}
                  className="whitespace-nowrap px-2.5 py-1 bg-white dark:bg-slate-800 text-[#263D5B] dark:text-gray-200 border border-[#263D5B]/30 rounded-full text-[10px] font-bold hover:bg-[#49B6E5]/20 transition-colors"
                >
                  {q}
                </button>
              ))}
            </div>

            {/* Input Footer */}
            <div className="p-3 bg-white dark:bg-slate-900 border-t-2 border-[#263D5B]/20 dark:border-slate-800 flex items-center gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Posez votre question..."
                className="flex-1 px-3 py-2 text-xs sm:text-sm hand-border bg-gray-50 dark:bg-slate-800 dark:text-white focus:outline-none"
              />
              <button
                onClick={() => handleSend()}
                className="hand-btn px-4 py-2 bg-[#49B6E5] text-[#263D5B] hover:bg-[#39a5d4] flex items-center justify-center font-bold"
              >
                <Send size={16} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
