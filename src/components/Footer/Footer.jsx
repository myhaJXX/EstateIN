import React from 'react'
import * as cl from './footer.module.css'
import logo from '@static/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faInstagram, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons'
import FooterColumn from './FooterColumn'
import { useNavigate } from 'react-router-dom'

function Footer() {

    const links = [
        {title:"Home", links: ['Lorem Ipsum', 'Lorem Ipsum', 'Lorem Ipsum', 'Lorem Ipsum']},
        {title:"About Us", links: ['Lorem Ipsum', 'Lorem Ipsum', 'Lorem Ipsum',]},
        {title:"Properties", links: ['Lorem Ipsum', 'Lorem Ipsum']},
        {title:"Services", links: ['Lorem Ipsum', 'Lorem Ipsum', 'Lorem Ipsum', 'Lorem Ipsum', 'Lorem Ipsum']},
        {title:"Contact Us", links: ['Lorem Ipsum', 'Lorem Ipsum', 'Lorem Ipsum']},
    ]

    const nav = useNavigate()

  return (
    <footer>

        <div className={cl.top}>
            <div>
                <h2>Start Your Real Estate Journey Today</h2>
                <p>
                Your dream property is just a click away. 
                Whether you're looking for a new home, a strategic investment, 
                or expert real estate advice, Estatein is here to assist you every step of the way. 
                Take the first step towards your real estate goals and explore our available properties or 
                get in touch with our team for personalized assistance.
                </p>
            </div>
            <button onClick={()=>{
                nav('/error')
            }}>Explore Properties</button>
        </div>

        <div className={cl.middle}>

            <div style={{display: 'grid', gap: '20px'}}>
                <div style={{display: 'flex', gap: '10px', alignItems: 'center'}}>
                    <img src={logo} alt="" />
                    <h4>Estatein</h4>
                </div>
                <div className={cl.MI}>
                    <FontAwesomeIcon icon={faEnvelope} color='#999999'/>
                    <input type="text" placeholder='Enter Your Email'/>
                    <FontAwesomeIcon icon={faPaperPlane} color='#fff'/>
                </div>
            </div>

            <nav>
                {links.map((e,i)=><FooterColumn title={e.title} links={e.links} key={i}/>)}
            </nav>

        </div>

        <div className={cl.bottom}>
            <div>
                <h5 style={{fontWeight: '400'}}>@2023 Estatein. All Rights Reserved.</h5>
                <a href='#'>Terms & Conditions</a>
            </div>
            <div>
                <FontAwesomeIcon icon={faFacebookF} className={cl.icon}/>
                <FontAwesomeIcon icon={faInstagram} className={cl.icon}/>
                <FontAwesomeIcon icon={faLinkedin} className={cl.icon}/>
                <FontAwesomeIcon icon={faYoutube} className={cl.icon}/>
            </div>
        </div>

    </footer>
  )
}

export default Footer