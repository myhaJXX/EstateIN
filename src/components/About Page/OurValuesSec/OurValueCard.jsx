import React from 'react'
import * as cl from './ourValuesSec.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function OurValueCard({icon, title, desc}) {
  return (
    <article className={cl.card}>
        <FontAwesomeIcon icon={icon}/>
        <h4>{title}</h4>
        <p>{desc}</p>
    </article>
  )
}

export default OurValueCard