import { createContext, useEffect, useState } from 'react'
import './App.css'
import Navber from './components/Navber'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'

export const MainContext = createContext()


function App() {
  const [data, setData] = useState([])

  const [cartData, setCartData] = useState([])

  const [wishlist, setWishlist]=useState([])

  useEffect(() => {
    fetch('https://jhsiam.github.io/host-api/data.json')
      .then(res => res.json())
      .then(data => setData(data))
  }, [])


  function handleCart(p){
    const newCart=[...cartData, p];
    setCartData(newCart);

  }
  function hanldeRemove(p){
    const remainingProduct=cartData.filter(pr => pr.product_id !== p.product_id)
    setCartData(remainingProduct)

  }
  function sortCartData() {
    const sortedCartData = [...cartData].sort((a, b) => b.price - a.price);
    setCartData(sortedCartData);
  }

  function handleWishlist(p){
    const newWishtlist=[...wishlist, p];
    setWishlist(newWishtlist);

  }

  
  
  //console.log(cartData);
  
  

  return (
    <>
    <div className='max-w-[1280px] mx-auto'>
    <Navber></Navber>

    <MainContext.Provider value={{data, setData, handleCart, cartData, setCartData, hanldeRemove, sortCartData, wishlist, handleWishlist}}>
      
    <Outlet></Outlet>

    </MainContext.Provider>
    

    <Footer></Footer>
    </div>

    
    </>
  )
}

export default App
