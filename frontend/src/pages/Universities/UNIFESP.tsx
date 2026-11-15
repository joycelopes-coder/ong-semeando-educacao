import React, { useEffect } from 'react'
import { UniversityLayout, Section } from '../../components/layout/UniversityLayout'
import { MapPin, LogIn, Accessibility } from 'lucide-react'

export function UNIFESP() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <UniversityLayout 
      title="UNIFESP" 
      mainImage="/universidades/image3.jpg" // Placeholder for banner
    >
      <Section title="Sobre a UNIFESP">
        <p>Teve inicio em 1933 e oficializada a federalização em 1956, com vários campus espalhados pelo estado, a Universidade Federal de São Paulo é referência em diversos cursos de graduação e pós graduação.</p>
      </Section>

      <div className="w-full h-px bg-gray-100 my-10"></div>

      <Section title="Onde fica a UNIFESP?" icon={MapPin}>
        <p className="mb-6 font-medium text-lg">Há 7 campus:</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h4 className="font-bold text-primary mb-2">Em São Paulo</h4>
            <p className="text-sm font-semibold text-gray-700">Escola Paulista de Medicina</p>
            <ul className="list-disc pl-5 mb-4 text-sm">
              <li>Medicina</li>
              <li>Biomedicina</li>
              <li>Fonoaudiologia</li>
              <li>Tecnologia Oftálmica</li>
              <li>Tecnologia em Radiologia</li>
              <li>Tecnologia em Informática em Saúde</li>
            </ul>
            <p className="text-sm font-semibold text-gray-700">Escola Paulista de Enfermagem</p>
            <ul className="list-disc pl-5 mb-4 text-sm">
              <li>Enfermagem</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-primary mb-2">Na Baixada Santista</h4>
            <p className="text-sm font-semibold text-gray-700">Instituto de Saúde e Sociedade</p>
            <ul className="list-disc pl-5 mb-4 text-sm">
              <li>Fisioterapia</li>
              <li>Nutrição</li>
              <li>Psicologia</li>
              <li>Serviço Social</li>
              <li>Terapia Ocupacional</li>
              <li>Educação Física</li>
            </ul>
            <p className="text-sm font-semibold text-gray-700">Instituto do Mar</p>
            <ul className="list-disc pl-5 mb-4 text-sm">
              <li>Bacharelado Interdisciplinar em Ciência e Tecnologia do Mar</li>
              <li>Engenharia Ambiental</li>
              <li>Engenharia de Petróleo</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-primary mb-2">Em Diadema</h4>
            <p className="text-sm font-semibold text-gray-700">Instituto de Ciências Ambientais, Químicas e Farmacêuticas</p>
            <ul className="list-disc pl-5 mb-4 text-sm">
              <li>Ciências Ambientais</li>
              <li>Ciências Biológicas</li>
              <li>Engenharia Química</li>
              <li>Farmácia</li>
              <li>Ciências-Licenciatura</li>
              <li>Química</li>
              <li>Química Industrial</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-primary mb-2">Em Guarulhos</h4>
            <p className="text-sm font-semibold text-gray-700">Escola Paulista de Política, Economia e Negócios</p>
            <ul className="list-disc pl-5 mb-4 text-sm">
              <li>Administração</li>
              <li>Ciências Atuariais</li>
              <li>Ciências Contábeis</li>
              <li>Ciências Econômicas</li>
              <li>Direito</li>
              <li>Relações Internacionais</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-primary mb-2">Em São José dos Campos</h4>
            <p className="text-sm font-semibold text-gray-700">Instituto de Ciência e Tecnologia</p>
            <ul className="list-disc pl-5 mb-4 text-sm">
              <li>Bacharelado em Ciência e Tecnologia</li>
              <li>Bacharelado em Matemática Computacional</li>
              <li>Engenharia Biomédica</li>
              <li>Bacharelado em Biotecnologia</li>
              <li>Bacharelado em Ciência da Computação</li>
              <li>Engenharia de Materiais</li>
              <li>Engenharia de Computação</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-primary mb-2">Em Osasco</h4>
            <p className="text-sm font-semibold text-gray-700">Escola de Filosofia, Letras e Ciências Humanas</p>
            <ul className="list-disc pl-5 mb-4 text-sm">
              <li>Ciências Sociais</li>
              <li>História</li>
              <li>História da Arte</li>
              <li>Letras</li>
              <li>Filosofia</li>
              <li>Pedagogia</li>
            </ul>
            
            <h4 className="font-bold text-primary mt-6 mb-2">Na Zona Leste</h4>
            <p className="text-sm font-semibold text-gray-700">Instituto das Cidades</p>
            <ul className="list-disc pl-5 text-sm">
              <li>Bacharelado em Geografia</li>
              <li>Licenciatura em Geografia</li>
            </ul>
          </div>
        </div>
      </Section>

      <div className="w-full h-px bg-gray-100 my-10"></div>

      <Section title="Como entrar?" icon={LogIn}>
        <p>Na UNIFESP, por ser uma universidade federal você pode entrar pelo ENEM, só que para alguns cursos o ingresso é por vestibular misto, ou seja, com a nota do Enem juntamente com um vestibular próprio da universidade.</p>
        <p className="mt-4">
          Para entender melhor, entre no <a href="https://www.unifesp.br/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">site da universidade</a>.
        </p>
      </Section>

      <div className="w-full h-px bg-gray-100 my-10"></div>

      <Section title="Acessibilidade" icon={Accessibility}>
        <p>Por ser uma universidade antiga os prédios e instalações não foram projetados pensando na inclusão, mas foram implantadas medidas e adaptações para atender a todos.</p>
        <p className="mt-4 font-medium text-amber-800 bg-amber-50 p-4 rounded-lg border border-amber-100">
          Lembrando que caso você precise de alguma adaptação ou auxílio durante as aulas, as universidades públicas oferecem apoio e pessoas que irão te ajudar.
        </p>
      </Section>

    </UniversityLayout>
  )
}
