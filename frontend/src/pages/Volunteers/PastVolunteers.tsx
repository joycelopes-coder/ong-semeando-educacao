import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '@components/ui/Button'
import { ArrowRight, Leaf } from 'lucide-react'

export function PastVolunteers() {
  const pastVolunteers = [
    { year: "2018", name: "Lucas Silva", role: "Voluntário em 2018", image: "https://i.pravatar.cc/150?u=lucas1" },
    { year: "2020", name: "Carol Souza", role: "Voluntário em 2020", image: "https://i.pravatar.cc/150?u=carol1" },
    { year: "2022", name: "Gustavo Lima", role: "Voluntário em 2022", image: "https://i.pravatar.cc/150?u=gustavo1" },
    { year: "2024", name: "Mariana Alves", role: "Voluntário em 2024", image: "https://i.pravatar.cc/150?u=mariana1" }
  ]

  return (
    <section className="w-full bg-green-50/50 rounded-3xl p-8 md:p-12 mb-16 relative overflow-hidden">
      
      <div className="flex flex-col md:flex-row items-start justify-between gap-6 mb-20 relative z-10">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-4 flex items-center gap-2">
            Já passaram por aqui...
          </h2>
          <div className="flex items-start gap-2">
            <Leaf className="text-tertiary w-6 h-6 shrink-0 mt-1" />
            <p className="text-gray-600">
              Essas pessoas também fizeram parte da nossa história e contribuíram para levar a educação mais longe.
            </p>
          </div>
        </div>
        <Button variant="outline" className="bg-white whitespace-nowrap" icon={<ArrowRight size={18} />}>
          Conheça mais histórias
        </Button>
      </div>

      {/* Horizontal Timeline */}
      <div className="relative max-w-5xl mx-auto z-10">
        {/* The horizontal line */}
        <div className="absolute top-10 left-10 right-10 h-0.5 bg-gray-300 -z-10 hidden md:block"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-4 relative">
          {pastVolunteers.map((vol, idx) => (
            <motion.div 
              key={vol.year}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="flex flex-col items-center text-center relative"
            >
              {/* Year label above node */}
              <div className="font-bold text-gray-400 mb-2">{vol.year}</div>
              
              {/* Node dot on line */}
              <div className="w-4 h-4 rounded-full bg-tertiary mb-6 z-10 hidden md:block border-4 border-white shadow-sm"></div>
              
              {/* Vertical connector line for mobile (optional if we want vertical timeline on mobile, but here just simple flex) */}
              
              <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-md mb-4 bg-white">
                <img 
                  src={vol.image} 
                  alt={vol.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <h4 className="font-bold text-green-800">{vol.name}</h4>
              <p className="text-gray-500 text-xs">{vol.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
      
    </section>
  )
}
