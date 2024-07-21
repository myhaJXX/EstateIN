import React from 'react'
import { useNavigate } from 'react-router-dom'
import * as cl from '../../App.css'

function HeaderButton({link,title, id, setPage}) {
    const nav = useNavigate()
  return (
    <button className={cl.HU} onClick={()=>{
        nav(`${link}`)
        setPage(id)
    }}>{title}</button>
  )
}

export default HeaderButton