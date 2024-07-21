import React from 'react'
import * as cl from './ourJourneySec.module.css'
import PreviewStat from '../../Main Page/previewSec/PreviewStat'
import * as styles from '../../Main Page/previewSec/previewSec.module.css'
import png from '@static/ourPrev.png'

function OurJourneySec() {
  return (
    <section className={cl.cont}>
      <aside>

        <h1>Our Journey</h1>

        <p>
          Our story is one of continuous growth and evolution. We started as a small team with big dreams, 
          determined to create a real estate platform that transcended the ordinary. 
          Over the years, we've expanded our reach, forged valuable partnerships, and gained the trust of countless clients.
        </p>

        <div className={styles['stats-box']}>
          <PreviewStat key={'stat-h'} count='200' desc='Happy Customers'/>
          <PreviewStat key={'stat-p'} count='10k' desc='Properties For Clients'/>
          <PreviewStat key={'stat-y'} count='16' desc='Years of Experience'/>
        </div>
      </aside>

      <img src={png} alt="" />
    </section>
  )
}

export default OurJourneySec