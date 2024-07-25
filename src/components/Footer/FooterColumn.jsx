import React from 'react'
import * as cl from './footer.module.css'
import { useNavigate } from 'react-router-dom'

function FooterColumn({title, links}) {
  const nav = useNavigate()
  return (
    <div className={cl['footer-column']}>
        <h4 style={{color: '#999999'}}>{title}</h4>
        {links.map((e,i)=>{
            return <a onClick={()=>nav('/error')} key={i+e[0]+title[0]}>{e}</a>
        })}
    </div>
  )
}

export default FooterColumn