import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

interface Volunteer {
  id?: string
  name: string
  role: string
  desc: string
  image: string
  badgeColor: string
  textColor: string
}

export function TeamGrid() {
  const [volunteers, setVolunteers] = useState<Volunteer[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const baseUrl = import.meta.env.BASE_URL
  const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:3333'

  useEffect(() => {
    let isMounted = true

    async function fetchVolunteers() {
      try {
        setLoading(true)
        const response = await fetch(`${apiUrl}/api/volunteers`)
        if (!response.ok) {
          throw new Error('Falha ao carregar voluntários')
        }
        const data: Volunteer[] = await response.json()
        if (isMounted) {
          setVolunteers(data)
          setError(null)
        }
      } catch (err) {
        if (isMounted) {
          setError('Não foi possível carregar os voluntários. Verifique se o back-end está rodando.')
        }
      } finally {
        if (isMounted) {
          setLoading(false)
        }
      }
    }

    fetchVolunteers()

    return () => {
      isMounted = false
    }
  }, [apiUrl])

  const resolveImageUrl = (imgPath: string) => {
    if (!imgPath) return ''
    if (imgPath.startsWith('http://') || imgPath.startsWith('https://')) {
      return imgPath
    }
    const cleanPath = imgPath.startsWith('/') ? imgPath.slice(1) : imgPath
    return `${baseUrl}${cleanPath}`
  }

  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {Array.from({ length: 8 }).map((_, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col animate-pulse h-52"
          >
            <div className="w-20 h-20 rounded-full bg-gray-200 mb-4 mt-2" />
            <div className="h-5 bg-gray-200 rounded w-3/4 mb-2" />
            <div className="h-4 bg-gray-100 rounded w-1/2" />
          </div>
        ))}
      </div>
    )
  }

  if (error) {
    return (
      <div className="bg-amber-50 border border-amber-200 text-amber-800 rounded-2xl p-6 text-center">
        {error}
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {volunteers.map((member, idx) => (
        <motion.div 
          key={member.id || member.name}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: idx * 0.05 }}
          className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col relative overflow-hidden group hover:shadow-md transition-shadow"
        >
          {/* Top Right Corner Badge Shape */}
          <div className={`absolute top-0 right-0 w-8 h-8 rounded-bl-xl ${member.badgeColor}`}></div>
          
          <div className="mb-4 mt-2">
            <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-sm">
              <img 
                src={resolveImageUrl(member.image)} 
                alt={member.name} 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <h4 className="font-bold text-amber-900 text-lg mb-1">{member.name}</h4>
          
          {member.role && (
            <p className={`font-semibold text-sm leading-tight mb-2 ${member.textColor}`}>
              {member.role}
            </p>
          )}
          
          {member.desc && (
            <p className="text-gray-500 text-xs leading-relaxed whitespace-pre-line mt-auto pt-2">
              {member.desc}
            </p>
          )}
        </motion.div>
      ))}
    </div>
  )
}
