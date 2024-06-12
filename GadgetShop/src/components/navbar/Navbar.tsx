import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className="h-8 border-b shadow flex justify-between flex-row items-center">
      <ul className='flex'>
        <li><Link to='{/}' >Home</Link></li>
        <li><Link to='{/}' >Store</Link></li>

      </ul>
      <div>
        <button>basket</button>
      </div>
      
    </div>
  )
}

export default Navbar
