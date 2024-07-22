import React, { useState } from 'react'
import * as cl from './CConnectSec.module.css'
import CConnectInput from './CConnectInput'

function CConnectSec() {
    const [person, setPerson] = useState({
        fname:'',
        lname:'',
        email:'',
        phone:'',
        city:'',
        street:'',
        message:''
    })
  return (
    <section className={cl.cont}>
        <h1>Let's Connect</h1>
        <p>
            We're excited to connect with you and learn more about your real estate goals. 
            Use the form below to get in touch with Estatein. Whether you're a prospective client, partner, or simply curious about our services,
            we're here to answer your questions and provide the assistance you need.
        </p>

        <form action="">
            <CConnectInput value={'fname'} title={"First Name"} setName={setPerson} person={person}/>
            <CConnectInput value={'lname'} title={"Last Name"} setName={setPerson} person={person}/>
            <CConnectInput value={'email'} title={"Your Email"} setName={setPerson} person={person}/>
            <CConnectInput value={'phone'} title={"Your Phone"} setName={setPerson} person={person}/>
            <CConnectInput value={'city'} title={"Your City"} setName={setPerson} person={person}/>
            <CConnectInput value={'street'} title={"Your Street"} setName={setPerson} person={person}/>
            <CConnectInput value={'message'} title={"Message"} setName={setPerson} person={person}/>
        </form>

        <button onClick={()=>{
            console.log(person)
        }}>Send Your Message</button>

    </section>
  )
}

export default CConnectSec