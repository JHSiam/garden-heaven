import React, { useContext } from 'react'
import { MainContext } from '../App';

export default function WishItem({p}) {
    const {product_title, product_image, price, availability, description, specification, rating}=p;
    const {handleCart} = useContext(MainContext)

  return (
    <div className='flex justify-between items-center border-2 border-red-400 rounded-xl'>
        <img src={product_image} alt="" className='w-[150px] h-[100px]'/>
        <div>
            
            <p>{product_title}</p>
            <p>{description}</p>
            <p>{price}</p>
            <button className='btn' onClick={()=>handleCart(p)}>AddTOCart</button>
        </div>

        <button className='btn bg-red-400'>Remove</button>

    </div>
  )
}
