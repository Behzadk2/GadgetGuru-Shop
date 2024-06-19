import { Product } from "../../types/server";



function ProductItem({title,price,image,description}: Product) {
   return (
    <div className="shadow border rounded pb-2">
      <img className="rounded-t size-40" src={image} alt="" />
      <div className="flex justify-between flex-row px-4 mt-2">
        <h3>{title}</h3>
        <span>{price} $</span>
      </div>
      <div className="px-4 mt-1">
       <p className="line-clamp-5 text-gray-400 ">
        Description : {description}
        </p> 
       </div>
    </div>
  )
}

export default ProductItem
