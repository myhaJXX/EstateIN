import React from 'react'
import * as styles from './featuredSec.module.css'

import { items } from '../../../static/items'
import Card from '@card/Card'
import { useNavigate } from 'react-router-dom'

function FeaturedSec() {
    const nav = useNavigate()
  return (
    <section className={styles.cont}>
        <h2>Featured Properties</h2>
        <div>
            <p>
                Explore our handpicked selection of featured properties. 
                Each listing offers a glimpse into exceptional homes and investments available through Estatein. 
                Click "View Details" for more information.
            </p>
            <button onClick={()=>nav('/catalog')}>
                View All Properties
            </button>
        </div>

        <div>
            {items.map((e,i)=>{
                if(e.ID.slice(0,2)=='27') return <Card info={e} key={i+'f'}/>
            })}
        </div>

    </section>
  )
}

export default FeaturedSec