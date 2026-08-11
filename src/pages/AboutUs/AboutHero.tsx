import React from 'react'
import { motion } from 'framer-motion'
import { Target, Megaphone } from 'lucide-react'

export function AboutHero() {
  const cards = [
    {
      icon: <Target size={28} className="text-white" />,
      title: "Nosso Objetivo",
      content: "Promover a ascensão pessoal e profissional de alunos de escolas públicas, de cursinhos populares e de periferias."
    },
    {
      icon: <Megaphone size={28} className="text-white" />,
      title: "Nossa Missão",
      content: "Informar, empoderar e divulgar ferramentas para acesso ao ensino superior e oportunidades acadêmicas de qualidade."
    }
  ]

  return (
    <section className="max-w-7xl mx-auto px-6 pt-24 pb-16 flex flex-col gap-12">
      
      {/* Header */}
      <motion.div 
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-2">
          Nossa História, Nosso Impacto
        </h1>
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
          <span className="text-primary">Informar. </span>
          <span className="text-secondary">Empoderar. </span>
          <span className="text-tertiary">Engajar.</span>
        </h2>
      </motion.div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {cards.map((card, idx) => (
          <motion.div 
            key={card.title}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.15 }}
            className="bg-white rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 flex flex-col gap-5"
          >
            <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center shadow-md">
              {card.icon}
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{card.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                {card.content}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

    </section>
  )
}
