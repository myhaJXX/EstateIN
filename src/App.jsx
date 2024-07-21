import React, { useState } from 'react'
import './App.css'
import MainPage from './components/Main Page/MainPage'
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom'
import AboutPage from './components/About Page/AboutPage'
import ErrorPage from './components/Error/ErrorPage'

function App() {
    const [page, setPage] = useState(0)

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/about' element={<AboutPage/>}/>
                    <Route path='/*' element={<ErrorPage/>}/>
                    <Route exact path='/' element={<MainPage/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App