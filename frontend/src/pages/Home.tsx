import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Hero } from '@components/features/home/Hero'
import { Features } from '@components/features/home/Features'
import { Impact } from '@components/features/home/Impact'
import { About } from '@components/features/home/About'

export function Home() {
  const { scrollY } = useScroll()
  const yParallax = useTransform(scrollY, [0, 2000], [0, 400])

  return (
    <main className="flex-1 overflow-hidden">
      <Hero />
      
      <div className="relative w-full">
        {/* Decorative Leaf Branch */}
        <motion.div 
          className="absolute left-[-1rem] top-1/2 w-[clamp(280px,35vw,500px)] pointer-events-none -z-10"
          style={{ y: yParallax }}
        >
          <img 
            src="./leaf-branch.png" 
            alt="Ramo decorativo" 
            className="-translate-y-1/2 -translate-x-[30%] w-full h-auto object-contain"
          />
        </motion.div>
        <Features />
        <Impact />
      </div>

      <About />
    </main>
  )
}
