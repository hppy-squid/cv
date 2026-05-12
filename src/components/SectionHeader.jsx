export default function SectionHeader({ title, subtitle, accent = 'purple' }) {
  const color = accent === 'teal' ? '#03dac6' : accent === 'pink' ? '#f72585' : '#bb86fc'

  return (
    <div className="text-center mb-14">
      <p
        className="font-mono text-xs uppercase tracking-[0.25em] mb-3"
        style={{ color }}
      >
        // {subtitle}
      </p>
      <h2 className="text-3xl md:text-4xl font-bold text-white">{title}</h2>
      <div className="mt-5 flex items-center justify-center gap-3">
        <div
          className="h-px w-20"
          style={{ background: `linear-gradient(to right, transparent, ${color})` }}
        />
        <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: color }} />
        <div
          className="h-px w-20"
          style={{ background: `linear-gradient(to left, transparent, ${color})` }}
        />
      </div>
    </div>
  )
}
