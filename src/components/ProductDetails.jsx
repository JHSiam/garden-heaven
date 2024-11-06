import React, { useContext, useEffect, useState } from 'react'
import { useLoaderData, useParams } from 'react-router-dom';
import photo from '../assets/Group.png';
import { MainContext } from '../App';
import ProductInfo from './ProductInfo';

export default function ProductDetails() {

  //const data=useLoaderData();

  const { data, setData } = useContext(MainContext);

  //console.log(data);



  const { product_id } = useParams();

  // const [data, setData] =useState([]);

  // useEffect(()=>{
  //     fetch('https://jhsiam.github.io/host-api/data.json')
  //     .then(res => res.json())
  //     .then(data => setData(data))
  // },[])

  const targatedProduct = product_id
    ? data.filter(p => p.product_id === product_id)
    : [];


  // console.log(targatedProduct);





  //const targatedProduct = data.filter(p => p.product_id===product_id);

  //  const [product] = targatedProduct;
  //  console.log(product);






  //  if(product){
  //   const {product_title, product_image, price, availability, description, specification, rating}=product;

  // }








  return (
    <div>
      <div className='relative'>
        <div className='bg-[#9538E2] flex flex-col gap-5 items-center p-5 rounded-xl text-white pb-[200px]'>
          <h1 className='text-2xl font-bold'>Upgrade Your Tech Accessorize with <br /> Gadget Heaven Accessories</h1>
          <p>Explore the latest gadgets that will take your experience to <br /> the next level. From smart devices to the coolest accessories, we have it all!</p>
        </div>

        <div className='flex flex-col items-center relative bottom-28'>

          {
            targatedProduct.map(p => <ProductInfo p={p} key={p.product_id}></ProductInfo>)
          }

        </div>



        {/* {
          (product)? <div className='w-60%'>
          <img src={product_image} alt="" />
        </div> : <div> </div>
        } */}

        {/* <div className='w-60%'>
          <img src={product_image} alt="" />
        </div> */}

      </div>
    </div>
  )
}
