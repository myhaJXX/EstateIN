import React, { useEffect } from 'react'
import logo from '@static/logo.png'
import HeaderButton from './HeaderButton'
import * as cl from '../../App.css'
import { useNavigate } from 'react-router-dom'

function Header({setPage}) {
    const nav = useNavigate()

    // useEffect(()=>{
    //     nav('/')
    // }, [])

  return (
    <header>

        <div>
            <img src={logo} alt="" />
            <h4>Estatein</h4>
        </div>

        <nav>
            <HeaderButton id={0} title={"Home"} link={"/"} setPage={setPage}/>
            <HeaderButton id={1} title={"About"} link={"/about"} setPage={setPage}/>
            <HeaderButton id={2} title={"Properties"} link={"/catalog"} setPage={setPage}/>
            <HeaderButton id={3} title={"Services"} link={"/services"} setPage={setPage}/>
        </nav>

        <button className={cl.contact}
        onClick={()=>{
            nav('/contact')
            setPage(4)
        }}
        >
            Contact Us
        </button>

    </header>
  )
}

export default Header