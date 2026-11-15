import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@components/ui/Button'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { HamburgerButton } from '@components/ui/HamburgerButton'
import { Link, useLocation } from 'react-router-dom'

export function Header() {
  const location = useLocation()
  const [hidden, setHidden] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [expandedItem, setExpandedItem] = useState<string | null>(null)
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

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

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      window.dispatchEvent(new Event('lock-scroll'));
    } else {
      document.body.style.overflow = '';
      window.dispatchEvent(new Event('unlock-scroll'));
    }
    
    // Limpeza caso o componente seja desmontado
    return () => {
      document.body.style.overflow = '';
      window.dispatchEvent(new Event('unlock-scroll'));
    };
  }, [mobileMenuOpen]);

  const navItems = [
    { label: 'Início', href: '/' },
    {
      label: 'Quem Somos',
      href: '/quem-somos',
      subItems: [
        { label: 'Nossa História', href: '/quem-somos' },
        { label: 'Voluntários', href: '/voluntarios' },
        { label: 'Palestras', href: '/palestras' }
      ]
    },
    {
      label: 'Universidades',
      href: '/universidades',
      subItems: [
        { label: 'UFABC', href: '/universidades/ufabc' },
        { label: 'UNIFESP', href: '/universidades/unifesp' },
        { label: 'IF', href: '/universidades/if' },
        { label: 'UNESP', href: '/universidades/unesp' },
        { label: 'UNICAMP', href: '/universidades/unicamp' },
        { label: 'UFSCAR', href: '/universidades/ufscar' },
        { label: 'ITA', href: '/universidades/ita' },
        { label: 'USP', href: '/universidades/usp' }
      ]
    },
    {
      label: 'Cursos Técnicos',
      href: '/curso-tecnico',
      subItems: [
        { label: 'Senai', href: '/curso-tecnico/senai' },
        { label: 'Etec', href: '/curso-tecnico/etec' }
      ]
    },
    {
      label: 'Oportunidades',
      href: '/oportunidades',
      subItems: [
        { label: 'Cursinhos', href: '/cursinhos' },
        { label: 'Vestibular', href: '/vestibular' },
        { label: 'Intercâmbio', href: '/intercambio' }
      ]
    },
    { label: 'Blog', href: '/blog' }
  ]

  return (
    <>
      <div className="h-[88px] w-full" />
      
      {/* Overlay Escurecido com Desfoque */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: mobileMenuOpen ? 1 : 0 }}
        transition={{ duration: 0.4 }}
        className={`fixed inset-0 bg-black/40 backdrop-blur-md z-40 ${mobileMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}
        onClick={() => setMobileMenuOpen(false)}
      />

      <div className="fixed top-0 pt-6 left-0 right-0 w-full px-4 md:px-8 z-50 pointer-events-none">
        <motion.header
          variants={{
            visible: { y: 0, opacity: 1, height: isMobile ? "64px" : "auto" },
            hidden: { y: "-150%", opacity: 1, height: isMobile ? "64px" : "auto" },
            open: { y: 0, opacity: 1, height: "calc(100dvh - 48px)" }
          }}
          initial="visible"
          animate={mobileMenuOpen ? "open" : (hidden ? "hidden" : "visible")}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
          className="max-w-7xl mx-auto bg-white shadow-lg pointer-events-auto overflow-hidden md:overflow-visible rounded-[32px] flex flex-col"
        >
          <div className="px-6 py-3 flex items-center justify-between shrink-0">
            <Link to="/" className="flex items-center gap-2">
              <img src="./logo.png" alt="Semeando Educação Logo" className="h-10 w-auto object-contain" />
              <div className="hidden md:flex flex-col font-bold tracking-wide text-sm">
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
                      <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
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

            <div className="md:hidden flex items-center justify-center">
              <HamburgerButton
                isOpen={mobileMenuOpen}
                toggle={setMobileMenuOpen}
              />
            </div>
          </div>

          {/* Mobile Menu Nav */}
          <motion.div 
            initial={false}
            animate={{ opacity: mobileMenuOpen ? 1 : 0 }}
            transition={{ duration: 0.3, delay: mobileMenuOpen ? 0.1 : 0 }}
            className={`md:hidden flex-col px-6 pt-2 pb-6 overflow-y-auto flex-1 ${mobileMenuOpen ? 'flex' : 'hidden'}`}
          >
            <div className="flex flex-col gap-1 mt-4">
              {navItems.map((item) => (
                <div key={item.label} className="border-b border-gray-100/50 last:border-none">
                  {item.subItems ? (
                    <div>
                      <button 
                        onClick={() => setExpandedItem(expandedItem === item.label ? null : item.label)}
                        className="w-full py-4 flex items-center justify-between text-left text-2xl font-black uppercase text-primary tracking-wide"
                      >
                        {item.label}
                        <motion.div
                          animate={{ rotate: expandedItem === item.label ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <ChevronDown size={28} />
                        </motion.div>
                      </button>
                      <motion.div
                        initial={false}
                        animate={{ height: expandedItem === item.label ? 'auto' : 0, opacity: expandedItem === item.label ? 1 : 0 }}
                        className="overflow-hidden flex flex-col pl-4 border-l-2 border-primary/20 ml-2"
                      >
                        <div className="pb-5 flex flex-col gap-4 mt-2">
                          {item.subItems.map(sub => (
                            <Link 
                              key={sub.label} 
                              to={sub.href} 
                              className="text-xl font-medium text-gray-500 active:text-primary transition-colors"
                              onClick={() => { setMobileMenuOpen(false); setExpandedItem(null); }}
                            >
                              {sub.label}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    </div>
                  ) : (
                    <Link 
                      to={item.href} 
                      className="w-full py-4 block text-left text-2xl font-black uppercase text-primary tracking-wide"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-auto pt-8 mb-4 flex justify-center">
              <Button icon={<ArrowRight size={18} />} className="w-full h-14 text-lg justify-center shadow-lg shadow-primary/20">Quero ajudar</Button>
            </div>
          </motion.div>
        </motion.header>
      </div>
    </>
  )
}
