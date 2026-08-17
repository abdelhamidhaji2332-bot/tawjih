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
      text: 'Bonjour ! Je suis ton conseiller d\'orientation virtuel TAWJIH AI. Pose-moi tes questions sur les écoles, les seuils, les branches ou les concours au Maroc en Français, Arabe ou Darija ! 🇲🇦🎓'
    }
  ]);

  const quickQuestions = [
    'Quelles écoles pour Sciences Math ?',
    'كيف أحسب نقطة الانتقاء (75/25)؟',
    'Comment postuler en Médecine (FMP) ?',
    'ما هي شروط الولوج للأقسام التحضيرية CPGE؟'
  ];

  const handleSend = (query?: string) => {
    const q = query || input;
    if (!q.trim()) return;

    const newMsgs: Message[] = [...messages, { sender: 'user', text: q }];
    setMessages(newMsgs);
    setInput('');

    // Simulate intelligent orientation response
    setTimeout(() => {
      let reply = "Je peux t'aider avec toutes les informations sur l'orientation post-bac au Maroc (ENSA, ENCG, FMP, CPGE, BTS...). N'hésite pas à préciser ta branche ou ton école cible !";
      const lower = q.toLowerCase();

      if (lower.includes('math') || lower.includes('رياضيات')) {
        reply = "Pour les branches Sciences Mathématiques (SMA/SMB), tu as accès à l'élite : CPGE (الأقسام التحضيرية), ENSA, ENSAM, FST, Facultés de Médecine (FMP/FMD), et les classes prépas intégrées comme IAV. Tes notes en maths et physique sont déterminantes !";
      } else if (lower.includes('75') || lower.includes('نقطة') || lower.includes('انتقاء') || lower.includes('score')) {
        reply = "La formule standard de présélection dans la plupart des grandes écoles (ENSA, ENCG, FMP, FST, EST) est : Score = (Examen National × 0.75) + (Examen Régional × 0.25). Tu peux utiliser notre simulateur en haut pour calculer ton score exact !";
      } else if (lower.includes('medecine') || lower.includes('طب') || lower.includes('fmp')) {
        reply = "Pour accéder à la Faculté de Médecine et de Pharmacie (FMP) ou Médecine Dentaire (FMD), il faut un dossier excellent (présélection stricte basée sur 75% national + 25% régional) suivi d'un Concours Commun (QCM en Maths, Physique, Chimie, SVT). Site officiel : www.medramo.ac.ma";
      } else if (lower.includes('cpge') || lower.includes('أقسام تحضيرية')) {
        reply = "Les CPGE (Classes Préparatoires aux Grandes Écoles) durent 2 ans (MPSI, PCSI, TSI, ECT) et préparent au Concours National Commun (CNC) pour intégrer les grandes écoles d'ingénieurs (EMI, EHTP, ENSIAS...) et de commerce. La sélection se base sur les notes de 1ère et 2ème année du Bac.";
      } else if (lower.includes('ensa')) {
        reply = "L'ENSA (École Nationale des Sciences Appliquées) propose un cycle ingénieur d'État de 5 ans. L'accès se fait via un concours commun après une présélection nationale. Inscription sur le portail officiel : www.ensa-concours.ma";
      } else if (lower.includes('encg') || lower.includes('تجارة')) {
        reply = "L'ENCG forme des cadres en commerce et gestion en 5 ans. L'accès se fait par présélection (75/25) puis le concours TAFEM (www.tafem.ma).";
      } else if (lower.includes('كيفاش') || lower.includes('كيف')) {
        reply = "لكي تترشح لأي مؤسسة بالمغرب، يجب أولاً تتبع الإعلانات الرسمية على بوابات المدارس (مثل ensa-concours.ma أو tafem.ma)، إنشاء حساب شخصي، إدخال النقط المطلوبة، ثم إيداع الملفات إذا تطلب الأمر. هل تبحث عن مدرسة معينة؟";
      }

      setMessages(prev => [...prev, { sender: 'ai', text: reply }]);
    }, 600);
  };

  return (
    <>
      {/* Floating Button */}
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

      {/* Chat Window Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 30 }}
            className="fixed bottom-24 right-4 sm:right-6 z-50 w-96 max-w-[92vw] bg-white hand-border shadow-sketchLg flex flex-col h-[500px] overflow-hidden"
          >
            {/* Header */}
            <div className="bg-[#263D5B] text-white p-4 flex items-center justify-between border-b-3 border-[#263D5B]">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 bg-[#49B6E5] rounded-full flex items-center justify-center text-[#263D5B] font-bold">
                  🤖
                </div>
                <div>
                  <h3 className="font-bold font-comic text-base flex items-center gap-1.5">
                    <span>TAWJIH AI Advisor</span>
                    <Sparkles size={14} className="text-[#49B6E5]" />
                  </h3>
                  <p className="text-[10px] font-arabic text-[#49B6E5]">مستشار التوجيه الذكي بالمغرب</p>
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
            <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-[#FDFBF7]">
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
                    className={`max-w-[80%] p-3 rounded-2xl text-xs sm:text-sm font-medium ${
                      m.sender === 'user'
                        ? 'bg-[#263D5B] text-white rounded-br-none'
                        : 'bg-white text-[#111827] hand-border rounded-bl-none shadow-sm'
                    }`}
                  >
                    {m.text}
                  </div>
                  {m.sender === 'user' && (
                    <div className="w-7 h-7 bg-[#263D5B] rounded-full flex items-center justify-center text-white text-xs shrink-0">
                      <User size={14} />
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Quick Suggestions */}
            <div className="p-2 bg-gray-50 border-t border-[#263D5B]/20 flex gap-1.5 overflow-x-auto">
              {quickQuestions.map((q, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSend(q)}
                  className="whitespace-nowrap px-2.5 py-1 bg-white text-[#263D5B] border border-[#263D5B]/30 rounded-full text-[10px] font-bold hover:bg-[#49B6E5]/20 transition-colors"
                >
                  {q}
                </button>
              ))}
            </div>

            {/* Input Footer */}
            <div className="p-3 bg-white border-t-2 border-[#263D5B]/20 flex items-center gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Posez votre question / اطرح سؤالك هنا..."
                className="flex-1 px-3 py-2 text-xs sm:text-sm hand-border bg-gray-50 focus:outline-none focus:bg-white"
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
