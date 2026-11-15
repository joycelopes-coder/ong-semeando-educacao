import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Button } from '@components/ui/Button'
import { DotGrid } from '@components/ui/DotGrid'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export function Hero() {
  const { scrollY } = useScroll()
  // Efeito Parallax: move mais devagar que a rolagem da página (300px de translação a cada 1000px rolados)
  const yParallax = useTransform(scrollY, [0, 1000], [0, 300])

  return (
    <div className="relative w-full ">
      {/* Ramo Decorativo (Borda superior direita da tela) */}
      <div className="absolute top-48 md:top-64 right-0 translate-x-1/2 translate-y-12 md:translate-y-24 w-80 md:w-[36rem] aspect-square pointer-events-none -z-10">
        <motion.img 
          initial={{ opacity: 0, rotate: 10, scale: 0.8 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          style={{ y: yParallax }}
          src="./hero-branch-3.png" 
          alt="Ramo decorativo" 
          className="absolute inset-0 w-full h-full object-contain origin-bottom-left select-none pointer-events-none"
          draggable="false"
        />
      </div>

      <section className="relative max-w-7xl mx-auto px-6 py-12 lg:py-0 min-h-[calc(100svh-88px)] flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-12 lg:gap-16">

      <div className="max-w-xl flex flex-col gap-6 lg:gap-8 relative z-10 w-full">
        {/* Folha Decorativa (Topo esquerdo) */}
        <motion.img 
          initial={{ opacity: 0, y: -100, x: -100, rotate: 60, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, x: 0, rotate: 0, scale: 1 }}
          transition={{ duration: 2, delay: 0.2, ease: "easeOut" }}
          src="./leaf-top-new.png" 
          alt="Folha decorativa" 
          className="absolute -top-12 -left-16 lg:-top-16 lg:-left-20 w-24 md:w-32 lg:w-40 h-auto object-contain pointer-events-none z-10 select-none"
          draggable="false"
        />
        {/*Pilares*/}
        <h1 className="text-[clamp(3.5rem,7vw,6.5rem)] font-extrabold text-primary leading-[1.1]">
          Informar.<br/>
          <span className="text-secondary">Empoderar.</span><br/>
          <span className="text-tertiary">Engajar.</span>
        </h1>
        <p className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-md">
          Aqui você encontra todas as informações para se preparar para vida depois do ensino médio.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-2">
          <Link to="/quem-somos" className="w-full sm:w-auto">
            <Button icon={<ArrowRight size={18} />} className="w-full py-3 md:py-4 text-base md:text-lg">Conheça a ONG</Button>
          </Link>
          <Link to="/voluntarios" className="w-full sm:w-auto">
            <Button variant="outline" icon={<ArrowRight size={18} />} className="w-full py-3 md:py-4 text-base md:text-lg">Quero ser voluntário</Button>
          </Link>
        </div>
      </div>

      <div className="absolute top-6 left-1/2 -translate-x-1/2 w-full max-w-md opacity-25 lg:opacity-100 pointer-events-none -z-10 lg:z-auto lg:pointer-events-auto lg:static lg:translate-x-0 lg:flex-1 lg:max-w-lg">

        {/* Pontilhados decorativos ao fundo */}
        <div className="hidden lg:block absolute -top-8 -right-1 z-10">
          <DotGrid />
        </div>
        
        {/* Forma de mancha (Blob) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-green-50/50 rounded-full blur-3xl -z-10"></div>
        {/* Ilustração principal (Logo) */}
        <motion.div className="relative w-full aspect-square flex items-center justify-center z-20 lg:mt-0">
          {/* Imagem de colagem ao fundo */}
          <div className="absolute inset-0 flex items-center justify-center -z-10">
            <img 
              src="./studantes.png" 
              alt="Colagem de fundo" 
              className="w-[120%] h-[120%] max-w-none object-contain pointer-events-none select-none"
              draggable="false"
            />
          </div>


        </motion.div>
      </div>
    </section>
    </div>
  )
}
