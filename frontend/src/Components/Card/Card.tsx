import React from 'react'
import "./Card.css"

type Props = {}

const Card = (props: Props) => {
  return (
    <div className='card'>
      <img src="https://img.freepik.com/free-vector/piggy-bank_53876-25494.jpg" alt="Cute piggy bank" />
      <div className='details'>
        <h2>AAPL</h2>
        <p>$110</p>
      </div>
      <p className="info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, dolor.</p>
    </div>
  )
}

export default Card