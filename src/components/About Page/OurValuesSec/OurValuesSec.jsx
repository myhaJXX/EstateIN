import React from 'react'
import * as cl from './ourValuesSec.module.css'
import OurValueCard from './OurValueCard'

import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'
import { faPeopleGroup } from '@fortawesome/free-solid-svg-icons'

function OurValuesSec() {
  return (
    <section className={cl.cont}>
        <div>
            <h1>Our Values</h1>
            <p>
            Our story is one of continuous growth and evolution.
            We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary.
            </p>
        </div>
        <div>
            <OurValueCard icon={faStar} title={"Trust"} desc={"Trust is the cornerstone of every successful real estate transaction."}/>
            <OurValueCard icon={faGraduationCap} title={"Excellence"} desc={"We set the bar high for ourselves. From the properties we list to the services we provide."}/>
            <OurValueCard icon={faPeopleGroup} title={"Client-Centric"} desc={"Your dreams and needs are at the center of our universe. We listen, understand."}/>
            <OurValueCard icon={faStar} title={"Our Commitment"} desc={"We are dedicated to providing you with the highest level of service, professionalism."}/>
        </div>
    </section>
  )
}

export default OurValuesSec