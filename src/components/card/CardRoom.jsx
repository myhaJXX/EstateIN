import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function CardRoom({icon, title, count}) {
  return (
    <div>
        <FontAwesomeIcon icon={icon} color='#fff'/>
        {count ? <h5>{count}-{title}</h5> : <h5>{title}</h5>}
    </div>
  )
}

export default CardRoom