import React from 'react'
import { motion } from 'framer-motion'

export function OurHistory() {
  const steps = [
    {
      title: "Raízes na Periferia",
      text: "O Brasil historicamente possui um acesso muito desigual ao ensino, sobretudo nas universidades públicas.",
      position: { left: "0%", top: "10%" }
    },
    {
      title: "Ensino Médio",
      text: "Fomentar o desenvolvimento educacional e abrir portas para os alunos da rede pública.",
      position: { left: "15%", top: "50%" }
    },
    {
      title: "Superação",
      text: "Inspirar através de exemplos reais, mostrando que é possível superar as barreiras sociais.",
      position: { left: "30%", top: "10%" }
    },
    {
      title: "Expansão",
      text: "Oferecer estratégias de estudo, bolsas para cursinhos e plataformas de apoio.",
      position: { left: "45%", top: "50%" }
    },
    {
      title: "O Sonho Semeado",
      text: "Informar e motivar jovens negros e periféricos a ocuparem os espaços de ensino de forma democrática.",
      position: { left: "54%", top: "10%" }
    }
  ]

  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <div className="mb-16">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2">
          Nossa Trajetória
        </h2>
      </div>

      <div className="relative flex flex-col lg:flex-row items-center gap-12">
        {/* Decorative Grid Dots */}
        <div className="absolute top-0 right-0 grid grid-cols-5 gap-2 opacity-20 -z-10">
          {[...Array(15)].map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 rounded-full bg-gray-500"></div>
          ))}
        </div>
        <div className="absolute bottom-12 left-0 grid grid-cols-4 gap-2 opacity-20 -z-10">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 rounded-full bg-gray-500"></div>
          ))}
        </div>

        {/* Timeline Branch Background */}
        <div className="hidden md:block absolute inset-0 pointer-events-none z-0 overflow-visible">
          <img 
            src="/timeline-branch.png" 
            alt="Linha do tempo" 
            className="w-full h-[150%] md:h-[120%] -mt-32 scale-110 md:scale-125 object-contain object-center opacity-90"
          />
        </div>

        {/* Timeline Items */}
        <div className="w-full flex flex-col md:block relative z-10 md:h-[450px] gap-8 mt-10 md:mt-0">
          {steps.map((step, idx) => (
            <motion.div 
              key={step.title}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="static md:absolute w-full md:w-[20%] flex flex-col gap-2 p-3 rounded-xl bg-white/10 backdrop-blur-sm shadow-[0_0_30px_rgba(255,255,255,0.6)]"
              style={{ 
                left: step.position.left, 
                top: step.position.top 
              }}
            >
              <div className="flex items-center gap-3">
                <h4 className="font-bold text-gray-900 text-sm xl:text-base leading-tight">
                  {step.title}
                </h4>
              </div>
              <p className="text-gray-600 text-xs xl:text-sm leading-relaxed pr-2 mt-2">
                {step.text}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
