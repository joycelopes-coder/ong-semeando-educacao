import React from 'react'
import { motion } from 'framer-motion'

export function TeamGrid() {
  const currentVolunteers = [
    {
      name: "Joyce Lopes",
      role: "Coordenadora e Diretora",
      desc: "Formada em Ciência e Tecnologia\nEstudante de Química e Neurociência na UFABC",
      image: "/joyce-lopes.avif",
      badgeColor: "bg-green-600",
      textColor: "text-orange-500"
    },
    {
      name: "Ramon Fróes",
      role: "Líder do Núcleo de Administração Financeira",
      desc: "Formado em Direito",
      image: "https://i.pravatar.cc/150?u=ramon",
      badgeColor: "bg-orange-500",
      textColor: "text-orange-500"
    },
    {
      name: "Bruna Gomes",
      role: "Líder do Núcleo de Comunicação e Mídias",
      desc: "Formada em Fisioterapia pela UNESP",
      image: "https://i.pravatar.cc/150?u=bruna",
      badgeColor: "bg-amber-800",
      textColor: "text-amber-800"
    },
    {
      name: "Lucas Gandolfi",
      role: "Formado em Medicina na USP",
      desc: "",
      image: "/lucas-gandolfi.avif",
      badgeColor: "bg-green-600",
      textColor: "text-orange-500"
    },
    {
      name: "Carol Mariano",
      role: "Formada em Biologia na UNIFESP",
      desc: "",
      image: "https://i.pravatar.cc/150?u=carol",
      badgeColor: "bg-orange-500",
      textColor: "text-orange-500"
    },
    {
      name: "Adrian",
      role: "Formado em Medicina na USP",
      desc: "",
      image: "https://i.pravatar.cc/150?u=adrian",
      badgeColor: "bg-amber-800",
      textColor: "text-orange-500"
    },
    {
      name: "Kerollen Winy",
      role: "Formada em Geografia na USP",
      desc: "",
      image: "https://i.pravatar.cc/150?u=kerollen",
      badgeColor: "bg-green-600",
      textColor: "text-orange-500"
    },
    {
      name: "Mari",
      role: "Estudante de Biotecnologia e Neurociência na UFABC",
      desc: "",
      image: "https://i.pravatar.cc/150?u=mari",
      badgeColor: "bg-orange-500",
      textColor: "text-orange-500"
    },
    {
      name: "Caique",
      role: "Formado em Ciências Atuariais na USP",
      desc: "",
      image: "https://i.pravatar.cc/150?u=caique",
      badgeColor: "bg-amber-800",
      textColor: "text-orange-500"
    },
    {
      name: "Gustavo Silvestre",
      role: "Formado em medicina na USP",
      desc: "",
      image: "https://i.pravatar.cc/150?u=gustavo",
      badgeColor: "bg-green-600",
      textColor: "text-orange-500"
    },
    {
      name: "Isis Maria de Paula Oliveira",
      role: "Formada em Pedagogia na USP",
      desc: "",
      image: "https://i.pravatar.cc/150?u=isis",
      badgeColor: "bg-orange-500",
      textColor: "text-orange-500"
    },
    {
      name: "Evelin Sousa",
      role: "Formada em Engenharia ambiental UNIFESP",
      desc: "",
      image: "https://i.pravatar.cc/150?u=evelin",
      badgeColor: "bg-amber-800",
      textColor: "text-orange-500"
    },
    {
      name: "Juliana Tenório",
      role: "Formada em Ciências e Humanidades na UFABC",
      desc: "",
      image: "https://i.pravatar.cc/150?u=juliana",
      badgeColor: "bg-green-600",
      textColor: "text-orange-500"
    },
    {
      name: "Jorge Prudenciano Neto",
      role: "Formado em Ciência & Tecnologia na UFABC",
      desc: "",
      image: "https://i.pravatar.cc/150?u=jorge",
      badgeColor: "bg-orange-500",
      textColor: "text-orange-500"
    },
    {
      name: "André Luiz Vianna",
      role: "Formado em Esporte na USP",
      desc: "",
      image: "https://i.pravatar.cc/150?u=andre",
      badgeColor: "bg-amber-800",
      textColor: "text-orange-500"
    }
  ]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {currentVolunteers.map((member, idx) => (
        <motion.div 
          key={member.name}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: idx * 0.05 }}
          className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col relative overflow-hidden group hover:shadow-md transition-shadow"
        >
          {/* Top Right Corner Badge Shape */}
          <div className={`absolute top-0 right-0 w-8 h-8 rounded-bl-xl ${member.badgeColor}`}></div>
          
          <div className="mb-4 mt-2">
            <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-sm">
              <img 
                src={member.image} 
                alt={member.name} 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <h4 className="font-bold text-amber-900 text-lg mb-1">{member.name}</h4>
          
          <p className={`font-semibold text-sm leading-tight mb-2 ${member.textColor}`}>
            {member.role}
          </p>
          
          {member.desc && (
            <p className="text-gray-500 text-xs leading-relaxed whitespace-pre-line mt-auto pt-2">
              {member.desc}
            </p>
          )}
        </motion.div>
      ))}
    </div>
  )
}
