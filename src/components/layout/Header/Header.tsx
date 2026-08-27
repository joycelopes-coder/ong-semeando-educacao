import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@components/ui/Button'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'

export function Header() {
  const location = useLocation()
  const [hidden, setHidden] = useState(false)
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY <= 100) {
        setHidden(false);
      } else if (currentScrollY > lastScrollY && currentScrollY > 150) {
        setHidden(true);
      } else if (currentScrollY < lastScrollY) {
        setHidden(false);
      }
      
      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const navItems = [
    { label: 'Início', href: '/' },
    { 
      label: 'Quem Somos', 
      href: '/quem-somos',
      subItems: [
        { label: 'Quem Somos', href: '/quem-somos' },
        { label: 'Voluntários', href: '/voluntarios' },
        { label: 'Palestras Realizadas', href: '/palestras' },
        { label: 'Semeando na Mídia', href: '/#midia' },
        { label: 'Apoiadores', href: '/#apoiadores' }
      ]
    },
    { 
      label: 'Universidades', 
      href: '/#universidades',
      subItems: [
        { label: 'UFABC', href: '/universidades/ufabc' },
        { label: 'UNIFESP', href: '/universidades/unifesp' },
        { label: 'IF', href: '/universidades/if' },
        { label: 'UFSCAR', href: '/universidades/ufscar' },
        { label: 'ITA', href: '/universidades/ita' },
        { label: 'USP', href: '/universidades/usp' },
        { label: 'UNESP', href: '/universidades/unesp' },
        { label: 'UNICAMP', href: '/universidades/unicamp' }
      ]
    },
    { 
      label: 'Curso Técnico', 
      href: '/#curso-tecnico',
      subItems: [
        { label: 'Senai', href: '/#senai' },
        { label: 'Etec', href: '/#etec' }
      ]
    },
    { 
      label: 'Oportunidades', 
      href: '/#oportunidades',
      subItems: [
        { label: 'Cursinhos', href: '/#cursinhos' },
        { label: 'Vestibular', href: '/#vestibular' },
        { label: 'Intercâmbio', href: '/#intercambio' }
      ]
    },
    { label: 'Blog', href: '/#blog' }
  ]

  return (
    <>
      <div className="h-[88px] w-full" />
      <div className="fixed top-0 pt-6 left-0 right-0 w-full px-4 md:px-8 z-50 pointer-events-none">
        <motion.header 
          variants={{
            visible: { y: 0, opacity: 1 },
            hidden: { y: "-150%", opacity: 1 }
          }}
          initial="visible"
          animate={hidden ? "hidden" : "visible"}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="max-w-7xl mx-auto bg-white shadow-lg rounded-full pointer-events-auto"
        >
        <div className="px-6 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <img src="/logo.png" alt="Semeando Educação Logo" className="h-10 w-auto object-contain" />
            <div className="flex flex-col font-bold tracking-wide text-sm">
              <span className="text-primary leading-tight">SEMEANDO</span>
              <span className="text-tertiary leading-tight">EDUCAÇÃO</span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            {navItems.map((item) => {
              const isActive = location.pathname === item.href
              return (
                <div key={item.label} className="relative group">
                  <Link 
                    to={item.href} 
                    className={`flex items-center gap-1 transition-colors ${isActive ? 'text-primary border-b-2 border-primary pb-1' : 'text-gray-500 py-1 hover:text-primary'}`}
                  >
                    {item.label}
                    {item.subItems && <ChevronDown size={14} className="transition-transform duration-200 group-hover:rotate-180" />}
                  </Link>
                  
                  {item.subItems && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                      <div className="bg-white rounded-xl shadow-xl border border-gray-100 py-2 min-w-[200px] flex flex-col relative before:absolute before:-top-2 before:left-1/2 before:-translate-x-1/2 before:border-8 before:border-transparent before:border-b-white">
                        {item.subItems.map(sub => (
                          <Link 
                            key={sub.label} 
                            to={sub.href}
                            className="px-4 py-2 hover:bg-green-50 hover:text-primary text-gray-600 text-sm transition-colors whitespace-nowrap"
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
          </nav>

          <div className="hidden md:block">
            <Button icon={<ArrowRight size={18} />}>Quero ajudar</Button>
          </div>
        </div>
      </motion.header>
    </div>
    </>
  )
}
