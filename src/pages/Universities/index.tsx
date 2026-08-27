import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { GraduationCap, ScrollText, Users, Building, ShieldCheck, MapPin, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export function Universities() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const federais = [
    { id: 'ufabc', name: 'UFABC', fullName: 'Universidade Federal do ABC', campus: 'Santo André e São Bernardo do Campo', logo: '/universidades/ufabc.png' },
    { id: 'ufscar', name: 'UFSCar', fullName: 'Universidade Federal de São Carlos', campus: 'São Carlos, Araras, Sorocaba e Lagoa do Sino', logo: '/universidades/ufscar.png' },
    { id: 'unifesp', name: 'UNIFESP', fullName: 'Universidade Federal de São Paulo', campus: 'São Paulo, Osasco, Guarulhos, Diadema, S. J. dos Campos, Baixada Santista e Sorocaba', logo: '/universidades/unifesp.png' },
    { id: 'if', name: 'IF', fullName: 'Instituto Federal de São Paulo', campus: '37 campus em todo o Estado de SP', logo: '/universidades/if.png' },
    { id: 'ita', name: 'ITA', fullName: 'Instituto Tecnológico de Aeronáutica', campus: 'São José dos Campos', logo: '/universidades/ita.png' },
  ]

  const estaduais = [
    { id: 'usp', name: 'USP', fullName: 'Universidade de São Paulo', campus: 'São Paulo, Bauru, Ribeirão Preto, São Carlos, Piracicaba, Pirassununga, Lorena', logo: '/universidades/usp.png' },
    { id: 'unesp', name: 'UNESP', fullName: 'Universidade Estadual Paulista', campus: '24 campus distribuídos pelo Estado de SP', logo: '/universidades/unesp.png' },
    { id: 'unicamp', name: 'UNICAMP', fullName: 'Universidade Estadual de Campinas', campus: 'Campinas, Limeira e Piracicaba', logo: '/universidades/unicamp.png' },
  ]

  const faqs = [
    {
      title: 'Qual a diferença de universidade e faculdade?',
      content: 'As universidades têm uma maior diversidade de cursos e priorizam o desenvolvimento para pesquisa e extensão (atividades junto à comunidade, de impacto social e prático).',
      icon: GraduationCap
    },
    {
      title: 'O que é universidade pública?',
      content: 'As universidades públicas (federais e estaduais) são mantidas através dos impostos, ou seja, são gratuitas para você estudar! Para ingressar na maioria delas, você deve realizar o Enem e concorrer às vagas pelo SISU. Algumas instituições têm processos seletivos próprios.',
      icon: Building
    },
    {
      title: 'As faculdades gratuitas são muito difíceis?',
      content: 'Algumas faculdades têm sim um alto grau de concorrência. Contudo, há programas (como cursinhos comunitários) e cotas (escola pública, pretos e pardos, baixa renda) que ajudam muito! Acredite no seu potencial!',
      icon: ScrollText
    },
    {
      title: 'Diploma garante um bom salário?',
      content: 'Se formar é o primeiro grande passo, mas não é o único. Cada curso tem suas especificidades de mercado. Além da faculdade, você precisará se dedicar, estagiar na sua área, criar uma rede de contatos, ser proativo e sempre curioso.',
      icon: Users
    },
    {
      title: 'Acessibilidade',
      content: 'A grande maioria das universidades federais/estaduais possui infraestrutura de acessibilidade e dá suporte aos alunos com deficiências. Geralmente, há equipes e recursos auxiliares para garantir que você realize as aulas e provas de forma equiparada.',
      icon: ShieldCheck
    }
  ]

  return (
    <main className="w-full flex flex-col flex-1 pb-20 bg-gray-50/50">
      {/* Hero Section */}
      <div className="relative w-full pt-[88px] min-h-[40vh] bg-primary flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff1a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff1a_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        </div>
        
        <div className="relative z-10 text-center px-6 py-20 max-w-4xl mx-auto flex flex-col items-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mb-6 border border-white/20"
          >
            <GraduationCap size={40} className="text-white" />
          </motion.div>
          
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6"
          >
            Universidade ou Faculdade?
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-green-50 max-w-2xl leading-relaxed"
          >
            Tudo o que você precisa saber sobre o ensino superior público, gratuito e de qualidade no estado de São Paulo.
          </motion.p>
        </div>
      </div>

      {/* Info Cards / FAQ Section */}
      <div className="max-w-7xl mx-auto px-6 -mt-10 relative z-20 w-full mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                <div className="w-12 h-12 bg-green-50 text-primary rounded-xl flex items-center justify-center mb-6">
                  <Icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{faq.title}</h3>
                <p className="text-gray-600 leading-relaxed flex-1">{faq.content}</p>
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* Universities Grid Section */}
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-6">Universidades Gratuitas de SP</h2>
          <p className="text-lg text-gray-600">
            Aqui listamos as principais instituições com campi no estado de São Paulo. Clique em qualquer uma delas para saber mais detalhes sobre os cursos, formas de ingresso e campi.
          </p>
        </div>

        {/* Federais */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-8">
            <h3 className="text-2xl font-bold text-gray-800">Federais</h3>
            <div className="h-px bg-gray-200 flex-1"></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {federais.map((uni) => (
              <Link to={`/universidades/${uni.id}`} key={uni.id} className="group flex flex-col bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="h-40 bg-gray-50 flex items-center justify-center p-6 border-b border-gray-50">
                  <img src={uni.logo} alt={`Logo ${uni.name}`} className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500" onError={(e) => { e.currentTarget.src = 'https://placehold.co/400x200?text=' + uni.name }} />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h4 className="text-xl font-bold text-primary mb-1">{uni.name}</h4>
                  <p className="text-sm font-medium text-gray-900 mb-4">{uni.fullName}</p>
                  
                  <div className="mt-auto flex items-start gap-2 text-gray-500">
                    <MapPin size={16} className="shrink-0 mt-0.5" />
                    <span className="text-xs leading-relaxed">{uni.campus}</span>
                  </div>
                  
                  <div className="mt-6 flex items-center justify-between text-sm font-bold text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    Saber mais
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Estaduais */}
        <div>
          <div className="flex items-center gap-4 mb-8">
            <h3 className="text-2xl font-bold text-gray-800">Estaduais</h3>
            <div className="h-px bg-gray-200 flex-1"></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {estaduais.map((uni) => (
              <Link to={`/universidades/${uni.id}`} key={uni.id} className="group flex flex-col bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="h-48 bg-gray-50 flex items-center justify-center p-8 border-b border-gray-50">
                  <img src={uni.logo} alt={`Logo ${uni.name}`} className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500" onError={(e) => { e.currentTarget.src = 'https://placehold.co/400x200?text=' + uni.name }} />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h4 className="text-xl font-bold text-primary mb-1">{uni.name}</h4>
                  <p className="text-sm font-medium text-gray-900 mb-4">{uni.fullName}</p>
                  
                  <div className="mt-auto flex items-start gap-2 text-gray-500">
                    <MapPin size={16} className="shrink-0 mt-0.5" />
                    <span className="text-xs leading-relaxed">{uni.campus}</span>
                  </div>
                  
                  <div className="mt-6 flex items-center justify-between text-sm font-bold text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    Saber mais
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
