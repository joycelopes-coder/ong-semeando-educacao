import React, { useEffect } from 'react'
// @ts-ignore
import Lenis from 'lenis'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Header } from '@components/layout/Header'
import { Footer } from '@components/layout/Footer'
import { Home } from './pages/Home'
import { AboutUs } from './pages/AboutUs'

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
      <div className="min-h-screen flex flex-col relative overflow-hidden">
        {/* Background shape */}
        <div className="absolute top-0 right-0 w-[40vw] h-[80vh] bg-[#eaf4eb] rounded-bl-[10rem] -z-20"></div>

        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quem-somos" element={<AboutUs />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}
