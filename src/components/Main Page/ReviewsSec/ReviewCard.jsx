import React, { useState } from 'react'
import * as cl from './reviewsSec.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faUser } from '@fortawesome/free-solid-svg-icons'

function ReviewCard({info}) {
    const [stars, setStars] = useState(new Array(5).fill(0))
  return (
    <article className={cl.card}>
        <div style={{display: 'flex', gap: '10px'}}>
            {stars.map((e,i)=>{
                if(i < info.stars) return <FontAwesomeIcon icon={faStar} color='#FFE500' className={cl.star} key={i}/>
                return <FontAwesomeIcon icon={faStar} className={cl.star} color='#999999' key={i}/>
            })}
        </div>
        <h4>{info.littleDesc}</h4>
        <p>{info.desc}</p>

        <div className={cl.personInfo}>
            <FontAwesomeIcon icon={faUser} className={cl.ava}/>
            <h4>{info.name}</h4>
            <p>{info.place}</p>
        </div>

    </article>
  )
}

export default ReviewCard