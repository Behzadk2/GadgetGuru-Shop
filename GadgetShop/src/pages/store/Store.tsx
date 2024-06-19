import React, { useEffect, useState } from 'react'
import ProductItem from '../../components/productItem/ProductItem'
import Container from '../../components/container/Container'
import { Link } from 'react-router-dom'
import axios from 'axios';
import { Product } from '../../types/server';


function Store() {
  const[product,setProduct] = useState<Product[]>([]);
  useEffect(()=>{
    const getData = async() =>{
      const response = await axios.get('https://fakestoreapi.com/products');
      setProduct(response.data);
    }
    getData();
    
  },[])
  console.log(product);
  return (
 
    <div>
      <Container>
      <h1 className='mt-5 '>New Product</h1>
      <div className='grid grid-cols-4 gap-4 mt-4'>
        {product.map((item) => ( <Link to={`/product/${1}`} ><ProductItem {...item} /></Link>))}
     
      
      </div>
      </Container>
     
    </div>
  )
}

export default Store
