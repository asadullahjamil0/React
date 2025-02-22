import React from 'react'
import './Card.css'

const Card = (props) => {
  return (
    <div className='cards' style={{overflow : "hidden"}}>
        <img src="https://cdn.shopify.com/s/files/1/0306/6419/6141/articles/coding_languages.png?v=1619126283" alt="" width="350" style={{borderRadius:"13px"}}/>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
      <p>{props.para}</p>
    </div>
  )
}

export default Card
