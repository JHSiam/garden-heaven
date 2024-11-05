import React, { useState } from 'react'

import Cart from './Cart'
import Wishlist from './Wishlist'
import { Helmet } from 'react-helmet-async';



export default function Dashboard() {

  const [checkBtn, setChekBtn] = useState({ Cart: true, Wishlist: false });

  function handleBtn(btn) {
    if (btn == 'Cart') {
      const newbtn = { Cart: true, Wishlist: false };
      setChekBtn(newbtn)
    }
    if (btn === 'WishList') {
      const newbtn = { Cart: false, Wishlist: true };
      setChekBtn(newbtn)

    }

  }


  return (
    <div>
      <Helmet>
        <title>Dashboard - Our Product</title>
      </Helmet>
      <div className='bg-[#9538E2] flex flex-col gap-5 items-center p-5 rounded-xl text-white pb-[200px]'>
        <h1 className='text-2xl font-bold'>Dashboard</h1>
        <p>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
        <div className='flex gap-4'>
          <button
            className={`btn rounded-xl ${checkBtn.Cart ? 'bg-white text-purple-500' : 'bg-purple-500 text-white'
              }`}
            onClick={() => handleBtn('Cart')}
          >
            Cart
          </button>
          <button
            className={`btn rounded-xl ${checkBtn.Wishlist ? 'bg-white text-purple-500' : 'bg-purple-500 text-white'
              }`}
            onClick={() => handleBtn('WishList')}
          >
            WishList
          </button>
        </div>
      </div>
      {checkBtn.Cart && <Cart></Cart>}

      {checkBtn.Wishlist && <Wishlist></Wishlist>}


    </div>
  )
}
