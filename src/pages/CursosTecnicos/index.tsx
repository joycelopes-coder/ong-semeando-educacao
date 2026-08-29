import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Wrench, Search, Users, Clock, ArrowRight, ExternalLink } from 'lucide-react'
import { Link } from 'react-router-dom'

export function CursosTecnicos() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const faqs = [
    {
      title: 'O que é curso técnico?',
      content: 'É um curso especializado voltado para o mercado de trabalho, assim, nele você aprende a parte técnica da profissão, de como colocar os conhecimentos em prática. Os cursos podem variar sua duração de um ano e meio a dois anos.',
      icon: Wrench
    },
    {
      title: 'Porque fazer?',
      content: 'É uma ótima opção por várias motivações: destacar-se no mercado sem precisar fazer graduação imediata; testar uma área antes de entrar na faculdade; complementar conhecimentos práticos após formado; ou simplesmente entrar no mercado de trabalho de maneira muito mais rápida.',
      icon: Search
    },
    {
      title: 'Quem pode fazer?',
      content: 'A partir de 15 anos os alunos já podem concorrer a uma vaga. Alunos do 1º ao 3º ano do ensino médio podem fazer o vestibulinho. Mas fique atento: alguns cursos específicos (como enfermagem) possuem idade mínima.',
      icon: Users
    },
    {
      title: 'Quando fazer?',
      content: 'Você pode optar por fazer junto com o ensino médio ou depois de formado. Não há limite máximo de idade! Se você tem o dia livre, fazer integrado ao ensino médio é ótimo. Se você trabalha, pode ser melhor fazer o técnico à noite ou após se formar na escola.',
      icon: Clock
    }
  ]

  const escolas = [
    {
      id: 'etec',
      name: 'ETEC',
      fullName: 'Escola Técnica Estadual Centro Paula Souza',
      campus: 'Estão distribuídos por toda São Paulo. Você pode conferir todos eles clicando aqui.',
      logo: '/curso-tecnico/etec.png',
      link: '/curso-tecnico/etec'
    },
    {
      id: 'senai',
      name: 'SENAI',
      fullName: 'Serviço Nacional de Aprendizagem Industrial',
      campus: 'Estão distribuídos por toda São Paulo. Você pode conferir todos eles clicando aqui.',
      logo: '/curso-tecnico/senai.png',
      link: '/curso-tecnico/senai'
    }
  ]

  return (
    <main className="w-full flex flex-col flex-1 pb-20 bg-gray-50/50">
      {/* Hero Section */}
      <div className="relative w-full pt-[88px] min-h-[40vh] bg-tertiary flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff1a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff1a_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        </div>
        
        <div className="relative z-10 text-center px-6 py-20 max-w-4xl mx-auto flex flex-col items-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mb-6 border border-white/20"
          >
            <Wrench size={40} className="text-white" />
          </motion.div>
          
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6"
          >
            Cursos Técnicos
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-yellow-50 max-w-2xl leading-relaxed"
          >
            Uma forma rápida e prática de entrar no mercado de trabalho e se especializar. Descubra as melhores opções gratuitas em São Paulo.
          </motion.p>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-7xl mx-auto px-6 -mt-10 relative z-20 w-full mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqs.map((faq, index) => {
            const Icon = faq.icon
            return (
              <motion.div 
                key={faq.title}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-yellow-50 text-tertiary rounded-xl flex items-center justify-center mb-6">
                  <Icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{faq.title}</h3>
                <p className="text-gray-600 leading-relaxed flex-1">{faq.content}</p>
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* Escolas Grid */}
      <div className="max-w-5xl mx-auto px-6 w-full">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-6">Cursos Técnicos Gratuitos de SP</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Aqui estão as redes de cursos técnicos públicos do estado de São Paulo. Clique no card para acessar o site oficial e ver a lista completa de campus e cursos disponíveis.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {escolas.map((escola) => (
            <Link 
              id={escola.id}
              to={escola.link}
              key={escola.id} 
              className="group flex flex-col bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="h-48 bg-gray-50 flex items-center justify-center p-8 border-b border-gray-50">
                <img 
                  src={escola.logo} 
                  alt={`Logo ${escola.name}`} 
                  className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500" 
                  onError={(e) => { e.currentTarget.src = 'https://placehold.co/400x200?text=' + escola.name }} 
                />
              </div>
              <div className="p-8 flex flex-col flex-1">
                <h4 className="text-2xl font-bold text-primary mb-2">{escola.name}</h4>
                <p className="text-sm font-medium text-gray-900 mb-6">{escola.fullName}</p>
                
                <p className="text-sm leading-relaxed text-gray-600 mb-6">
                  <strong className="text-gray-900">Campus:</strong> {escola.campus}
                </p>
                
                <div className="mt-auto flex items-center justify-between text-sm font-bold text-tertiary">
                  Saiba mais
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}
