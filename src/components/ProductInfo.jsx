import React, { useContext, useState } from 'react'
import { MainContext } from '../App';

export default function ProductInfo({p}) {
    const {product_title, product_image, price, availability, description, specification, rating}=p;

    const {handleCart,cartData, handleWishlist, wishlist}=useContext(MainContext)

    //const [isInWishlist, setIsInWishlist] = useState(false);

    // const handleAddToWishlist = () => {
    //     handleWishlist(p);
    //     setIsInWishlist(true);
    // };
     const hasIt=wishlist.includes(p);
     //console.log(hasIt);
     
    // setIsInWishlist(hasIt);
   
    

    
    
  return (
    <div className='w-[60%]'>
        <img src={product_image} alt="" />
        <h2>{product_title}</h2>
        <p>{price}</p>
        <p>{description}</p>
        <h2>Specification</h2>
        <ol>
            {specification.map((s,i) => <li key={i}>{`${i+1}. ${s}`}</li>)}

        </ol><br />
        <h2>Rating</h2>
        <p>{rating}</p>
        <button className='btn' onClick={()=>handleCart(p)}>Add to Cart</button>
        <button
                className='btn'
                onClick={()=>handleWishlist(p)}
                disabled={hasIt}
            >
                {hasIt ? 'Added to Wishlist' : 'Add to Wishlist'}
            </button>
    </div>
  )
}
