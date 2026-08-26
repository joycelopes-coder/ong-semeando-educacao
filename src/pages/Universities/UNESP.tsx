import React, { useEffect } from 'react'
import { UniversityLayout, Section } from '../../components/layout/UniversityLayout'
import { MapPin, LogIn, Accessibility } from 'lucide-react'

export function UNESP() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <UniversityLayout 
      title="UNESP" 
      mainImage="/universidades/image5.png" 
    >
      <Section title="Sobre a UNESP">
        <p>Os mais de 3,7 mil professores garantem sólida formação aos alunos. Mais de 6,7 mil funcionários colaboram para o desenvolvimento das atividades. A Unesp oferece 136 cursos de graduação, com 183 opções de entrada pelo vestibular, que formam, por ano, 5,6 mil novos profissionais.</p>
        <p className="mt-4">Na graduação, aproximadamente 38 mil alunos podem participar de programas especiais de treinamento e realizar atividades extracurriculares. Têm ainda a possibilidade de atuar em empresas juniores, prestando diferentes tipos de serviços, como consultoria, assessoria, elaboração de projetos e pesquisas de opinião.</p>
        <p className="mt-4">Na pós-graduação, quase 14 mil alunos estudam em 149 programas. A Unesp se situa, hoje, entre as mais importantes universidades do Brasil e vem assumindo uma posição cada vez mais significativa em âmbito mundial, especialmente no que se refere à produção de ciência em diferentes áreas do conhecimento.</p>
      </Section>

      <div className="w-full h-px bg-gray-100 my-10"></div>

      <Section title="Onde fica a UNESP?" icon={MapPin}>
        <p className="mb-6">Você vai encontrar pelo menos uma unidade em 24 diferentes cidades espalhadas pelo estado de São Paulo.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
          <div>
            <h4 className="font-bold text-primary">Araçatuba</h4>
            <ul className="list-disc pl-5 mb-4">
              <li>Faculdade de Odontologia</li>
              <li>Faculdade de Medicina Veterinária</li>
            </ul>
            <h4 className="font-bold text-primary">Araraquara</h4>
            <ul className="list-disc pl-5 mb-4">
              <li>Faculdade de Ciências Farmacêuticas</li>
              <li>Faculdade de Ciências e Letras</li>
              <li>Faculdade de Odontologia</li>
              <li>Instituto de Química</li>
            </ul>
            <h4 className="font-bold text-primary">Assis</h4>
            <ul className="list-disc pl-5 mb-4">
              <li>Faculdade de Ciências e Letras</li>
            </ul>
            <h4 className="font-bold text-primary">Bauru</h4>
            <ul className="list-disc pl-5 mb-4">
              <li>Faculdade de Arquitetura, Artes e Comunicação</li>
              <li>Faculdade de Ciências</li>
              <li>Faculdade de Engenharia</li>
            </ul>
            <h4 className="font-bold text-primary">Botucatu</h4>
            <ul className="list-disc pl-5 mb-4">
              <li>Faculdade de Ciências Agronômicas</li>
              <li>Faculdade de Medicina</li>
              <li>Faculdade de Medicina Veterinária e Zootecnia</li>
              <li>Instituto de Biociências</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-primary">Dracena</h4>
            <ul className="list-disc pl-5 mb-4">
              <li>Faculdade de Ciências Agrárias e Tecnológicas</li>
            </ul>
            <h4 className="font-bold text-primary">Franca</h4>
            <ul className="list-disc pl-5 mb-4">
              <li>Faculdade de Ciências Humanas e Sociais</li>
            </ul>
            <h4 className="font-bold text-primary">Guaratinguetá & Ilha Solteira</h4>
            <ul className="list-disc pl-5 mb-4">
              <li>Faculdade de Engenharia</li>
            </ul>
            <h4 className="font-bold text-primary">Itapeva</h4>
            <ul className="list-disc pl-5 mb-4">
              <li>Câmpus Experimental de Itapeva</li>
            </ul>
            <h4 className="font-bold text-primary">Jaboticabal</h4>
            <ul className="list-disc pl-5 mb-4">
              <li>Faculdade de Ciências Agrárias e Veterinárias</li>
            </ul>
            <h4 className="font-bold text-primary">Marília</h4>
            <ul className="list-disc pl-5 mb-4">
              <li>Faculdade de Filosofia e Ciências</li>
            </ul>
            <h4 className="font-bold text-primary">Ourinhos, Presidente Prudente, Registro, Rosana</h4>
            <ul className="list-disc pl-5 mb-4">
              <li>Câmpus e Faculdades diversas</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-primary">Rio Claro</h4>
            <ul className="list-disc pl-5 mb-4">
              <li>Instituto de Biociências</li>
              <li>Instituto de Geociências e Ciências Exatas</li>
            </ul>
            <h4 className="font-bold text-primary">São João da Boa Vista</h4>
            <ul className="list-disc pl-5 mb-4">
              <li>Câmpus Experimental</li>
            </ul>
            <h4 className="font-bold text-primary">São José do Rio Preto</h4>
            <ul className="list-disc pl-5 mb-4">
              <li>Instituto de Biociências, Letras e Ciências Exatas</li>
            </ul>
            <h4 className="font-bold text-primary">São José dos Campos</h4>
            <ul className="list-disc pl-5 mb-4">
              <li>Instituto de Ciência e Tecnologia</li>
            </ul>
            <h4 className="font-bold text-primary">São Paulo</h4>
            <ul className="list-disc pl-5 mb-4">
              <li>Instituto de Artes</li>
              <li>Instituto de Física Teórica</li>
            </ul>
            <h4 className="font-bold text-primary">São Vicente & Sorocaba & Tupã</h4>
            <ul className="list-disc pl-5 mb-4">
              <li>Institutos de Biociências, Mar, e Engenharias</li>
            </ul>
          </div>
        </div>
      </Section>

      <div className="w-full h-px bg-gray-100 my-10"></div>

      <Section title="Como entrar na UNESP?" icon={LogIn}>
        <p>Considerado por especialistas do setor um dos melhores concursos de ingresso ao ensino superior do país, o Vestibular da UNESP é chamado de <strong>VUNESP</strong> e atrai um número crescente de candidatos.</p>
        <p className="mt-4">Na seleção para ingresso, milhares de candidatos disputam as vagas oferecidas anualmente. É necessário acompanhar o edital da VUNESP para as datas corretas.</p>
      </Section>

      <div className="w-full h-px bg-gray-100 my-10"></div>

      <Section title="Acessibilidade" icon={Accessibility}>
        <p>Segundo Vera Capelli, docente da Faculdade de Ciências do câmpus de Bauru: <em>“Já tem garantido em várias unidades a acessibilidade arquitetônica, a biblioteca falada e material em Braile. Os coordenadores e professores de diferentes cursos da Unesp têm tentado fazer, na medida do possível, as adaptações curriculares necessárias para garantir a aprendizagem de todos.”</em></p>
        <p className="mt-4">A portaria da Unesp definiu que cada unidade deve apresentar um plano de ações para a Comissão Permanente de Acessibilidade para implementar políticas de acessibilidade.</p>
      </Section>

    </UniversityLayout>
  )
}
