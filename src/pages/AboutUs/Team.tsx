import React from 'react'
import { motion } from 'framer-motion'
import { FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa'

export function Team() {
  const team = [
    {
      name: "Joyce Lopes",
      role: "Co-fundadora",
      image: "/joyce-lopes.avif",
      quote: `"Rompendo as barreiras da periferia para transformar a realidade através do acesso ao ensino superior."`
    },
    {
      name: "Lucas Gandolfi",
      role: "Co-fundador",
      image: "/lucas-gandolfi.avif",
      quote: `"Nossa missão é democratizar oportunidades e garantir que o vestibular seja uma ponte, não um obstáculo, para alunos de baixa renda."`
    },
    {
      name: "Alexandro Francisco",
      role: "Co-fundador",
      image: "/alexandro-francisco.avif",
      quote: `"Acreditamos no potencial da periferia e trabalhamos para abrir os horizontes de novos estudantes a cada dia."`
    }
  ]

  return (
    <div className="w-full">
      <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-20">
        Nossos Fundadores
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
        {team.map((member, idx) => (
          <motion.div 
            key={member.name}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.15 }}
            className="bg-white rounded-3xl p-8 pt-16 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 flex flex-col items-center text-center relative"
          >
            {/* Overlapping Image */}
            <div className="absolute -top-12 w-24 h-24 rounded-full overflow-hidden shadow-lg border-4 border-white">
              <img 
                src={member.image} 
                alt={member.name} 
                className="w-full h-full object-cover"
              />
            </div>
            
            <h4 className="font-bold text-gray-900 text-lg">{member.name}</h4>
            <p className="text-gray-500 text-xs mb-4">{member.role}</p>
            
            <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-6">
              {member.quote}
            </p>
            
            {/* Social Icons */}
            <div className="flex items-center gap-4 text-gray-400 mt-auto pt-4">
              <a href="#" className="hover:text-primary transition-colors">
                <FaInstagram size={18} />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <FaTwitter size={18} />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <FaWhatsapp size={18} />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
