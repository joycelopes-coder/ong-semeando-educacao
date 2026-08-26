import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Users, Calendar, MapPin, School, BookOpen, Search, ChevronLeft, ChevronRight, Filter } from 'lucide-react'

// Define the data for the lectures
const palestras = [
  { id: 1, name: 'E.E. João Paulo II', location: 'Mauá/SP', dates: ['25 de Outubro de 2016', '04 de Novembro de 2016'], impact: 220, type: 'escola' },
  { id: 2, name: 'E.E. Prof. Jorge Rahme', location: 'São Bernardo do Campo/SP', dates: ['30 de Março de 2017', '06 e 07 de Abril de 2017'], impact: 233, type: 'escola' },
  { id: 3, name: 'Cursinho Popular dos Pimentas', location: 'Guarulhos/SP', dates: ['30 de Março de 2017'], impact: 100, type: 'cursinho' },
  { id: 4, name: 'E.E. João Paulo II', location: 'Mauá/SP', dates: ['24, 25 e 26 de Abril de 2017', '22 e 23 de Maio de 2017'], impact: 1098, type: 'escola' },
  { id: 5, name: 'E.E. João de Melo Macedo', location: 'Diadema/SP', dates: ['30 e 31 de Maio de 2017'], impact: 202, type: 'escola' },
  { id: 6, name: 'E.E. Ana Consuelo', location: 'Diadema/SP', dates: ['06 de Junho de 2017', '14 de Agosto de 2017'], impact: 120, type: 'escola' },
  { id: 7, name: 'Cursinho Popular Tetris', location: 'Suzano/SP', dates: ['12 de Agosto de 2017'], impact: 65, type: 'cursinho' },
  { id: 8, name: 'Cursinho Popular Resiliência', location: 'Osasco/SP', dates: ['26 de Agosto de 2017'], impact: 35, type: 'cursinho' },
  { id: 9, name: 'E.E. Visconde de Mauá', location: 'Mauá/SP', dates: ['12 e 13 de Setembro de 2017'], impact: 242, type: 'escola' },
  { id: 10, name: 'Cursinho Mafalda', location: 'São Paulo/SP', dates: ['02 de Setembro de 2017'], impact: 30, type: 'cursinho' },
  { id: 11, name: 'E.E. Walker da Costa Barbosa', location: 'São Bernardo do Campo/SP', dates: ['29 de Setembro de 2017', '09 e 25 de Outubro de 2017'], impact: 144, type: 'escola' },
  { id: 12, name: 'Cursinho Emancipa Diadema', location: 'Diadema/SP', dates: ['01 de Outubro de 2017'], impact: 14, type: 'cursinho' },
  { id: 13, name: 'E.E. Elias Zugaib', location: 'Poá/SP', dates: ['21 de Outubro de 2017'], impact: 55, type: 'escola' },
  { id: 14, name: 'Cursinho Uneafro', location: 'São Paulo/SP', dates: ['28 de Outubro de 2017', '09 e 25 de Outubro de 2017'], impact: 6, type: 'cursinho' },
  { id: 15, name: 'E.E. Professora Leonor Rendesi', location: 'São Paulo/SP', dates: ['31 de Outubro de 2017'], impact: 83, type: 'escola' },
  { id: 16, name: 'Cursinho Popular Liceu', location: 'Francisco Morato/SP', dates: ['11 de Março de 2018'], impact: 22, type: 'cursinho' },
  { id: 17, name: 'E.E. Luiza Mendes Correa de Souza', location: 'São Paulo/SP', dates: ['23 de Fevereiro de 2018'], impact: 60, type: 'escola' },
  { id: 18, name: 'Cursinho Uneafro', location: 'São Paulo/SP', dates: ['08 de Abril de 2018'], impact: 33, type: 'cursinho' },
  { id: 19, name: 'E.E. Prof Aroldo de Azevedo', location: 'São Paulo/SP', dates: ['16 e 17 de Agosto de 2018'], impact: 360, type: 'escola' },
  { id: 20, name: 'E.E. Carlindo Reis', location: 'Ferraz de Vasconcelos/SP', dates: ['21 de Agosto de 2018'], impact: 480, type: 'escola' },
  { id: 21, name: 'E.E. João Luiz de Godoy', location: 'Guarulhos/SP', dates: ['15 de Setembro de 2018'], impact: 40, type: 'escola' },
  { id: 22, name: 'E.E. Barão de Ramalho', location: 'São Paulo/SP', dates: ['21 de Setembro de 2018'], impact: 320, type: 'escola' },
  { id: 23, name: 'E.E. Luiza Mendes Correa de Souza', location: 'São Paulo/SP', dates: ['27 de Fevereiro de 2019', '18 de Abril de 2019'], impact: 170, type: 'escola' },
  { id: 24, name: 'EMEF Prof Ayrton Oliveira Sampaio', location: 'São Paulo/SP', dates: ['16 de Março de 2019', '30 de Abril de 2019'], impact: 60, type: 'escola' },
  { id: 25, name: 'E.E. Madre Odette de Souza Carvalho', location: 'Embu das Artes/SP', dates: ['30 de Abril de 2019'], impact: 120, type: 'escola' },
  { id: 26, name: 'Cursinho Mafalda', location: 'São Paulo/SP', dates: ['18 de Maio de 2019'], impact: 5, type: 'cursinho' },
  { id: 27, name: 'E.E. João Luiz de Godoy', location: 'Guarulhos/SP', dates: ['09 de Maio de 2019'], impact: 60, type: 'escola' },
  { id: 28, name: 'Cursinho ACEPUSP', location: 'São Paulo/SP', dates: ['28 de Maio de 2019'], impact: 30, type: 'cursinho' },
  { id: 29, name: 'E.E. João Paulo II', location: 'Mauá/SP', dates: ['05 de Novembro de 2019'], impact: 180, type: 'escola' },
  { id: 30, name: 'EE. Antônio José Leite', location: 'São Paulo/SP', dates: ['10 de Novembro de 2019'], impact: 80, type: 'escola' }
]

