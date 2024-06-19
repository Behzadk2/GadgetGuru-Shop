import React, { useEffect, useState } from 'react';
import ProductItem from '../../components/productItem/ProductItem';
import Container from '../../components/container/Container';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Product } from '../../types/server';

function Store() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    getData();
  }, []);

  return (
    <div>
      <Container>
        <h1 className="mt-5 text-3xl font-bold text-center">New Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
          {products.map(item => (
            <Link to={`/product/${item.id}`} key={item.id}>
              <ProductItem {...item} />
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Store;
