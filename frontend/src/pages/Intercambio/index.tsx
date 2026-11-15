import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Globe, Plane, Heart, Users, Briefcase, DollarSign, Compass, ExternalLink, ShieldCheck, Home, Coffee } from 'lucide-react'

export function Intercambio() {
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
            <Globe size={40} className="text-white" />
          </motion.div>
          
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6"
          >
            Já ouviu falar de Intercâmbio?
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-green-50 max-w-3xl leading-relaxed"
          >
            Intercâmbio nada mais é do que uma viagem para outra cidade, estado ou país para estudar, trabalhar ou os dois! Explore um mundão lá fora e transforme a sua visão do mundo.
          </motion.p>
        </div>
      </div>

      {/* Introdução e Tipos */}
      <div className="max-w-7xl mx-auto px-6 -mt-10 relative z-20 w-full mb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div 
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100"
          >
            <div className="w-12 h-12 bg-green-50 text-primary rounded-xl flex items-center justify-center mb-6">
              <Heart size={24} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Por que fazer?</h3>
            <p className="text-gray-600 leading-relaxed text-sm">
              É uma forma de aprender um idioma, cultura e fazer novas amizades que podem ser duradouras. Pessoalmente, é uma experiência transformadora. Profissionalmente, chama a atenção dos recrutadores e é um diferencial para muitas empresas.
            </p>
          </motion.div>

          <motion.div 
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100"
          >
            <div className="w-12 h-12 bg-green-50 text-primary rounded-xl flex items-center justify-center mb-6">
              <Users size={24} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Quem pode fazer?</h3>
            <p className="text-gray-600 leading-relaxed text-sm">
              Qualquer pessoa acima dos 16 anos! Se você está no ensino médio, se já terminou, se está no curso técnico, na faculdade, pós graduação ou se já terminou os estudos. Ou seja, <strong>TODO MUNDO PODE! =)</strong>
            </p>
          </motion.div>

          <motion.div 
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100"
          >
            <div className="w-12 h-12 bg-green-50 text-primary rounded-xl flex items-center justify-center mb-6">
              <Briefcase size={24} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Quais tipos existem?</h3>
            <ul className="text-gray-600 leading-relaxed text-sm space-y-2 list-disc list-inside">
              <li>Estudo: ensino médio (6 meses a 2 anos)</li>
              <li>Estudo: graduação (6 meses até completa)</li>
              <li>Estudo: idiomas (1 semana a 2 anos)</li>
              <li>Estudo: cursos diversos (1 mês a 2 anos)</li>
              <li>Estudo e trabalho (6 meses a 2 anos)</li>
              <li>Trabalho (6 meses a 2 anos)</li>
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Custos */}
      <div className="max-w-5xl mx-auto px-6 w-full mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-4">Quanto custa?</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Varia de acordo com modalidade, agência e programa, mas no geral é bem caro. Você tem que ter em mente as necessidades básicas que com certeza irá precisar:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {[
            { title: 'Passagens Aéreas', icon: Plane, text: 'Varia com o local e época do ano. Próximo a férias, festas e feriados o preço sobe bastante.' },
            { title: 'Acomodação', icon: Home, text: 'Você pode optar por ficar em casa de uma família, dormitório estudantil, hotel, hostel, etc.' },
            { title: 'Moeda Local', icon: DollarSign, text: 'Como a moeda muda (como o dólar), você vai ter que comprá-los em uma loja de câmbio.' },
            { title: 'Alimentação', icon: Coffee, text: 'É importante planejar-se para ter uma alimentação saudável, mesmo tentando economizar.' },
            { title: 'Transporte', icon: Compass, text: 'Como vai se locomover? Qual o meio de transporte? Quantas viagens por dia?' },
            { title: 'Seguro Saúde', icon: ShieldCheck, text: 'Obrigatório em alguns países e sempre recomendado. Uma emergência no exterior pode ser um problemão.' },
          ].map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div 
                key={item.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm"
              >
                <Icon className="text-secondary mb-3" size={28} />
                <h4 className="font-bold text-gray-900 mb-2">{item.title}</h4>
                <p className="text-sm text-gray-600">{item.text}</p>
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* Bolsas e Primeiro Passo */}
      <div className="max-w-5xl mx-auto px-6 w-full mb-20">
        <div className="bg-secondary rounded-3xl p-8 md:p-12 text-white shadow-lg overflow-hidden relative">
          <div className="absolute top-0 right-0 opacity-10 pointer-events-none transform translate-x-1/4 -translate-y-1/4">
            <Globe size={400} />
          </div>
          
          <div className="relative z-10">
            <h2 className="text-3xl font-extrabold mb-6">Não tenho condições financeiras, e agora?</h2>
            <p className="text-orange-50 leading-relaxed mb-6 font-medium">
              Fique calmo! Intercâmbio não é só para ricos ou pessoas com dinheiro sobrando. Assim como as universidades, o intercâmbio também é para pessoas de baixa renda! As oportunidades podem ser menores, mas elas existem!
            </p>
            <ul className="text-orange-50/90 leading-relaxed space-y-3 mb-10 list-disc list-inside">
              <li>Há bolsas que cobrem tudo (de passagem a alimentação) e ainda dão um auxílio mensal, enquanto outras cobrem somente o curso.</li>
              <li>Durante a universidade é onde há a maior variedade de bolsas, principalmente em universidades públicas.</li>
              <li>Além de órgãos públicos (nacionais e internacionais), empresas privadas também oferecem bolsas via concursos ou critérios específicos.</li>
            </ul>

            <h2 className="text-3xl font-extrabold mb-6">Me interessei, qual o primeiro passo?</h2>
            <p className="text-orange-50 leading-relaxed mb-6">
              Comece a pesquisar mais sobre o assunto! Assistir a vídeos no YouTube de diferentes pessoas relatando a experiência e o quanto gastaram é ótimo para ter uma visão ampla (mas atenção às variações do câmbio!).
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white/10 p-6 rounded-2xl border border-white/20">
                <h4 className="font-bold text-white mb-2">Se for pagar:</h4>
                <p className="text-sm text-orange-50">Procure agências conhecidas, cheque a reputação online, marque um horário e vá conversar pessoalmente. Verifique várias opções!</p>
              </div>
              <div className="bg-white/10 p-6 rounded-2xl border border-white/20">
                <h4 className="font-bold text-white mb-2">Se buscar bolsa:</h4>
                <p className="text-sm text-orange-50">Procure em sites confiáveis as oportunidades disponíveis, visite o site oficial do curso e tire suas dúvidas diretamente lá.</p>
              </div>
            </div>

            <div className="pt-8 border-t border-white/20">
              <h4 className="font-bold text-white mb-4">Organizações para acompanhar bolsas de estudo:</h4>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="https://www.estudarfora.org.br/category/bolsas-de-estudos/" target="_blank" rel="noopener noreferrer" className="bg-white text-secondary font-bold px-6 py-3 rounded-full hover:bg-orange-50 transition-colors inline-flex items-center justify-center gap-2 text-sm">
                  Fundação Estudar <ExternalLink size={16} />
                </a>
                <a href="https://www.blogdatissen.com/" target="_blank" rel="noopener noreferrer" className="bg-white text-secondary font-bold px-6 py-3 rounded-full hover:bg-orange-50 transition-colors inline-flex items-center justify-center gap-2 text-sm">
                  Blog da Tissen <ExternalLink size={16} />
                </a>
                <a href="https://partiuintercambio.org/" target="_blank" rel="noopener noreferrer" className="bg-white text-secondary font-bold px-6 py-3 rounded-full hover:bg-orange-50 transition-colors inline-flex items-center justify-center gap-2 text-sm">
                  Partiu Intercâmbio <ExternalLink size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
