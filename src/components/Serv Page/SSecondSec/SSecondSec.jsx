import React from 'react'
import * as cl from './SSecondSec.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useNavigate } from 'react-router-dom'

function SSecondSec({title, info, cards, title2, info2}) {
    const nav = useNavigate()
  return (
    <section className={cl.cont}>
        <h1>{title}</h1>
        <p>{info}</p>
        <div className={cl.box}>

            {cards.map((e,i)=>{
                return  <article key={i}>
                            <FontAwesomeIcon icon={e.icon}/>
                            <h4>{e.title}</h4>
                            <p>{e.desc}</p>
                        </article>
            })}

            <div className={cl.bigCard}>
                <div>
                    <h3 style={{fontSize: '1.5em'}}>{title2}</h3>
                    <button onClick={()=>nav('/error')}>Learn More</button>
                </div>
                <p>{info2}</p>
            </div>

        </div>
    </section>
  )
}

export default SSecondSec