import React from 'react'
import * as styles from './previewSec.module.css'
import PreviewStat from './PreviewStat'
import PreviewCard from './PreviewCard'

import { faShop } from '@fortawesome/free-solid-svg-icons'
import { faCamera } from '@fortawesome/free-solid-svg-icons'
import { faCity } from '@fortawesome/free-solid-svg-icons'
import { faSun } from '@fortawesome/free-solid-svg-icons'
import img from '@static/prev.png'

console.log(styles.cont)

function PreviewSec() {
  return (
    <section className={styles.cont}>

      <aside>

        <div style={{display: 'grid', gap: '10px'}}>
          <h1>Discover Your Dream Property with Estatein</h1>
          <p>
            Your journey to finding the perfect property begins here. Explore our listings to find the home that matches your dreams.
          </p>
        </div>

        <div>
          <button>Learn More</button>
          <button>Browse Properties</button>
        </div>

        <div className={styles['stats-box']}>
          <PreviewStat key={'stat-h'} count='200' desc='Happy Customers'/>
          <PreviewStat key={'stat-p'} count='10k' desc='Properties For Clients'/>
          <PreviewStat key={'stat-y'} count='16' desc='Years of Experience'/>
        </div>

      </aside>

      <img style={{width: '90%', justifySelf:'center'}} src={img} alt="" />

      <div className={styles.cards}>
        <PreviewCard icon={faShop} title={'Find Your Dream Home'}/>
        <PreviewCard icon={faCamera} title={'Unlock Property Value'}/>
        <PreviewCard icon={faCity} title={'Effortless Property Management'}/>
        <PreviewCard icon={faSun} title={'Smart Investments, Informed Decisions'}/>
      </div>

    </section>
  )
}

export default PreviewSec