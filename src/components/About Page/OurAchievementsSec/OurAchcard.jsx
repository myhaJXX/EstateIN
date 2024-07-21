import React from 'react'
import * as cl from './ourAchSec.module.css'

function OurAchcard({title, desc}) {
  return (
    <article className={cl.card}>
        <h4>{title}</h4>
        <p>{desc}</p>
    </article>
  )
}

export default OurAchcard