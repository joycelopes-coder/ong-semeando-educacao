import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '@components/ui/Button'
import { ArrowRight, Leaf } from 'lucide-react'

export function VolunteerCTA() {
  return (
    <section className="w-full relative overflow-hidden py-16 px-8 md:px-16 bg-gradient-to-br from-green-50/40 to-white border-t border-green-50 flex flex-col md:flex-row items-center justify-between gap-10 mt-10 rounded-t-3xl">
      {/* Background Leaves */}
      <img 
        src="./leaf-branch.png" 
        alt="" 
        className="absolute -bottom-10 -left-10 w-64 md:w-80 opacity-50 pointer-events-none"
      />
      <img 
        src="./leaf-branch.png" 
        alt="" 
        className="absolute -bottom-10 -right-10 w-64 md:w-80 opacity-50 rotate-90 pointer-events-none scale-x-[-1]"
      />

      <div className="relative z-10 max-w-2xl">
        <div className="flex items-center gap-2 mb-2">
          <Leaf className="text-tertiary w-6 h-6" />
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-4 leading-tight">
          Você também pode<br />fazer parte dessa história.
        </h2>
        <p className="text-gray-600 text-lg max-w-xl">
          Venha ser voluntário e ajude a transformar vidas através da educação.
        </p>
      </div>

      <div className="relative z-10 w-full md:w-auto flex justify-start md:justify-end">
        <Button className="w-full md:w-auto py-4 px-8 text-lg" icon={<ArrowRight size={20} />}>
          Quero ser voluntário
        </Button>
      </div>
    </section>
  )
}
