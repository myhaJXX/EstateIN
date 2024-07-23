import React, { useState } from 'react'
import * as cl from './CatalogSec.module.css'
import Card from '@card/Card'

function CatalogSec({items}) {

  return (
    <section className={cl.cont}>
        <h1>Discover a World of Possibilities</h1>
        <p>
            Our portfolio of properties is as diverse as your dreams. 
            Explore the following categories to find the perfect property that resonates with your vision of home
        </p>

        <div>
            {items.map((e,i)=><Card info={e} key={i+'c'+e.ID}/>)}
        </div>

    </section>
  )
}

export default CatalogSec