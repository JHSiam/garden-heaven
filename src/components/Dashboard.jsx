import React from 'react'

import Cart from './Cart'
import Wishlist from './Wishlist'



export default function Dashboard() {
   
  
  return (
    <div>
      <div className='bg-[#9538E2] flex flex-col gap-5 items-center p-5 rounded-xl text-white pb-[200px]'>
          <h1 className='text-2xl font-bold'>Dashboard</h1>
          <p>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
          <div className='flex gap-4'>
          <button className='btn bg-white rounded-xl'>Cart</button>
          <button className='btn bg-white rounded-xl'>WishList</button>
          </div>
        </div>
        {<Cart></Cart>}

        {<Wishlist></Wishlist>}


    </div>
  )
}
