import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { BookOpen, Target, Clock, AlertCircle, HelpCircle, GraduationCap, Lightbulb, Calendar } from 'lucide-react'
import { CursinhosMap } from './CursinhosMap'

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

      {/* Interactive Map Section Component */}
      <CursinhosMap />
      
      {/* Slogan */}
      <div className="w-full text-center pb-8 opacity-60">
        <p className="font-bold text-gray-400 tracking-[0.2em] uppercase text-sm">
          Amar <span className="mx-2">•</span> Ajudar <span className="mx-2">•</span> Cuidar
        </p>
      </div>
    </main>
  )
}
