import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Button } from '@components/ui/Button'
import { DotGrid } from '@components/ui/DotGrid'
import { ArrowRight } from 'lucide-react'

export function Hero() {
  const { scrollY } = useScroll()
  // Parallax effect: moves slower than scroll (300px translation per 1000px scrolled)
  const yParallax = useTransform(scrollY, [0, 1000], [0, 300])

  return (
    <div className="relative w-full">
      {/* Decorative Branch (Top Right Edge of Screen) */}
      <div className="absolute top-48 md:top-64 right-0 translate-x-1/2 translate-y-12 md:translate-y-24 w-80 md:w-[36rem] aspect-square pointer-events-none -z-10">
        <motion.img 
          initial={{ opacity: 0, rotate: 10, scale: 0.8 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          style={{ y: yParallax }}
          src="/hero-branch-3.png" 
          alt="Ramo decorativo" 
          className="absolute inset-0 w-full h-full object-contain origin-bottom-left"
        />
      </div>

      <section className="max-w-7xl mx-auto px-6 py-28 md:py-36 min-h-[85vh] flex flex-col md:flex-row items-center justify-between gap-16 lg:gap-24">

      <motion.div 
        initial={{ x: -30, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="max-w-xl flex flex-col gap-10"
      >
        <h1 className="text-6xl md:text-7xl font-extrabold text-primary leading-[1.15]">
          Informar.<br/>
          <span className="text-secondary">Empoderar.</span><br/>
          <span className="text-tertiary">Engajar.</span>
        </h1>
        <p className="text-gray-600 text-xl leading-relaxed max-w-md">
          Aqui você encontra todas as informações para se preparar para vida depois do ensino médio.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-6 mt-2">
          <Button icon={<ArrowRight size={18} />} className="w-full sm:w-auto py-4 text-lg">Conheça a ONG</Button>
          <Button variant="outline" icon={<ArrowRight size={18} />} className="w-full sm:w-auto py-4 text-lg">Quero ser voluntário</Button>
        </div>
      </motion.div>

      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex-1 w-full max-w-lg relative"
      >

        {/* Background decorative dots */}
        <div className="absolute -top-8 -right-1 z-10">
          <DotGrid />
        </div>
        
        {/* Blob shape */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-green-50/50 rounded-full blur-3xl -z-10"></div>
        {/* Logo Illustration */}
        <motion.div 
          className="relative w-full aspect-square flex items-center justify-center z-20 mt-8 md:mt-0"
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          {/* Subtle circular track behind logo to match mockup */}
          <div className="absolute inset-4 rounded-full border border-green-200/50 -z-10"></div>
          
          <img 
            src="/hero-logo.png" 
            alt="Semeando Educação Ilustração" 
            className="w-10/12 h-auto object-contain drop-shadow-2xl"
          />
        </motion.div>
      </motion.div>
    </section>
    </div>
  )
}
