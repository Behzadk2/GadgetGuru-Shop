import React from 'react'
import { Link } from 'react-router-dom'
import Container from '../container/Container'

function Navbar() {
  return (
    <div className="h-14 border-b shadow flex  items-center  ">
    <Container>
      <div className='flex flex-row justify-between'>
      <ul className='flex flex-row'>
        <li className='ml-4'><Link to='/' >Home</Link></li>
        <li  className='ml-4'><Link to='/store' >Store</Link></li>
      </ul>
      <div>
      <Link to='/cart' >  <button>basket</button></Link>
      </div>
      </div>
      </Container>
     
      
    </div>
  )
}

export default Navbar
