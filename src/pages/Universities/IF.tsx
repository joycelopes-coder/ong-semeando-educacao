import React, { useEffect } from 'react'
import { UniversityLayout, Section } from '../../components/layout/UniversityLayout'
import { MapPin, LogIn, Accessibility } from 'lucide-react'

export function IF() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <UniversityLayout 
      title="Instituto Federal (IF)" 
      mainImage="/universidades/image4.jpg" 
    >
      <Section title="Sobre o IF">
        <p>Os Institutos Federais são instituições que possuem várias modalidades de ensino e estão espalhadas pelo Brasil inteiro. Eles oferecem o curso técnico integrado ao ensino médio (são aqueles em que o estudante cursa o Ensino Médio e o Ensino Técnico no IFSP), cursos técnicos, graduações e pós-graduações.</p>
      </Section>

      <div className="w-full h-px bg-gray-100 my-10"></div>

      <Section title="Onde fica o IF?" icon={MapPin}>
        <p className="mb-4 font-bold text-lg text-primary">Em todo Brasil!</p>
        <p className="mb-6">O IFSP possui mais de 40 mil alunos matriculados nos campus distribuídos somente no estado de São Paulo.</p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm text-gray-700">
          <div>Campus Araraquara</div>
          <div>Campus Avaré</div>
          <div>Campus Barretos</div>
          <div>Campus Birigui</div>
          <div>Campus Boituva</div>
          <div>Campus Bragança Paulista</div>
          <div>Campus Campinas</div>
          <div>Campus Campos do Jordão</div>
          <div>Campus Capivari</div>
          <div>Campus Caraguatatuba</div>
          <div>Campus Catanduva</div>
          <div>Campus Cubatão</div>
          <div>Campus Guarulhos</div>
          <div>Campus Hortolândia</div>
          <div>Campus Ilha Solteira</div>
          <div>Campus Itapetininga</div>
          <div>Campus Itaquaquecetuba</div>
          <div>Campus Jacareí</div>
          <div>Campus Jundiaí</div>
          <div>Campus Matão</div>
          <div>Campus Piracicaba</div>
          <div>Campus Presidente Epitácio</div>
          <div>Campus Registro</div>
          <div>Campus Salto</div>
          <div>Campus São Carlos</div>
          <div>Campus São Miguel Paulista</div>
          <div>Campus São Paulo</div>
          <div>Campus São Roque</div>
          <div>Campus Sertãozinho</div>
          <div>Campus Sorocaba</div>
          <div>Campus Suzano</div>
          <div>Campus Tupã</div>
          <div>Campus Votuporanga</div>
        </div>
      </Section>

      <div className="w-full h-px bg-gray-100 my-10"></div>

      <Section title="Como entrar no IF?" icon={LogIn}>
        <p>Para entrar no curso técnico integrado ao ensino médio (concomitantes) e no curso técnico sozinho (subsequentes) é preciso se inscrever no site e realizar uma prova para entrar de acordo com o edital vigente.</p>
        <p className="mt-4">Já para o ensino superior é preciso realizar o ENEM e se inscrever pelo SISU.</p>
      </Section>

      <div className="w-full h-px bg-gray-100 my-10"></div>

      <Section title="Acessibilidade" icon={Accessibility}>
        <p>Como há muitos campus, cada um possui sua particularidade, mas como premissa, todos possuem adequações para receber todos e todas.</p>
      </Section>

    </UniversityLayout>
  )
}
