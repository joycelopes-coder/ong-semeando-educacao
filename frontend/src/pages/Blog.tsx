import React, { useEffect } from 'react'
import { motion } from 'framer-motion'

export function Blog() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // Dados mockados para os posts do blog
  const posts = [
    {
      id: 1,
      title: "Como se preparar para o Vestibulinho ETEC e garantir sua vaga",
      subtitle: "Dicas de Estudo",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "A importância do curso técnico na formação profissional dos jovens",
      subtitle: "Mercado de Trabalho",
      image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "As profissões do futuro: O que estudar hoje para estar pronto amanhã?",
      subtitle: "Tecnologia & Inovação",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 4,
      title: "Entenda a diferença entre ENEM, Provão Paulista e vestibulares tradicionais",
      subtitle: "Guia do Estudante",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 5,
      title: "O impacto das ações voluntárias na construção do seu currículo",
      subtitle: "Voluntariado",
      image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 6,
      title: "Como organizar seu cronograma de estudos para o último ano do Ensino Médio",
      subtitle: "Organização",
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ]

  return (
    <main className="w-full flex flex-col flex-1 pb-20 bg-gray-50/50 pt-32">
      <div className="max-w-7xl mx-auto px-6 w-full mb-12">
        <motion.h1 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-5xl md:text-6xl font-extrabold text-primary mb-12"
        >
          News.
        </motion.h1>

        {/* 
          Grid de 2 colunas.
          md:grid-cols-[2fr_3fr] faz com que a coluna da direita seja maior que a da esquerda.
          As linhas (rows) são dinâmicas e criadas automaticamente conforme o número de posts.
        */}
        <div className="grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-8 md:gap-12 auto-rows-max">
          {posts.map((post, index) => (
            <motion.article 
              key={post.id}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: (index % 2) * 0.1 }}
              className="flex flex-col group cursor-pointer"
            >
              {/* Imagem */}
              <div className="w-full aspect-[4/3] rounded-3xl overflow-hidden mb-6 bg-gray-200">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
              </div>

              {/* Textos em coluna */}
              <div className="flex flex-col flex-1">
                <span className="text-sm font-bold text-tertiary mb-3 uppercase tracking-wider">
                  {post.subtitle}
                </span>
                <h2 className="text-2xl font-bold text-gray-900 leading-snug group-hover:text-primary transition-colors">
                  {post.title}
                </h2>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </main>
  )
}
