import React from 'react'
import * as cl from './ourAchSec.module.css'
import OurAchcard from './OurAchcard'

function OurAchSec() {
  return (
    <section className={cl.cont}>
        <h1>Our Achievements</h1>
        <p>
        Our story is one of continuous growth and evolution. 
        We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary.
        </p>

        <div>
            <OurAchcard title={'3+ Years of Excellence'} 
            desc={'With over 3 years in the industry, we\'ve amassed a wealth of knowledge and experience.'}/>
            <OurAchcard title={'Happy Clients'} 
            desc={'Our greatest achievement is the satisfaction of our clients. Their success stories fuel our passion for what we do.'}/>
            <OurAchcard title={'Industry Recognition'} 
            desc={'We\'ve earned the respect of our peers and industry leaders, with accolades and awards that reflect our commitment to excellence.'}/>
        </div>

    </section>
  )
}

export default OurAchSec