const ITEMS_PER_PAGE = 9

export function Palestras() {
  const [currentPage, setCurrentPage] = useState(1)
  const [filterType, setFilterType] = useState<'todos' | 'escola' | 'cursinho'>('todos')
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // Filter logic
  const filteredPalestras = palestras.filter(p => {
    const matchType = filterType === 'todos' ? true : p.type === filterType
    const matchSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                        p.location.toLowerCase().includes(searchQuery.toLowerCase())
    return matchType && matchSearch
  })

  // Pagination logic
  const totalPages = Math.ceil(filteredPalestras.length / ITEMS_PER_PAGE)
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
  const paginatedPalestras = filteredPalestras.slice(startIndex, startIndex + ITEMS_PER_PAGE)

  // Reset to page 1 when filters change
  useEffect(() => {
    setCurrentPage(1)
  }, [filterType, searchQuery])

  return (
    <main className="min-h-screen bg-gray-50 pb-20">
      {/* Hero Header */}
      <section className="bg-primary py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Palestras Realizadas
          </h1>
          <p className="text-green-50 max-w-2xl mx-auto text-lg">
            Navegue pelo nosso histórico de impacto nas escolas e cursinhos populares de todo o estado.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 -mt-8 relative z-10">
        <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-6 mb-8 flex flex-col md:flex-row gap-4 justify-between items-center">
          
          {/* Filters */}
          <div className="flex items-center gap-2">
            <Filter size={20} className="text-gray-400 mr-2" />
            <div className="flex bg-gray-100 p-1 rounded-lg">
              <button 
                onClick={() => setFilterType('todos')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${filterType === 'todos' ? 'bg-white shadow text-primary' : 'text-gray-600 hover:text-gray-900'}`}
              >
                Todos
              </button>
              <button 
                onClick={() => setFilterType('escola')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-2 ${filterType === 'escola' ? 'bg-white shadow text-primary' : 'text-gray-600 hover:text-gray-900'}`}
              >
                Escolas
              </button>
              <button 
                onClick={() => setFilterType('cursinho')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-2 ${filterType === 'cursinho' ? 'bg-white shadow text-primary' : 'text-gray-600 hover:text-gray-900'}`}
              >
                Cursinhos
              </button>
            </div>
          </div>

          {/* Search */}
          <div className="relative w-full md:w-72">
            <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input 
              type="text" 
              placeholder="Buscar instituição ou cidade..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:bg-white transition-all text-sm"
            />
          </div>
        </div>

        {/* Results Info */}
        <div className="mb-6 text-gray-500 text-sm font-medium">
          Mostrando {filteredPalestras.length === 0 ? 0 : startIndex + 1} - {Math.min(startIndex + ITEMS_PER_PAGE, filteredPalestras.length)} de {filteredPalestras.length} resultados
        </div>

        {/* Grid - E-commerce style cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <AnimatePresence mode="popLayout">
            {paginatedPalestras.map((palestra) => (
              <motion.div 
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                key={palestra.id}
                className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col group cursor-default"
              >
                {/* Image Placeholder Area */}
                <div className="h-48 bg-gray-50/50 flex items-center justify-center relative overflow-hidden group-hover:bg-primary/5 transition-colors">
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/5"></div>
                  {palestra.type === 'escola' ? (
                    <School size={64} className="text-gray-300 group-hover:text-primary/40 transition-colors" strokeWidth={1} />
                  ) : (
                    <BookOpen size={64} className="text-gray-300 group-hover:text-primary/40 transition-colors" strokeWidth={1} />
                  )}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur text-primary text-xs font-bold px-3 py-1 rounded-full shadow-sm uppercase tracking-wider">
                    {palestra.type}
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 leading-tight">
                    {palestra.name}
                  </h3>
                  
                  <div className="flex items-center gap-2 text-gray-500 text-sm mb-4">
                    <MapPin size={16} className="text-primary/70 shrink-0" />
                    <span className="truncate">{palestra.location}</span>
                  </div>
                  
                  <div className="mt-auto space-y-3 pt-4 border-t border-gray-100">
                    <div className="flex items-start gap-2">
                      <Calendar size={16} className="text-gray-400 mt-0.5 shrink-0" />
                      <div className="text-xs text-gray-600">
                        {palestra.dates.map((date, i) => (
                          <div key={i}>{date}</div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between bg-primary/5 rounded-xl px-4 py-3">
                      <div className="flex items-center gap-2">
                        <Users size={16} className="text-primary" />
                        <span className="text-xs font-semibold text-gray-600 uppercase tracking-wider">Impacto</span>
                      </div>
                      <span className="text-lg font-bold text-primary">{palestra.impact} <span className="text-xs font-medium text-gray-500">alunos</span></span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {filteredPalestras.length === 0 && (
            <div className="col-span-full py-20 text-center flex flex-col items-center justify-center">
              <Search size={48} className="text-gray-300 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Nenhuma palestra encontrada</h3>
              <p className="text-gray-500">Tente ajustar seus filtros ou busca para encontrar o que procura.</p>
            </div>
          )}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 pb-12">
            <button 
              onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="p-2 rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-50 hover:text-primary disabled:opacity-50 disabled:pointer-events-none transition-colors"
            >
              <ChevronLeft size={20} />
            </button>
            
            <div className="flex items-center gap-1">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`w-10 h-10 rounded-lg text-sm font-medium transition-colors ${
                    currentPage === i + 1 
                      ? 'bg-primary text-white shadow-md' 
                      : 'border border-gray-200 text-gray-600 hover:bg-gray-50 hover:text-primary'
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>

            <button 
              onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="p-2 rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-50 hover:text-primary disabled:opacity-50 disabled:pointer-events-none transition-colors"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        )}
      </section>
    </main>
  )
}
