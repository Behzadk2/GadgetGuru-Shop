import React from 'react'
import Button from '../button/Button';

function CartItem() {
    return (
        <div className="flex flex-row mt-4 border-b pb-2">
          <img
            className="rounded w-28"
            src="https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png"
            alt=""
          />
          <div className="mr-4 p-6">
            <h3 className="">Title : </h3>
            <div className="mt-2">
              <Button className="mr-2" variant="danger">
                Remove
              </Button>
              <Button variant="primary">+</Button>
              <span className="mx-2">{2}</span>
              <Button variant="primary">-</Button>
            </div>
          </div>
        </div>
      );
    }
    
    export default CartItem;