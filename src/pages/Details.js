import React from 'react'
import { useParams } from 'react-router-dom'

export default function Details(props) {

  const {bests} = props
  const {id} = useParams()

  return (
    <div>
      <h2>Details</h2>
      <img src={bests[id].image} alt="" />
      <h4>{bests[id].title}</h4>
      <p>{bests[id].desc}</p>
      <p>{bests[id].price}</p>
    </div>
  )
}
