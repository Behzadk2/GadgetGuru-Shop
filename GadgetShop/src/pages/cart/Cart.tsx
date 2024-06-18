import React from 'react'
import Container from '../../components/container/Container'
import CartItem from '../../components/cartItem/CartItem'
import Button from '../../components/button/Button'

function Cart() {
  return (
    <div>
      <Container>
<div className='' >
<CartItem/>
        <CartItem/>
        <CartItem/>
</div>
       <div className='bg-slate-500 rounded p-6'>
        <p>total : 1000</p>
        <p>discount : 200</p>
        <p>final : 800</p>

       </div>
<Button className='mt-2' variant='success'> submit </Button>
      </Container>
    </div>
  )
}

export default Cart
