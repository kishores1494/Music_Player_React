import React from 'react'
import { nine } from '../../assets/assets'
import { useNavigate } from 'react-router-dom'

function Harish() {
    const navigate = useNavigate()
  return (
    <>
    <div className="artist-container">
    <img src={nine} onClick={()=>navigate('/Harish')} className='artist-photo '/>
    <h2>Harrish jeyaraj</h2>
    </div></>
  )
}

export default Harish
