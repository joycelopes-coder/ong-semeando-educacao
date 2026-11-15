import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@components/ui/Button'
import { ArrowRight, Leaf } from 'lucide-react'
import { TeamGrid } from './TeamGrid'
import { PastVolunteers } from './PastVolunteers'
import { VolunteerCTA } from './VolunteerCTA'

export function Volunteers() {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="w-full flex flex-col flex-1 pb-10">
      <div className="max-w-7xl mx-auto px-6 w-full mt-12 md:mt-20">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row items-start justify-between gap-8 mb-16">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-6">
              Nosso time
            </h1>
            <div className="flex items-start gap-3">
              <Leaf className="text-tertiary w-6 h-6 shrink-0 mt-1" />
              <p className="text-gray-600 text-lg">
                Conheça as pessoas que dedicam seu tempo, talento e energia para transformar a educação em realidade.
              </p>
            </div>
          </div>
          
          <Button variant="outline" className="whitespace-nowrap mt-2 md:mt-0" icon={<ArrowRight size={18} />}>
            Quero ser voluntário
          </Button>
        </div>

        {/* Current Team Grid */}
        <div className="mb-24">
          <TeamGrid />
        </div>

        {/* Past Volunteers Timeline */}
        <PastVolunteers />

        {/* Footer CTA */}
        <VolunteerCTA />

      </div>
    </main>
  )
}
