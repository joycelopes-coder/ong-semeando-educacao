import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '@components/ui/Button'
import { ArrowRight, Heart } from 'lucide-react'

export function About() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20 flex flex-col-reverse md:flex-row items-center gap-16 relative">
      
      {/* Decorative Leaf */}
      <motion.img 
        initial={{ opacity: 0, rotate: -20, scale: 0.8 }}
        whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        src="./leaf.png" 
        alt="Folha decorativa" 
        className="absolute top-0 -right-4 md:top-8 md:right-0 w-48 md:w-64 pointer-events-none z-30"
      />

      <motion.div 
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex-1 relative w-full max-w-lg"
      >
        {/* Background decorative elements */}
        <div className="absolute -top-6 -left-6 w-24 h-48 bg-primary/70 rounded-3xl z-10 backdrop-blur-sm"></div>
        <div className="absolute bottom-16 -right-7 w-24 h-32 bg-secondary/70 rounded-2xl z-10 backdrop-blur-sm"></div>
        
        {/* Dotted pattern */}
        <div className="absolute -bottom-8 left-8 text-white mix-blend-overlay opacity-50 z-10">
          <svg width="80" height="40" viewBox="0 0 80 40" fill="currentColor">
            <pattern id="dots-about" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="2" />
            </pattern>
            <rect x="0" y="0" width="80" height="40" fill="url(#dots-about)" />
          </svg>
        </div>

        <img 
          src="./student_future.jpg" 
          alt="Estudante olhando para o futuro" 
          className="w-full h-[400px] object-cover rounded-[2rem] shadow-xl"
        />

        {/* Floating badge */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="absolute -bottom-6 md:-right-12 bg-white p-5 rounded-2xl shadow-lg flex items-center gap-4 max-w-[240px] z-20"
        >
          <p className="text-sm font-medium text-gray-800 leading-tight">
            Juntos, construímos um futuro melhor.
          </p>
          <div className="bg-[#fefefe] p-2 rounded-full text-primary">
            <Heart size={20} className="fill-current" />
          </div>
        </motion.div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex-1 max-w-md"
      >
        <div className="flex items-center gap-2 mb-4">
          <div className="w-8 h-[2px] bg-primary"></div>
          <span className="text-primary font-bold text-sm tracking-wider uppercase">Sobre Nós</span>
        </div>
        <h2 className="text-4xl font-extrabold mb-6">Conte conosco</h2>
        <p className="text-gray-600 mb-6 leading-relaxed">
          O Semeando foi criado para ajudar pessoas de periferia e baixa renda a alcançar seus objetivos por meio dos estudos.
        </p>
        <p className="text-gray-600 mb-8 leading-relaxed font-medium">
          Explore nosso site e nossas redes! <br/>
          Eles estão cheios de informações =)
        </p>
        <Button variant="outline" icon={<ArrowRight size={18} />}>Nossa história</Button>
      </motion.div>
    </section>
  )
}
