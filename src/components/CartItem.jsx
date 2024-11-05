import React from 'react'

export default function CartItem({p, hanldeRemove}) {
  const {product_title, product_image, price, availability, description, specification, rating}=p

    
  return (
    <div className='flex justify-between items-center border-2 border-red-500 rounded-xl'>
      <div className='flex items-center gap-5'>
      <img src={product_image} alt="" className='w-[100px] h-[70px]'/>
      <div>
        <p>{product_title}</p>
        <p>{description}</p>
        <p>{price}</p>
      </div>
    </div>
    <button className='btn bg-red-400' onClick={()=>hanldeRemove(p)}>Remove</button>
    </div>
  )
}
