import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Projects } from './components/Projects'
import { Sites } from './components/Sites'
import { StatusBar } from './components/StatusBar'
import { SupportBanner } from './components/SupportBanner'

export function App() {
  return (
    <div className="site-shell">
      <Header />
      <main id="home">
        <Hero />
        <StatusBar />
        <Projects />
        <Sites />
        <SupportBanner />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}