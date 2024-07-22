import React from 'react'
import SPreviewSec from './SPreviewSec/SPreviewSec'
import SSecondSec from './SSecondSec/SSecondSec'

import { faChartColumn, faChartPie, faCoins, faSun, faVolumeHigh, faWandSparkles  } from '@fortawesome/free-solid-svg-icons'
import { faCubes } from '@fortawesome/free-solid-svg-icons/faCubes'

const cards1 = [
    {title: 'Valuation Mastery', desc:'Discover the true worth of your property with our expert valuation services.', icon: faChartColumn},
    {title: 'Strategic Marketing', desc:'Selling a property requires more than just a listing; it demands a strategic marketing approach.', icon: faChartPie},
    {title: 'Negotiation Wizardry', desc:'Negotiating the best deal is an art, and our negotiation experts are masters of it.', icon: faCoins},
    {title: 'Closing Success', desc:'A successful sale is not complete until the closing. We guide you through the intricate closing process.', icon: faVolumeHigh}
]

const cards2 = [
    {title: 'Tenant Harmony', desc:'Our Tenant Management services ensure that your tenants have a smooth and reducing vacancies.', icon: faCubes},
    {title: 'Maintenance Ease', desc:'Say goodbye to property maintenance headaches. We handle all aspects of property upkeep.', icon: faChartColumn},
    {title: 'Financial Peace of Mind', desc:'Managing property finances can be complex. Our financial experts take care of rent collection', icon: faWandSparkles},
    {title: 'Legal Guardian', desc:'Stay compliant with property laws and regulations effortlessly.', icon: faSun}
]

function ServPage() {
  return (
    <main>
        <SPreviewSec/>

        <SSecondSec 
        title={'Unlock Property Value'} 
        info={'Selling your property should be a rewarding experience, and at Estatein, we make sure it is. Our Property Selling Service is designed to maximize the value of your property, ensuring you get the best deal possible. Explore the categories below to see how we can help you at every step of your selling journey'}
        cards={[...cards1]}
        title2={'Unlock the Value of Your Property Today'}
        info2={'Ready to unlock the true value of your property? Explore our Property Selling Service categories and let us help you achieve the best deal possible for your valuable asset.'}
        />

        <SSecondSec 
        title={'Effortless Property Management'} 
        info={'Owning a property should be a pleasure, not a hassle. Estatein\'s Property Management Service takes the stress out of property ownership, offering comprehensive solutions tailored to your needs. Explore the categories below to see how we can make property management effortless for you'}
        cards={[...cards2]}
        title2={'Experience Effortless Property Management'}
        info2={'Ready to experience hassle-free property management? Explore our Property Management Service categories and let us handle the complexities while you enjoy the benefits of property ownership.'}
        />
    </main>
  )
}

export default ServPage