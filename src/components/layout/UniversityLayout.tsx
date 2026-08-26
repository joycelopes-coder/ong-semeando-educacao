import React from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, MapPin, GraduationCap, BookOpen, Accessibility } from 'lucide-react'
import { Link } from 'react-router-dom'

interface UniversityLayoutProps {
  title: string
  logo?: string
  mainImage?: string
  children: React.ReactNode
}

export function UniversityLayout({ title, logo, mainImage, children }: UniversityLayoutProps) {
  return (
    <main className="w-full flex flex-col flex-1 pb-16 bg-gray-50/30">
      {/* Hero Section */}
      <div className="relative w-full h-[40vh] min-h-[300px] max-h-[400px] bg-primary flex items-center justify-center overflow-hidden">
        {mainImage && (
          <img 
            src={mainImage} 
            alt={title} 
            className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-overlay"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        
        <div className="relative z-10 text-center px-4 flex flex-col items-center">
          {logo && (
            <div className="bg-white p-4 rounded-2xl shadow-xl mb-6">
              <img src={logo} alt={`Logo ${title}`} className="h-20 w-auto object-contain" />
            </div>
          )}
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight"
          >
            {title}
          </motion.h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto w-full px-6 -mt-10 relative z-20">
        <Link 
          to="/#universidades" 
          className="inline-flex items-center gap-2 text-sm font-medium text-white bg-black/20 hover:bg-black/40 backdrop-blur-md px-4 py-2 rounded-full transition-colors mb-6"
        >
          <ArrowLeft size={16} />
          Voltar para Universidades
        </Link>

        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-12">
          {children}
        </div>
      </div>
    </main>
  )
}

export function Section({ title, icon: Icon, children, id }: { title: string, icon?: React.ElementType, children: React.ReactNode, id?: string }) {
  return (
    <section id={id} className="mb-12 last:mb-0">
      <div className="flex items-center gap-3 mb-6">
        {Icon && (
          <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center text-primary shrink-0">
            <Icon size={24} />
          </div>
        )}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{title}</h2>
      </div>
      <div className="prose prose-green max-w-none text-gray-600 leading-relaxed">
        {children}
      </div>
    </section>
  )
}
