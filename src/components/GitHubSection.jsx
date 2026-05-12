import { useContext } from 'react'
import { LanguageContext } from '../context/LanguageContext'
import { translations } from '../data/content'
import { repos } from '../data/repos'
import { useInView } from '../hooks/useInView'
import RepoCard from './RepoCard'
import SectionHeader from './SectionHeader'

export default function GitHubSection() {
  const { lang } = useContext(LanguageContext)
  const t = translations[lang].sections.repos
  const [ref, inView] = useInView()

  return (
    <section id="repos" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader title={t.title} subtitle={t.subtitle} accent="purple" />
        <div
          ref={ref}
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 reveal ${inView ? 'visible' : ''}`}
        >
          {repos.map((repo) => (
            <RepoCard key={repo.id} repo={repo} lang={lang} />
          ))}
        </div>
      </div>
    </section>
  )
}
