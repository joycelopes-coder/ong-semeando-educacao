import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Newspaper, Video, ExternalLink, Mic, PlayCircle } from 'lucide-react'

export function Midia() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const reportagens = [
    {
      id: 1,
      tipo: 'Reportagem',
      titulo: 'ONG Semeando Educação transforma vidas de estudantes da rede pública',
      veiculo: 'Jornal Local',
      data: '15 de Agosto de 2026',
      descricao: 'Uma matéria completa sobre o impacto do projeto na aprovação de jovens em grandes universidades.',
      icon: Newspaper,
      link: '#'
    },
    {
      id: 2,
      tipo: 'Entrevista',
      titulo: 'Bate-papo com os fundadores do Semeando',
      veiculo: 'Podcast Educação em Foco',
      data: '02 de Setembro de 2026',
      descricao: 'Nessa entrevista exclusiva, os idealizadores do projeto contam como tudo começou e os próximos passos.',
      icon: Mic,
      link: '#'
    },
    {
      id: 3,
      tipo: 'Vídeo',
      titulo: 'Documentário: A Força da Educação',
      veiculo: 'Canal Independente',
      data: '20 de Julho de 2026',
      descricao: 'Acompanhe a trajetória de três alunos do Semeando Educação que conquistaram suas vagas nas universidades federais.',
      icon: PlayCircle,
      link: '#'
    }
  ]

  return (
    <main className="w-full flex flex-col flex-1 pb-20 bg-gray-50/50">
      {/* Hero Section */}
      <div className="relative w-full pt-[88px] min-h-[45vh] bg-tertiary flex flex-col items-center justify-center overflow-hidden">
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
            <Video size={40} className="text-white" />
          </motion.div>
          
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6"
          >
            Semeando na Mídia
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed font-medium"
          >
            Acompanhe entrevistas, reportagens e matérias onde o nosso trabalho ganhou destaque na imprensa e na mídia independente.
          </motion.p>
        </div>
      </div>

      {/* Grid de Reportagens */}
      <div className="max-w-7xl mx-auto px-6 -mt-10 relative z-20 w-full mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reportagens.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div 
                key={item.id}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 flex flex-col h-full hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-[#f8f5f3] text-tertiary rounded-2xl flex items-center justify-center">
                    <Icon size={24} />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-tertiary">{item.tipo}</span>
                    <p className="text-sm text-gray-400 font-medium">{item.data}</p>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-snug">
                  {item.titulo}
                </h3>
                
                <p className="text-sm font-semibold text-gray-500 mb-4 uppercase tracking-wide">
                  {item.veiculo}
                </p>
                
                <p className="text-gray-600 leading-relaxed text-sm mb-8 flex-1">
                  {item.descricao}
                </p>
                
                <div className="mt-auto">
                  <a 
                    href={item.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-bold text-white bg-tertiary hover:bg-tertiary-hover px-6 py-3 rounded-full transition-colors w-fit"
                  >
                    Acessar conteúdo
                    <ExternalLink size={16} />
                  </a>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="max-w-4xl mx-auto px-6 w-full text-center">
        <div className="bg-primary/10 rounded-3xl p-10 md:p-14 border border-primary/20">
          <Newspaper size={48} className="text-primary mx-auto mb-6" />
          <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Você é da imprensa?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto">
            Gostaria de fazer uma matéria ou conhecer mais sobre o nosso projeto? Entre em contato com a nossa equipe de comunicação.
          </p>
          <a href="/#contato" className="inline-flex items-center gap-2 text-white font-bold bg-primary hover:bg-primary-hover px-8 py-4 rounded-full transition-colors">
            Falar com a equipe
          </a>
        </div>
      </div>
    </main>
  )
}
