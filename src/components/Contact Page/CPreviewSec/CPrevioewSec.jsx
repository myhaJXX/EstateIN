import React from 'react'
import * as cl from './cPreviewSec.module.css'
import PreviewCard from '../../Main Page/previewSec/PreviewCard'
import { faEnvelope, faLocation, faPhone } from '@fortawesome/free-solid-svg-icons'
import logo from '@static/logo.png'
import { useNavigate } from 'react-router-dom'

function CPreviewSec() {
    const nav = useNavigate()
  return (
    <section className={cl.cont}>
        <h1>Get in Touch with Estatein</h1>
        <p>
            Welcome to Estatein's Contact Us page. We're here to assist you with any inquiries, requests, or feedback you may have. 
            Whether you're looking to buy or sell a property, 
            explore investment opportunities, or simply want to connect, we're just a message away. Reach out to us, and let's start a conversation.
        </p>

        <div>
            <PreviewCard title={'info@estatein.com'} icon={faEnvelope}/>
            <PreviewCard title={'+1 (123) 456-7890'} icon={faPhone}/>
            <PreviewCard title={'Main Headquarters'} icon={faLocation}/>

            <article>
                <img src={logo} alt="" />
                <nav>
                    <a href=""
                    onClick={(e)=>{
                        e.preventDefault()
                        nav('/error')
                    }}
                    >Instagram</a>
                    <a href=""
                    onClick={(e)=>{
                        e.preventDefault()
                        nav('/error')
                    }}
                    >Facebook</a>
                    <a href=""
                    onClick={(e)=>{
                        e.preventDefault()
                        nav('/error')
                    }}
                    >Telegram</a>
                </nav>
            </article>

        </div>
    </section>
  )
}

export default CPreviewSec