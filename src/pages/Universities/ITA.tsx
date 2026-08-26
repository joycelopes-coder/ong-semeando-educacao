import React, { useEffect } from 'react'
import { UniversityLayout, Section } from '../../components/layout/UniversityLayout'
import { MapPin, LogIn, BookOpen, Accessibility } from 'lucide-react'

export function ITA() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <UniversityLayout 
      title="ITA" 
      mainImage="/universidades/image1.jpg" 
    >
      <Section title="Sobre o ITA">
        <p>O Instituto Tecnológico de Aeronáutica (ITA) é uma instituição universitária pública ligada ao Comando da Aeronáutica (COMAER) e mantida pelo Governo Federal. É considerado um dos centros de ensino superior de engenharia mais prestigiados, difíceis e inovadores de toda a América Latina.</p>
      </Section>

      <div className="w-full h-px bg-gray-100 my-10"></div>

      <Section title="Onde fica o ITA?" icon={MapPin}>
        <p>O ITA possui um **único campus** no Brasil.</p>
        <ul className="list-disc pl-5 mt-4 space-y-2">
          <li><strong>São José dos Campos/SP:</strong> A instituição está localizada nas dependências do Departamento de Ciência e Tecnologia Aeroespacial (DCTA), um grande complexo de pesquisa militar e civil.</li>
        </ul>
      </Section>

      <div className="w-full h-px bg-gray-100 my-10"></div>

      <Section title="Como entrar no ITA?" icon={LogIn}>
        <p className="mb-4">O Vestibular do ITA é famoso por ser **um dos exames mais difíceis e concorridos do Brasil**, focado altissimamente em Exatas.</p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>1ª Fase:</strong> Prova com questões de múltipla escolha focadas pesado em Matemática, Física, Química, além de Português e Inglês.</li>
          <li><strong>2ª Fase:</strong> Provas dissertativas extremamente aprofundadas de Matemática, Física, Química e Redação.</li>
          <li><strong>Exame Médico:</strong> Por ser uma instituição militar, os aprovados passam por rigorosos exames de saúde (Inspeção de Saúde - INSPSAU) e avaliação psicológica.</li>
        </ul>
        <p className="mt-4 bg-blue-50 text-blue-800 p-4 rounded-lg text-sm border border-blue-100">
          <strong>Curiosidade:</strong> O candidato pode escolher se inscrever como <em>Civil</em> (Optante pela Reserva) ou <em>Militar</em> (Optante pela Ativa). Os militares se formam engenheiros e também Primeiros-Tenentes da Força Aérea Brasileira.
        </p>
      </Section>

      <div className="w-full h-px bg-gray-100 my-10"></div>

      <Section title="Cursos do ITA" icon={BookOpen}>
        <p className="mb-4">O ITA é extremamente focado. Ele não possui cursos de Humanas ou Biológicas. São oferecidas vagas apenas para **6 engenharias** de altíssimo nível:</p>
        <ul className="list-disc pl-5 space-y-2 font-medium text-gray-700">
          <li>Engenharia Aeroespacial</li>
          <li>Engenharia Aeronáutica</li>
          <li>Engenharia Civil-Aeronáutica</li>
          <li>Engenharia de Computação</li>
          <li>Engenharia Eletrônica</li>
          <li>Engenharia Mecânica-Aeronáutica</li>
        </ul>
      </Section>

      <div className="w-full h-px bg-gray-100 my-10"></div>

      <Section title="Acessibilidade" icon={Accessibility}>
        <p>Diferente de outras universidades federais, o ITA tem regras de admissão vinculadas ao Serviço Militar. Isso significa que existem **limitações estritas**.</p>
        <p className="mt-4">
          De acordo com os editais da Aeronáutica, existem condições de saúde, aptidão física e psicológica que são eliminatórias. Portanto, pessoas com certas deficiências físicas ou condições médicas podem ser consideradas "Inaptas" na fase de Inspeção de Saúde, impossibilitando o ingresso mesmo que aprovadas na prova escrita. Caso você possua alguma deficiência, é extremamente importante ler o edital de saúde (ICA 160-6) com muita atenção antes de prestar a prova.
        </p>
      </Section>

    </UniversityLayout>
  )
}
