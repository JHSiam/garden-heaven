import React, { useContext } from 'react'
import { MainContext } from '../App'
import WishItem from './WishItem';

export default function Wishlist() {
    const {wishlist}=useContext(MainContext);

  return (
    <div>
        <h3>Wishlist</h3>
        <div>
            {
                wishlist.map(p => <WishItem p={p} key={p.product_id}></WishItem>)
            }

        </div>

    </div>
  )
}
