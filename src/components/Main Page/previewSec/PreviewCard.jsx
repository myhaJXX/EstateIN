import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function PreviewCard(info) {
  return (
    <article>
        <FontAwesomeIcon icon={info.icon}/>
        <h4>{info.title}</h4>
    </article>
  )
}

export default PreviewCard