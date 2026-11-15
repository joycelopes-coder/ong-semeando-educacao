import React, { useRef, useState } from 'react'
import { FaInstagram, FaYoutube, FaTiktok, FaFacebook, FaLinkedin } from 'react-icons/fa'
import { ArrowRight } from 'lucide-react'
import { useScroll, useTransform, motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export function Footer() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle')
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
        <footer className="relative bg-white border-t border-gray-100 pt-12 md:pt-16 overflow-hidden flex flex-col h-[100dvh] md:h-auto">
          {/* Video Background (Mobile Only) */}
          <div className="absolute inset-0 w-full h-full z-0 md:hidden">
            <video 
              autoPlay 
              loop 
              muted 
              playsInline 
              className="w-full h-full object-cover"
            >
              <source src="./footer-bg-mobile.mp4" type="video/mp4" />
            </video>
            {/* Overlay para manter o texto preto legível sobre o vídeo */}
            <div className="absolute inset-0 bg-white/70 backdrop-blur-[2px]"></div>
          </div>

          {/* Decorative Branch (Right Edge) */}
          <div className="hidden md:block absolute right-0 bottom-16 translate-x-[30%] w-64 md:w-96 pointer-events-none opacity-80 z-0">
            <img 
              src="./footer-branch.png" 
              alt="Ramo decorativo" 
              className="w-full h-full object-contain mix-blend-multiply" 
            />
          </div>

          <div className="max-w-7xl mx-auto px-6 mb-12 relative z-10 flex-1 flex flex-col justify-center w-full">
            <div className="flex flex-col md:flex-row justify-between items-center md:items-start text-center md:text-left gap-12">
              
              {/* Logo e Info */}
              <div className="flex flex-col items-center md:items-start gap-6 md:w-1/4">
                <img src="./logo.png" alt="Semeando Educação Logo" className="w-48 object-contain" />
                <div className="text-sm font-bold text-gray-800">
                  <p>ONG Semeando Educação®</p>
                  <p>CNPJ: 46.984.102/0001-90</p>
                </div>
              </div>

              {/* Navegação */}
              <div className="hidden md:flex flex-col items-center md:items-start gap-4">
                <h3 className="font-bold text-gray-800">Navegação</h3>
                <div className="flex flex-col items-center md:items-start gap-3">
                  {navLinks.map((link) => (
                    <Link key={link.label} to={link.href} className="text-sm text-gray-500 hover:text-primary transition-colors">
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Institucional */}
              <div className="hidden md:flex flex-col items-center md:items-start gap-4">
                <h3 className="font-bold text-gray-800">Institucional</h3>
                <div className="flex flex-col items-center md:items-start gap-3">
                  {instLinks.map((link) => (
                    <Link key={link.label} to={link.href} className="text-sm text-gray-500 hover:text-primary transition-colors">
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Redes Sociais */}
              <div className="flex flex-col items-center md:items-start gap-4">
                <h3 className="font-bold text-gray-800">Redes Sociais</h3>
                <div className="flex flex-row md:flex-col items-center justify-center md:justify-start gap-6 md:gap-3">
                  <a href="#" className="text-primary hover:text-primary-hover transition-colors"><FaInstagram size={22} /></a>
                  <a href="#" className="text-primary hover:text-primary-hover transition-colors"><FaYoutube size={22} /></a>
                  <a href="#" className="text-primary hover:text-primary-hover transition-colors"><FaTiktok size={22} /></a>
                  <a href="#" className="text-primary hover:text-primary-hover transition-colors"><FaFacebook size={22} /></a>
                  <a href="#" className="text-primary hover:text-primary-hover transition-colors"><FaLinkedin size={22} /></a>
                </div>
              </div>

              {/* Vertical Divider (hidden on mobile) */}
              <div className="hidden md:block w-px h-32 bg-gray-200 mt-2"></div>

              {/* CTA / Newsletter */}
              <div className="flex flex-col items-center md:items-start gap-4 md:w-1/4 w-full">
                <h3 className="font-bold text-lg text-gray-800 leading-tight">Fique por dentro das novidades</h3>
                
                {status === 'success' ? (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex flex-col items-center md:items-start gap-1 text-primary text-center md:text-left h-[48px] justify-center"
                  >
                    <span className="font-bold text-lg leading-none">Obrigado!</span>
                    <span className="text-sm font-medium leading-none">Sua inscrição foi recebida com sucesso!</span>
                  </motion.div>
                ) : (
                  <form 
                    className="w-full relative flex items-center max-w-[280px]"
                    onSubmit={(e) => {
                      e.preventDefault();
                      setStatus('loading');
                      setTimeout(() => setStatus('success'), 1500); // Simula o tempo de envio
                    }}
                  >
                    <input 
                      type="email" 
                      required
                      placeholder="Endereço de e-mail" 
                      className="w-full bg-gray-100 border-none rounded-lg py-3 pl-4 pr-14 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-primary transition-shadow placeholder:text-gray-400"
                      disabled={status === 'loading'}
                    />
                    <button 
                      type="submit"
                      disabled={status === 'loading'}
                      className="absolute right-1 top-1 bottom-1 aspect-square bg-primary hover:bg-primary-hover text-white rounded-md flex items-center justify-center transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {status === 'loading' ? (
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      ) : (
                        <ArrowRight size={18} />
                      )}
                    </button>
                  </form>
                )}
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
