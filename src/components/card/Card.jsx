import React from 'react'
import * as styles from './card.module.css'
import { faBed, faToilet } from '@fortawesome/free-solid-svg-icons'
import { faBuilding } from '@fortawesome/free-solid-svg-icons'
import CardRoom from './CardRoom.jsx'

function Card({info}) {
  return (
    <article className={styles.card}>
      <img src={info.img} alt="" />
      <h4>{info.title}</h4>
      <p>{info.desc}</p>
      <div className={styles.rooms}>
        <CardRoom icon={faBed} title={'bedrooms'} count={info.rooms.bedrooms}/>
        <CardRoom icon={faToilet} title={'bathrooms'} count={info.rooms.bedrooms}/>
        <CardRoom icon={faBuilding} title={info.type} count={0}/>
      </div>
      <div>
        <div style={{width: 'fit-content'}}>
          <p>Price</p>
          <h3>$ {Number(info.price).toFixed(3)}</h3>
        </div>
        <button>View Property Details</button>
      </div>
    </article>
  )
}

export default Card