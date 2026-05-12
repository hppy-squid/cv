import { LanguageProvider } from './context/LanguageContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import GitHubSection from './components/GitHubSection'
import LiveProjects from './components/LiveProjects'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Contact from './components/Contact'

function Divider({ color = 'purple' }) {
  const via = color === 'teal' ? 'rgba(3,218,198,0.15)' : 'rgba(187,134,252,0.15)'
  return (
    <div className="max-w-6xl mx-auto px-6">
      <div
        className="h-px"
        style={{ background: `linear-gradient(to right, transparent, ${via}, transparent)` }}
      />
    </div>
  )
}

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen">
        <Navbar />
        <Hero />
        <Divider color="purple" />
        <GitHubSection />
        <Divider color="teal" />
        <LiveProjects />
        <Divider color="purple" />
        <Skills />
        <Divider color="teal" />
        <Experience />
        <Divider color="purple" />
        <Contact />
      </div>
    </LanguageProvider>
  )
}
