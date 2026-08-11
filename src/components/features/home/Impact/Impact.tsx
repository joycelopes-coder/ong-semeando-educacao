import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '@components/ui/Button'
import { ArrowRight, UserPlus, Presentation, Heart, Building2 } from 'lucide-react'

const stats = [
  { icon: <UserPlus className="w-8 h-8 text-primary" strokeWidth={1.5} />, value: '+2.500', label: 'Estudantes impactados' },
  { icon: <Presentation className="w-8 h-8 text-primary" strokeWidth={1.5} />, value: '+120', label: 'Palestras realizadas' },
  { icon: <Heart className="w-8 h-8 text-primary" strokeWidth={1.5} />, value: '+45', label: 'Voluntários envolvidos' },
  { icon: <Building2 className="w-8 h-8 text-primary" strokeWidth={1.5} />, value: '+30', label: 'Universidades parceiras' },
]

export function Impact() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <div className="bg-[#f2f4f1] rounded-[2.5rem] p-10 md:p-14 flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
        
        <div className="flex-shrink-0 w-full lg:w-1/4">
          <h2 className="text-3xl font-extrabold mb-3">Nosso impacto</h2>
          <p className="text-gray-600 text-sm mb-6 max-w-xs">
            Transformando vidas por meio da educação e da informação.
          </p>
          <Button icon={<ArrowRight size={18} />}>Ver mais números</Button>
        </div>

        <div className="flex-1 w-full grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="flex flex-col items-center text-center"
            >
              <div className="mb-4">
                {stat.icon}
              </div>
              <h4 className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</h4>
              <p className="text-xs md:text-sm text-gray-700 font-medium max-w-[120px]">{stat.label}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
