import React from 'react'
import CatalogSec from './CatalogSec/CatalogSec'
import { useState } from 'react'
import { items } from '@static/items'
import FiltersSec from './FiltersSec/FiltersSec'

function PropPage() {
    const [arr, setArr] = useState([...items])
    const [copy, setCopy] = useState([...arr])

    const [filters, setFilters] = useState({
        title: '',
        priceL: '',
        priceH: '',
    })

    const changecopy = ()=>{
        let newCopy = [...arr]
        //titleFilter
        newCopy = arr.filter(e=>{
            if(filters.title) {
                if(e.title.toLowerCase().includes(filters.title.toLowerCase())) return e
            } else return e
        })
        //price
        newCopy = newCopy.filter(e=>{
            let flag = true
            if(filters.priceL){
                if(Number(filters.priceL) > Number(e.price)) flag = false
            }
            if(filters.priceH){
                if(Number(filters.priceH) < Number(e.price)) flag = false
            }
            if(flag) return e
        })

        setCopy([...newCopy])
    }

  return (
    <main>
        <FiltersSec filters={filters} setFilters={setFilters} changeCopy={changecopy}/>
        <CatalogSec items={copy}/>
    </main>
  )
}

export default PropPage