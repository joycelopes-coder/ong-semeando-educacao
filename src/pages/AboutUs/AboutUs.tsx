import React from 'react'
import { AboutHero } from './AboutHero'
import { OurHistory } from './OurHistory'
import { HowWeAct } from './HowWeAct'
import { Team } from './Team'

export function AboutUs() {
  return (
    <main className="flex-1 w-full bg-[#fcfcfc] pb-20">
      <AboutHero />
      <OurHistory />
      
      <section className="max-w-7xl mx-auto px-6 py-12 flex flex-col gap-24">
        <HowWeAct />
        <Team />
      </section>
    </main>
  )
}
