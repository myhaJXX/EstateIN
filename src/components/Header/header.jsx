import React, { useEffect, useState } from 'react'
import logo from '@static/logo.png'
import HeaderButton from './HeaderButton'
import * as cl from '../../App.css'
import { useNavigate } from 'react-router-dom'

function Header({setPage}) {
    const nav = useNavigate()

    // useEffect(()=>{
    //     nav('/')
    // }, [])

    const [active, setActive] = useState(false)

    useEffect(()=>{
        active ? (
            document.querySelectorAll(`.${cl.line}`)[0].setAttribute('style', 'transform: rotateZ(45deg); top:14px;'),
            document.querySelectorAll(`.${cl.line}`)[1].setAttribute('style', 'opacity: 0;'),
            document.querySelectorAll(`.${cl.line}`)[2].setAttribute('style', 'transform: rotateZ(-45deg); bottom:14px;'),

            document.querySelector(`.${cl.ham}>nav`).setAttribute('style', 'top: 30px;')
        ) : (
            document.querySelectorAll(`.${cl.line}`)[0].setAttribute('style', 'transform: rotateZ(0deg);'),
            document.querySelectorAll(`.${cl.line}`)[1].setAttribute('style', 'opacity: 1;'),
            document.querySelectorAll(`.${cl.line}`)[2].setAttribute('style', 'transform: rotateZ(0deg);'),
            document.querySelector(`.${cl.ham}>nav`).setAttribute('style', 'top: -200px')
        )
    }, [active])

  return (
    <header>

        <div onClick={()=>nav('/')}>
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

        <div className={cl.ham}>
            <div onClick={()=>setActive(!active)}>
                <div className={cl.line}></div>
                <div className={cl.line}></div>
                <div className={cl.line}></div>
            </div>
            <nav>
                <a href="" onClick={(e)=>{
                    e.preventDefault()
                    nav('/about')
                }}>About Us</a>
                <a href="" onClick={(e)=>{
                    e.preventDefault()
                    nav('/catalog')
                }}>Properties</a>
                <a href="" onClick={(e)=>{
                    e.preventDefault()
                    nav('/services')
                }}>Services</a>
                <a href="" onClick={(e)=>{
                    e.preventDefault()
                    nav('/contact')
                }}>Contact Us</a>
            </nav>
        </div>

    </header>
  )
}

export default Header