import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { GraduationCap, BookOpen, FileText, CheckCircle, Users, DollarSign, School, Award, Info, Scale, ExternalLink } from 'lucide-react'

export function Vestibular() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

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
            <FileText size={40} className="text-white" />
          </motion.div>
          
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6"
          >
            O que é Vestibular?
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-green-50 max-w-3xl leading-relaxed"
          >
            Vestibular é o nome dado às provas usadas como meio de ingresso para universidades e faculdades. Ou seja, para fazer uma graduação, você precisa fazer uma prova para entrar!
          </motion.p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 -mt-10 relative z-20 w-full mb-16">
        <motion.div 
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="bg-white p-8 md:p-10 rounded-3xl shadow-lg border border-gray-100 text-center"
        >
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            Os mais famosos são os vestibulares de universidades públicas, justamente por serem as mais concorridas, mas geralmente as particulares também possuem os seus próprios.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left mt-8">
            <div className="bg-green-50 p-6 rounded-2xl">
              <School className="text-primary mb-3" size={28} />
              <h4 className="font-bold text-gray-900 mb-2">USP</h4>
              <p className="text-sm text-gray-600">O vestibular para entrar na USP é a <strong>FUVEST</strong>.</p>
            </div>
            <div className="bg-green-50 p-6 rounded-2xl">
              <BookOpen className="text-primary mb-3" size={28} />
              <h4 className="font-bold text-gray-900 mb-2">UNICAMP</h4>
              <p className="text-sm text-gray-600">O vestibular/prova é feito pela própria instituição (Comvest).</p>
            </div>
            <div className="bg-green-50 p-6 rounded-2xl">
              <GraduationCap className="text-primary mb-3" size={28} />
              <h4 className="font-bold text-gray-900 mb-2">Federais</h4>
              <p className="text-sm text-gray-600">Para entrar em universidades FEDERAIS, você usa o <strong>ENEM</strong>.</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Programas do Governo */}
      <div className="max-w-7xl mx-auto px-6 w-full mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-4">Programas do Governo</h2>
          <p className="text-lg text-gray-600">Como usar a nota do ENEM para ingressar no ensino superior</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* SISU */}
          <div className="bg-white rounded-3xl shadow-sm border border-gray-200 overflow-hidden flex flex-col">
            <div className="bg-blue-600 p-8 text-white">
              <h3 className="text-3xl font-extrabold mb-2">SISU</h3>
              <p className="text-blue-100 font-medium">Sistema de Seleção Unificado</p>
            </div>
            <div className="p-8 flex flex-col gap-6 flex-1">
              <div>
                <h4 className="flex items-center gap-2 text-lg font-bold text-gray-900 mb-2">
                  <Info size={20} className="text-blue-600" /> O que é?
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">Programa no qual universidades <strong>públicas</strong> oferecem vagas para candidatos participantes do ENEM. A seleção ocorre duas vezes ao ano (janeiro e julho).</p>
              </div>
              <div>
                <h4 className="flex items-center gap-2 text-lg font-bold text-gray-900 mb-2">
                  <Users size={20} className="text-blue-600" /> Quem pode participar?
                </h4>
                <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
                  <li>Estudantes que participaram da última edição do ENEM.</li>
                  <li>Nota na redação maior que zero.</li>
                  <li>Não ter participado como "treineiro".</li>
                </ul>
              </div>
              <div>
                <h4 className="flex items-center gap-2 text-lg font-bold text-gray-900 mb-2">
                  <CheckCircle size={20} className="text-blue-600" /> Como funciona?
                </h4>
                <ul className="text-gray-600 text-sm space-y-3">
                  <li><strong>Inscrições:</strong> Gratuitas pelo site oficial.</li>
                  <li><strong>Escolha do curso:</strong> Até duas opções, podendo ser alteradas durante o período de inscrição.</li>
                  <li><strong>Modalidade:</strong> Ampla concorrência e cotas (Lei 12.711/2012).</li>
                  <li><strong>Pesos e Notas:</strong> Alguns cursos dão pesos maiores para certas matérias ou exigem notas mínimas.</li>
                  <li><strong>Nota de corte:</strong> Menor nota para ficar entre os selecionados. Divulgada diariamente.</li>
                </ul>
              </div>
              <div className="mt-auto pt-6">
                <a href="https://acessounico.mec.gov.br/sisu" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-full gap-2 text-white font-bold bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl transition-colors">
                  Acessar o SISU <ExternalLink size={18} />
                </a>
              </div>
            </div>
          </div>

          {/* PROUNI */}
          <div className="bg-white rounded-3xl shadow-sm border border-gray-200 overflow-hidden flex flex-col">
            <div className="bg-orange-500 p-8 text-white">
              <h3 className="text-3xl font-extrabold mb-2">PROUNI</h3>
              <p className="text-orange-100 font-medium">Programa Universidade para Todos</p>
            </div>
            <div className="p-8 flex flex-col gap-6 flex-1">
              <div>
                <h4 className="flex items-center gap-2 text-lg font-bold text-gray-900 mb-2">
                  <Info size={20} className="text-orange-500" /> O que é?
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">Programa que oferece bolsas de estudos integrais (100%) e parciais (50%) em universidades <strong>particulares</strong> pela nota do ENEM. (janeiro e julho).</p>
              </div>
              <div>
                <h4 className="flex items-center gap-2 text-lg font-bold text-gray-900 mb-2">
                  <Users size={20} className="text-orange-500" /> Quem pode participar?
                </h4>
                <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
                  <li>Participantes do último ENEM (mín. 450 pontos e redação maior que 0).</li>
                  <li>Bolsa 100%: renda familiar de até 1,5 salário mínimo per capita.</li>
                  <li>Bolsa 50%: renda familiar de até 3 salários mínimos per capita.</li>
                  <li>Cursou ensino médio em escola pública ou com bolsa 100% em particular (PCD e professores da rede pública têm regras próprias).</li>
                  <li>Não possuir diploma de curso superior.</li>
                </ul>
              </div>
              <div>
                <h4 className="flex items-center gap-2 text-lg font-bold text-gray-900 mb-2">
                  <CheckCircle size={20} className="text-orange-500" /> Como funciona?
                </h4>
                <ul className="text-gray-600 text-sm space-y-3">
                  <li><strong>Inscrições e Escolha:</strong> Gratuitas no site; até duas opções de curso.</li>
                  <li><strong>Cotas:</strong> Há reserva de vagas para pretos, pardos e indígenas.</li>
                  <li><strong>Nota de corte:</strong> Atualizada diariamente durante a inscrição.</li>
                  <li><strong>Comprovação:</strong> Os pré-selecionados devem ir à faculdade comprovar a renda e escolaridade.</li>
                </ul>
              </div>
              <div className="mt-auto pt-6">
                <a href="https://acessounico.mec.gov.br/prouni" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-full gap-2 text-white font-bold bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-xl transition-colors">
                  Acessar o PROUNI <ExternalLink size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Isenções e Cotas */}
      <div className="max-w-5xl mx-auto px-6 w-full">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-4">Isenção de Taxa e Cotas</h2>
          <p className="text-lg text-gray-600">Direitos que garantem o seu acesso ao ensino superior</p>
        </div>

        <div className="space-y-6">
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex gap-6"
          >
            <div className="hidden sm:flex flex-shrink-0 w-16 h-16 bg-green-50 text-primary rounded-2xl items-center justify-center">
              <DollarSign size={32} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Isenção no ENEM e Universidades</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Sabemos que para estudantes de baixa renda a cobrança de taxas em vestibulares dificulta o acesso. Por isso, a isenção de taxa é garantida por lei em vários cenários:
              </p>
              <ul className="text-sm text-gray-600 space-y-4">
                <li><strong>ENEM:</strong> Isenção para alunos do 3º ano da rede pública, quem cursou todo o ensino médio em escola pública (ou com bolsa integral) com renda de até 1,5 salário mínimo, ou famílias no Cadastro Único.</li>
                <li><strong>Universidades Federais e IFs (Lei 12.799/13):</strong> Isentam estudantes do ensino médio público ou bolsistas integrais com renda igual ou inferior a um salário-mínimo per capita.</li>
                <li><strong>Estaduais/FUVEST:</strong> Possuem isenção total ou 50% de redução baseada na renda familiar. Siga sempre o edital de cada instituição!</li>
              </ul>
            </div>
          </motion.div>

          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex gap-6"
          >
            <div className="hidden sm:flex flex-shrink-0 w-16 h-16 bg-secondary/10 text-secondary rounded-2xl items-center justify-center">
              <Scale size={32} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Lei de Cotas</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Com base na Lei Nº 12.711, todas as universidades federais possuem <strong>no mínimo 50% das vagas</strong> reservadas para alunos oriundos de escola pública.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>Desta porcentagem, metade é destinada a estudantes com renda familiar de até 1,5 salário-mínimo.</li>
                <li>Há a separação proporcional por grupo racial autodeclarado (Pretos, Pardos e Indígenas), seguindo o censo do IBGE.</li>
                <li>O PROUNI também estabelece cotas seguindo esse mesmo critério racial do IBGE para as bolsas em faculdades particulares.</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  )
}
