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
    <section className="relative w-full -mt-[88px] pt-[150px] pb-24 flex flex-col items-center justify-center min-h-[60vh] md:min-h-[70vh] overflow-hidden">
      
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="./equipe-semeando.jpg" 
          alt="Equipe Semeando Educação" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gray-900/70 backdrop-blur-[2px]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex flex-col gap-12">
        
        {/* Header */}
        <motion.div 
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="w-full text-center max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl lg:text-[6rem] font-extrabold text-white 
          mb-4 leading-tight drop-shadow-lg uppercase">
            Nossa História, Nosso Impacto
          </h1>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mt-4 drop-shadow-md">
            <span className="text-primary">Informar. </span>
            <span className="text-secondary">Empoderar. </span>
            <span className="text-secondary-hover">Engajar.</span>
          </h2>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {cards.map((card, idx) => (
            <motion.div 
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="bg-transparent backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-white/20 flex flex-col gap-5 hover:scale-[1.02] transition-transform"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center shadow-md text-white">
                {card.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-3">{card.title}</h3>
                <p className="text-white leading-relaxed text-sm md:text-base">
                  {card.content}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

    </section>
  )
}
