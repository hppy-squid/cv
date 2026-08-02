import { useContext } from 'react'
import { LanguageContext } from '../context/LanguageContext'
import { translations } from '../data/content'

const GITHUB_URL = 'https://github.com/hppy-squid'
const AVATAR_URL = 'cv/src/components/prfilbild.jpg'

export default function Hero() {
  const { lang } = useContext(LanguageContext)
  const t = translations[lang].hero

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center grid-bg overflow-hidden"
    >
      {/* Extra depth gradients */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 60% at 50% 40%, rgba(187,134,252,0.06) 0%, transparent 70%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-2xl mx-auto">
        {/* Avatar */}
        <div className="flex justify-center mb-8">
          <div className="animate-float">
            <div className="w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden border-2 border-[#bb86fc]/50 animate-pulse-ring">
              <img
                src={AVATAR_URL}
                alt="Felicia Karlsson"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <p className="font-mono text-xs text-[#8892b0] tracking-widest mb-2 fade-in-up delay-1">
          {t.greeting}
        </p>

        <h1 className="text-5xl md:text-7xl font-bold text-gradient mb-4 fade-in-up delay-2 leading-tight">
          {t.name}
        </h1>

        <p className="font-mono text-sm md:text-base text-[#03dac6] mb-6 fade-in-up delay-3">
          {t.role}
        </p>

        <p className="text-[#8892b0] text-base md:text-lg leading-relaxed mb-10 fade-in-up delay-4">
          {t.bio}
        </p>

        <div className="flex items-center justify-center gap-4 fade-in-up delay-5">
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-lg border border-[#bb86fc]/50 text-[#bb86fc] font-mono text-sm hover:bg-[#bb86fc]/10 hover:border-[#bb86fc] transition-all duration-200"
          >
            {t.cta.github} ↗
          </a>
          <a
            href="#projects"
            className="px-6 py-3 rounded-lg bg-[#03dac6]/10 border border-[#03dac6]/40 text-[#03dac6] font-mono text-sm hover:bg-[#03dac6]/20 hover:border-[#03dac6] transition-all duration-200"
          >
            {t.cta.projects} ↓
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 flex flex-col items-center gap-1.5 animate-bounce-down">
        <span className="text-[10px] font-mono text-[#8892b0]/50 tracking-widest">scroll</span>
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="text-[#8892b0]/30">
          <path d="M1 4l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </section>
  )
}
