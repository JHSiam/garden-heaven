import React from 'react'
import { Link } from 'react-router-dom';

export default function Product({p}) {

    const {product_image, product_title, price, product_id, category} = p;

    //const categories =['all products', 'Laptops', 'Phones', 'Accessories', 'Smart Watches','Macbook', 'iPhone']

  return (
    <div className='p-4 border-2 border-[#D9D9D9] rounded-xl flex flex-col gap-2'>
        <img src={product_image} alt="" className='rounded-xl'/>
        <h1 className='text-xl font-bold'>{product_title}</h1>
        <p>Price: {price}$</p>
        <Link to={`${category}/${product_id}`}><button className='btn bg-purple-400'>View Details</button></Link>
    </div>
  )
}
