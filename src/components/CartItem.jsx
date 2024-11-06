import React from 'react'
import { FcCancel } from "react-icons/fc";

export default function CartItem({ p, hanldeRemove }) {
  const { product_title, product_image, price, availability, description, specification, rating } = p


  return (
    <div className='flex justify-between items-center border-2 border-[#D9D9D9] rounded-xl p-3'>
      <div className='flex items-center gap-5'>
        <img src={product_image} alt="" className='w-[100px] h-[70px] rounded-xl' />
        <div>
          <p className='text-xl font-bold'>{product_title}</p>
          <p>{description}</p>
          <p>Price: {price}$</p>
        </div>
      </div>
      <button className='p-2 border-2 border-red-500 rounded-[50%]' onClick={() => hanldeRemove(p)}><FcCancel></FcCancel></button>
    </div>
  )
}
