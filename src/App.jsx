import React, { useEffect, useState } from 'react'
import * as cl from'./App.css'
import MainPage from './components/Main Page/MainPage'
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom'
import AboutPage from './components/About Page/AboutPage'
import ErrorPage from './components/Error/ErrorPage'
import Header from './components/Header/header'
import Footer from './components/Footer/Footer'

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
            <BrowserRouter>
                <Header setPage={setPage}/>
                <Routes>
                    <Route exact path='/' element={<MainPage/>}/>
                    <Route path='/about' element={<AboutPage/>}/>
                    <Route path='/*' element={<ErrorPage/>}/>
                </Routes>
                <Footer/>
            </BrowserRouter>
        </>
    )
}

export default App