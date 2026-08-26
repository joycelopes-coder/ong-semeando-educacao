import React, { useEffect } from 'react'
import { UniversityLayout, Section } from '../../components/layout/UniversityLayout'
import { MapPin, LogIn, BookOpen, Accessibility } from 'lucide-react'

export function UFSCAR() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <UniversityLayout 
      title="UFSCAR" 
      mainImage="/universidades/image2.png" 
    >
      <Section title="Sobre a UFSCAR">
        <p>A Universidade Federal de São Carlos (UFSCar) foi fundada em 1968 e se destaca como uma das principais instituições federais de ensino superior do país. Conhecida por sua excelência em pesquisa e forte viés em inovação e tecnologia, a UFSCar figura constantemente nos melhores rankings universitários nacionais e internacionais.</p>
      </Section>

      <div className="w-full h-px bg-gray-100 my-10"></div>

      <Section title="Onde fica a UFSCAR?" icon={MapPin}>
        <p className="mb-4">A universidade não fica apenas em São Carlos! Ela possui quatro campi espalhados pelo interior do estado de São Paulo:</p>
        <ul className="list-disc pl-5 mt-4 space-y-2">
          <li><strong>Campus São Carlos:</strong> O campus sede e mais antigo, localizado na cidade de São Carlos.</li>
          <li><strong>Campus Araras:</strong> Focado predominantemente nas áreas de ciências agrárias e biológicas.</li>
          <li><strong>Campus Sorocaba:</strong> Inaugurado durante o processo de expansão das federais, foca em tecnologia, meio ambiente e ciências humanas.</li>
          <li><strong>Campus Lagoa do Sino (Buri):</strong> O mais novo, construído com foco em segurança alimentar, agricultura familiar e desenvolvimento sustentável.</li>
        </ul>
      </Section>

      <div className="w-full h-px bg-gray-100 my-10"></div>

      <Section title="Como entrar na UFSCAR?" icon={LogIn}>
        <p>O ingresso para a UFSCar é feito **exclusivamente através do Exame Nacional do Ensino Médio (Enem)**, utilizando o Sistema de Seleção Unificada (Sisu).</p>
        <p className="mt-4">Todos os anos, a universidade destina 100% de suas vagas regulares para o Sisu, que ocorre no início do ano. A universidade também cumpre estritamente a Lei de Cotas, garantindo 50% das vagas para alunos oriundos de escolas públicas (incluindo critérios de renda, cor e estudantes com deficiência).</p>
      </Section>

      <div className="w-full h-px bg-gray-100 my-10"></div>

      <Section title="Cursos da UFSCAR" icon={BookOpen}>
        <p className="mb-4">A UFSCar oferece mais de 60 opções de cursos de graduação distribuídos entre os seus 4 campi, abrangendo todas as áreas do conhecimento (Exatas, Humanas e Biológicas). Alguns destaques incluem:</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
          <div>
            <h4 className="font-bold text-primary mb-2">São Carlos</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>Engenharias (Mecânica, Materiais, Computação, Civil, Química, etc.)</li>
              <li>Ciência da Computação</li>
              <li>Fisioterapia e Medicina</li>
              <li>Psicologia, Pedagogia e Ciências Sociais</li>
              <li>Física, Matemática, Química</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-primary mb-2">Outros Campi</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Araras:</strong> Agronomia, Biotecnologia, Química.</li>
              <li><strong>Sorocaba:</strong> Engenharia de Produção, Florestal, Ciências Biológicas, Turismo, Economia.</li>
              <li><strong>Lagoa do Sino:</strong> Engenharia Agronômica, Engenharia Ambiental, Biologia, Administração.</li>
            </ul>
          </div>
        </div>
      </Section>

      <div className="w-full h-px bg-gray-100 my-10"></div>

      <Section title="Acessibilidade" icon={Accessibility}>
        <p>A UFSCar conta com a **Secretaria de Ações Afirmativas, Diversidade e Equidade (SAADE)**, que atua para garantir a inclusão e permanência de estudantes com deficiência.</p>
        <ul className="list-disc pl-5 mt-4 space-y-2">
          <li><strong>Adaptação:</strong> Boa parte de seus prédios são adaptados com rampas, elevadores e piso tátil, embora prédios muito antigos (especialmente em São Carlos) estejam em constante modernização.</li>
          <li><strong>Apoio Pedagógico:</strong> O Núcleo de Acessibilidade da UFSCar oferece suporte com intérpretes de Libras, adaptação de materiais didáticos para o braille ou formatos ampliados, e monitores de apoio para estudantes que precisam de ajuda em sala de aula ou nos laboratórios.</li>
        </ul>
      </Section>

    </UniversityLayout>
  )
}
