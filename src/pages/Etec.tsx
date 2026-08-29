import React from 'react'
import { UniversityLayout, Section } from '@components/layout/UniversityLayout'
import { Info, HelpCircle, BookOpen, Clock, Accessibility } from 'lucide-react'

export function Etec() {
  return (
    <UniversityLayout 
      title="ETEC" 
      mainImage="https://bkpsitecpsnew.blob.core.windows.net/uploadsitecps/sites/1/2026/06/Etec-Pq-Juventude_Vestibulinho_fotog-Roberto-Sungi-70-scaled.jpg"
      backHref="/curso-tecnico"
      backLabel="Voltar para Curso Técnico"
    >
      <Section title="O que é ETEC?" icon={Info}>
        <p>
          As <strong>Escolas Técnicas Estaduais (ETECs)</strong> são instituições de ensino administradas pelo Centro Paula Souza que oferecem ensino médio e cursos técnicos GRATUITOS. São mais de 228 Escolas Técnicas espalhadas pelo estado de São Paulo.
        </p>
        <p>
          Você pode localizar uma unidade mais próxima da sua casa <a href="https://www.cps.sp.gov.br/etec/etecs/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">AQUI</a>.
        </p>
      </Section>

      <Section title="Gratuidade" icon={HelpCircle}>
        <p>
          Estudar em uma ETEC é totalmente gratuito. Qualquer pessoa pode fazer a prova para entrar (o chamado <strong>Vestibulinho</strong>) e ter acesso a um ensino gratuito de qualidade! Para saber mais sobre onde encontrar uma unidade e quais cursos elas oferecem, <a href="https://www.vestibulinhoetec.com.br/unidades-cursos/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">clique aqui</a>.
        </p>
        <p className="mt-4 font-bold">Para conseguir entrar é necessário:</p>
        <ul className="list-decimal pl-5 mt-2 space-y-1">
          <li>Fazer a inscrição <a href="https://www.vestibulinhoetec.com.br/home/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">neste link</a></li>
          <li>Fazer a prova no local e horário informados</li>
          <li>Acompanhar o resultado no site oficial</li>
          <li>Fazer a matrícula (inscrição) na secretaria da unidade</li>
          <li>Começar a estudar!</li>
        </ul>
      </Section>

      <Section title="Quais cursos posso fazer?" icon={BookOpen}>
        <p>
          A ETEC possui vários cursos de diversas áreas, incluindo o ensino médio em período integral:
        </p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>Ensino Médio com Habilitação Profissional de Técnico em diversas áreas.</li>
          <li>Os cursos técnicos vão de <strong>Canto</strong> a <strong>Veterinária</strong>.</li>
        </ul>
        <p className="mt-4">
          <a href="https://www.vestibulinhoetec.com.br/unidades-cursos/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">Veja todos os cursos aqui!</a>
        </p>
      </Section>

      <Section title="Quando fazer?" icon={Clock}>
        <p>
          Você pode optar por fazer junto com o ensino médio, ou depois, quando você quiser, pois <strong>não há limite máximo de idade</strong>.
        </p>
        <p className="mt-2">
          É mais uma questão do que é o ideal para a sua realidade. Por exemplo:
        </p>
        <ul className="space-y-2 mt-4">
          <li>Para um aluno de ensino médio que trabalha durante a semana, talvez fazer após se formar seja a melhor opção.</li>
          <li>Para um aluno de ensino médio que não possui outros compromissos além da escola, fazer o ensino técnico junto com o ensino médio pode ser uma ótima escolha.</li>
        </ul>
      </Section>

      <Section title="Acessibilidade" icon={Accessibility}>
        <p>
          As ETECs possuem diversas unidades, cada uma com uma estrutura diferente. Todas as unidades trabalham continuamente para que possam receber todos os alunos, buscando garantir a <strong>acessibilidade de pessoas com deficiência ou mobilidade reduzida</strong>.
        </p>
      </Section>
    </UniversityLayout>
  )
}
