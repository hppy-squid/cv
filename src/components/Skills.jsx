import { useContext } from 'react'
import { LanguageContext } from '../context/LanguageContext'
import { translations } from '../data/content'
import { skills } from '../data/skills'
import { useInView } from '../hooks/useInView'
import SectionHeader from './SectionHeader'

const ACCENTS = {
  purple: { text: '#bb86fc', bg: 'rgba(187,134,252,0.08)', border: 'rgba(187,134,252,0.2)' },
  teal:   { text: '#03dac6', bg: 'rgba(3,218,198,0.08)',   border: 'rgba(3,218,198,0.2)' },
  pink:   { text: '#f72585', bg: 'rgba(247,37,133,0.08)',  border: 'rgba(247,37,133,0.2)' },
}

function SkillGroup({ title, items, accent }) {
  const c = ACCENTS[accent]
  return (
    <div>
      <h3
        className="font-mono text-xs uppercase tracking-[0.25em] mb-3"
        style={{ color: c.text }}
      >
        {title}
      </h3>
      <div className="flex flex-wrap gap-2">
        {items.map((skill) => (
          <span
            key={skill}
            className="px-3 py-1.5 rounded-lg text-sm font-mono transition-transform hover:scale-105 cursor-default"
            style={{ color: c.text, backgroundColor: c.bg, border: `1px solid ${c.border}` }}
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function Skills() {
  const { lang } = useContext(LanguageContext)
  const t = translations[lang].sections.skills
  const tLabels = translations[lang].skills
  const [ref, inView] = useInView()

  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionHeader title={t.title} subtitle={t.subtitle} accent="pink" />
        <div
          ref={ref}
          className={`space-y-10 reveal ${inView ? 'visible' : ''}`}
        >
          <SkillGroup title={tLabels.languages} items={skills.languages} accent="purple" />
          <SkillGroup title={tLabels.tools}     items={skills.tools}     accent="teal" />
          <SkillGroup title={tLabels.soft}      items={skills.soft[lang]} accent="pink" />
        </div>
      </div>
    </section>
  )
}
