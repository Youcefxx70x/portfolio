
import { useState } from 'react'
import './App.css'
import Contact from './components/Contact'
import Experience from './components/Experience'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Technologies from './components/Technologies'

function App() {

  const [lang,setLang]=useState('GB')


  return (
    <>
     <div className="overflow-x-hidden text-stone-300 antialiased">
        <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] px-5 overflow-y-auto hide-scrollbar">
          <Navbar lang={lang} setLang={setLang}/>
          <Hero lang={lang} />
          <Technologies lang={lang}/>
          <Skills  lang={lang} />
          <Projects lang={lang}/>
          <Experience lang={lang}/>
          <Contact lang={lang}/>
        </div>
        </div>

      </div>
    </>
  )
}

export default App
