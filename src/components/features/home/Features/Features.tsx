import React from 'react'
import { motion } from 'framer-motion'
import { Mic, Users, GraduationCap, ArrowRight } from 'lucide-react'

const featuresData = [
  {
    icon: <Mic className="text-white w-6 h-6" />,
    iconBg: 'bg-primary',
    title: 'Palestras',
    description: 'Realizamos palestras em escolas públicas sobre a importância do estudo e as oportunidades acadêmicas gratuitas disponíveis.'
  },
  {
    icon: <Users className="text-white w-6 h-6" />,
    iconBg: 'bg-secondary',
    title: 'Redes Sociais',
    description: 'Estamos em diversas redes levando informação relevante de maneira direta e fácil de entender.'
  },
  {
    icon: <GraduationCap className="text-white w-6 h-6" />,
    iconBg: 'bg-[#594236]', // A darker green from the design
    title: 'Mentoria',
    description: 'Sessões de conversa guiadas com um mentor qualificado para te ajudar a aproveitar todas oportunidades acadêmicas.'
  }
]

export function Features() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {featuresData.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ y: -5 }}
            className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-md transition-all cursor-pointer group"
          >
            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${feature.iconBg} mb-6`}>
              {feature.icon}
            </div>
            <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              {feature.description}
            </p>
            <div className="text-primary opacity-0 group-hover:opacity-100 transition-opacity transform -translate-x-2 group-hover:translate-x-0 duration-300">
              <ArrowRight size={20} />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
