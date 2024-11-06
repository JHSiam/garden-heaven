import React, { useContext, useState } from 'react'
import { MainContext } from '../App';
import ReactStars from "react-rating-stars-component";
import { FaRegHeart } from "react-icons/fa";


export default function ProductInfo({ p }) {
  const { product_title, product_image, price, availability, description, specification, rating } = p;

  const { handleCart, cartData, handleWishlist, wishlist } = useContext(MainContext)

  //const [isInWishlist, setIsInWishlist] = useState(false);

  // const handleAddToWishlist = () => {
  //     handleWishlist(p);
  //     setIsInWishlist(true);
  // };
  const hasIt = wishlist.includes(p);
  //console.log(hasIt);

  // setIsInWishlist(hasIt);





  return (
    <div className='w-[60%] flex flex-col lg:flex-row border-2 border-[#ECECEC] p-7 rounded-xl lg:gap-[50px] bg-white'>
      <img src={product_image} alt="" className='lg:w-[300px] rounded-xl' />

      <div>
      <h2 className='text-2xl font-bold'>{product_title}</h2>
      <p>Price: {price}$</p>
      {availability && <span className='text-green-500'>InStock</span>}
      <p>{description}</p>
      <h2 className='text-xl font-bold'>Specification</h2>
      <ol>
        {specification.map((s, i) => <li key={i}>{`${i + 1}. ${s}`}</li>)}

      </ol><br />
      <h2 className='text-xl font-bold'>Rating</h2>
      <ReactStars>
        
      </ReactStars>

      <p>{rating}</p>

      <div className='flex items-center gap-3'>

      <button className='btn bg-purple-400' onClick={() => handleCart(p)}>Add to Cart</button>
      <button
        className='btn'
        onClick={() => handleWishlist(p)}
        disabled={hasIt}
      >
        <FaRegHeart />
      </button>

      </div>
      
      </div>
    </div>
  )
}
