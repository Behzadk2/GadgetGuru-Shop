import React from 'react'
import { useParams } from 'react-router-dom'
import Container from '../../components/container/Container'
import Button from '../../components/button/Button'

function Product() {

    const params = useParams()
  return (
    <div>
      <h1>
        <Container>
            <div className='shadow mt-4 grid grid-cols-12 p-4' >
            <div className='col-span-10'>
                    <h1>Title</h1>
                    <div className='p-4'>
                        <p>Price : 25$</p>
                        <p>descriptionnnnnnnnnnnn nnn n n n n n n n n n n n n n n n 
                            n n n n n n n n n n n n n n n n n n n jkshdf sb df fd s fsd</p>
                    </div>
                </div>
                <div className='col-span-2 p-4 bg-slate-400' >
                <img className="rounded w-24" src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" alt="" />
                <Button onClick={()=>{alert("added")}}>Add to Card</Button>
                </div>
            </div>
        </Container>


      </h1>
    </div>
  )
}

export default Product
