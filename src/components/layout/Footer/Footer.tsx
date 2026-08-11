import React from 'react'
import { FaInstagram, FaYoutube, FaTiktok, FaFacebook, FaLinkedin } from 'react-icons/fa'
import { ArrowRight } from 'lucide-react'

export function Footer() {
  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Quem Somos', href: '#quem-somos' },
    { label: 'Universidades', href: '#universidades' },
    { label: 'Curso Técnico', href: '#curso-tecnico' },
    { label: 'Oportunidades', href: '#oportunidades' },
    { label: 'Blog', href: '#blog' },
  ]

  const instLinks = [
    { label: 'Sobre nós', href: '#sobre-nos' },
    { label: 'Voluntários', href: '#voluntarios' },
    { label: 'Palestras realizadas', href: '#palestras' },
    { label: 'Apoiadores', href: '#apoiadores' },
    { label: 'Contato', href: '#contato' },
  ]

  return (
    <footer className="relative bg-white border-t border-gray-100 mt-20 pt-16 overflow-hidden">
      {/* Decorative Branch (Right Edge) */}
      <div className="absolute right-0 bottom-16 translate-x-[30%] w-64 md:w-96 pointer-events-none opacity-80 z-0">
        <img 
          src="/footer-branch.png" 
          alt="Ramo decorativo" 
          className="w-full h-full object-contain mix-blend-multiply" 
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 mb-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          
          {/* Logo e Info */}
          <div className="flex flex-col gap-6 md:w-1/4">
            <img src="/logo.png" alt="Semeando Educação Logo" className="w-48 object-contain" />
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
                <a key={link.label} href={link.href} className="text-sm text-gray-500 hover:text-primary transition-colors">
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Institucional */}
          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-gray-800">Institucional</h3>
            <div className="flex flex-col gap-3">
              {instLinks.map((link) => (
                <a key={link.label} href={link.href} className="text-sm text-gray-500 hover:text-primary transition-colors">
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Redes Sociais */}
          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-gray-800">Redes Sociais</h3>
            <div className="flex flex-col gap-3">
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
      <div className="relative z-20 bg-primary py-4 text-center px-4 w-full">
        <p className="text-white text-sm font-medium">
          {`© ${new Date().getFullYear()} Semeando Educação. Todos os direitos reservados.`}
        </p>
      </div>
    </footer>
  )
}
