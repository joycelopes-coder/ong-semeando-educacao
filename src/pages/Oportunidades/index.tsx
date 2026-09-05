import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Compass, Lightbulb, GraduationCap, Globe, BookOpen, ArrowRight, ExternalLink } from 'lucide-react'

export function Oportunidades() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const oportunidades = [
    {
      id: 'ismart',
      title: 'ISMART',
      subtitle: 'Bolsas de estudos e orientação profissional',
      content: 'Identifica jovens talentos de baixa renda do 7º e 9º ano do ensino fundamental (de 12 a 15 anos de idade), concedendo bolsas de estudos presenciais e online. Além disso, oferece acesso a programas de desenvolvimento e orientação profissional, do ensino fundamental à universidade. Todo o processo seletivo e os projetos são gratuitos.',
      link: 'https://www.ismart.org.br/',
      icon: Lightbulb
    },
    {
      id: 'etim',
      title: 'ETIM - Ensino Técnico Integrado ao Médio',
      subtitle: 'Ensino Médio e Técnico no mesmo lugar',
      content: 'Nas mais de 150 ETECs espalhadas por São Paulo, você pode se candidatar a uma vaga para realizar o ensino médio juntamente com o ensino técnico, sem precisar sair do lugar. Lá você faz o ensino médio em um período e o técnico no outro.',
      link: 'https://www.cps.sp.gov.br/etecs/',
      icon: GraduationCap
    },
    {
      id: 'intercambio',
      title: 'Jovens Embaixadores',
      subtitle: 'Intercâmbio nos Estados Unidos para alunos de escola pública',
      content: 'O Programa Jovens Embaixadores é um intercâmbio de curta duração nos EUA voltado para alunos do ensino médio da rede pública que são exemplos em suas comunidades por meio de engajamento social. O programa é 100% financiado pelo governo norte-americano e é uma oportunidade incrível de conhecer outra cultura e desenvolver liderança.',
      link: 'https://jovensembaixadores.org.br/',
      icon: Globe
    },
    {
      id: 'cursinhos',
      title: 'Cursinhos Comunitários e Populares',
      subtitle: 'Preparação gratuita para o vestibular e ENEM',
      content: 'Se preparar para o vestibular não precisa ser caro! Existem excelentes cursinhos populares gratuitos em São Paulo organizados por movimentos sociais e alunos de grandes universidades. Alguns exemplos incluem a Rede Emancipa, o CUJA (Unifesp), e os cursinhos comunitários da USP (como FEA-USP, Poli, Arcadas). Eles geralmente abrem processos seletivos no início do ano com foco em alunos de baixa renda e da rede pública.',
      link: 'http://emancipasp.com.br/',
      icon: BookOpen
    }
  ]

  return (
    <main className="w-full flex flex-col flex-1 pb-20 bg-gray-50/50">
      {/* Hero Section */}
      <div className="relative w-full pt-[88px] min-h-[45vh] bg-secondary flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff1a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff1a_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        </div>
        
        <div className="relative z-10 text-center px-6 py-20 max-w-4xl mx-auto flex flex-col items-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mb-6 border border-white/30"
          >
            <Compass size={40} className="text-white" />
          </motion.div>
          
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6"
          >
            Oportunidades no Ensino Médio
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-orange-50 max-w-2xl leading-relaxed"
          >
            Enquanto estamos na escola temos muitas oportunidades que nem sempre são divulgadas. Elas variam de bolsas em instituições famosas a intercâmbios e prêmios. Confira algumas delas!
          </motion.p>
        </div>
      </div>

      {/* Lista de Oportunidades */}
      <div className="max-w-4xl mx-auto px-6 -mt-10 relative z-20 w-full mb-20">
        <div className="flex flex-col gap-8">
          {oportunidades.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div 
                id={item.id}
                key={item.id}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-gray-100 flex flex-col md:flex-row gap-8 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-orange-50 text-secondary rounded-2xl flex items-center justify-center">
                    <Icon size={32} />
                  </div>
                </div>
                <div className="flex flex-col flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm font-semibold text-secondary mb-4 uppercase tracking-wide">{item.subtitle}</p>
                  <p className="text-gray-600 leading-relaxed mb-8">{item.content}</p>
                  
                  <div className="mt-auto">
                    <a 
                      href={item.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-bold text-white bg-secondary hover:bg-secondary-hover px-6 py-3 rounded-full transition-colors"
                    >
                      Acessar o site oficial
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </main>
  )
}
