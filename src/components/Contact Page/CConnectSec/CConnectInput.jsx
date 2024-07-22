import React from 'react'

function CConnectInput({value, title, setName, person}) {
  return (
    <div>
        <h5>{title}</h5>
        <input type="text" placeholder={title} value={person[`${value}`]}
            onChange={(e)=>{
                setName({...person, [`${value}`]:e.target.value})
            }}
        />
    </div>
  )
}

export default CConnectInput