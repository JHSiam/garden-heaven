import React, { useContext } from 'react'
import { MainContext } from '../App'
import WishItem from './WishItem';

export default function Wishlist() {
    const {wishlist}=useContext(MainContext);

  return (
    <div>
        <h3 className='text-2xl font-bold'>Wishlist</h3>
        <div className='flex flex-col gap-4 mt-10'>
            {
                wishlist.map(p => <WishItem p={p} key={p.product_id}></WishItem>)
            }

        </div>

    </div>
  )
}
