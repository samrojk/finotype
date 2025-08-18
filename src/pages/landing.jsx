import React from 'react'
import FAQ from "../components/faq.jsx"
import Hero from "../components/hero.jsx"
import Cards from "../components/card.jsx"
import Features from "../components/features.jsx"

const landing = () => {
  return (
    <div>
      <Hero />
      <Cards />
      <Features />
      <FAQ />
    </div>
  )
}

export default landing