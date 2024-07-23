import React from 'react'
import * as cl from './FiltersSec.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

function FiltersSec({filters, setFilters, changeCopy}) {
  return (
    <section className={cl.cont}>
        <div>
            <input type="text" placeholder='Search for a Propertie' value={filters.title} className={cl.titleSearch}
            onChange={(e)=>{setFilters({...filters, title: e.target.value})}}/>
            <button onClick={()=>changeCopy()}>
                <FontAwesomeIcon icon={faSearch}/> &nbsp;
                Find Property
            </button>
        </div>
        <div className={cl.filters}>
          <input type="text" placeholder='$, price' value={filters.priceL} onChange={(e)=>{
            e.target.value == Number(e.target.value) 
            ? setFilters({...filters, priceL:e.target.value}) 
            : setFilters({...filters, priceL: e.target.value.slice(0,e.target.value.length-1)})
          }}/>
          <hr />
          <input type="text" placeholder='$, price' value={filters.priceH} onChange={(e)=>{
            e.target.value == Number(e.target.value) 
            ? setFilters({...filters, priceH:e.target.value}) 
            : setFilters({...filters, priceH: e.target.value.slice(0,e.target.value.length-1)})
          }}/>
        </div>
    </section>
  )
}

export default FiltersSec