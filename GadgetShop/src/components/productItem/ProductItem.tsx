

function ProductItem() {
  return (
    <div className="shadow border rounded pb-2">
      <img className="rounded-t" src="" alt="" />
      <div className="flex justify-between flex-row px-4 mt-2">
        <h3>Product Title </h3>
        <span>55 $</span>
      </div>
      <div className="px-4 mt-1">
       <p className="line-clamp-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, minus velit aut amet similique quae blanditiis. Porro blanditiis ducimus doloremque fugit iure deserunt quisquam aspernatur obcaecati quaerat perferendis, in est?
       </p> 
       </div>
    </div>
  )
}

export default ProductItem
