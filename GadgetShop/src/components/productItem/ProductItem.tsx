

function ProductItem() {
  const imgS = 'https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg';
  return (
    <div className="shadow border rounded pb-2">
      <img className="rounded-t" src={imgS} alt="" />
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
