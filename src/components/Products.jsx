import React, { useContext } from 'react'
import { ProductContext } from './Home'
import { useParams } from 'react-router-dom';
import Product from './Product';

export default function Products() {

    const {products, setProducts}=useContext(ProductContext);

    const { category } = useParams();
   

    const filteredProducts = category
    ? products.filter(p => p.category === category)
    : products;

    // console.log(filteredProducts);
    
    


  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
        {filteredProducts.map(product => <Product p={product} key={product.product_id}></Product>)}
    </div>
  )
}
