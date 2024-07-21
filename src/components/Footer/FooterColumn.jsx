import React from 'react'
import * as cl from './footer.module.css'

function FooterColumn({title, links}) {
  return (
    <div className={cl['footer-column']}>
        <h4 style={{color: '#999999'}}>{title}</h4>
        {links.map((e,i)=>{
            return <a key={i+e[0]+title[0]}>{e}</a>
        })}
    </div>
  )
}

export default FooterColumn