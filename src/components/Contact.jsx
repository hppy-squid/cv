import { useContext } from 'react'
import { LanguageContext } from '../context/LanguageContext'
import { translations } from '../data/content'
import { useInView } from '../hooks/useInView'
import SectionHeader from './SectionHeader'

const LINKS = {
  email:    { href: 'mailto:felizia02@icloud.com',              label: 'felizia02@icloud.com' },
  github:   { href: 'https://github.com/hppy-squid',      label: 'hppy-squid', target: '_blank' },
  linkedin: { href: 'https://www.linkedin.com/in/felicia-karlsson-696969q/',                                   label: 'linkedin.com/in/felicia', target: '_blank' },
}

function ContactItem({ icon, labelKey, info, accent }) {
  const colors = {
    purple: { border: 'border-[#bb86fc]/20', hover: 'hover:border-[#bb86fc]/60 hover:bg-[#bb86fc]/5', text: 'text-[#bb86fc]', label: 'group-hover:text-[#bb86fc]' },
    teal:   { border: 'border-[#03dac6]/20', hover: 'hover:border-[#03dac6]/60 hover:bg-[#03dac6]/5', text: 'text-[#03dac6]', label: 'group-hover:text-[#03dac6]' },
    pink:   { border: 'border-[#f72585]/20', hover: 'hover:border-[#f72585]/60 hover:bg-[#f72585]/5', text: 'text-[#f72585]', label: 'group-hover:text-[#f72585]' },
  }
  const c = colors[accent]

  return (
    <a
      href={info.href}
      target={info.target}
      rel={info.target ? 'noopener noreferrer' : undefined}
      className={`group flex items-center gap-3 px-5 py-3.5 rounded-xl bg-[#12121e] border ${c.border} ${c.hover} transition-all duration-200 w-full`}
    >
      <span className={`text-xl ${c.text}`}>{icon}</span>
      <div className="text-left min-w-0">
        <p className="text-[10px] text-[#8892b0] font-mono">{labelKey}</p>
        <p className={`text-sm text-[#e0e0e0] ${c.label} transition-colors truncate`}>{info.label}</p>
      </div>
    </a>
  )
}

export default function Contact() {
  const { lang } = useContext(LanguageContext)
  const t = translations[lang].sections.contact
  const tc = translations[lang].contact
  const [ref, inView] = useInView()

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-xl mx-auto text-center">
        <SectionHeader title={t.title} subtitle={t.subtitle} accent="teal" />
        <p className="text-[#8892b0] mb-10">{tc.message}</p>

        <div
          ref={ref}
          className={`flex flex-col gap-3 reveal ${inView ? 'visible' : ''}`}
        >
          <ContactItem icon="✉" labelKey={tc.emailLabel}    info={LINKS.email}    accent="purple" />
          <ContactItem icon="⌥" labelKey={tc.githubLabel}   info={LINKS.github}   accent="teal" />
          <ContactItem icon="in" labelKey={tc.linkedinLabel} info={LINKS.linkedin} accent="pink" />
        </div>

        <p className="mt-16 text-[10px] text-[#8892b0]/30 font-mono">
          built with React &amp; Tailwind CSS
        </p>
      </div>
    </section>
  )
}
