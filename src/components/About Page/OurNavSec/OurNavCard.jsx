import React from 'react'
import * as cl from './OurNavSec.module.css'

function OurNavCard({id, title, desc}) {
  return (
    <article className={cl.card}>
        <h4>Step 0{id+1}</h4>
        <div>
            <h4>{title}</h4>
            <p>{desc}</p>
        </div>
    </article>
  )
}

export default OurNavCard