import { useContext } from 'react'
import { LanguageContext } from '../context/LanguageContext'

export default function LanguageToggle() {
  const { lang, setLang } = useContext(LanguageContext)

  return (
    <button
      onClick={() => setLang(lang === 'en' ? 'sv' : 'en')}
      className="flex items-center gap-1 bg-[#1a1a2e] border border-[#bb86fc]/20 rounded-full px-3 py-1.5 text-xs font-mono hover:border-[#bb86fc]/50 transition-colors"
      aria-label="Switch language"
    >
      <span className={lang === 'en' ? 'text-[#bb86fc]' : 'text-[#8892b0]'}>EN</span>
      <span className="text-[#8892b0]/40 mx-0.5">|</span>
      <span className={lang === 'sv' ? 'text-[#bb86fc]' : 'text-[#8892b0]'}>SV</span>
    </button>
  )
}
