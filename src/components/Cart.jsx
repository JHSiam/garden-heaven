import React, { useContext } from 'react'
import { MainContext } from '../App'
import CartItem from './CartItem';



export default function Cart() {

    const {cartData,hanldeRemove,sortCartData}=useContext(MainContext);

    let totalPrice=0;
    cartData.forEach(item => {
      totalPrice=totalPrice+item.price;
      
    });

    
    

  return (
    <div>
        <div className='flex justify-between items-center'>
            <h3>Cart</h3>

            <div className='flex items-center gap-4'>
                <p>Total cost:{totalPrice}</p>
                <button className='btn' onClick={sortCartData}>Sort</button>
                <button className='btn'>Purchase</button>
            </div>
        </div>
        {cartData.map(p => <CartItem p={p} hanldeRemove ={hanldeRemove} key={p.product_id}></CartItem>)}
        
    </div>
  )
}
