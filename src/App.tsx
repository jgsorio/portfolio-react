import './App.css'
import { About } from './components/About'
import { Contact } from './components/Contact'
import { Hero } from './components/Hero'
import { Project } from './components/Project'
import { Services } from './components/Services'
import { Skills } from './components/Skills'
import { Testimonials } from './components/Testimonials'

function App() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Project />
      <Skills />
      <Testimonials />
      <Contact />
    </main>
  )
}

export default App
