import React, { useEffect } from 'react'
// @ts-ignore
import Lenis from 'lenis'

import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { Header } from '@components/layout/Header'
import { Footer } from '@components/layout/Footer'
import { Home } from './pages/Home'
import { AboutUs } from './pages/AboutUs'
import { Volunteers } from './pages/Volunteers'
import { Universities } from './pages/Universities'
import { UFABC } from './pages/Universities/UFABC'
import { CursosTecnicos } from './pages/CursosTecnicos'
import { Oportunidades } from './pages/Oportunidades'
import { Cursinhos } from './pages/Cursinhos'
import { Vestibular } from './pages/Vestibular'
import { Intercambio } from './pages/Intercambio'
import { Midia } from './pages/Midia'
import { UNIFESP } from './pages/Universities/UNIFESP'
import { IF } from './pages/Universities/IF'
import { UNESP } from './pages/Universities/UNESP'
import { UNICAMP } from './pages/Universities/UNICAMP'
import { UFSCAR } from './pages/Universities/UFSCAR'
import { ITA } from './pages/Universities/ITA'
import { USP } from './pages/Universities/USP'
import { Palestras } from './pages/AboutUs/Palestras'
import { Senai } from './pages/Senai'
import { Etec } from './pages/Etec'
import { Blog } from './pages/Blog'

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({ duration: 1.2 })
    let rafId: number
    function loop(time: number) {
      // @ts-ignore
      lenis.raf(time)
      rafId = requestAnimationFrame(loop)
    }
    rafId = requestAnimationFrame(loop)
    return () => cancelAnimationFrame(rafId)
  }, [])

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col relative overflow-hidden">
        {/* Background shape */}
        <div className="absolute top-0 right-0 w-[40vw] h-[80vh] bg-[#eaf4eb] rounded-bl-[10rem] -z-20"></div>

        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quem-somos" element={<AboutUs />} />
          <Route path="/midia" element={<Midia />} />
          <Route path="/voluntarios" element={<Volunteers />} />
          <Route path="/palestras" element={<Palestras />} />
          <Route path="/curso-tecnico" element={<CursosTecnicos />} />
          <Route path="/curso-tecnico/senai" element={<Senai />} />
          <Route path="/curso-tecnico/etec" element={<Etec />} />
          <Route path="/oportunidades" element={<Oportunidades />} />
          <Route path="/cursinhos" element={<Cursinhos />} />
          <Route path="/vestibular" element={<Vestibular />} />
          <Route path="/intercambio" element={<Intercambio />} />
          <Route path="/universidades" element={<Universities />} />
          <Route path="/universidades/ufabc" element={<UFABC />} />
          <Route path="/universidades/unifesp" element={<UNIFESP />} />
          <Route path="/universidades/if" element={<IF />} />
          <Route path="/universidades/unesp" element={<UNESP />} />
          <Route path="/universidades/unicamp" element={<UNICAMP />} />
          <Route path="/universidades/ufscar" element={<UFSCAR />} />
          <Route path="/universidades/ita" element={<ITA />} />
          <Route path="/universidades/usp" element={<USP />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}
