import React, { useRef } from 'react'
import { FaInstagram, FaYoutube, FaTiktok, FaFacebook, FaLinkedin } from 'react-icons/fa'
import { ArrowRight } from 'lucide-react'
import { useScroll, useTransform, motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export function Footer() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  })

  // Transforma o Y para criar o efeito de "revelar" (parallax estacionário)
  const y = useTransform(scrollYProgress, [0, 1], ["-100%", "0%"])
  
  // Transforma a opacidade da sombra: 1 (bem escura) no começo, indo até 0 no final
  const shadowOpacity = useTransform(scrollYProgress, [0, 1], [0.6, 0])

  const navLinks = [
    { label: 'Início', href: '/' },
    { label: 'Quem Somos', href: '/quem-somos' },
    { label: 'Universidades', href: '/universidades' },
    { label: 'Curso Técnico', href: '/curso-tecnico' },
    { label: 'Oportunidades', href: '/#oportunidades' },
    { label: 'Blog', href: '/blog' },
  ]

  const instLinks = [
    { label: 'Voluntários', href: '/voluntarios' },
    { label: 'Palestras realizadas', href: '/palestras' },
    { label: 'Semeando na Mídia', href: '/midia' },
    { label: 'Contato', href: '/#contato' },
  ]

  return (
    <div ref={containerRef} className="relative w-full overflow-hidden mt-20" style={{ height: "auto" }}>
      {/* Sombra projetada pela página que desaparece conforme o footer é revelado */}
      <motion.div 
        style={{ opacity: shadowOpacity }}
        className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[rgba(0,0,0,0.7)] to-transparent z-50 pointer-events-none"
      />
      
      <motion.div style={{ y }} className="w-full">
        <footer className="relative bg-white border-t border-gray-100 pt-16 overflow-hidden">
          {/* Decorative Branch (Right Edge) */}
          <div className="absolute right-0 bottom-16 translate-x-[30%] w-64 md:w-96 pointer-events-none opacity-80 z-0">
            <img 
              src="./footer-branch.png" 
              alt="Ramo decorativo" 
              className="w-full h-full object-contain mix-blend-multiply" 
            />
          </div>

          <div className="max-w-7xl mx-auto px-6 mb-12 relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-start gap-12">
              
              {/* Logo e Info */}
              <div className="flex flex-col gap-6 md:w-1/4">
                <img src="./logo.png" alt="Semeando Educação Logo" className="w-48 object-contain" />
                <div className="text-sm font-bold text-gray-800">
                  <p>ONG Semeando Educação®</p>
                  <p>CNPJ: 46.984.102/0001-90</p>
                </div>
              </div>

              {/* Navegação */}
              <div className="flex flex-col gap-4">
                <h3 className="font-bold text-gray-800">Navegação</h3>
                <div className="flex flex-col gap-3">
                  {navLinks.map((link) => (
                    <Link key={link.label} to={link.href} className="text-sm text-gray-500 hover:text-primary transition-colors">
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Institucional */}
              <div className="flex flex-col gap-4">
                <h3 className="font-bold text-gray-800">Institucional</h3>
                <div className="flex flex-col gap-3">
                  {instLinks.map((link) => (
                    <Link key={link.label} to={link.href} className="text-sm text-gray-500 hover:text-primary transition-colors">
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Redes Sociais */}
              <div className="flex flex-col items-center gap-4">
                <h3 className="font-bold text-gray-800">Redes Sociais</h3>
                <div className="flex flex-col items-center gap-3">
                  <a href="#" className="text-primary hover:text-primary-hover transition-colors"><FaInstagram size={20} /></a>
                  <a href="#" className="text-primary hover:text-primary-hover transition-colors"><FaYoutube size={20} /></a>
                  <a href="#" className="text-primary hover:text-primary-hover transition-colors"><FaTiktok size={20} /></a>
                  <a href="#" className="text-primary hover:text-primary-hover transition-colors"><FaFacebook size={20} /></a>
                  <a href="#" className="text-primary hover:text-primary-hover transition-colors"><FaLinkedin size={20} /></a>
                </div>
              </div>

              {/* Vertical Divider (hidden on mobile) */}
              <div className="hidden md:block w-px h-32 bg-gray-200 mt-2"></div>

              {/* CTA */}
              <div className="flex flex-col gap-4 md:w-1/4">
                <h3 className="font-bold text-lg text-gray-800 leading-tight">Faça parte dessa<br/>transformação!</h3>
                <button className="bg-primary hover:bg-primary-hover text-white px-6 py-3 rounded-lg flex items-center justify-between gap-4 transition-colors w-fit font-medium text-sm">
                  Quero ser voluntário
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="relative z-20 bg-primary py-4 text-center px-4 w-full flex flex-col items-center justify-center gap-2">
            <p className="text-white text-sm font-medium">
              {`© ${new Date().getFullYear()} Semeando Educação. Todos os direitos reservados.`}
            </p>
            <div className="flex items-center justify-center text-white/80 text-xs font-medium tracking-wide uppercase">
              <span>Desenvolvido por</span>
              <a href="https://luizsant.dev/" target="_blank" rel="noopener noreferrer" className="ml-1 hover:text-white flex items-center gap-2 transition-colors group">
                <span className="underline decoration-white/30 underline-offset-2 group-hover:decoration-white">LUIZ SANT</span>
                <img src="./luizsant-logo.png" alt="Luiz Sant Logo" className="w-5 h-5 object-contain brightness-0 invert opacity-80 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>
          </div>
        </footer>
      </motion.div>
    </div>
  )
}
