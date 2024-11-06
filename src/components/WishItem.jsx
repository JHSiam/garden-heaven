import React, { useContext } from 'react'
import { MainContext } from '../App';
import { FcCancel } from "react-icons/fc";

export default function WishItem({p}) {
    const {product_title, product_image, price, availability, description, specification, rating}=p;
    const {handleCart} = useContext(MainContext)

  return (
    <div className='flex justify-between items-center border-2 border-[#D9D9D9] rounded-xl p-3'>
        <img src={product_image} alt="" className='w-[150px] h-[100px] rounded-xl'/>
        <div className=''>
            
            <p className='text-xl font-bold'>{product_title}</p>
            <p>{description}</p>
            <p>Price: {price}$</p>
            <button className='btn bg-purple-400' onClick={()=>handleCart(p)}>AddTOCart</button>
        </div>

        <button className='p-2 border-2 border-red-500 rounded-[50%]'><FcCancel></FcCancel></button>

    </div>
  )
}
