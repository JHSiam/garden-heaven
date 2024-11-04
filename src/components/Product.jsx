import React from 'react'
import { Link } from 'react-router-dom';

export default function Product({p}) {

    const {product_image, product_title, price, product_id, category} = p;

    //const categories =['all products', 'Laptops', 'Phones', 'Accessories', 'Smart Watches','Macbook', 'iPhone']

  return (
    <div>
        <img src={product_image} alt="" />
        <h1>{product_title}</h1>
        <p>{price}</p>
        <Link to={`${category}/${product_id}`}><button className='btn'>View Details</button></Link>
    </div>
  )
}
