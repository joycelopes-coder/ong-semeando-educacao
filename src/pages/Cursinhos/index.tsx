import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { BookOpen, Target, Clock, AlertCircle, HelpCircle, GraduationCap, MapPin, Search, Lightbulb, Calendar } from 'lucide-react'

export function Cursinhos() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const infos = [
    {
      title: 'Primeiramente, o que é vestibular?',
      content: 'Antes de falar sobre os cursinhos, vamos entender a motivação de sua existência: o Vestibular. O vestibular não é nada mais que uma prova, que pode variar muito de formato dependendo do curso e da universidade pretendida. O conteúdo dessas provas engloba tudo o que foi visto na grade do ensino médio.',
      icon: HelpCircle
    },
    {
      title: 'Exemplos de vestibulares',
      content: 'O vestibular para entrar na USP é a FUVEST. O vestibular para entrar na UNICAMP é feito pela própria Comvest. E o vestibular/prova para entrar nas universidades FEDERAIS é o ENEM.',
      icon: Target
    },
    {
      title: 'O que é cursinho pré-vestibular?',
      content: 'É um curso preparatório para vestibulares que tem como objetivo revisar e reforçar os conteúdos vistos no ensino médio de uma forma mais direta, voltada para os assuntos mais cobrados e resolução de exercícios das diferentes provas. Você também pode optar por cursos específicos apenas para as matérias em que tem mais dificuldade.',
      icon: BookOpen
    },
    {
      title: 'O que é cursinho popular?',
      content: 'São cursinhos gratuitos ou de baixo custo criados para ajudar pessoas que não podem arcar com as despesas de um cursinho pago. Vários cursinhos populares se destacam tanto pela qualidade de ensino (muitas vezes igual ou superior a vários particulares) como pela acessibilidade financeira.',
      icon: GraduationCap
    },
    {
      title: 'Por que fazer cursinho?',
      content: 'No cursinho você tem a chance de relembrar e aprender conteúdos cobrados nos vestibulares, fazer simulados, resolver questões que já caíram em provas anteriores, pegar dicas de memorização e tirar dúvidas diretamente com os professores.',
      icon: Lightbulb
    },
    {
      title: 'Durante ou depois do ensino médio?',
      content: 'Isso vai depender muito de você! Pode ser junto com a escola: há vários lugares que oferecem diferentes horários (manhã, tarde, noite e aos fins de semana). Ou, se preferir, depois que acabar o ensino médio, escolhendo o horário que melhor se encaixa na sua rotina.',
      icon: Clock
    },
    {
      title: 'Quanto tempo dura?',
      content: 'Pode variar: \n• Extensivo: ~10 meses\n• Semiextensivo: ~4 meses no 1º semestre\n• Turmas de maio: seguem até dezembro\n• Semi-intensivo: ~4 meses no 2º semestre\n• Intensivão: de outubro até dezembro\n• Revisão: apenas um mês, perto das provas.\n\nCabe a você analisar qual atende melhor suas necessidades!',
      icon: Calendar
    },
    {
      title: 'Garante que eu entre na faculdade?',
      content: 'Não! Cursinho pré-vestibular não é um lugar mágico. Um bom resultado nos vestibulares vai depender do seu esforço e dedicação. Mas, se você levar essa preparação a sério, com certeza aumentará drasticamente suas chances de ser aprovado.',
      icon: AlertCircle
    }
  ]

  return (
    <main className="w-full flex flex-col flex-1 pb-20 bg-gray-50/50">
      {/* Hero Section */}
      <div className="relative w-full pt-[88px] min-h-[45vh] bg-primary flex flex-col items-center justify-center overflow-hidden">
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
            <BookOpen size={40} className="text-white" />
          </motion.div>
          
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6"
          >
            Cursinhos Pré-Vestibulares
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-green-50 max-w-2xl leading-relaxed"
          >
            Entenda o que é o vestibular, por que os cursinhos populares são fundamentais nessa jornada e descubra opções gratuitas no estado de São Paulo.
          </motion.p>
        </div>
      </div>

      {/* Info Cards Section */}
      <div className="max-w-7xl mx-auto px-6 -mt-10 relative z-20 w-full mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {infos.map((info, index) => {
            const Icon = info.icon
            return (
              <motion.div 
                key={info.title}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-green-50 text-primary rounded-xl flex items-center justify-center mb-6">
                  <Icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{info.title}</h3>
                <p className="text-gray-600 leading-relaxed flex-1 whitespace-pre-line">{info.content}</p>
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* Map Section */}
      <div className="max-w-6xl mx-auto px-6 w-full mb-20">
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden flex flex-col md:flex-row">
          <div className="p-10 md:p-12 flex-1 flex flex-col justify-center">
            <div className="w-14 h-14 bg-green-50 text-primary rounded-2xl flex items-center justify-center mb-6">
              <MapPin size={28} />
            </div>
            <h2 className="text-3xl font-extrabold text-primary mb-4">Mapa de Cursinhos</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              O Semeando Educação reuniu vários cursinhos do estado de São Paulo para ajudar você a encontrar o mais próximo de sua casa!
            </p>
            
            <div className="relative mb-8 max-w-sm">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search size={18} className="text-gray-400" />
              </div>
              <input 
                type="text" 
                placeholder="Adicionar filtro (ex: bairro, cidade)" 
                className="w-full bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-full focus:ring-primary focus:border-primary block pl-10 p-3"
              />
            </div>
            
            <div className="mt-auto">
              <p className="text-sm font-medium text-gray-500 mb-3">Conhece algum cursinho que não está nesse mapa?</p>
              <a 
                href="https://www.instagram.com/semeandoeducacao/" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary font-bold hover:text-green-800 transition-colors"
              >
                Entre em contato conosco
              </a>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 bg-gray-100 min-h-[400px] relative border-l border-gray-100 flex items-center justify-center">
            <div className="absolute inset-0 bg-map-pattern opacity-10"></div>
            {/* Placeholder for the actual map integration */}
            <div className="text-center p-8 z-10">
              <MapPin size={48} className="mx-auto text-gray-300 mb-4" />
              <p className="text-gray-500 font-medium">O mapa interativo será carregado aqui.</p>
              <p className="text-xs text-gray-400 mt-2">Navegue pelas opções filtradas ao lado.</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Slogan */}
      <div className="w-full text-center pb-8 opacity-60">
        <p className="font-bold text-gray-400 tracking-[0.2em] uppercase text-sm">
          Amar <span className="mx-2">•</span> Ajudar <span className="mx-2">•</span> Cuidar
        </p>
      </div>
    </main>
  )
}
