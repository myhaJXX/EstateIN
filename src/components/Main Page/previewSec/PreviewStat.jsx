import React from 'react'

function PreviewStat({count,desc}) {
  return (
    <article>
        <h2>{count}+</h2>
        <p>{desc}</p>
    </article>
  )
}

export default PreviewStat