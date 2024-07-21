import React from 'react'
import * as cl from './OurNavSec.module.css'
import OurNavCard from './OurNavCard'

function OurNavSec() {
    const cards = [
        {title: 'Discover a World of Possibilities', desc:'Your journey begins with exploring our carefully curated property listings. Use our intuitive search tools to filter properties based on your preferences, including location,'},
        {title: 'Narrowing Down Your Choices', desc:'Once you\'ve found properties that catch your eye, save them to your account or make a shortlist. This allows you to compare and revisit your favorites as you make your decision.'},
        {title:'Personalized Guidance', desc:'Have questions about a property or need more information? Our dedicated team of real estate experts is just a call or message away.'},
        {title:'See It for Yourself', desc:'Arrange viewings of the properties you\'re interested in. We\'ll coordinate with the property owners and accompany you to ensure you get a firsthand look at your potential new home.'},
        {title:'Making Informed Decisions', desc:'Before making an offer, our team will assist you with due diligence, including property inspections, legal checks, and market analysis. We want you to be fully informed.'},
        {title:'Getting the Best Deal', desc:'We\'ll help you negotiate the best terms and prepare your offer. Our goal is to secure the property at the right price and on favorable terms.'}
    ]
  return (
    <section className={cl.cont}>
        <h1>Navigating the Estatein Experience</h1>
        <p>
        At Estatein, we've designed a straightforward process to help you find and purchase your dream property with ease. 
        Here's a step-by-step guide to how it all works.
        </p>

        <div className={cl.box}>
            {cards.map((e,i)=>{
                return <OurNavCard id={i} title={e.title} desc={e.desc} key={i}/>
            })}
        </div>

    </section>
  )
}

export default OurNavSec