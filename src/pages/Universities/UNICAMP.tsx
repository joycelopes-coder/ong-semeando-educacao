import React, { useEffect } from 'react'
import { UniversityLayout, Section } from '../../components/layout/UniversityLayout'
import { MapPin, LogIn, BookOpen, Accessibility } from 'lucide-react'

export function UNICAMP() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <UniversityLayout 
      title="UNICAMP" 
      mainImage="/universidades/image8.jpg" 
    >
      <Section title="Sobre a UNICAMP">
        <p>Fundada em 1966, a Universidade Estadual de Campinas (Unicamp), atualmente, conta com aproximadamente 34 mil alunos matriculados em 66 cursos de graduação e 153 programas de pós-graduação, em 24 unidades de ensino e pesquisa distribuídas em 3 cidades.</p>
        <p className="mt-4">Possui também um vasto complexo de saúde (com duas grandes unidades hospitalares), além de 23 núcleos e centros interdisciplinares, dois colégios técnicos e uma série de unidades de apoio num universo onde convivem cerca de 50 mil pessoas e se desenvolvem milhares de projetos de pesquisa.</p>
        <p className="mt-4">Além disso, a Unicamp foi indicada como a 3ª melhor universidade da América Latina pelo ranking da Times Higher Education 2021 e a 2ª melhor universidade do Brasil.</p>
      </Section>

      <div className="w-full h-px bg-gray-100 my-10"></div>

      <Section title="Onde fica a UNICAMP?" icon={MapPin}>
        <p>As unidades da Unicamp estão distribuídas em 3 campi, que ficam nas cidades de:</p>
        <ul className="list-disc pl-5 mt-4 space-y-2 font-medium">
          <li>Campinas</li>
          <li>Limeira</li>
          <li>Piracicaba</li>
          <li>(Além de um centro de pesquisa em Paulínia)</li>
        </ul>
      </Section>

      <div className="w-full h-px bg-gray-100 my-10"></div>

      <Section title="Como entrar na UNICAMP?" icon={LogIn}>
        <p className="mb-6">Há várias formas de entrar na Unicamp:</p>
        
        <div className="space-y-6">
          <div>
            <h4 className="font-bold text-primary flex items-center gap-2">Vestibular Unicamp</h4>
            <p className="text-sm mt-1">O Vestibular Unicamp tem duas fases. A 1ª fase é constituída de uma única prova de Conhecimentos Gerais composta por questões objetivas sobre as áreas do conhecimento desenvolvidas no ensino médio. A 2ª fase é constituída de provas com questões dissertativas, distribuídas em dois dias. Além dessas duas fases, há provas de Habilidades Específicas para alguns cursos.</p>
          </div>
          <div>
            <h4 className="font-bold text-primary flex items-center gap-2">Enem</h4>
            <p className="text-sm mt-1">A seleção utiliza as notas do Enem e é definida por meio de um edital específico. As vagas oferecidas pela modalidade Enem-Unicamp são distribuídas em diversas cotas para escolas públicas, pretos, pardos ou indígenas, totalizando 20% das vagas da graduação.</p>
          </div>
          <div>
            <h4 className="font-bold text-primary flex items-center gap-2">Vagas Olímpicas</h4>
            <p className="text-sm mt-1">Não há provas e a seleção é feita por meio do desempenho obtido em competições definidas e pelos cursos. Corresponde a até 10% das vagas extras ou regulares.</p>
          </div>
          <div>
            <h4 className="font-bold text-primary flex items-center gap-2">Vestibular Indígena</h4>
            <p className="text-sm mt-1">Realizado em data diferente do Vestibular Unicamp. A prova é realizada em seis cidades espalhadas pelo Brasil. O ingresso é na mesma época de matrículas do vestibular tradicional.</p>
          </div>
          <div>
            <h4 className="font-bold text-primary flex items-center gap-2">Programa de Formação Interdisciplinar Superior (ProFis)</h4>
            <p className="text-sm mt-1">É um curso voltado aos estudantes que cursaram o ensino médio em escolas públicas de Campinas. A seleção é feita com base nas notas do ENEM. O currículo inclui disciplinas das áreas de ciências humanas, biológicas, exatas e tecnológicas (2 anos).</p>
          </div>
        </div>
      </Section>

      <div className="w-full h-px bg-gray-100 my-10"></div>

      <Section title="Cursos da UNICAMP" icon={BookOpen}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm">
          <div>
            <h4 className="font-bold text-primary mb-2">Campinas</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>Instituto de Artes</li>
              <li>Instituto de Biologia</li>
              <li>Instituto de Computação</li>
              <li>Instituto de Economia</li>
              <li>Instituto de Estudos da Linguagem</li>
              <li>Instituto de Filosofia e Ciências Humanas</li>
              <li>Instituto de Física</li>
              <li>Instituto de Geociências</li>
              <li>Instituto de Matemática, Estatística e Computação Científica</li>
              <li>Instituto de Química</li>
              <li>Faculdades de Saúde, Engenharias e Educação</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-primary mb-2">Limeira</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>Faculdade de Ciências Aplicadas</li>
              <li>Faculdade de Tecnologia</li>
            </ul>
            <h4 className="font-bold text-primary mt-6 mb-2">Piracicaba</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>Faculdade de Odontologia de Piracicaba</li>
            </ul>
          </div>
        </div>
      </Section>

      <div className="w-full h-px bg-gray-100 my-10"></div>

      <Section title="Acessibilidade na UNICAMP" icon={Accessibility}>
        <ul className="list-disc pl-5 space-y-4">
          <li>A estrutura da Faculdade de Ciências Aplicadas em Limeira já foi projetada para atender às leis e normas de acessibilidade, enquanto as outras unidades ainda estão se adequando.</li>
          <li><strong>O Laboratório de Acessibilidade</strong> é um projeto da Biblioteca Central, cuja missão é proporcionar um ambiente adequado às necessidades educacionais especiais.</li>
          <li><strong>Central de Tradutores e Intérpretes de Língua de Sinais – Libras (Central TILS)</strong> atende alunos surdos na tradução das aulas.</li>
          <li><strong>O Centro de Estudos e Pesquisas em Reabilitação (Cepre)</strong> busca promover a inclusão dos alunos da universidade com deficiência visual.</li>
        </ul>
      </Section>

    </UniversityLayout>
  )
}
