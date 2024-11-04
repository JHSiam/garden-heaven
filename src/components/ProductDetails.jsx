import React, { useEffect, useState } from 'react'
import { useLoaderData, useParams } from 'react-router-dom';

export default function ProductDetails() {

    // const data=useLoaderData();

    // const [product, setProduct] =useState([])

    const { product_id } = useParams();
    
    

    // useEffect(()=>{
    //     const targatedProduct = data.filter(p => p.product_id===product_id);
    //     setProduct(targatedProduct);
        
    // },[data,product_id])

    // console.log(product);
    

    
    
    
  return (
    <div>
        <div className='relative'>
        <div className='bg-[#9538E2] flex flex-col gap-5 items-center p-5 rounded-xl text-white pb-[200px]'>
          <h1 className='text-2xl font-bold'>Upgrade Your Tech Accessorize with <br /> Gadget Heaven Accessories</h1>
          <p>Explore the latest gadgets that will take your experience to <br /> the next level. From smart devices to the coolest accessories, we have it all!</p>
          <button className='btn bg-white rounded-xl'>Shop Now</button>
        </div>
        <h1></h1>
      </div>
    </div>
  )
}
