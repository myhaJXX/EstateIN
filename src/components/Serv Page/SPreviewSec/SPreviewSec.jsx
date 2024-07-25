import React from 'react'
import * as cl from './SPreviewSec.module.css'
import { faSun } from '@fortawesome/free-solid-svg-icons'
import { faShop } from '@fortawesome/free-solid-svg-icons'
import { faCity } from '@fortawesome/free-solid-svg-icons'
import { faCamera } from '@fortawesome/free-solid-svg-icons'
import PreviewCard from '../../Main Page/previewSec/PreviewCard'

function SPreviewSec() {
  return (
    <section className={cl.cont}>

      <div>
        <h1 style={{textAlign:'center'}}>
        Elevate Your Real Estate Experience
        </h1>
        <p style={{maxWidth:'70%', textAlign: 'center'}}>
        Welcome to Estatein, where your real estate aspirations meet expert guidance. 
        Explore our comprehensive range of services, each designed to cater to your unique needs and dreams.
        </p>
      </div>

      <div>
        <PreviewCard icon={faShop} title={'Find Your Dream Home'}/>
        <PreviewCard icon={faCamera} title={'Unlock Property Value'}/>
        <PreviewCard icon={faCity} title={'Effortless Property Management'}/>
        <PreviewCard icon={faSun} title={'Smart Investments, Informed Decisions'}/>
      </div>
    </section>
  )
}

export default SPreviewSec