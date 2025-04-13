import React from 'react'
import { ten } from '../../assets/assets'
import { useNavigate } from 'react-router-dom'

function Yuvan() {
    const navigate = useNavigate()
  return (
   <> <div className="artist-container">
       <img src={ten} onClick={()=>navigate('/Yuvan')} className='artist-photo '/>
       <h2>Yuvan sankar raja</h2>
    </div>
    </>
  )
}

export default Yuvan
