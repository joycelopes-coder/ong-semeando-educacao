import React from 'react'
import { UniversityLayout, Section } from '@components/layout/UniversityLayout'
import { Info, HelpCircle, BookOpen, Clock, Accessibility } from 'lucide-react'

export function Senai() {
  return (
    <UniversityLayout 
      title="SENAI" 
      mainImage="https://upload.wikimedia.org/wikipedia/commons/f/fe/Predio_da_FIESP%2C_CIESP%2CSESI_e_SENAI_na_Av_Paulista_-_Sao_Paulo_SP_-_panoramio.jpg"
      backHref="/curso-tecnico"
      backLabel="Voltar para Curso Técnico"
    >
      <Section title="O que é o SENAI?" icon={Info}>
        <p>
          O <strong>SENAI</strong> (Serviço Nacional de Aprendizagem Industrial) é um dos cinco maiores complexos de educação profissional do mundo e o maior da América Latina. Seus cursos formam profissionais para 28 áreas da indústria brasileira, desde a iniciação profissional até a graduação e pós-graduação tecnológica.
        </p>
        <p>
          Existem 738 unidades operacionais e 320 kits didáticos de educação profissional (que funcionam como oficinas móveis) em 25 diferentes ocupações. É o maior complexo privado de educação profissional da América Latina. Desde sua criação, em 1942, já formou mais de 73 milhões de trabalhadores em 28 áreas da indústria.
        </p>
        <p>
          O SENAI está presente em todo o território brasileiro, oito países e três organismos internacionais. Você pode localizar uma unidade mais próxima da sua casa <a href="https://www.portaldaindustria.com.br/senai/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">AQUI</a>.
        </p>
      </Section>

      <Section title="Gratuidade" icon={HelpCircle}>
        <p>
          No ano de 2019, o SENAI destinou dois terços (66,66%) do que eles intitulam “Receita Líquida de Contribuição Compulsória Geral” para ofertas de vagas gratuitas, tanto para os cursos técnicos como para os de formação inicial e/ou continuada.
        </p>
        <p>
          Para se inscrever em um dos cursos gratuitos do Senai, o aluno tem 2 opções: 
        </p>
        <ul>
          <li><strong>Método tradicional:</strong> O aspirante entra em contato com o Fale Conosco Senai através do número 0800 48 1212, descobre a sede mais próxima, se dirige a ela e solicita a inscrição em um dos cursos que desejar.</li>
          <li><strong>Método online:</strong> Feita pelo computador, notebook, celular ou tablet, como preferir. Para isso basta acessar o site do Senai e fazer o cadastro com as informações pessoais.</li>
        </ul>
        <p>
          No final da página oficial Portal da Transparência e Gratuidade Senai, o interessado pode acessar a transparência nos departamentos por região. Assim sendo, ele escolhe a de seu estado, busca o curso que lhe é conveniente e pronto! <a href="http://www.portaldaindustria.com.br/senai/canais/transparencia/gratuidade/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">Veja aqui</a>.
        </p>
      </Section>

      <Section title="Quais cursos posso fazer?" icon={BookOpen}>
        <p>
          O SENAI conta com inúmeros cursos de qualificação profissional, técnico, graduação e pós-graduação nas áreas:
        </p>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-4">
          <li>Mecatrônica</li>
          <li>Eletroeletrônica</li>
          <li>Energia renovável</li>
          <li>Meio ambiente</li>
          <li>Polímeros</li>
          <li>Química</li>
          <li>Refrigeração e climatização</li>
          <li>Segurança no trabalho</li>
          <li>Telecomunicações</li>
          <li>Hardware e Software</li>
          <li>Transporte ferroviário</li>
        </ul>
        <p className="mt-4">
          Entre outros. <a href="https://www.portaldaindustria.com.br/senai/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">Veja todos os cursos aqui!</a>
        </p>
      </Section>

      <Section title="Quando fazer?" icon={Clock}>
        <p>
          Você pode optar por fazer junto com o ensino médio, ou depois, quando você quiser, pois não há limite máximo de idade. É mais uma questão do que é o ideal para sua realidade. Por exemplo:
        </p>
        <ul className="space-y-2 mt-4">
          <li>Para um aluno de ensino médio que trabalha durante a semana, fazer após se formar seja a melhor opção.</li>
          <li>Para um aluno de ensino médio que não possui outros compromissos a não ser a escola, fazer o ensino técnico junto com o ensino médio pode ser uma boa opção.</li>
        </ul>
      </Section>

      <Section title="Acessibilidade" icon={Accessibility}>
        <p>
          As escolas do SENAI são preparadas e equipadas para receber alunos com deficiência e contam com cursos de educação profissional adaptados às necessidades de todos. Segundo o presidente da CNI, os profissionais da instituição são treinados para lidar com cada especificidade, principalmente física, intelectual, psicossocial, auditiva e visual. 
        </p>
        <blockquote className="border-l-4 border-primary pl-4 italic text-gray-700 my-4 bg-gray-50 py-2 pr-4 rounded-r-lg">
          “Isso é possível porque realizamos o Programa SENAI de Ações Inclusivas, o PSAI, que tem por objetivo promover o acesso, a inclusão e a formação profissional de pessoas em situação de vulnerabilidade pessoal e social. O PSAI atende a diferentes grupos com o objetivo de promover condições de equidade, que respeitem a diversidade do ser humano”<br/><span className="text-sm font-semibold not-italic mt-2 block">— Robson Braga de Andrade, presidente da Confederação Nacional da Indústria (CNI).</span>
        </blockquote>
        <blockquote className="border-l-4 border-primary pl-4 italic text-gray-700 my-4 bg-gray-50 py-2 pr-4 rounded-r-lg">
          "Já capacitamos quase 200 mil pessoas com deficiência”<br/><span className="text-sm font-semibold not-italic mt-2 block">— Rafael Lucchesi, diretor-geral do SENAI</span>
        </blockquote>
      </Section>
    </UniversityLayout>
  )
}
