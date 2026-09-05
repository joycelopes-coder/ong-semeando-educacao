import React, { useEffect } from 'react'
import { UniversityLayout, Section } from '../../components/layout/UniversityLayout'
import { MapPin, LogIn, BookOpen, Accessibility } from 'lucide-react'

export function UFABC() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <UniversityLayout 
      title="UFABC" 
      mainImage="/universidades/image1.jpg" // Placeholder for banner
    >
      <Section title="Sobre a UFABC">
        <p>A Universidade Federal do ABC foi fundada em 2006 e com seus poucos anos já se destaca nos seus cursos, pesquisas e inovações.</p>
        <p className="mt-4">
          <a href="https://www.ufabc.edu.br/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">
            Para ir para o site da Universidade, clique aqui.
          </a>
        </p>
      </Section>

      <div className="w-full h-px bg-gray-100 my-10"></div>

      <Section title="Onde fica a UFABC?" icon={MapPin}>
        <p>Existem dois campus, ambos ficam na grande São Paulo, no ABC paulista, daí o nome tão diferente!</p>
        <ul className="list-disc pl-5 mt-4 space-y-2 font-medium">
          <li>Campus de Santo André/SP</li>
          <li>Campus de São Bernardo/SP</li>
        </ul>
      </Section>

      <div className="w-full h-px bg-gray-100 my-10"></div>

      <Section title="Como entrar na UFABC?" icon={LogIn}>
        <p>Para poder entrar na UFABC você precisa fazer o Enem, se inscrever no SISU e se candidatar a um dos quatro cursos de ingresso:</p>
        <ul className="list-disc pl-5 mt-4 space-y-2">
          <li>Bacharelado em Ciência e Tecnologia (BC&T)</li>
          <li>Bacharelado em Ciências e Humanidades (BC&H)</li>
          <li>Licenciatura em Ciências Humanas (LCH)</li>
          <li>Licenciatura em Ciências Naturais e Exatas (LCNE)</li>
        </ul>
      </Section>

      <div className="w-full h-px bg-gray-100 my-10"></div>

      <Section title="Cursos da UFABC" icon={BookOpen}>
        <p>A UFABC é a diferentona das universidades! Nela você entra em um dos 4 cursos listados acima, chamados de Bacharelados e Licenciaturas Interdisciplinares, e após eles você pode escolher um dos cursos específicos, de acordo com o curso de ingresso.</p>
        {/* Placeholder for the courses image/list if it exists */}
        <div className="mt-6 rounded-xl overflow-hidden border border-gray-100 shadow-sm">
           <img src="./universidades/image2.png" alt="Cursos UFABC" className="w-full h-auto" />
        </div>
      </Section>

      <div className="w-full h-px bg-gray-100 my-10"></div>

      <Section title="Acessibilidade" icon={Accessibility}>
        <p>Todos os dois campus foram projetados para receber todos alunos independente de questões físicas, intelectuais e de gênero.</p>
        <ul className="list-disc pl-5 mt-4 space-y-2">
          <li>Há acessos apropriados para acomodar cadeirantes e com limitações de movimentos.</li>
          <li>Sinalizações para deficientes visuais em todo campus.</li>
          <li>Programa de monitoria para àqueles com qualquer tipo de dificuldade física/locomoção.</li>
          <li>Tem alguém que te acompanha nas aulas para te auxiliar nas aulas práticas ou fazer anotações.</li>
          <li>Acesso a sanitários de acordo com o gênero que você se identifica.</li>
          <li>1ª universidade a aderir cotas para Transexuais.</li>
        </ul>
      </Section>

    </UniversityLayout>
  )
}
