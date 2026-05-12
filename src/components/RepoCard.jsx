const LANG_COLORS = {
  Java:       '#b07219',
  Kotlin:     '#7F52FF',
  TypeScript: '#3178c6',
  JavaScript: '#f1e05a',
  HTML:       '#e34c26',
  CSS:        '#563d7c',
}

export default function RepoCard({ repo, lang }) {
  const desc = repo.description[lang] ?? repo.description.en
  const dot  = LANG_COLORS[repo.language] ?? '#8892b0'

  return (
    <a
      href={repo.url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col p-5 rounded-xl bg-[#12121e] border border-[#bb86fc]/10 card-hover group min-h-[130px]"
    >
      <div className="flex items-start justify-between mb-2.5">
        <h3 className="font-mono text-sm font-medium text-[#e0e0e0] group-hover:text-[#bb86fc] transition-colors leading-tight">
          {repo.name}
        </h3>
        <span className="text-[#8892b0]/50 group-hover:text-[#bb86fc] transition-colors ml-2 shrink-0">↗</span>
      </div>

      <p className="text-[#8892b0] text-xs leading-relaxed flex-1">{desc}</p>

      <div className="flex items-center gap-2 mt-4">
        <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: dot }} />
        <span className="text-xs text-[#8892b0] font-mono">{repo.language}</span>
      </div>
    </a>
  )
}
