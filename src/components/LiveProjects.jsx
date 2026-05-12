import { useContext } from 'react'
import { LanguageContext } from '../context/LanguageContext'
import { translations } from '../data/content'
import { projects } from '../data/projects'
import { useInView } from '../hooks/useInView'
import ProjectCard from './ProjectCard'
import SectionHeader from './SectionHeader'

export default function LiveProjects() {
  const { lang } = useContext(LanguageContext)
  const t = translations[lang].sections.projects
  const tProject = translations[lang].project
  const [ref, inView] = useInView()

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader title={t.title} subtitle={t.subtitle} accent="teal" />
        <div
          ref={ref}
          className={`grid grid-cols-1 md:grid-cols-3 gap-6 reveal ${inView ? 'visible' : ''}`}
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} lang={lang} t={tProject} />
          ))}
        </div>
      </div>
    </section>
  )
}
