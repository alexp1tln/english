import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

// Basic mapping for phonetic spelling to Russian
function transliterateToRussian(word: string): string {
    const rules: [RegExp, string][] = [
        // Special Google Translate American Respelling
        [/yo͞o/g, 'ю'], [/yo͝o/g, 'ю'], [/yə/g, 'йэ'],
        [/o͞o/g, 'у'], [/o͝o/g, 'у'], [/t͟h/g, 'з'], [/th/g, 'с'],
        [/sh/g, 'ш'], [/ch/g, 'ч'], [/zh/g, 'ж'], [/ng/g, 'нг'],
        [/ā/g, 'эй'], [/ē/g, 'и'], [/ī/g, 'ай'], [/ō/g, 'оу'], [/ū/g, 'ю'],
        [/ä/g, 'а'], [/ô/g, 'о'],
        [/oi/g, 'ой'], [/ou/g, 'ау'], 
        [/ər/g, 'ер'],
        // Standard IPA combinations
        [/aɪ/g, 'ай'], [/eɪ/g, 'эй'], [/ɔɪ/g, 'ой'], [/aʊ/g, 'ау'], [/əʊ/g, 'оу'],
        [/ɪə/g, 'иэ'], [/eə/g, 'эа'], [/ʊə/g, 'уэ'], [/iː/g, 'и'], [/uː/g, 'у'],
        [/ɑː/g, 'а'], [/ɔː/g, 'о'], [/ɜː/g, 'ё'],
        [/ʧ/g, 'ч'], [/ʤ/g, 'дж'], [/ʃ/g, 'ш'], [/ʒ/g, 'ж'], [/ŋ/g, 'нг'],
        [/θ/g, 'с'], [/ð/g, 'з'],
        // Base vowels & consonants
        [/a/g, 'э'], [/æ/g, 'э'], [/b/g, 'б'], [/c/g, 'к'], [/d/g, 'д'],
        [/e/g, 'э'], [/f/g, 'ф'], [/g/g, 'г'], [/ɡ/g, 'г'], [/h/g, 'х'], [/i/g, 'и'],
        [/j/g, 'дж'], [/k/g, 'к'], [/l/g, 'л'], [/m/g, 'м'], [/n/g, 'н'],
        [/o/g, 'о'], [/p/g, 'п'], [/q/g, 'кв'], [/r/g, 'р'], [/s/g, 'с'],
        [/t/g, 'т'], [/u/g, 'у'], [/v/g, 'в'], [/w/g, 'в'], [/x/g, 'кс'],
        [/y/g, 'й'], [/z/g, 'з'], [/ə/g, 'э'], [/ɛ/g, 'э'], [/ɪ/g, 'и'],
        [/ʊ/g, 'у'], [/ʌ/g, 'а'], [/ɔ/g, 'о'], [/ɑ/g, 'а'], [/ɒ/g, 'о'],
        [/ɜ/g, 'ё'],
        // Clean up formatting
        [/['ˈˌ()]/g, '']
    ];
    let res = word.toLowerCase();
    for (const [reg, repl] of rules) {
        res = res.replace(reg, repl);
    }
    return res;
}

interface ClickableTextProps {
  text: string;
}

export const ClickableText: React.FC<ClickableTextProps> = ({ text }) => {
  const [activeWord, setActiveWord] = useState<string | null>(null);
  const [translationInfo, setTranslationInfo] = useState<{translation: string, transcription: string} | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleWordClick = async (e: React.MouseEvent, word: string) => {
    e.stopPropagation();
    // Remove punctuation
    const cleanWord = word.replace(/[.,!?()[\]{}"';:]/g, '');
    if (!cleanWord || !/^[A-Za-z'-]+$/.test(cleanWord)) return;
    
    setActiveWord(word);
    setLoading(true);
    setError(false);
    
    try {
        const response = await fetch(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=ru&dt=t&dt=bd&dt=rm&q=${encodeURIComponent(cleanWord)}`);
        const data = await response.json();
        
        let translation = cleanWord;
        let phonetic = cleanWord;
        
        if (data && data[0] && data[0][0]) {
            let direct = data[0][0][0];
            let alternatives: string[] = [];
            
            if (data[1] && Array.isArray(data[1])) {
                data[1].forEach((pos: any) => {
                    if (pos[1] && Array.isArray(pos[1])) {
                        alternatives.push(...pos[1].slice(0, 2));
                    }
                });
            }
            
            let uniqueAlts = Array.from(new Set(alternatives)).filter(w => w.toLowerCase() !== direct.toLowerCase());
            translation = [direct, ...uniqueAlts].slice(0, 3).join(', ');
            
            // try to get phonetic
            if (data[0][1] && data[0][1][3]) {
                phonetic = data[0][1][3];
            }
        }
        
        const ruPhonetic = transliterateToRussian(phonetic);
        
        setTranslationInfo({
            translation,
            transcription: `[${ruPhonetic}]`
        });
    } catch (err) {
        console.error(err);
        setError(true);
    } finally {
        setLoading(false);
    }
  };

  const closeTooltip = () => {
    setActiveWord(null);
    setTranslationInfo(null);
  };

  // Split text into tokens (words and punctuation/spaces)
  const tokens = text.split(/([ \t\n]+)/);

  return (
    <span className="relative inline">
      {tokens.map((token, idx) => {
        if (/^[ \t\n]+$/.test(token)) {
            return <span key={idx}>{token}</span>;
        }
        const hasLetters = /[A-Za-z]/.test(token);
        if (hasLetters) {
            return (
                <span 
                    key={idx} 
                    onClick={(e) => handleWordClick(e, token)}
                    className="cursor-pointer hover:text-white/80 hover:bg-white/10 rounded px-0.5 transition-colors underline decoration-dashed decoration-white/30 underline-offset-4"
                >
                    {token}
                </span>
            );
        }
        return <span key={idx}>{token}</span>;
      })}
      
      <AnimatePresence>
        {activeWord && (
          <>
            <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                exit={{ opacity: 0 }} 
                onClick={closeTooltip}
                className="fixed inset-0 z-40"
            />
            <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                className="absolute z-50 mt-2 left-1/2 -translate-x-1/2 min-w-[200px] p-4 rounded-2xl bg-gothic-card border border-white/20 shadow-2xl backdrop-blur-xl flex flex-col items-center gap-2"
            >
                <div className="text-white/50 text-sm">{activeWord.replace(/[.,!?()[\]{}"';:]/g, '')}</div>
                {loading ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : error ? (
                    <div className="text-red-400 text-sm text-center">Ошибка перевода</div>
                ) : translationInfo ? (
                    <>
                        <div className="text-xl font-semibold text-white">{translationInfo.translation}</div>
                        <div className="text-white/70 text-sm font-light">{translationInfo.transcription}</div>
                    </>
                ) : null}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </span>
  );
};
