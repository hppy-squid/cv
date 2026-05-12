export default function ProjectCard({ project, lang, t }) {
  const name = project.name[lang] ?? project.name.en
  const desc = project.description[lang] ?? project.description.en
  const isLive = project.status === 'live'

  return (
    <div className="flex flex-col rounded-xl bg-[#12121e] border border-[#03dac6]/10 card-hover card-hover-teal overflow-hidden">
      {/* Placeholder thumbnail */}
      <div className="relative h-44 bg-[#0d0d1a] flex items-center justify-center border-b border-[#03dac6]/10 overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(3,218,198,0.3) 0%, transparent 65%)',
          }}
        />
        <span className="text-5xl opacity-10 font-mono select-none">&lt;/&gt;</span>
        <div className="absolute bottom-2 right-3">
          <span
            className={`text-[10px] px-2 py-0.5 rounded-full font-mono border ${
              isLive
                ? 'bg-[#03dac6]/10 text-[#03dac6] border-[#03dac6]/30'
                : 'bg-[#f72585]/10 text-[#f72585] border-[#f72585]/30'
            }`}
          >
            {isLive ? '● live' : '○ ' + t.comingSoon}
          </span>
        </div>
      </div>

      <div className="flex flex-col flex-1 p-5">
        <h3 className="font-mono text-sm font-medium text-[#e0e0e0] mb-2">{name}</h3>
        <p className="text-[#8892b0] text-xs leading-relaxed flex-1">{desc}</p>

        <div className="flex flex-wrap gap-1.5 mt-4 mb-4">
          {project.tech.map((tag) => (
            <span
              key={tag}
              className="text-[10px] px-2 py-0.5 rounded bg-[#1e1e36] text-[#8892b0] border border-[#bb86fc]/10 font-mono"
            >
              {tag}
            </span>
          ))}
        </div>

        {isLive && project.url ? (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-mono text-[#03dac6] hover:text-[#bb86fc] transition-colors"
          >
            {t.visit}
          </a>
        ) : (
          <span className="text-xs font-mono text-[#8892b0]/50">{t.comingSoon}...</span>
        )}
      </div>
    </div>
  )
}
