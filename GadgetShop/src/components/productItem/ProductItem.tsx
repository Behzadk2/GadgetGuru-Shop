import React from 'react';
import { Product } from '../../types/server';

const ProductItem = ({ title, price, image, description }: Product) => {
  return (
    <div className="shadow-lg border rounded-lg flex flex-col hover:shadow-xl transition-shadow duration-300 h-full">
      <div className="overflow-hidden rounded-t-lg h-56">
        <img className="w-full h-full object-contain" src={image} alt={title} />
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-lg font-semibold">{title}</h3>
          <span className="text-xl font-bold text-blue-600">${price}</span>
        </div>
        <p className="text-gray-600 text-sm flex-grow">
          Description: {description}
        </p>
      </div>
    </div>
  );
};

export default ProductItem;
