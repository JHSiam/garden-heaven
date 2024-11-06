import React, { createContext, useEffect, useState } from 'react'
import { Link, Outlet, useLoaderData } from 'react-router-dom'
import ProdectSection from './ProdectSection'
import { Helmet } from 'react-helmet-async';

export const ProductContext = createContext();




export default function Home() {
  // const data = useLoaderData()


  const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   setProducts(data);
  // }, [data, setProducts])

  useEffect(() => {
    fetch('https://jhsiam.github.io/host-api/product.json')
      .then(res => res.json())
      .then(data => setProducts(data))
  }, [])










  return (
    <div>
      <Helmet>
        <title>Home - Our Product</title>
      </Helmet>
      <div className='relative'>
        <div className='bg-purple-600 flex flex-col gap-5 items-center p-5 rounded-xl text-white pb-[200px]'>
          <h1 className='text-2xl font-bold'>Upgrade Your Tech Accessorize with <br /> Gadget Heaven Accessories</h1>
          <p>Explore the latest gadgets that will take your experience to <br /> the next level. From smart devices to the coolest accessories, we have it all!</p>
          <Link to='/dashboard'><button className='btn bg-white rounded-full'>Shop Now</button></Link>
        </div>
        <img src="banner.jpg" alt="" className='w-[60%] mx-auto h-[400px] relative bottom-[150px] rounded-xl' />
      </div>

      <ProductContext.Provider value={{ products, setProducts }}>
        <Outlet></Outlet>
      </ProductContext.Provider>
    </div>

  )
}
