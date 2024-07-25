import React, { useEffect, useState } from 'react'
import * as cl from'./App.css'
import MainPage from './components/Main Page/MainPage'
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom'
import AboutPage from './components/About Page/AboutPage'
import ErrorPage from './components/Error/ErrorPage'
import Header from './components/Header/header'
import Footer from './components/Footer/Footer'
import ContactPage from './components/Contact Page/ContactPage'
import ServPage from './components/Serv Page/ServPage'
import PropPage from './components/Prop Page/PropPage'

function App() {

    const [page, setPage] = useState(0)

    useEffect(()=>{
        document.querySelectorAll('header button').forEach((e,i)=>{
            if(i == page) {
                e.classList.add(`${cl.HA}`)
            } else e.classList.remove(`${cl.HA}`)
        })
    }, [page])

    return (
        <>
            <HashRouter basename='/'>
                <Header setPage={setPage}/>
                <Routes>
                    <Route exact path='/' element={<MainPage/>}/>
                    <Route path='/about' element={<AboutPage/>}/>
                    <Route path='/contact' element={<ContactPage/>}/>
                    <Route path='/services' element={<ServPage/>}/>
                    <Route path='/*' element={<ErrorPage/>}/>
                    <Route path='/catalog' element={<PropPage/>}/>
                </Routes>
                <Footer/>
            </HashRouter>
        </>
    )
}

export default App