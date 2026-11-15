import React, { useEffect } from 'react'
import { UniversityLayout, Section } from '../../components/layout/UniversityLayout'
import { MapPin, LogIn, BookOpen, Accessibility } from 'lucide-react'

export function USP() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <UniversityLayout 
      title="USP" 
      mainImage="/universidades/image8.jpg" 
    >
      <Section title="Sobre a USP">
        <p>Fundada em 1934, a Universidade de São Paulo (USP) é uma universidade pública mantida pelo Estado de São Paulo. É frequentemente apontada como a <strong>melhor universidade da América Latina</strong> e uma das instituições de pesquisa mais importantes do mundo. Ela é responsável por uma grande parcela da produção científica brasileira e forma anualmente milhares de profissionais de excelência.</p>
      </Section>

      <div className="w-full h-px bg-gray-100 my-10"></div>

      <Section title="Onde fica a USP?" icon={MapPin}>
        <p className="mb-4">A USP é gigantesca e possui <strong>vários campi</strong> espalhados pelo estado de São Paulo. Só na capital, há mais de um!</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
          <div>
            <h4 className="font-bold text-primary mb-2">Na Capital (São Paulo)</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Cidade Universitária (Butantã):</strong> O maior e principal campus.</li>
              <li><strong>EACH (USP Leste):</strong> Localizado no bairro de Ermelino Matarazzo.</li>
              <li><strong>Quadrilátero da Saúde / Direito:</strong> Faculdades de Medicina, Saúde Pública, Enfermagem (Pinheiros) e a tradicional Faculdade de Direito (Largo São Francisco).</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-primary mb-2">No Interior e Litoral</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Ribeirão Preto:</strong> Famoso pela área da saúde (FMRP) e outras diversas faculdades.</li>
              <li><strong>São Carlos:</strong> Polo tecnológico fortíssimo (Engenharias, Física, Matemática e Arquitetura).</li>
              <li><strong>Piracicaba:</strong> Famoso pela ESALQ (Ciências Agrárias).</li>
              <li><strong>Outros campi:</strong> Bauru, Lorena, Pirassununga (FZEA) e Santos.</li>
            </ul>
          </div>
        </div>
      </Section>

      <div className="w-full h-px bg-gray-100 my-10"></div>

      <Section title="Como entrar na USP?" icon={LogIn}>
        <p className="mb-4">Para estudar na USP, você tem três caminhos principais:</p>
        <ul className="list-disc pl-5 space-y-4">
          <li>
            <strong>FUVEST (Vestibular Próprio):</strong> É a forma de ingresso mais tradicional. Trata-se de um vestibular de duas fases bastante rigoroso e concorrido que seleciona a maior parte dos alunos.
          </li>
          <li>
            <strong>ENEM USP:</strong> A USP destina milhares de vagas para ingressantes através do ENEM. Para isso, os candidatos usam a nota do exame através de um sistema próprio da USP (não usa mais o SISU do governo federal).
          </li>
          <li>
            <strong>Provão Paulista:</strong> Uma nova forma de ingresso direto, exclusiva para alunos que estão concluindo o Ensino Médio em escolas públicas (municipais, estaduais ou federais) do estado de São Paulo e de outros estados do Brasil.
          </li>
          <li>
            <strong>Olimpíadas Científicas:</strong> Vagas adicionais para estudantes que foram premiados em grandes olimpíadas de conhecimento (Matemática, Física, Robótica, etc).
          </li>
        </ul>
      </Section>

      <div className="w-full h-px bg-gray-100 my-10"></div>

      <Section title="Cursos da USP" icon={BookOpen}>
        <p className="mb-4">A USP oferece impressionantes <strong>mais de 300 cursos de graduação</strong>, cobrindo praticamente todas as profissões que você puder imaginar!</p>
        <p>Entre eles estão os tradicionais: Medicina, Engenharias de todos os tipos, Direito, Administração, Psicologia, Pedagogia, Letras, Física, Ciência da Computação, Arquitetura, Odontologia e centenas de outros. A disponibilidade depende de qual campus você quer estudar.</p>
      </Section>

      <div className="w-full h-px bg-gray-100 my-10"></div>

      <Section title="Acessibilidade" icon={Accessibility}>
        <p>A universidade conta com o programa <strong>USP Legal (Programa de Inclusão e Acessibilidade da USP)</strong>, vinculado à Pró-Reitoria de Inclusão e Pertencimento (PRIP).</p>
        <ul className="list-disc pl-5 mt-4 space-y-2">
          <li><strong>Mobilidade:</strong> O campus Butantã oferece transporte circular gratuito (alguns adaptados). Os prédios vêm passando por adequações contínuas para oferecer rampas e elevadores, embora existam desafios logísticos em edifícios tombados pelo patrimônio histórico.</li>
          <li><strong>Apoio aos alunos:</strong> O programa oferece mapeamento de necessidades, softwares de leitura (para alunos com deficiência visual), material em braille e, recentemente, maior esforço na inclusão de intérpretes de Libras nas salas de aula.</li>
          <li><strong>Alojamento:</strong> A USP possui cotas de acessibilidade e prioridade nas moradias estudantis (CRUSP) para alunos com deficiência.</li>
        </ul>
      </Section>

    </UniversityLayout>
  )
}
