import { useContext } from 'react'
import { LanguageContext } from '../context/LanguageContext'
import { translations } from '../data/content'
import { workExperience, education } from '../data/experience'
import { useInView } from '../hooks/useInView'
import SectionHeader from './SectionHeader'

const ACCENT = {
  purple: { dot: '#bb86fc', border: 'border-[#bb86fc]/20', tag: 'text-[#bb86fc]', bg: 'bg-[#bb86fc]/8' },
  teal:   { dot: '#03dac6', border: 'border-[#03dac6]/20', tag: 'text-[#03dac6]', bg: 'bg-[#03dac6]/8' },
}

function TimelineCard({ title, subtitle, period, description, accent, badge }) {
  const c = ACCENT[accent] ?? ACCENT.purple
  return (
    <div className={`relative pl-6 pb-8 last:pb-0`}>
      {/* Vertical line */}
      <div
        className="absolute left-0 top-2 bottom-0 w-px"
        style={{ background: `linear-gradient(to bottom, ${c.dot}55, transparent)` }}
      />
      {/* Dot */}
      <div
        className="absolute left-[-4px] top-[7px] w-2.5 h-2.5 rounded-full border-2 border-[#0a0a0f]"
        style={{ backgroundColor: c.dot }}
      />

      <div className={`p-4 rounded-xl bg-[#12121e] border ${c.border} transition-all duration-200 hover:brightness-110`}>
        <div className="flex items-start justify-between gap-2 mb-1 flex-wrap">
          <h4 className="font-mono text-sm font-medium text-[#e0e0e0]">{title}</h4>
          <span className="text-[10px] font-mono text-[#8892b0] shrink-0">{period}</span>
        </div>
        <p className={`text-xs font-mono mb-2 ${c.tag}`}>{subtitle}</p>
        {badge && (
          <span
            className="inline-block text-[10px] px-2 py-0.5 rounded-full font-mono mb-2"
            style={{ color: c.dot, background: `${c.dot}15`, border: `1px solid ${c.dot}30` }}
          >
            {badge}
          </span>
        )}
        <p className="text-[#8892b0] text-xs leading-relaxed">{description}</p>
      </div>
    </div>
  )
}

function Column({ title, icon, children, inView }) {
  return (
    <div className={`reveal ${inView ? 'visible' : ''}`}>
      <div className="flex items-center gap-2 mb-6">
        <span className="text-lg">{icon}</span>
        <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-[#8892b0]">{title}</h3>
      </div>
      {children}
    </div>
  )
}

export default function Experience() {
  const { lang } = useContext(LanguageContext)
  const t = translations[lang].sections.experience
  const [refWork, inViewWork] = useInView()
  const [refEdu, inViewEdu] = useInView()

  const workLabel = lang === 'sv' ? 'Arbetslivserfarenhet' : 'Work Experience'
  const eduLabel  = lang === 'sv' ? 'Utbildning' : 'Education'

  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader title={t.title} subtitle={t.subtitle} accent="purple" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Work */}
          <Column title={workLabel} icon="💼" inView={inViewWork}>
            <div ref={refWork}>
              {workExperience.map((job) => (
                <TimelineCard
                  key={job.id}
                  title={job.company}
                  subtitle={job.role[lang] ?? job.role.en}
                  period={job.period[lang] ?? job.period.en}
                  description={job.description[lang] ?? job.description.en}
                  accent={job.accent}
                  badge={job.id === 1 ? (lang === 'sv' ? 'Praktik' : 'Internship') : null}
                />
              ))}
            </div>
          </Column>

          {/* Education */}
          <Column title={eduLabel} icon="🎓" inView={inViewEdu}>
            <div ref={refEdu}>
              {education.map((edu) => (
                <TimelineCard
                  key={edu.id}
                  title={edu.school}
                  subtitle={edu.program[lang] ?? edu.program.en}
                  period={edu.type[lang] ?? edu.type.en}
                  description={edu.description[lang] ?? edu.description.en}
                  accent={edu.accent}
                />
              ))}
            </div>
          </Column>
        </div>
      </div>
    </section>
  )
}
