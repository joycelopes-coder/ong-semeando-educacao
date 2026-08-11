import React from 'react'
import { motion } from 'framer-motion'
import { BookOpen, PersonStanding, Monitor } from 'lucide-react'

export function HowWeAct() {
  const pillars = [
    {
      icon: <BookOpen size={24} className="text-white" />,
      title: "Informação",
      desc: "Divulgação de informações sobre vestibular e oportunidades acadêmicas.",
      bg: "bg-primary"
    },
    {
      icon: <PersonStanding size={24} className="text-white" />,
      title: "Empoderamento",
      desc: "Inspiração através de exemplos reais para superar barreiras.",
      bg: "bg-secondary"
    },
    {
      icon: <Monitor size={24} className="text-white" />,
      title: "Divulgação",
      desc: "Estratégias de estudo, bolsas para cursinhos e plataformas de apoio.",
      bg: "bg-primary"
    }
  ]

  return (
    <div className="w-full">
      <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-8">
        Pilares de Atuação
      </h2>

      <div className="bg-[#f5f7f5] rounded-[2.5rem] p-8 md:p-12 border border-gray-100 shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 divide-y md:divide-y-0 md:divide-x divide-gray-200">
          {pillars.map((pillar, idx) => (
            <motion.div 
              key={pillar.title}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`flex flex-col gap-4 ${idx !== 0 ? 'md:pl-12 pt-8 md:pt-0' : ''}`}
            >
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 shrink-0 rounded-xl ${pillar.bg} flex items-center justify-center shadow-sm`}>
                  {pillar.icon}
                </div>
                <h4 className="font-bold text-gray-900 text-lg md:text-xl">{pillar.title}</h4>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed max-w-sm">
                {pillar.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
